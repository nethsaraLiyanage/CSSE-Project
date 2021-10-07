// ignore: file_names
// ignore: file_names
// ignore_for_file: prefer_const_constructors_in_immutables

import 'dart:collection';

import 'package:csse_app/models/UserModel.dart';
import 'package:csse_app/models/purchaseOrderModel.dart';
import 'package:csse_app/pages/OrderList.dart';
import 'package:csse_app/pages/trackOrder.dart';
import 'package:flutter/material.dart';
import 'package:material_dialogs/material_dialogs.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;

class Dashboard extends StatefulWidget {
  Dashboard({Key? key}) : super(key: key);

  @override
  _DashboardState createState() => _DashboardState();
}

getUser() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  String? username = prefs.getString('username');
  String? password = prefs.getString('password');
  String? type = prefs.getString('type');
  String? email = prefs.getString('email');
  int? id = prefs.getInt('id');

  Map<String, String?> userData = {
    "username": username,
    "password": password,
    "type": type,
    "id": id.toString()
  };

  //new UserModel(userId: id, name: name, password: password, email: email, type: type)

  return userData;
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

class _DashboardState extends State<Dashboard> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
        future: getUser(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            Map<String, String?>? userFet =
                snapshot.data as Map<String, String?>;
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
                                child: Text(userFet["username"].toString()),
                              ))
                        ],
                      ),
                      Text(
                        'Dashboard',
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 30,
                            color: Colors.blueGrey),
                      ),
                      space10(),
                      Divider(color: Colors.blue[900]),
                      space10(),
                      Card(
                        child: ListTile(
                          title: Text(
                            "Select your preferrd option!",
                            style: TextStyle(color: Colors.white),
                          ),
                        ),
                        color: Colors.blue,
                      ),
                      Row(
                        children: [
                          Expanded(
                            flex: 1,
                            child: Container(
                              height: 170,
                              width: 200,
                              child: Card(
                                child: new InkWell(
                                  onTap: () => {
                                    if (userFet["type"].toString() != "Site Manager")
                                      {
                                        Dialogs.bottomMaterialDialog(
                                            context: context,
                                            title:
                                                "You can't access this page!",
                                            lottieBuilder: Lottie.network(
                                                'https://assets5.lottiefiles.com/packages/lf20_yw3nyrsv.json'))
                                      }
                                    else{
                                    Navigator.pop(context, false),
                                    Navigator.pushNamed(context, '/requisition')
                                    }
                                  },
                                  child: Column(
                                    children: [
                                      space10(),
                                      space10(),
                                      space10(),
                                      Row(
                                        children: [
                                          flexWid(),
                                          Expanded(
                                              flex: 1,
                                              child: Image.asset(
                                                'assets/plusg.gif',
                                                width: 60,
                                              )),
                                          flexWid(),
                                        ],
                                      ),
                                      space10(),
                                      space10(),
                                      Text('New Requisitions')
                                    ],
                                  ),
                                ),
                                elevation: 8,
                                shadowColor: Colors.grey,
                                margin: EdgeInsets.all(10),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20.0),
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            flex: 1,
                            child: Container(
                              height: 170,
                              width: 200,
                              child: Card(
                                child: new InkWell(
                                  onTap: () {
                                    print("tapped");
                                  },
                                  child: Column(
                                    children: [
                                      space10(),
                                      space10(),
                                      space10(),
                                      Row(
                                        children: [
                                          flexWid(),
                                          Expanded(
                                              flex: 1,
                                              child: Image.asset(
                                                'assets/edit.gif',
                                                width: 60,
                                              )),
                                          flexWid(),
                                        ],
                                      ),
                                      space10(),
                                      space10(),
                                      Text('Edit Requisitions')
                                    ],
                                  ),
                                ),
                                elevation: 8,
                                shadowColor: Colors.grey,
                                margin: EdgeInsets.all(10),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20.0),
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                      Row(
                        children: [
                          Expanded(
                            flex: 1,
                            child: Container(
                              height: 170,
                              width: 200,
                              child: Card(
                                child: new InkWell(
                                  onTap: () {
                                    Future<List<PurchaseOrderModel?>> orders =
                                        getMyOrders() as Future<
                                            List<PurchaseOrderModel?>>;
                                    Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                            builder: (context) =>
                                                OrderList(list: orders, id : userFet["id"], username : userFet["username"])));
                                  },
                                  child: Column(
                                    children: [
                                      space10(),
                                      space10(),
                                      space10(),
                                      Row(
                                        children: [
                                          flexWid(),
                                          Expanded(
                                              flex: 1,
                                              child: Image.asset(
                                                'assets/doc.gif',
                                                width: 60,
                                              )),
                                          flexWid(),
                                        ],
                                      ),
                                      space10(),
                                      space10(),
                                      Text('Order List')
                                    ],
                                  ),
                                ),
                                elevation: 8,
                                shadowColor: Colors.grey,
                                margin: EdgeInsets.all(10),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20.0),
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            flex: 1,
                            child: Container(
                              height: 170,
                              width: 200,
                              child: Card(
                                child: new InkWell(
                                  onTap: () => {
                                    Navigator.push(context, MaterialPageRoute(builder: (context) =>  TrackOrder(id : userFet["id"].toString())))
                                  },
                                  child: Column(
                                    children: [
                                      space10(),
                                      space10(),
                                      space10(),
                                      Row(
                                        children: [
                                          flexWid(),
                                          Expanded(
                                              flex: 1,
                                              child: Image.asset(
                                                'assets/pin.gif',
                                                width: 60,
                                              )),
                                          flexWid(),
                                        ],
                                      ),
                                      space10(),
                                      space10(),
                                      Text('Track Order')
                                    ],
                                  ),
                                ),
                                elevation: 8,
                                shadowColor: Colors.grey,
                                margin: EdgeInsets.all(10),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20.0),
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                      Row(
                        children: [
                          Expanded(
                            flex: 1,
                            child: Container(
                              height: 170,
                              width: 200,
                              child: Card(
                                child: new InkWell(
                                  onTap: () {
                                    print("tapped");
                                  },
                                  child: Column(
                                    children: [
                                      space10(),
                                      space10(),
                                      space10(),
                                      Row(
                                        children: [
                                          flexWid(),
                                          Expanded(
                                              flex: 1,
                                              child: Image.asset(
                                                'assets/items.gif',
                                                width: 60,
                                              )),
                                          flexWid(),
                                        ],
                                      ),
                                      space10(),
                                      space10(),
                                      Text('Items')
                                    ],
                                  ),
                                ),
                                elevation: 8,
                                shadowColor: Colors.grey,
                                margin: EdgeInsets.all(10),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20.0),
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            flex: 1,
                            child: Container(
                              height: 170,
                              width: 200,
                              child: Card(
                                child: new InkWell(
                                  onTap: () => {
                                    Navigator.pushNamed(context, '/inventory')
                                  },
                                  child: Column(
                                    children: [
                                      space10(),
                                      space10(),
                                      space10(),
                                      Row(
                                        children: [
                                          flexWid(),
                                          Expanded(
                                              flex: 1,
                                              child: Image.asset(
                                                'assets/box.gif',
                                                width: 60,
                                              )),
                                          flexWid(),
                                        ],
                                      ),
                                      space10(),
                                      space10(),
                                      Text('Inventory')
                                    ],
                                  ),
                                ),
                                elevation: 8,
                                shadowColor: Colors.grey,
                                margin: EdgeInsets.all(10),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20.0),
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ));
          }
          return CircularProgressIndicator();
        },
      ),
    );
  }
}

class flexWid extends StatelessWidget {
  const flexWid({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(flex: 1, child: Text(''));
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
