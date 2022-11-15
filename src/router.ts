import {Router} from 'express';

export const router = Router();

// list categories
router.get('/categories', (req, res) => {
  console.log('ok');
});

// create category
router.post('/categories', (req, res) => {
  console.log('ok');
});

// delete category
router.delete('/categories/:categoryId', (req, res) => {
  console.log('ok');
});

// list products
router.get('/products', (req, res) => {
  console.log('ok');
});

// create product
router.post('/products', (req, res) => {
  console.log('ok');
});

// update product
router.put('/products/:productId', (req, res) => {
  console.log('ok');
});

// delete product
router.delete('/products/:productId', (req, res) => {
  console.log('ok');
});

// get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  console.log('ok');
});

// list orders
router.get('/orders', (req, res) => {
  console.log('ok');
});

// create orders
router.post('/orders', (req, res) => {
  console.log('ok');
});

// change order status
router.patch('/orders/:orderId', (req, res) => {
  console.log('ok');
});

// delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  console.log('ok');
});
