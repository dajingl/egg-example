module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('createPost', '/api/posts', controller.home.create);
};