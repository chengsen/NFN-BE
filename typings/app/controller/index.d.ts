// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUser = require('../../../app/controller/user');
import ExportUserById = require('../../../app/controller/userById');
import ExportUserQuery = require('../../../app/controller/userQuery');

declare module 'egg' {
  interface IController {
    user: ExportUser;
    userById: ExportUserById;
    userQuery: ExportUserQuery;
  }
}
