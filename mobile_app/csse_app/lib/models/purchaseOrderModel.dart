// To parse this JSON data, do
//
//     final purchaseOrderModel = purchaseOrderModelFromJson(jsonString);

import 'package:meta/meta.dart';
import 'dart:convert';

List<PurchaseOrderModel> purchaseOrderModelFromJson(String str) => List<PurchaseOrderModel>.from(json.decode(str).map((x) => PurchaseOrderModel.fromJson(x)));

String purchaseOrderModelToJson(List<PurchaseOrderModel> data) => json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class PurchaseOrderModel {
    PurchaseOrderModel({
        required this.pOrderId,
        required this.orderedDate,
        required this.status,
        required this.requiredDate,
        required this.subTotal,
        required this.siteId,
        required this.siteManagerId,
    });

    int pOrderId;
    DateTime orderedDate;
    String status;
    DateTime requiredDate;
    int subTotal;
    int siteId;
    int siteManagerId;

    factory PurchaseOrderModel.fromJson(Map<String, dynamic> json) => PurchaseOrderModel(
        pOrderId: json["P_Order_Id"],
        orderedDate: DateTime.parse(json["Ordered_Date"]),
        status: json["Status"],
        requiredDate: DateTime.parse(json["Required_Date"]),
        subTotal: json["Sub_Total"],
        siteId: json["Site_Id"],
        siteManagerId: json["Site_Manager_Id"],
    );

    Map<String, dynamic> toJson() => {
        "P_Order_Id": pOrderId,
        "Ordered_Date": orderedDate.toIso8601String(),
        "Status": status,
        "Required_Date": requiredDate.toIso8601String(),
        "Sub_Total": subTotal,
        "Site_Id": siteId,
        "Site_Manager_Id": siteManagerId,
    };
}
