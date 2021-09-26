var DataTypes = require("sequelize").DataTypes;
var _Supplier_Apply_Quota_Request = require("./Supplier_Apply_Quota_Request");

function initModels(sequelize) {
  var Supplier_Apply_Quota_Request = _Supplier_Apply_Quota_Request(sequelize, DataTypes);

  Supplier_Apply_Quota_Request.belongsTo(GeneralUser, { as: "Supplier", foreignKey: "Supplier_ID"});
  GeneralUser.hasMany(Supplier_Apply_Quota_Request, { as: "Supplier_Apply_Quota_Requests", foreignKey: "Supplier_ID"});

  return {
    Supplier_Apply_Quota_Request,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
