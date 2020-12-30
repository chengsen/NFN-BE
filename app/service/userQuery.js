'use strict';

const Service = require('egg').Service;

class userQueryService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = '000';
  }

  async search(params) {
    console.log('service/search', params);
    const { ctx } = this;
    const conditions = {};
    let result = {};
    if ('branch' in params && params.branch !== '') {
      conditions.transferFrom = params.branch;
    }
    if ('userName' in params && params.userName !== '') {
      conditions.userName = { $regex: params.userName };
    }

    result = await ctx.model.User.find(conditions).skip(params.limit * (params.page - 1)).limit(params.limit);

    const resultCount = await ctx.model.User.countDocuments(conditions);
    console.log('总数', resultCount);
    return { result, resultCount };
  }

  formatDate() {
    const date = new Date();
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    let second = date.getSeconds();
    second = second < 10 ? ('0' + second) : second;
    return `${y}-${m}-${d} ${h}:${minute}:${second}`;
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


module.exports = userQueryService;
