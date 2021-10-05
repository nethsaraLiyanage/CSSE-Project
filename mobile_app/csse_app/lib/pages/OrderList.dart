import 'dart:convert';
import 'dart:io';

import 'package:csse_app/api/http_purchase_models.dart';
import 'package:csse_app/models/allGoodRecipts.dart';
import 'package:csse_app/models/purchaseOrderModel.dart';
import 'package:csse_app/pages/Logs.dart';
import 'package:flutter/material.dart';
import 'package:persistent_bottom_nav_bar/persistent-tab-view.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class OrderList extends StatefulWidget {
  final Future<List<PurchaseOrderModel?>> list;
  final String? id;
  final String? username;
  const OrderList(
      {Key? key, required this.list, required this.id, required this.username})
      : super(key: key);

  @override
  State<OrderList> createState() => _OrderListState();
}

getUser() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  String? username = prefs.getString('username');
  String? password = prefs.getString('password');
  String? type = prefs.getString('type');
  String? email = prefs.getString('email');
  int? id = prefs.getInt('id');

  //new UserModel(userId: id, name: name, password: password, email: email, type: type)

  return id;
}

Future<List<PurchaseOrderModel?>> getMyOrders() async {
  final String apiUrl = "http://192.168.1.4:8090/order/pending/7";

  final response = await http.get(Uri.parse(apiUrl));

  debugPrint(response.body);

  if (response.statusCode == 200) {
    final String responseString = response.body;

    return purchaseOrderModelFromJson(responseString);
  } else {
    throw "cant get products";
  }
}

class _OrderListState extends State<OrderList> {
  final HttpServiceOrder _httpServiceOrder = new HttpServiceOrder();


  @override
  Widget build(BuildContext context) {
    debugPrint(widget.list.toString());
    return Scaffold(
      body: FutureBuilder(
        future: _httpServiceOrder.getProduct(widget.id.toString()),
        builder: (BuildContext context,
            AsyncSnapshot<List<PurchaseOrderModel>> snapshot) {
          if (snapshot.hasData) {
            List<PurchaseOrderModel>? dataList = snapshot.data;

            return (Padding(
              padding: const EdgeInsets.fromLTRB(20.0, 50.0, 20.0, 50.0),
              child: SingleChildScrollView(
                child: Center(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Expanded(flex: 1, child: Text('')),
                          Expanded(flex: 1, child: Text('')),
                          Expanded(
                            flex: 1,
                            child: Text(''),
                          ),
                          Expanded(
                              flex: 1,
                              child: CircleAvatar(
                                backgroundColor: Colors.blue[900],
                                child: Text(widget.username.toString()),
                              ))
                        ],
                      ),
                      Text(
                        'My Orders',
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 30,
                            color: Colors.blueGrey),
                      ),
                      space10(),
                      Divider(color: Colors.blue[900]),
                      space10(),
                      Row(
                        children: [
                          Expanded(
                            flex: 2,
                            child: TextField(
                              cursorColor: Colors.black,
                              style: TextStyle(color: Colors.blueGrey),
                              decoration: InputDecoration(
                                focusedBorder: OutlineInputBorder(
                                    borderSide: BorderSide(
                                        color: Colors.blue, width: 2.0),
                                    borderRadius: BorderRadius.circular(20)),
                                enabledBorder: OutlineInputBorder(
                                    borderSide: BorderSide(
                                        color: Colors.blue, width: 2.0),
                                    borderRadius: BorderRadius.circular(20)),
                                filled: false,
                                fillColor: Colors.blue[600],
                                border: OutlineInputBorder(
                                    borderSide: BorderSide.none,
                                    borderRadius: BorderRadius.circular(20)),
                              ),
                            ),
                          ),
                          SizedBox(
                            width: 15,
                          ),
                          Expanded(
                            flex: 1,
                            child: TextButton(
                              child: Row(
                                children: [
                                  Icon(
                                    Icons.search,
                                    color: Colors.white,
                                  ),
                                  SizedBox(
                                    width: 5,
                                  ),
                                  Text('Search')
                                ],
                              ),
                              style: ButtonStyle(
                                  padding:
                                      MaterialStateProperty.all<EdgeInsets>(
                                          EdgeInsets.all(15)),
                                  foregroundColor:
                                      MaterialStateProperty.all<Color>(
                                          Colors.white),
                                  backgroundColor:
                                      MaterialStateProperty.all(Colors.red),
                                  shape: MaterialStateProperty.all<
                                          RoundedRectangleBorder>(
                                      RoundedRectangleBorder(
                                          borderRadius:
                                              BorderRadius.circular(18.0),
                                          side:
                                              BorderSide(color: Colors.red)))),
                              onPressed: () =>
                                  {Navigator.pushNamed(context, '/dash')},
                            ),
                          )
                        ],
                      ),
                      space10(),
                      Column(
                        children: dataList!
                            .map(
                              (PurchaseOrderModel e) => Column(
                                children: [
                                  Card(
                                    child: Padding(
                                      padding: EdgeInsets.fromLTRB(5, 5, 5, 5),
                                      child: Row(
                                        children: [
                                          Expanded(
                                            flex: 1,
                                            child: Text(e.pOrderId.toString()),
                                          ),
                                          Expanded(
                                              flex: 2,
                                              child: Column(
                                                children: [
                                                  Text(
                                                    'order date',
                                                    textAlign: TextAlign.left,
                                                    style: TextStyle(
                                                        color: Colors.grey,
                                                        fontSize: 10),
                                                  ),
                                                  space5(),
                                                  Text(e.orderedDate
                                                      .toString()
                                                      .substring(0, 10)),
                                                ],
                                              )),
                                          Expanded(
                                            flex: 2,
                                            child: Center(
                                              child: Column(
                                                mainAxisAlignment:
                                                    MainAxisAlignment.center,
                                                children: <Widget>[
                                                  FlatButton(
                                                    textColor: Colors.white,
                                                    //height: 60.0,
                                                    color: Colors.cyan,
                                                    onPressed: () async {
                                                      Navigator.push(
                                                          context,
                                                          MaterialPageRoute(
                                                              builder: (context) => Logs(
                                                                  pId: e
                                                                      .pOrderId,
                                                                  uid: widget.id
                                                                      .toString())));
                                                    },
                                                    child: Column(
                                                      mainAxisAlignment:
                                                          MainAxisAlignment
                                                              .center,
                                                      children: [
                                                        Padding(
                                                          padding:
                                                              const EdgeInsets
                                                                  .all(0.0),
                                                          child: Text(
                                                              'view more>>',
                                                              style: TextStyle(
                                                                  fontSize:
                                                                      10)),
                                                        )
                                                      ],
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                  ),
                                  space10(),
                                ],
                              ),
                            )
                            .toList(),
                      )
                    ],
                  ),
                ),
              ),
            ));
          }

          return Center(child: CircularProgressIndicator());
        },
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.book_outlined),
            label: 'My Orders',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.book_rounded),
            label: 'Orders',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.manage_accounts),
            label: 'Profile',
          ),
        ],
      ),
    );
  }
}

class space10 extends StatelessWidget {
  const space10({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 10,
    );
  }
}

class space5 extends StatelessWidget {
  const space5({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 5,
    );
  }
}
