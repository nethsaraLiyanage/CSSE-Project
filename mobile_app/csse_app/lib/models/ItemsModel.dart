// To parse this JSON data, do
//
//     final itemsModel = itemsModelFromJson(jsonString);

import 'dart:convert';

List<ItemsModel> itemsModelFromJson(String str) => List<ItemsModel>.from(json.decode(str).map((x) => ItemsModel.fromJson(x)));

String itemsModelToJson(List<ItemsModel> data) => json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class ItemsModel {
  ItemsModel({
    required this.itemNo,
    required this.itemName,
    required this.description,
    required this.status,
    required this.estimatedUnitPrice,
  });

  int itemNo;
  String itemName;
  String description;
  String status;
  int estimatedUnitPrice;

  factory ItemsModel.fromJson(Map<String, dynamic> json) => ItemsModel(
    itemNo: json["Item_No"],
    itemName: json["Item_Name"],
    description: json["Description"],
    status: json["Status"],
    estimatedUnitPrice: json["Estimated_Unit_Price"],
  );

  Map<String, dynamic> toJson() => {
    "Item_No": itemNo,
    "Item_Name": itemName,
    "Description": description,
    "Status": status,
    "Estimated_Unit_Price": estimatedUnitPrice,
  };
}
