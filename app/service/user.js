'use strict';

const Service = require('egg').Service;

class userService extends Service {
  async create(params) {
    params.updatedDate = this.formatDate();
    console.log('service/create', params);
    const { ctx } = this;
    const result = await ctx.model.User.create(params);
    return { result };
  }

  async search(params) {
    console.log('service/search', params);
    const { ctx } = this;
    const result = await ctx.model.User.find(params);
    return { result };
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
}


module.exports = userService;
