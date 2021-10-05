// To parse this JSON data, do
//
//     final PurchaseOrderItemsQtyModel = PurchaseOrderItemsQtyModelFromJson(jsonString);

import 'dart:convert';


String PurchaseOrderItemsQtyModelToJson(List<PurchaseOrderItemsQtyModel> data) => json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class PurchaseOrderItemsQtyModel {
  PurchaseOrderItemsQtyModel({
    required this.itemNo,
    required this.itemName,
    required this.quantity,
    required this.Price
  });

  int itemNo;
  String itemName;
  int quantity;
  int Price;

  // factory PurchaseOrderItemsQtyModel.fromJson(Map<String, dynamic> json) => PurchaseOrderItemsQtyModel(
  //   itemNo: json["Item_No"],
  //   itemName: json["Item_Name"],
  //   description: json["Description"],
  //   status: json["Status"],
  //   estimatedUnitPrice: json["Estimated_Unit_Price"],
  // );

  Map<String, dynamic> toJson() => {
    "Item_No": itemNo,
    "Item_Name": itemName,
    "quantity": quantity,
    "Price": Price,
  };
}
