import 'dart:convert';
import 'package:csse_app/models/allGoodRecipts.dart';
import 'package:csse_app/models/purchaseOrderModel.dart';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart';
import 'dart:developer';

import 'package:shared_preferences/shared_preferences.dart';

class httpAllGoodRecipts {
  Future<List<AllGoodRecipts>> getAllGoodRecipts(String pId) async {
    final String getUrl = "http://192.168.1.4:8090/order/recipt/order/" + pId;
    Response res = await get(Uri.parse(getUrl));

     if (res.statusCode == 200) {
      log(res.body);
      List<dynamic> body = jsonDecode(res.body);

      List<AllGoodRecipts> products = body
          .map((dynamic item) => AllGoodRecipts.fromJson(item))
          .toList();

      return products;
    } else {
      debugPrint('error');
      log('cant fecth data');
      throw "cant get products";
    }
  }
}
