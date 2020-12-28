/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1609132543368_2330';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    // 下面这条加上才能共享跨域session，同时前端ajax请求也要加上响应的参数
    credentials: true,
  };

  exports.validate = {
    // convert: false,
    // validateRoot: false,
  };

  config.security = {
    // 关闭csrf验证
    csrf: {
      enable: false,
    },
    // 白名单
    domainWhiteList: [ '*' ],
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/rencs',
    options: {},
  };

  return {
    ...config,
    ...userConfig,
  };
};
