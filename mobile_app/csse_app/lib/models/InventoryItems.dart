// To parse this JSON data, do
//
//     final inventoryItems = inventoryItemsFromJson(jsonString);

import 'dart:convert';

InventoryItems inventoryItemsFromJson(String str) => InventoryItems.fromJson(json.decode(str));

String inventoryItemsToJson(InventoryItems data) => json.encode(data.toJson());

class InventoryItems {
  InventoryItems({
    required this.data,
  });

  Data data;

  factory InventoryItems.fromJson(Map<String, dynamic> json) => InventoryItems(
    data: Data.fromJson(json["data"]),
  );

  Map<String, dynamic> toJson() => {
    "data": data.toJson(),
  };
}

class Data {
  Data({
    required this.siteId,
    required this.siteName,
    required this.location,
    required this.address,
    required this.siteManagerId,
    required this.siteImage,
    required this.inventories,
  });

  int siteId;
  String siteName;
  String location;
  String address;
  int siteManagerId;
  String siteImage;
  List<Inventory> inventories;

  factory Data.fromJson(Map<String, dynamic> json) => Data(
    siteId: json["Site_Id"],
    siteName: json["Site_Name"],
    location: json["Location"],
    address: json["Address"],
    siteManagerId: json["Site_Manager_Id"],
    siteImage: json["siteImage"],
    inventories: List<Inventory>.from(json["Inventories"].map((x) => Inventory.fromJson(x))),
  );

  Map<String, dynamic> toJson() => {
    "Site_Id": siteId,
    "Site_Name": siteName,
    "Location": location,
    "Address": address,
    "Site_Manager_Id": siteManagerId,
    "siteImage": siteImage,
    "Inventories": List<dynamic>.from(inventories.map((x) => x.toJson())),
  };
}

class Inventory {
  Inventory({
    required this.siteId,
    required this.itemNo,
    required this.remainingQty,
    required this.threshold,
    required this.itemNoItem,
  });

  int siteId;
  int itemNo;
  int remainingQty;
  int threshold;
  ItemNoItem itemNoItem;

  factory Inventory.fromJson(Map<String, dynamic> json) => Inventory(
    siteId: json["Site_Id"],
    itemNo: json["Item_No"],
    remainingQty: json["Remaining_Qty"],
    threshold: json["Threshold"],
    itemNoItem: ItemNoItem.fromJson(json["Item_No_Item"]),
  );

  Map<String, dynamic> toJson() => {
    "Site_Id": siteId,
    "Item_No": itemNo,
    "Remaining_Qty": remainingQty,
    "Threshold": threshold,
    "Item_No_Item": itemNoItem.toJson(),
  };
}

class ItemNoItem {
  ItemNoItem({
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

  factory ItemNoItem.fromJson(Map<String, dynamic> json) => ItemNoItem(
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
