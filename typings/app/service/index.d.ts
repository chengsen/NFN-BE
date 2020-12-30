// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportUser = require('../../../app/service/user');
import ExportUserById = require('../../../app/service/userById');
import ExportUserQuery = require('../../../app/service/userQuery');

declare module 'egg' {
  interface IService {
    user: AutoInstanceType<typeof ExportUser>;
    userById: AutoInstanceType<typeof ExportUserById>;
    userQuery: AutoInstanceType<typeof ExportUserQuery>;
  }
}
