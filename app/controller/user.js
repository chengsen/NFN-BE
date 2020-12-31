'use strict';
const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  userName: 'string',
  sex: 'string',
  nation: 'string',
  idNumber: 'string',
  birthDate: 'string',
  gradSchool: 'string',
  eduBg: 'string',
  peopleType: 'string',
  transferFrom: 'string',
  partyJoinDate: 'string',
  turnTrueDate: 'string',
  introducer1: { type: 'string', allowEmpty: true, required: false },
  introducer2: { type: 'string', allowEmpty: true, required: false },
  partyNormal: 'string',
  archiveAddr: { type: 'string', allowEmpty: true, required: false },
  phone: 'string',
  homeAddr: 'string',
  sign: 'string',
};

class UserController extends Controller {
  // 插入数据
  async create() {
    const { ctx } = this;
    console.log('user/create, 获取的返回值', ctx.request.body);
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule, ctx.request.body);
    console.log('通过了校验');
    const result = await ctx.service.user.create(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = {
      ok: true,
      query: ctx.request.body,
      result,
    };
    ctx.status = 201;
  }
  // 检索数据
  async index() {
    const { ctx } = this;
    console.log('user/index, 获取的返回值', ctx.query);
    const result = await ctx.service.user.search(ctx.query);
    ctx.body = {
      ok: true,
      query: ctx.query,
      result,
    };
    ctx.status = 201;
  }
}
module.exports = UserController;
