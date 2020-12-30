'use strict';

const Service = require('egg').Service;

class userByIdService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = '000';
  }

  async findOne(params) {
    console.log('service/search', params);
    const { ctx } = this;
    const result = await ctx.model.User.findById({ _id: params._id });
    return { result };
  }
  // 封装统一的调用检查函数，可以在查询、创建和更新等 Service 中复用
  checkSuccess(result) {
    if (result.status !== 200) {
      const errorMsg =
        result.data && result.data.error_msg
          ? result.data.error_msg
          : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}


module.exports = userByIdService;
