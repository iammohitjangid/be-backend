const authComponent = require('../../v1/components/auth/auth.module');
const bookComponent = require('../../v1/components/book/book.module');
const categoryComponent = require('../../v1/components/category/category.module');
const authorComponent = require('../../v1/components/author/author.module');
const cartComponent = require('../../v1/components/cart/cart.module');
const orderComponent = require('../../v1/components/order/order.module');

function loadRoutes(router) {
  router.use('/auth', authComponent.authRoutes);
  router.use('/book', bookComponent.bookRoutes);
  router.use('/category', categoryComponent.categoryRoutes);
  router.use('/author', authorComponent.authorRoutes);
  router.use('/cart', cartComponent.cartRoutes);
  router.use('/order', orderComponent.orderRoutes);
  if (process.env.NODE_ENV === 'test') {
    router.use('/health', (req, res) =>
      res.send('HEALTHY ENVIRONMENT: Server Up and Running')
    );
  } else {
    router.use('/health', (req, res) =>
      res.send('HEALTHY ENVIRONMENT: Server Up and Running')
    );
  }

  return router;
}

module.exports = loadRoutes;
