'use strict';
const Controller = require('egg').Controller;

class UserQueryController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.query.limit = 10;
    ctx.query.page = parseInt(ctx.query.page);
    console.log('userQuery.index, 查询条件', ctx.query);
    const { result, resultCount } = await ctx.service.userQuery.search(ctx.query);
    ctx.body = {
      message: '查询成功',
      query: ctx.query,
      resultCount,
      result,
    };
    ctx.status = 201;
  }
}
module.exports = UserQueryController;
