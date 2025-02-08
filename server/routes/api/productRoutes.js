const router = require('express').Router();
const { Product, User, Category, WatchedProduct, PurchasedProduct } = require('../../models');


// Seller create new product
router.post('/', async (req, res) => {  

  const newProductData = { ...req.body, user_id: req.session.user_id }
  console.log(newProductData)

  try {
    if (!req.body) {
      return res.json("error")
    }
      const newProduct = await Product.create(newProductData);
    
  
      res.status(200).json(newProduct);
    } catch (err) {
      res.status(400).json(err);
    }
});

//Get route for when button is pressed on hompage, only show that category on this page
//api/products/category/:category_id
router.get('/category/:category_id', async (req,res) => {
  try {
    let products = await Product.findAll({ 
      where: { category_id: req.params.category_id }, 
      include: [
        { 
          model: Category,
          attributes: ['category_name']
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
      products = products.map(product => product.get({plain:true }));

      res.json(products)
  } catch (error){
      res.status(500).json(error);
  }
})

//Get individual product
router.get('/id/:productId', async (req, res) => {
  console.log("single product hit");
  const productId = req.params.productId;

  try {
    const product = await Product.findByPk(productId, {
      include: [
        {
          model: Category,
          attributes: ['category_name'], // Make sure the category is included
        }
      ]
    });

    if (!product) {
      return res.status(404).json("Product not found"); // Return a 404 error if product is not found
    }

    console.log(product);
    res.json(product); // Return the product data to the front-end
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" }); // Handle error gracefully
  }
});


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

router.get('/popular', async (req, res) => {
  try {
    const popularProductsData = await WatchedProduct.findAll({
      include: [{ 
        model: Product,
        attributes: ['id', 'product_name', 'description', 'price', 'category_id'],
        include: [{
          model: Category,
          attributes: ['category_name'],
        }]
      }]
    })

    res.json(popularProductsData)
  }
  catch(err) {
    console.log(err)
  }

})

//originally from home route
router.get('/', async (req, res) => {

  try {
      const productData = await Product.findAll({
          include: [{
              model: Category,
              attributes: ['category_name'],
          }] // Include the Category model to fetch associated categories
      });        

      res.json(productData);

  } catch (err) {
      res.status(500).json(err);
  }
})


module.exports = router;


  
