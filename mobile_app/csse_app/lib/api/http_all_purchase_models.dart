import 'dart:convert';
import 'package:csse_app/models/purchaseOrderModel.dart';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart';
import 'dart:developer';

import 'package:shared_preferences/shared_preferences.dart';

class HttpAllPOrders {
  Future<List<PurchaseOrderModel>> getProduct() async {
    final String getUrl = "http://192.168.1.4:8090/order/all/approved";
    Response res = await get(Uri.parse(getUrl));

    if (res.statusCode == 200) {
      log(res.body);
      List<dynamic> body = jsonDecode(res.body);

      List<PurchaseOrderModel> products = body
          .map((dynamic item) => PurchaseOrderModel.fromJson(item))
          .toList();

      return products;
    } else {
      debugPrint('error');
      log('cant fecth data');
      throw "cant get products";
    }
  }
}
