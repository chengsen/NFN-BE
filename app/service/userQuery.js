'use strict';

const Service = require('egg').Service;

class userQueryService extends Service {
  async search(params) {
    console.log('service/search', params);
    const { ctx } = this;
    const conditions = {};

    if ('branch' in params && params.branch !== '') {
      conditions.transferFrom = params.branch;
    }
    if ('userName' in params && params.userName !== '') {
      conditions.userName = { $regex: params.userName };
    }

    const result = await ctx.model.User.find(conditions).skip(params.limit * (params.page - 1)).limit(params.limit);

    const resultCount = await ctx.model.User.countDocuments(conditions);
    console.log('总数', resultCount);
    return { result, resultCount };
  }
}


module.exports = userQueryService;
