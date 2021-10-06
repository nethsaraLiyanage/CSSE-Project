
import 'dart:convert';
import 'dart:developer';

import 'package:csse_app/models/ItemsModel.dart';
import 'package:csse_app/models/ManagerSite.dart';
import 'package:csse_app/models/PurchaseOrderItemsQtyModel.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:http/http.dart' as http;


class SelectSite extends StatefulWidget {
  SelectSite({Key? key}) : super(key: key);

  @override
  _SelectSiteState createState() => _SelectSiteState();
}

class _SelectSiteState extends State<SelectSite> {
  final List<String> entries = <String>['A', 'B', 'C'];
  final List<int> colorCodes = <int>[600, 500, 100];

  Future<ManagerSite> fetchItemsList() async {
    final response = await http.get(Uri.parse('http://10.0.2.2:8090/site/getSiteByManagerId/8'));

    if (response.statusCode == 200) {
      final String responseString = response.body;

      return managerSiteFromJson(responseString);
    } else {
      debugPrint('error');
      log('cant fecth data');
      throw "cant get products";
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: FutureBuilder(
            future: fetchItemsList(),
            builder: (BuildContext context , AsyncSnapshot<ManagerSite> snapshot){
              ManagerSite? managerSite = snapshot.data;
              debugPrint(managerSite.toString());
              if(snapshot.hasData){
                return (Padding(
                  padding: const EdgeInsets.fromLTRB(20.0, 30.0, 20.0, 50.0),
                  child: SingleChildScrollView(
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
                                  child: const Text('AH'),
                                ))
                          ],
                        ),//Log Details
                        Row(
                          children: [
                            Expanded(
                                child: Container(
                                  child: Center(
                                    child: Text(
                                      'Select Site',
                                      style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 30,
                                          color: Colors.blueGrey),
                                    ),
                                  ),
                                )
                            )
                          ],
                        ),//Title
                        SizedBox(
                          height: 20,
                        ),
                        Row(
                          children: [
                            Expanded(
                                child: Container(
                                    child: Padding(
                                      padding: EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 0.0),
                                      child: Text(
                                        'Select The Site You Wish To Proceed...',
                                        style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 18,
                                            color: Colors.blueGrey),
                                      ),
                                    )
                                )
                            )
                          ],
                        ),
                        Divider(color: Colors.blue[900]),
                        SizedBox(
                          height: 20,
                        ),
                        Row(
                          children: [
                            Expanded(
                                child: Container(
                                  child: Padding(
                                    padding: EdgeInsets.fromLTRB(0.0, 0.0, 0.0, 0.0),
                                    child:  ListView.separated(
                                      padding: const EdgeInsets.all(0),
                                      shrinkWrap: true,
                                      itemCount: managerSite!.data[0].sites.length,
                                      itemBuilder: (BuildContext context, int index) {
                                        return Container(
                                          height: 100,
                                          child: Card(
                                            child: InkWell(
                                              splashColor: Colors.blue.withAlpha(30),
                                              onTap: () {
                                                print('Card tapped.');
                                              },
                                              child: Row(
                                                children: [
                                                  Expanded(
                                                    flex: 1,
                                                      child: Container(
                                                        child: Image.network('https://picsum.photos/250?image=9'),
                                                      )
                                                  ),
                                                  Expanded(
                                                    flex: 3,
                                                      child: Container(
                                                        child: Padding(
                                                          padding: EdgeInsets.fromLTRB(15.0, 15.0, 10.0, 5.0),
                                                          child: Column(
                                                        children: [
                                                        Row(
                                                        children: [
                                                            Expanded(
                                                            child: Container(
                                                            child: Text(
                                                              managerSite!.data[0].sites[index].siteName.toString(),
                                                              style: TextStyle(
                                                                  fontWeight: FontWeight.bold,
                                                                  fontSize: 20,
                                                                  color: Colors.black),

                                                        ),
                                                      )
                                                  )
                                                ],
                                              ),
                                              Row(
                                                children: [
                                                  Expanded(
                                                      child: Container(
                                                        child: Text(
                                                            managerSite!.data[0].sites[index].location.toString(),
                                                          style: TextStyle(
                                                              fontWeight: FontWeight.bold,
                                                              fontSize: 18,
                                                              color: Colors.blueGrey),
                                                        ),
                                                      )
                                                  )
                                                ],
                                              ),
                                              Row(
                                                children: [
                                                  Expanded(
                                                      child: Container(
                                                        child: Text(
                                                          managerSite!.data[0].sites[index].address.toString(),
                                                          style: TextStyle(
                                                              fontSize: 15,
                                                              color: Colors.blueGrey),
                                                        ),
                                                      )
                                                  )
                                                ],
                                              ),
                                              ],
                                            ),
                                                        ),
                                                      )
                                                  ),
                                                ],
                                              ),
                                              ),
                                            ),
                                        );
                                      },
                                      separatorBuilder: (BuildContext context, int index) => const Divider(),
                                    ),
                                  ),
                                )
                            )
                          ],
                        )
                      ],
                    ),
                  ),
                ));
              }
              return Center(
                child: CircularProgressIndicator(),
              );
            }
        )
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
