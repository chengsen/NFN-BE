'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    userName: {
      type: String,
      unique: false,
      required: true,
    },
    sex: {
      type: String,
      unique: false,
      required: true,
    },
    nation: {
      type: String,
      unique: false,
      required: true,
    },
    idNumber: {
      type: String,
      unique: false,
      required: true,
    },
    birthDate: {
      type: String,
      unique: false,
      required: true,
    },
    gradSchool: {
      type: String,
      unique: false,
      required: true,
    },
    eduBg: {
      type: String,
      unique: false,
      required: true,
    },
    peopleType: {
      type: String,
      unique: false,
      required: true,
    },
    transferFrom: {
      type: String,
      unique: false,
      required: true,
    },
    partyJoinDate: {
      type: String,
      unique: false,
      required: true,
    },
    turnTrueDate: {
      type: String,
      unique: false,
      required: true,
    },
    introducer1: {
      type: String,
      unique: false,
      required: false,
    },
    introducer2: {
      type: String,
      unique: false,
      required: false,
    },
    partyNormal: {
      type: String,
      unique: false,
      required: true,
    },
    archiveAddr: {
      type: String,
      unique: false,
      required: false,
    },
    phone: {
      type: String,
      unique: false,
      required: true,
    },
    homeAddr: {
      type: String,
      unique: false,
      required: true,
    },
    updatedDate: {
      type: String,
      unique: false,
      required: true,
    },
    sign: {
      type: String,
      unique: false,
      required: true,
    },
  });
  return mongoose.model('User', UserSchema);
};
