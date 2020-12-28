'use strict';
const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  userName: 'string',
  sex: [ 0, 1 ],
  nation: 'number',
  idNumber: 'string',
  birthDate: 'string',
  gradSchool: 'string',
  eduBg: 'string',
  peopleType: 'number',
  transferFrom: 'string',
  partyJoinDate: 'string',
  turnTrueDate: 'string',
  introducer1: { type: 'string', allowEmpty: true, required: false },
  introducer2: { type: 'string', allowEmpty: true, required: false },
  partyNormal: 'number',
  archiveAddr: { type: 'string', allowEmpty: true, required: false },
  phone: 'string',
  homeAddr: 'string',
};

class UserController extends Controller {
  async create() {
    const { ctx } = this;
    console.log('获取的返回值', ctx.request.body);
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule, ctx.request.body);
    // 调用 service 创建一个 topic
    console.log('通过了校验');
    const result = await ctx.service.user.create(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = {
      Msg: '查询成功',
      query: ctx.request.body,
      result,
    };
    ctx.status = 201;
  }
  async index() {
    const { ctx } = this;
    console.log('index,获取的返回值', ctx.query);
    const result = await ctx.service.user.search(ctx.query);
    ctx.body = {
      message: '查询成功',
      query: ctx.query,
      result,
    };
    ctx.status = 201;
  }
}
module.exports = UserController;
