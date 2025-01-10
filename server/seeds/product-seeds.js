const { Product } = require('../models');

const productData = [
  {
    product_name: 'Lettuce',
    image: 'lettuce',
    description: 'Organic head of lettuce',
    price: 3.00,
    category_id: 1,
  },
  {
    product_name: 'Tomatoes',
    image: 'tomatoes',
    description: 'Organic tomatos',
    price: 2.59,
    category_id: 1
  },
  {
    product_name: 'Cucumbers',
    image: 'cucumber',
    description: 'Organic cucumbers',
    price: 6.29,
    category_id: 1,
    user_id: 1,
  },
  {
    product_name: 'Apples',
    image: 'cucumber',
    description: 'Organic Apples',
    price: 5.99,
    category_id: 1
  },
  {
    product_name: 'Avacados',
    image: 'cucumber',
    description: 'Avocados',
    price: 6.99,
    category_id: 1,
    user_id: 4
  },
  {
    product_name: 'Chicken Breast',
    image: 'chicken',
    description: '1 pound of fresh chicken breast.',
    price: 8.39,
    category_id: 2
  },
  {
    product_name: 'Ground Beef',
    image: 'beef',
    description: '1 pound a freshly ground beef.',
    price: 8.59,
    category_id: 2,
    user_id: 1,
  },
  {
    product_name: 'Boneless Steak',
    image: 'beef',
    description: '1 pound free range boneless steak.',
    price: 12.00,
    category_id: 2,
    user_id: 1,
  },
  {
    product_name: 'Beef Tenderloin',
    image: 'beef',
    description: 'Beef Tenderloin keto friendly, gluten free.',
    price: 8.25,
    category_id: 2,
    user_id: 2,
  },
  {
    product_name: 'Beef Flank Steak',
    image: 'beef',
    description: '1 pound beef flank steak.',
    price: 8.99,
    category_id: 2,
    user_id: 2
  },
  {
    product_name: 'Tilapia',
    image: 'fish',
    description: 'Idividualy packaged tilapia fillets.',
    price: 15.99,
    category_id: 3,
    user_id: 3
  },
  {
    product_name: 'Frozen Seafood',
    image: 'fish',
    description: 'Frozen wild caught sockeye salmon fillets.',
    price: 15.99,
    category_id: 3,
    user_id: 3
  },
  {
    product_name: 'Chilean Sea Bass',
    image: 'fish',
    description: 'Famous Chilean Sea Bass',
    price: 15.99,
    category_id: 3,
    user_id: 3
  },
  {
    product_name: 'Atlanic Cod Filet',
    image: 'fish',
    description: 'Fish of the day delivered to your door.',
    price: 15.99,
    category_id: 3,
    user_id: 4
  },
  {
    product_name: 'Swordfish Steak',
    image: 'fish',
    description: 'Large cut swordfish steak',
    price: 15.99,
    category_id: 3,
    user_id: 5
  },
  {
    product_name: 'Milk',
    image: 'milk',
    description: '1 gallon of 2% milk.',
    price: 4.59,
    category_id: 4,
    user_id: 6
  },
  {
    product_name: 'Cheddar Cheese',
    image: 'cheese',
    description: 'A block of cheddar cheese.',
    price: 10.99,
    category_id: 4  
  },
  {
    product_name: 'Sharp Cheese',
    image: 'cheese',
    description: 'A block of sharp cheese.',
    price: 10.99,
    category_id: 4,
    user_id: 4
  },
  {
    product_name: 'Cheddar Cheese',
    image: 'cheese',
    description: 'A block of cheddar cheese.',
    price: 10.99,
    category_id: 4,
    user_id: 6
  },
  {
    product_name: 'Potato Chips',
    image: 'chips',
    description: '1 bag of chips.',
    price: 4.29,
    category_id: 5
  },
  {
    product_name: 'Chocolate Cookies',
    image: 'cookies',
    description: '1 box of chocolate cookies.',
    price: 6.79,
    category_id: 5
  },
  {
    product_name: 'Roasted Shelled Pistachios',
    image: 'cookies',
    description: '1 bag roasted pistachios.',
    price: 6.99,
    category_id: 5,
    user_id: 3
  },
  {
    product_name: 'Organic Vegetable Straws',
    image: 'cookies',
    description: '1 bag of organic vegetable straws.',
    price: 6.49,
    category_id: 5,
    user_id: 1
  },
  {
    product_name: 'Skinny Bones Popcorn',
    image: 'cookies',
    description: 'Sunflower oil and salt popcorn',
    price: 6.99,
    category_id: 5,
    user_id: 2
  },
  {
    product_name: 'Premium Walnuts',
    image: 'cookies',
    description: '1 bag of premium walnuts.',
    price: 6.99,
    category_id: 5,
    user_id: 1
  },
  {
    product_name: 'Spaghetti',
    image: 'spaghetti',
    description: '1 box of spaghetti.',
    price: 2.89,
    category_id: 6
  },
  {
    product_name: 'Rice',
    image: 'rice',
    description: '20 lb bag of rice.',
    price: 25.59,
    category_id: 6
  },
  {
    product_name: 'Light Brown Sugar',
    image: 'rice',
    description: '5 lb bag of brown sugar.',
    price: 3.99,
    category_id: 6,
    user_id: 6
  },
  {
    product_name: 'Cannellini Beans',
    image: 'rice',
    description: 'Can of beans.',
    price: 1.99,
    category_id: 6,
    user_id: 6
  },
  {
    product_name: 'Organic Granola',
    image: 'rice',
    description: '12 oz bag of granola.',
    price: 4.99,
    category_id: 6,
    user_id: 3
  },
  {
    product_name: 'Penne Pasta',
    image: 'rice',
    description: '1 lb bag of pasta.',
    price: 2.99,
    category_id: 6,
    user_id: 3
  },
  {
    product_name: 'Whole Grain Oats',
    image: 'rice',
    description: '4 lb of whole grain oats',
    price: 4.79,
    category_id: 6,
    user_id: 2
  },
  {
    product_name: 'Sliced Tomatoes',
    image: 'sliced-tomatoes',
    description: '1 large can of sliced tomatoes.',
    price: 6,
    category_id: 7
  },
  {
    product_name: 'Pineapple Slices',
    image: 'sliced-tomatoes',
    description: '1 can pineapple slices.',
    price: 6,
    category_id: 7,
    user_id: 4
  },
  {
    product_name: 'Organic Pear Halves',
    image: 'sliced-tomatoes',
    description: '1 can large pear halves.',
    price: 6,
    category_id: 7,
    user_id: 3
  },
  {
    product_name: 'Sardines in Olive Oil',
    image: 'sliced-tomatoes',
    description: '1 tin sardines.',
    price: 6,
    category_id: 7
  },
  {
    product_name: 'Ketchup',
    image: 'ketchup',
    description: '1 bottle of ketchup.',
    price: 4,
    category_id: 8
  },
  {
    product_name: 'Yellow Mustard',
    image: 'ketchup',
    description: '1 bottle of classic yellow mustard.',
    price: 2.99,
    category_id: 8,
    user_id: 1
  },
  {
    product_name: 'Sweet Brown Mustard',
    image: 'ketchup',
    description: '1 bottle of brown mustard.',
    price: 2.69,
    category_id: 8,
    user_id: 2
  },
  {
    product_name: 'Veganaise',
    image: 'ketchup',
    description: '16oz bottle of organic vegetable based mayonnaise.',
    price: 3.99,
    category_id: 8,
    user_id: 3
  },
  {
    product_name: 'Apple Pie',
    image: 'apple-pie',
    description: '1 freshly baked apple pie.',
    price: 5.99,
    category_id: 9
  },
  {
    product_name: 'Chocolate Croissants',
    image: 'cookies',
    description: 'Freshly baked chocolate croissants.',
    price: 6.99,
    category_id: 9,
    user_id: 3
  },
  {
    product_name: 'Fruit Circles',
    image: 'frootloop',
    description: '1 box of colorful fruit rings',
    price: 2.99,
    category_id: 10
  },
  {
    product_name: 'Honey and Grain',
    image: 'frootloop',
    description: '100% grain and honey',
    price: 3.69,
    category_id: 10,
    user_id: 7
  },
  {
    product_name: 'Unsweetened Grain Free Cereal',
    image: 'frootloop',
    description: '1 box of grain free cereal',
    price: 3.49,
    category_id: 10,
    user_id: 7
  },
  {
    product_name: 'Cinnamon Cereal',
    image: 'frootloop',
    description: '1 box of flavorful cinnamon crunches',
    price: 4.19,
    category_id: 10,
    user_id: 2
  },
  {
    product_name: 'Frosted Grains',
    image: 'frootloop',
    description: '1 box of grains and sugar',
    price: 5,
    category_id: 10,
    user_id: 5
  },
  {
    product_name: 'Vanilla Ice-Cream',
    image: 'icecream',
    description: '1 tub of icecream',
    price: 5,
    category_id: 11
  },
  {
    product_name: 'Better Pizza',
    image: 'icecream',
    description: '1 frozen pizza',
    price: 5.99,
    category_id: 11,
    user_id: 1
  },
  {
    product_name: 'Frozen Fruit',
    image: 'icecream',
    description: '1 bag frozen fruit',
    price: 2.99,
    category_id: 11,
    user_id: 4
  },
  {
    product_name: 'Frozen Breakfast Burritos',
    image: 'icecream',
    description: '2 burritos per pack',
    price: 5,
    category_id: 11,
    user_id: 5
  },
  {
    product_name: 'Frozen Bagels',
    image: 'icecream',
    description: '1 pack frozen bagels',
    price: 2.19,
    category_id: 11,
    user_id: 6
  },
]



const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
