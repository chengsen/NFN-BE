'use strict';

const Service = require('egg').Service;

class userByIdService extends Service {
  async findOne(params) {
    console.log('service/search', params);
    const { ctx } = this;
    const result = await ctx.model.User.findById({ _id: params._id });
    return { result };
  }
}


module.exports = userByIdService;
