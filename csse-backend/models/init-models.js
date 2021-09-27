var DataTypes = require("sequelize").DataTypes;
var _GeneralUser = require("./GeneralUser");
var _Goods_Recipt = require("./Goods_Recipt");
var _Goods_Recipt_Order_Items_Qty = require("./Goods_Recipt_Order_Items_Qty");
var _Invoice = require("./Invoice");
var _Item_Supplier = require("./Item_Supplier");
var _Item_Supplier_Supplying_Items = require("./Item_Supplier_Supplying_Items");
var _Items = require("./Items");
var _Payment = require("./Payment");
var _Purchase_Order = require("./Purchase_Order");
var _Purchase_Order_Items_Qty = require("./Purchase_Order_Items_Qty");
var _Quota_Request = require("./Quota_Request");
var _Shipping_Order = require("./Shipping_Order");
var _Shipping_Order_Items_Qty = require("./Shipping_Order_Items_Qty");
var _Site = require("./Site");
var _Supplier_Apply_Quota_Request = require("./Supplier_Apply_Quota_Request");

function initModels(sequelize) {
  var GeneralUser = _GeneralUser(sequelize, DataTypes);
  var Goods_Recipt = _Goods_Recipt(sequelize, DataTypes);
  var Goods_Recipt_Order_Items_Qty = _Goods_Recipt_Order_Items_Qty(sequelize, DataTypes);
  var Invoice = _Invoice(sequelize, DataTypes);
  var Item_Supplier = _Item_Supplier(sequelize, DataTypes);
  var Item_Supplier_Supplying_Items = _Item_Supplier_Supplying_Items(sequelize, DataTypes);
  var Items = _Items(sequelize, DataTypes);
  var Payment = _Payment(sequelize, DataTypes);
  var Purchase_Order = _Purchase_Order(sequelize, DataTypes);
  var Purchase_Order_Items_Qty = _Purchase_Order_Items_Qty(sequelize, DataTypes);
  var Quota_Request = _Quota_Request(sequelize, DataTypes);
  var Shipping_Order = _Shipping_Order(sequelize, DataTypes);
  var Shipping_Order_Items_Qty = _Shipping_Order_Items_Qty(sequelize, DataTypes);
  var Site = _Site(sequelize, DataTypes);
  var Supplier_Apply_Quota_Request = _Supplier_Apply_Quota_Request(sequelize, DataTypes);

  Goods_Recipt.belongsToMany(Items, { as: 'Item_No_Items', through: Goods_Recipt_Order_Items_Qty, foreignKey: "Recipt_No", otherKey: "Item_No" });
  Items.belongsToMany(Goods_Recipt, { as: 'Recipt_No_Goods_Recipts', through: Goods_Recipt_Order_Items_Qty, foreignKey: "Item_No", otherKey: "Recipt_No" });
  Items.belongsToMany(Purchase_Order, { as: 'P_Order_Id_Purchase_Orders', through: Purchase_Order_Items_Qty, foreignKey: "Item_No", otherKey: "P_Order_Id" });
  Items.belongsToMany(Shipping_Order, { as: 'S_Order_Id_Shipping_Orders', through: Shipping_Order_Items_Qty, foreignKey: "Item_No", otherKey: "S_Order_Id" });
  Purchase_Order.belongsToMany(Items, { as: 'Item_No_Items_Purchase_Order_Items_Qties', through: Purchase_Order_Items_Qty, foreignKey: "P_Order_Id", otherKey: "Item_No" });
  Shipping_Order.belongsToMany(Items, { as: 'Item_No_Items_Shipping_Order_Items_Qties', through: Shipping_Order_Items_Qty, foreignKey: "S_Order_Id", otherKey: "Item_No" });
  Goods_Recipt.belongsTo(GeneralUser, { as: "Delivery_Mgr", foreignKey: "Delivery_Mgr_Id"});
  GeneralUser.hasMany(Goods_Recipt, { as: "Goods_Recipts", foreignKey: "Delivery_Mgr_Id"});
  Payment.belongsTo(GeneralUser, { as: "Account_Staff", foreignKey: "Account_Staff_Id"});
  GeneralUser.hasMany(Payment, { as: "Payments", foreignKey: "Account_Staff_Id"});
  Purchase_Order.belongsTo(GeneralUser, { as: "Site_Manager", foreignKey: "Site_Manager_Id"});
  GeneralUser.hasMany(Purchase_Order, { as: "Purchase_Orders", foreignKey: "Site_Manager_Id"});
  Quota_Request.belongsTo(GeneralUser, { as: "Procument_Staff", foreignKey: "Procument_Staff_ID"});
  GeneralUser.hasMany(Quota_Request, { as: "Quota_Requests", foreignKey: "Procument_Staff_ID"});
  Site.belongsTo(GeneralUser, { as: "Site_Manager", foreignKey: "Site_Manager_Id"});
  GeneralUser.hasMany(Site, { as: "Sites", foreignKey: "Site_Manager_Id"});
  Supplier_Apply_Quota_Request.belongsTo(GeneralUser, { as: "Supplier", foreignKey: "Supplier_ID"});
  GeneralUser.hasMany(Supplier_Apply_Quota_Request, { as: "Supplier_Apply_Quota_Requests", foreignKey: "Supplier_ID"});
  Goods_Recipt_Order_Items_Qty.belongsTo(Goods_Recipt, { as: "Recipt_No_Goods_Recipt", foreignKey: "Recipt_No"});
  Goods_Recipt.hasMany(Goods_Recipt_Order_Items_Qty, { as: "Goods_Recipt_Order_Items_Qties", foreignKey: "Recipt_No"});
  Payment.belongsTo(Goods_Recipt, { as: "Recipt_No_Goods_Recipt", foreignKey: "Recipt_No"});
  Goods_Recipt.hasMany(Payment, { as: "Payments", foreignKey: "Recipt_No"});
  Goods_Recipt.belongsTo(Item_Supplier, { as: "Item_Supplier", foreignKey: "Item_Supplier_Id"});
  Item_Supplier.hasMany(Goods_Recipt, { as: "Goods_Recipts", foreignKey: "Item_Supplier_Id"});
  Goods_Recipt_Order_Items_Qty.belongsTo(Items, { as: "Item_No_Item", foreignKey: "Item_No"});
  Items.hasMany(Goods_Recipt_Order_Items_Qty, { as: "Goods_Recipt_Order_Items_Qties", foreignKey: "Item_No"});
  Item_Supplier_Supplying_Items.belongsTo(Items, { as: "Item_No_Item", foreignKey: "Item_No"});
  Items.hasMany(Item_Supplier_Supplying_Items, { as: "Item_Supplier_Supplying_Items", foreignKey: "Item_No"});
  Purchase_Order_Items_Qty.belongsTo(Items, { as: "Item_No_Item", foreignKey: "Item_No"});
  Items.hasMany(Purchase_Order_Items_Qty, { as: "Purchase_Order_Items_Qties", foreignKey: "Item_No"});
  Shipping_Order_Items_Qty.belongsTo(Items, { as: "Item_No_Item", foreignKey: "Item_No"});
  Items.hasMany(Shipping_Order_Items_Qty, { as: "Shipping_Order_Items_Qties", foreignKey: "Item_No"});
  Invoice.belongsTo(Payment, { as: "Payment", foreignKey: "Payment_Id"});
  Payment.hasMany(Invoice, { as: "Invoices", foreignKey: "Payment_Id"});
  Purchase_Order_Items_Qty.belongsTo(Purchase_Order, { as: "P_Order", foreignKey: "P_Order_Id"});
  Purchase_Order.hasMany(Purchase_Order_Items_Qty, { as: "Purchase_Order_Items_Qties", foreignKey: "P_Order_Id"});
  Shipping_Order.belongsTo(Purchase_Order, { as: "P_Order", foreignKey: "P_Order_Id"});
  Purchase_Order.hasMany(Shipping_Order, { as: "Shipping_Orders", foreignKey: "P_Order_Id"});
  Quota_Request.belongsTo(Purchase_Order_Items_Qty, { as: "Item_No_Purchase_Order_Items_Qty", foreignKey: "Item_No"});
  Purchase_Order_Items_Qty.hasMany(Quota_Request, { as: "Quota_Requests", foreignKey: "Item_No"});
  Quota_Request.belongsTo(Purchase_Order_Items_Qty, { as: "P_Order", foreignKey: "P_Order_Id"});
  Purchase_Order_Items_Qty.hasMany(Quota_Request, { as: "P_Order_Quota_Requests", foreignKey: "P_Order_Id"});
  Goods_Recipt.belongsTo(Shipping_Order, { as: "S_Order", foreignKey: "S_Order_Id"});
  Shipping_Order.hasMany(Goods_Recipt, { as: "Goods_Recipts", foreignKey: "S_Order_Id"});
  Shipping_Order_Items_Qty.belongsTo(Shipping_Order, { as: "S_Order", foreignKey: "S_Order_Id"});
  Shipping_Order.hasMany(Shipping_Order_Items_Qty, { as: "Shipping_Order_Items_Qties", foreignKey: "S_Order_Id"});
  Purchase_Order.belongsTo(Site, { as: "Site", foreignKey: "Site_Id"});
  Site.hasMany(Purchase_Order, { as: "Purchase_Orders", foreignKey: "Site_Id"});
  Item_Supplier.belongsTo(Supplier_Apply_Quota_Request, { as: "Request", foreignKey: "Request_Id"});
  Supplier_Apply_Quota_Request.hasMany(Item_Supplier, { as: "Item_Suppliers", foreignKey: "Request_Id"});
  Item_Supplier.belongsTo(Supplier_Apply_Quota_Request, { as: "Supplier", foreignKey: "Supplier_ID"});
  Supplier_Apply_Quota_Request.hasMany(Item_Supplier, { as: "Supplier_Item_Suppliers", foreignKey: "Supplier_ID"});

  return {
    GeneralUser,
    Goods_Recipt,
    Goods_Recipt_Order_Items_Qty,
    Invoice,
    Item_Supplier,
    Item_Supplier_Supplying_Items,
    Items,
    Payment,
    Purchase_Order,
    Purchase_Order_Items_Qty,
    Quota_Request,
    Shipping_Order,
    Shipping_Order_Items_Qty,
    Site,
    Supplier_Apply_Quota_Request,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
