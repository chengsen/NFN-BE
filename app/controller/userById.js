'use strict';
const Controller = require('egg').Controller;

class UserByIdController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.query.limit = 10;
    ctx.query.page = parseInt(ctx.query.page);
    console.log('userQuery/index, 获取的返回值', ctx.query);
    const { result } = await ctx.service.userById.findOne(ctx.query);
    ctx.body = {
      ok: true,
      query: ctx.query,
      result,
    };
    ctx.status = 201;
  }
}
module.exports = UserByIdController;
