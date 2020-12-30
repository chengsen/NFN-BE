'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.resources('user', '/api/v2/user', controller.user);
  router.resources('userQuery', '/api/v2/userQuery', controller.userQuery);
  router.resources('userById', '/api/v2/userById', controller.userById);
};
