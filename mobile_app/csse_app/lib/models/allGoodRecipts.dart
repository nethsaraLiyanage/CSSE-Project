// To parserequired this JSON data, do
//
//     final allGoodRecipts = allGoodReciptsFromJson(jsonString);

import 'dart:convert';

List<AllGoodRecipts> allGoodReciptsFromJson(String str) =>
    List<AllGoodRecipts>.from(
        json.decode(str).map((x) => AllGoodRecipts.fromJson(x)));

String allGoodReciptsToJson(List<AllGoodRecipts> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class AllGoodRecipts {
  AllGoodRecipts(
      {required this.reciptNo,
      required this.deliveryAdviceNote,
      required this.supplierName,
      required this.itemCount,
      required this.itemList,
      required this.Ordered_Date});

  int reciptNo;
  String deliveryAdviceNote;
  String supplierName;
  int itemCount;
  String Ordered_Date;
  List<int> itemList;

  factory AllGoodRecipts.fromJson(Map<String, dynamic> json) => AllGoodRecipts(
        reciptNo: json["Recipt_No"],
        deliveryAdviceNote: json["Delivery_Advice_Note"],
        supplierName: json["supplier_name"],
        itemCount: json["item_count"],
        Ordered_Date: json["Ordered_Date"],
        itemList: List<int>.from(json["item_list"].map((x) => x)),
      );

  Map<String, dynamic> toJson() => {
        "Recipt_No": reciptNo,
        "Delivery_Advice_Note": deliveryAdviceNote,
        "supplier_name": supplierName,
        "item_count": itemCount,
        "Ordered_Date": Ordered_Date,
        "item_list": List<dynamic>.from(itemList.map((x) => x)),
      };
}
