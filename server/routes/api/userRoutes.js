
const router = require('express').Router();
const { User, Product, WatchedProduct, Category } = require('../../models');


//Get User
//api/users/me
router.get('/me', async (req, res) => {

    try {
        if (!req.session.user_id) {
        return res.status(401).json({ message: 'Not logged in' });
        }  

      const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ 
            model: Product,
            attributes: ['id','product_name', 'description', 'price', 'category_id'],
            include: {
              model: Category,
            }
          },
        {
            model: Product,
            through: WatchedProduct, // Specifies the join table
            as: 'user_watched_products',
        }]     
      });   
      
      if (!userData) {
        return res.status(404).json({ message: 'User not found' });
      }

      console.log(userData)

      res.json(userData)

    } catch (err) {
        res.status(500).json(err);
    }
})


//Create user
//api/users
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

//Login 
//api/users/login
router.post('/login', async (req, res) => {

  try {
    const username = req.body.username;
    const password = req.body.password;

    const userData = await User.findOne({ where: { username: username } });
    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
    }
    const validPassword = userData.checkPassword(password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
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

//Logout user
//api/users/logout 
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
});

//User's watched products
//api/users/products/watched
router.get('/products/watched', async (req, res) => {

  let userId = req.session.user_id 

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

//Route to add watched product
//api/users/products/:product_id/watched
router.post('/products/:product_id/watched', async (req, res) => {
console.log("hd")
  try {
    const userId = req.session.user_id;

    const productId = req.params.product_id

    const user = await User.findByPk(userId);
    if (!user) {
      return res.json('User not found');
    }
 
    // Find the product by ID
    const product = await Product.findByPk(productId);

    if (product == undefined) {
      console.log("no product")
      return res.json('Product not found');
    }

    // Add the product to the user's watched products
    const data = { user_id: userId, product_id: productId }
    const watchedProductData = await WatchedProduct.create(data);
    
    res.send(product)

  } catch (error) {  

  }
})

//Remove from user's watched products
//api/users/products/:product_id/watched
router.delete('/products/:product_id/watched', async (req, res) => {
  try {
    let userId;

    // Use session user_id if available, otherwise default to 1 (for testing purposes)
    if (!req.session.user_id) {
      userId = 1;
    } else {
      userId = req.session.user_id;
    }

    const productId = req.params.product_id;

    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the product exists
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Delete the product from the user's watched products
    const deleted = await WatchedProduct.destroy({
      where: {
        user_id: userId,
        product_id: productId
      }
    });

    // If no row was deleted, it means the watchlist entry didn't exist
    if (!deleted) {
      return res.status(404).json({ message: 'Watched product not found' });
    }

    // Successfully deleted the product from the watchlist
    res.json({ message: `Product (ID: ${productId}) has been removed from User (ID: ${userId})'s watchlist.` });
    
  } catch (error) {
    console.error('Error removing product from watched products:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



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
    // console.log(err); 333333
    res.status(500).json({ message: 'Server error', error: err });
  }
});

router.get('/product/:productId', async (req, res) => {
  try {
    // Extract productId from the request parameters
    const { productId } = req.params;

    // Fetch the product by its primary key
    const product = await Product.findByPk(productId, {
      include: {
        model: Category,  // Correct syntax for including associated model
        attributes: ['category_name'],  // Correct spelling for 'attributes'
      }
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Send the product data as a response
    res.json(product);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/product/:productId/edit', async (req, res) => {
  try {
    console.log(req.body);

    // Extract productId from the request parameters
    const { productId } = req.params;

    // Fetch the product by its primary key
    const product = await Product.findByPk(productId, {
      include: {
        model: Category,  // Correct syntax for including associated model
        attributes: ['category_name'],  // Correct spelling for 'attributes'
      }
    });
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.update({
      product_name: req.body.product_name || product.product_name,
      description: req.body.description || product.description,
      price: req.body.price || product.price,
      categoryId: req.body.category_id || product.categoryId,
      image: req.body.image || product.image,
    });

    const updatedProduct = await Product.findByPk(productId, {
      include: {
        model: Category,
        attributes: ['category_name'],
      }
    });

    // Send the product data as a response
    res.json(product);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/product/:productId/edit', async (req, res) => {
  try {
    console.log(req.body);

    // Extract productId from the request parameters
    const { productId } = req.params;

    // Fetch the product by its primary key
    const product = await Product.findByPk(productId, {
      include: {
        model: Category,  // Correct syntax for including associated model
        attributes: ['category_name'],  // Correct spelling for 'attributes'
      }
    });
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.destroy();
    
    // Send the product data as a response
    res.json(product);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

