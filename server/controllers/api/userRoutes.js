const router = require('express').Router();
const { User, Product, WatchedProduct, Category } = require('../../models');

router.get('/me', async (req, res) => {

    try {

        if (!req.session.user_id) {
        return res.status(401).json({ message: 'Not logged in' });
      }
  
      const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          // include: [
          //     { model: Product },
          //     { model: Product, through: WatchedProduct, as: 'user_watched_products' },

          // ]     
      });   
      
      if (!userData) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({username: userData.username})



    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      //see where this number is returned
      res.status(201).end();
    });
  } catch (error) {
    console.error('Failed to create new user', error);
    res.status(500).json({message: 'failed to create user'});
  }
});

router.post('/login', async (req, res) => {

  try {
    const username = req.body.username;
    const password = req.body.password;

    const userData = await User.findOne({ where: { username: username } });
    if (!userData) {
      return       
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
    }
    const validPassword = userData.checkPassword(password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(204).end();
      
    });

  } catch (error) {
    console.error('Failed to login.', error);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
});

router.get('/products/watched', async (req, res) => {
  console.log(req.session.user_id)

  let userId = req.session.user_id || 1;

  console.log(userId)

  const user = await User.findByPk(userId, {
    attributes: { exclude: ['password'] },
    include: [{
      model: Product,
      through: WatchedProduct, // Specifies the join table
      as: 'user_watched_products', // Alias for the products the user has watched
      include: [
        {
          model: Category,
          attributes: ['category_name'], // Fetch the category name
        },
        {
          model: User,
          attributes: ['username'], // Fetch the username of the product owner
        }
      ]
    }]
  });

res.json(user)

})

router.post('/products/:product_id/watched', async (req, res) => {
  try {
    let userId;

    if(!req.session.user_id) {
      userId = 1
    }
    else {
      userId = req.session.user_id
    }
   
    const productId = req.params.product_id

    const user = await User.findByPk(userId);
    if (!user) {
      return res.json('User not found');
    }
 
    // Find the product by ID
    const product = await Product.findByPk(productId);

    console.log(product)

    if (product == undefined) {
      console.log("no product")
      return res.json('Product not found');
    }

    // Add the product to the user's watched products
    const data = { user_id: userId, product_id: productId }
    const purchasedProductData = await WatchedProduct.create(data);

    //Why does this not console.log this?
    // console.log(`Product (ID: ${productId}) has been added to User (ID: ${userId})'s purchased products.`);

    res.send(product)

  } catch (error) {
    console.error('Error adding product to watched products:', error);

  }
})

router.get('/seller/:userId', async (req, res) => {
  try {
    const userId = req.params.userId; // Extract userId from the request parameters

    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] }, // Exclude password from the result
      include: [{
        model: Product,        
        attributes: ['product_name', 'description', 'price', 'image', 'category_id'], // Include product attributes
        include: [{ // Correctly include Category within Product
          model: Category,
          attributes: ['category_name']
        }]
      }]
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // Handle case if user doesn't exist
    }

    res.json(user); // Send the user data in the response
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});

module.exports = router;

