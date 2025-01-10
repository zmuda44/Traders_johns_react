const { WatchedProduct } = require('../models');

const watchedProductData = [
    {
        user_id: 1,
        product_id: 1,
    },
    {
        user_id: 1,
        product_id: 4,
    },
    {
        user_id: 1,
        product_id: 8,
    },
    {
        user_id: 1,
        product_id: 16,
    },
    {
        user_id: 2,
        product_id: 1,
    },
    {
        user_id: 2,
        product_id: 4,
    },
    {
        user_id: 2,
        product_id: 8,
    },
    {
        user_id: 2,
        product_id: 16,
    },
    {
        user_id: 2,
        product_id: 19,
    },
    {
        user_id: 2,
        product_id: 22,
    },
    {
        user_id: 3,
        product_id: 3,
    },
    {
        user_id: 3,
        product_id: 5,
    },
    {
        user_id: 3,
        product_id: 8,
    },
    {
        user_id: 3,
        product_id: 9,
    },
    {
        user_id: 3,
        product_id: 11,
    },
    {
        user_id: 4,
        product_id: 1,
    },
    {
        user_id: 4,
        product_id: 7,
    },
    {
        user_id: 4,
        product_id: 8,
    },
    {
        user_id: 4,
        product_id: 10,
    },
    {
        user_id: 4,
        product_id: 15,
    },
    {
        user_id: 4,
        product_id: 23,
    },
    {
        user_id: 4,
        product_id: 24,
    },
]

const seedWatchedProducts = () => WatchedProduct.bulkCreate(watchedProductData);

module.exports = seedWatchedProducts;