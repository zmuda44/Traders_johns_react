const router = require('express').Router();
const { Product, User, Category, WatchedProduct, PurchasedProduct } = require('../../models');

// router.post('/', withAuth, async (req, res) => {

router.post('/', async (req, res) => {
  try {
    if (!req.body) {
      return res.json("error")
    }
      const newProduct = await Product.create({ ...req.body });
    
  
      res.status(200).json(newProduct);
    } catch (err) {
      res.status(400).json(err);
    }
});

//Get route for when button is pressed on hompage, only show that category on this page
router.get('/:category_id', async (req,res) => {
  try {
    console.log("new route hit")
      let products = await Product.findAll({ where: {category_id: req.params.category_id}, 
        include: [{ 
          model: Category,
          attributes: ['category_name'],
        }]
      })
      products = products.map(product => product.get({plain:true }));

      res.json(products)
  } catch (error){
      res.status(500).json(error);
  }
})

router.post('/:product_id/watched', async (req, res) => {
  try {
    const userId = req.body.user_id
    const productId = req.params.product_id   

    const user = await User.findByPk(userId);
    if (!user) {
      return res.json('User not found');
    }
 
    // Find the product by ID
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.json('Product not found');
    }

    // Add the product to the user's watched products
    const data = { user_id: userId, product_id: productId }
    const watchedProduct = await WatchedProduct.create(data);

    //Why does this not console.log this?
    console.log(`Product (ID: ${productId}) has been added to User (ID: ${userId})'s watched products.`);

    res.send(watchedProduct)

  } catch(error) {
    console.error(error);

  }
})

router.post('/:product_id/purchased', async (req, res) => {
  try {
    const userId = req.body.user_id
    const productId = req.params.product_id   

    const user = await User.findByPk(userId);
    if (!user) {
      return res.json('User not found');
    }
 
    // Find the product by ID
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.json('Product not found');
    }

    // Add the product to the user's watched products
    const data = { user_id: userId, product_id: productId }
    const purchasedProduct = await PurchasedProduct.create(data);

    //Why does this not console.log this?
    console.log(`Product (ID: ${productId}) has been added to User (ID: ${userId})'s purchased products.`);

    res.send(purchasedProduct)

  } catch {
    console.error('Error adding product to watched products:', error);

  }
})







//originally from home route



router.get('/', async (req, res) => {
  console.log("path hit")
  try {
      const productData = await Product.findAll({
          include: [{
              model: Category,
              attributes: ['category_name'],
          }] // Include the Category model to fetch associated categories
      });

      // const products = productData.map((product) => product.get({ plain: true }));
     
      // const userData = await User.findByPk(req.session.user_id, {
      //     attributes: { exclude: ['password'] },
      //     // include: [{ model: Product }],
      //   });

        

      // const user = userData.get({ plain: true });

    //  console.log(user)
    


      // res.render('homepage', { user, products, logged_in: req.session.logged_in });
      res.json(productData);

  } catch (err) {
      res.status(500).json(err);
  }
})


module.exports = router;




// router.get('/', async (req, res) => {

//   try {
//     const productData = await Product.findAll()

//     res.json(productData);
//   } catch (err) {
//     console.log(err)
//   }
// })








// }
  
// async function addProductToWatched(userId, productId) {
// try {
//   // Find the user by ID
//   const user = await User.findByPk(userId);
//   if (!user) {
//     throw new Error('User not found');
//   }

//   // Find the product by ID
//   const product = await Product.findByPk(productId);
//   if (!product) {
//     throw new Error('Product not found');
//   }

//   // Add the product to the user's watched products
//   await user.addWatched_product(product);

//   console.log(`Product (ID: ${productId}) has been added to User (ID: ${userId})'s watched products.`);
// } catch (error) {
//   console.error('Error adding product to watched products:', error);
// }
// )