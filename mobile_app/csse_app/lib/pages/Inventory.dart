import 'dart:convert';
import 'dart:developer';
import 'dart:io';

import 'package:csse_app/models/InventoryItems.dart';
import 'package:csse_app/models/ItemsModel.dart';
import 'package:csse_app/models/PurchaseOrderItemsQtyModel.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:material_dialogs/material_dialogs.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Inventory extends StatefulWidget {
  Inventory({Key? key}) : super(key: key);

  @override
  State<Inventory> createState() => _InventoryState();
}

class _InventoryState extends State<Inventory> {
  final TextEditingController _Datecontroller = TextEditingController();

  final siteController = TextEditingController();

  final managerController = TextEditingController();

  final thresholdController = TextEditingController();

  String? username = '';
  String? email = '';
  int? id = 0;
  String? selected_Site_Name = '';
  int? selected_Site_Id ;

  List<PurchaseOrderItemsQtyModel> selectedItemsList = [];

  int? _currentSelectedValue;

  Future<List<ItemsModel>> fetchItemsList() async {
    final response =
        await http.get(Uri.parse('http://10.0.2.2:8090/item/allItems'));

    if (response.statusCode == 200) {
      List<dynamic> body = jsonDecode(response.body);

      List<ItemsModel> Items =
          body.map((dynamic item) => ItemsModel.fromJson(item)).toList();

      return Items;
    } else {
      debugPrint('error');
      log('cant fecth data');
      throw "cant get products";
    }
  }

  Future<InventoryItems> fetchInventoryItems() async {
    final response =
        await http.get(Uri.parse('http://10.0.2.2:8090/item/ItemsBySite/1'));

    if (response.statusCode == 200) {
      dynamic body = jsonDecode(response.body);
      final InventoryItems inventory = InventoryItems.fromJson(body);

      return inventory;
    } else {
      debugPrint('error');
      log('cant fecth data');
      throw "cant get products";
    }
  }

  Future<bool> AddInventoryItem() async {
    final String apiUrl = "http://10.0.2.2:8090/inventory/addItem";
    final bodyData = jsonEncode(
        {
          "selected_Site_Id": selected_Site_Id,
          "item_No": _currentSelectedValue,
          "threshold": thresholdController.text,
        });

    final response = await http.post(Uri.parse(apiUrl),
        body: bodyData,
        headers: {HttpHeaders.contentTypeHeader: 'application/json'});

    debugPrint(response.body);

    if (response.statusCode == 200) {
      final String responseString = response.body;

      return true;
    }
    else {
      return false;
    }
  }

  static _getSiteId() async {
    final prefs = await SharedPreferences.getInstance();
    final value = prefs.getInt('selected_Site_Id');
    int SiteId = value!;
    return SiteId;

  }
  static _getSiteName() async {
    final prefs = await SharedPreferences.getInstance();
    final value = prefs.getString('selected_Site_Name');
    String SiteName = value!;
    return SiteName;

  }
  static _getManagerName() async {
    final prefs = await SharedPreferences.getInstance();
    final value = prefs.getString('username');
    String ManagerName = value!;
    return ManagerName;

  }

  // void createSelectList(ItemsModel selectedItem) {
  //   int item_Id = selectedItem.itemNo;
  //   debugPrint(thresholdController.text);
  //   int quantity = int.parse(thresholdController.text);
  //   int price = quantity * selectedItem.estimatedUnitPrice;
  //   PurchaseOrderItemsQtyModel processedItem = PurchaseOrderItemsQtyModel(
  //       itemNo: item_Id,
  //       itemName: selectedItem.itemName,
  //       quantity: quantity,
  //       Price: price);
  //   setState(() {
  //     selectedItemsList.add(processedItem);
  //   });
  //   debugPrint(selectedItemsList.length.toString());
  // }

  @override
  void initState() {
    super.initState();
    _getSiteId();
    _getSiteName();
    _getManagerName();

    WidgetsBinding.instance!.addPostFrameCallback((_) async {
      siteController.text = await _getSiteName();
      managerController.text = await _getManagerName();
      selected_Site_Id = await _getSiteId();
    });
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: FutureBuilder(
            future: Future.wait([fetchItemsList(), fetchInventoryItems()]),
            builder:
                (BuildContext context, AsyncSnapshot<List<dynamic>> snapshot) {
              List<ItemsModel>? itrmsList = snapshot.data![0];
              InventoryItems? InventoryItemsList = snapshot.data![1];
              if (snapshot.hasData) {
                _currentSelectedValue = itrmsList![0].itemNo;
                return Padding(
                  padding: const EdgeInsets.fromLTRB(20.0, 50.0, 20.0, 50.0),
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
                        ),
                        Text(
                          'Inventory (' + siteController.text +')',
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
                                            side: BorderSide(
                                                color: Colors.red)))),
                                onPressed: () =>
                                    {Navigator.pushNamed(context, '/dash')},
                              ),
                            )
                          ],
                        ),
                        space10(),
                        SingleChildScrollView(
                          scrollDirection: Axis.horizontal,
                          child: Row(
                            children: [
                              DataTable(
                                  headingRowColor:
                                      MaterialStateColor.resolveWith(
                                    (states) {
                                      return Colors.amberAccent;
                                    },
                                  ),
                                  columns: [
                                    DataColumn(
                                        label: Text('Item',
                                            style: TextStyle(
                                                fontSize: 16,
                                                fontWeight: FontWeight.bold))),
                                    DataColumn(
                                        label: Text('Remaining \n Qty',
                                            style: TextStyle(
                                                fontSize: 16,
                                                fontWeight: FontWeight.bold))),
                                    DataColumn(
                                        label: Text('Threshold',
                                            style: TextStyle(
                                                fontSize: 16,
                                                fontWeight: FontWeight.bold))),
                                  ],
                                  rows: InventoryItemsList!.data.inventories.map((e) {
                                    return DataRow(
                                      cells: [
                                        DataCell(Padding(
                                          padding: EdgeInsets.fromLTRB(
                                              0.0, 10.0, 0.0, 10.0),
                                          child: Column(children: [
                                            Row(
                                              children: [
                                                Expanded(
                                                    child: Container(
                                                  child: Text(e.itemNo.toString(),
                                                      style: TextStyle(
                                                          fontSize: 12)),
                                                ))
                                              ],
                                            ),
                                            Row(
                                              children: [
                                                Expanded(
                                                    child: Container(
                                                  child: Text(e.itemNoItem.itemName.toString(),
                                                      style: TextStyle(
                                                          fontSize: 15,
                                                          fontWeight:
                                                              FontWeight.bold)),
                                                ))
                                              ],
                                            )
                                          ]),
                                        )),
                                        DataCell(Text(e.remainingQty.toString(),
                                            style: TextStyle(fontSize: 14))),
                                        DataCell(Text(e.threshold.toString(),
                                            style: TextStyle(fontSize: 14))),
                                      ],
                                    );
                                  }).toList(),
                                  dataRowHeight: 55,
                                  columnSpacing: 40.0),
                            ],
                          ),
                        ),
                        space10(),
                        Row(
                          children: [
                            Expanded(
                              child: Container(
                                child: Center(
                                  child: OutlinedButton(
                                    style: OutlinedButton.styleFrom(
                                      shape: RoundedRectangleBorder(
                                        borderRadius:
                                            BorderRadius.circular(25.0),
                                      ),
                                      side: BorderSide(
                                          width: 2, color: Colors.blue),
                                      padding:
                                          EdgeInsets.fromLTRB(100, 0, 100, 0),
                                    ),
                                    onPressed: () {
                                      showDialog(
                                        context: context,
                                        builder: (context) {
                                          return StatefulBuilder(
                                              builder: (context, setState) {
                                            List<ItemsModel> currentItem;
                                            return Dialog(
                                              shape: RoundedRectangleBorder(
                                                  borderRadius:
                                                      BorderRadius.circular(
                                                          20)),
                                              elevation: 16,
                                              child: Padding(
                                                padding: EdgeInsets.fromLTRB(
                                                    10.0, 30.0, 10.0, 30.0),
                                                child: SingleChildScrollView(
                                                  scrollDirection:
                                                      Axis.vertical,
                                                  child: Column(
                                                    children: [
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                              child: Container(
                                                            child: Center(
                                                              child: Text(
                                                                'Add Item',
                                                                style: TextStyle(
                                                                    fontWeight:
                                                                        FontWeight
                                                                            .bold,
                                                                    fontSize:
                                                                        30,
                                                                    color: Colors
                                                                        .blueGrey),
                                                              ),
                                                            ),
                                                          ))
                                                        ],
                                                      ),
                                                      SizedBox(
                                                        height: 10,
                                                      ),
                                                      Divider(
                                                        color: Colors.blue[900],
                                                      ),
                                                      SizedBox(
                                                        height: 10,
                                                      ),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                              child: Container(
                                                                  child:
                                                                      Padding(
                                                            padding: EdgeInsets
                                                                .fromLTRB(
                                                                    10.0,
                                                                    0.0,
                                                                    10.0,
                                                                    0.0),
                                                            child: Text(
                                                              'Item',
                                                              style: TextStyle(
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .bold,
                                                                  fontSize: 18,
                                                                  color: Colors
                                                                      .black),
                                                            ),
                                                          )))
                                                        ],
                                                      ),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                            child: Padding(
                                                                padding: EdgeInsets
                                                                    .fromLTRB(
                                                                        10.0,
                                                                        5.0,
                                                                        10.0,
                                                                        5.0),
                                                                child:
                                                                    FormField<
                                                                        String>(
                                                                  builder: (FormFieldState<
                                                                          String>
                                                                      state) {
                                                                    return InputDecorator(
                                                                      decoration:
                                                                          InputDecoration(
                                                                        contentPadding: EdgeInsets.fromLTRB(
                                                                            30.0,
                                                                            0.0,
                                                                            30.0,
                                                                            0.0),
                                                                        enabledBorder: OutlineInputBorder(
                                                                            borderSide:
                                                                                BorderSide(color: Colors.blue, width: 3.0),
                                                                            borderRadius: BorderRadius.circular(20)),
                                                                      ),
                                                                      child:
                                                                          DropdownButtonHideUnderline(
                                                                        child:
                                                                            DropdownButton(
                                                                          isExpanded:
                                                                              true,
                                                                          //hint: Text("Status"),
                                                                          value:
                                                                              _currentSelectedValue,
                                                                          elevation:
                                                                              6,
                                                                          onChanged:
                                                                              (int? newValue) {
                                                                            setState(() {
                                                                              _currentSelectedValue = newValue!;
                                                                            });
                                                                          },
                                                                          items:
                                                                              List.generate(
                                                                            itrmsList.length,
                                                                            (index) => DropdownMenuItem(
                                                                                child: Padding(
                                                                                  padding: const EdgeInsets.fromLTRB(1.0, 1.0, 1.0, 1.0),
                                                                                  child: Text(itrmsList[index].itemName),
                                                                                ),
                                                                                value: itrmsList[index].itemNo),
                                                                          ),
                                                                        ),
                                                                      ),
                                                                    );
                                                                  },
                                                                )),
                                                          ),
                                                        ],
                                                      ),
                                                      space10(),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                              child: Container(
                                                                  child:
                                                                      Padding(
                                                            padding: EdgeInsets
                                                                .fromLTRB(
                                                                    10.0,
                                                                    0.0,
                                                                    10.0,
                                                                    0.0),
                                                            child: Text(
                                                              'Threshold',
                                                              style: TextStyle(
                                                                  fontWeight:
                                                                      FontWeight
                                                                          .bold,
                                                                  fontSize: 18,
                                                                  color: Colors
                                                                      .black),
                                                            ),
                                                          )))
                                                        ],
                                                      ),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                            child: Padding(
                                                              padding:
                                                                  EdgeInsets
                                                                      .fromLTRB(
                                                                          10.0,
                                                                          5.0,
                                                                          10.0,
                                                                          5.0),
                                                              child:
                                                                  TextFormField(
                                                                controller:
                                                                    thresholdController,
                                                                // The validator receives the text that the user has entered.
                                                                validator:
                                                                    (value) {
                                                                  if (value ==
                                                                          null ||
                                                                      value
                                                                          .isEmpty) {
                                                                    return 'Please enter the quantity';
                                                                  }
                                                                  return null;
                                                                },
                                                                decoration:
                                                                    new InputDecoration(
                                                                  contentPadding:
                                                                      EdgeInsets.fromLTRB(
                                                                          30.0,
                                                                          0.0,
                                                                          0.0,
                                                                          10.0),
                                                                  focusedBorder: OutlineInputBorder(
                                                                      borderSide: BorderSide(
                                                                          color: Colors
                                                                              .blue,
                                                                          width:
                                                                              3.0),
                                                                      borderRadius:
                                                                          BorderRadius.circular(
                                                                              20)),
                                                                  enabledBorder: OutlineInputBorder(
                                                                      borderSide: BorderSide(
                                                                          color: Colors
                                                                              .blue,
                                                                          width:
                                                                              3.0),
                                                                      borderRadius:
                                                                          BorderRadius.circular(
                                                                              20)),
                                                                ),
                                                              ),
                                                            ),
                                                          ),
                                                        ],
                                                      ),
                                                      SizedBox(
                                                        height: 20,
                                                      ),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                              child: Container(
                                                                  child:
                                                                      Padding(
                                                            padding: EdgeInsets
                                                                .fromLTRB(
                                                                    40,
                                                                    0.0,
                                                                    40,
                                                                    0.0),
                                                            child: TextButton(
                                                              child: Text(
                                                                'Add',
                                                                style: TextStyle(
                                                                    fontWeight:
                                                                        FontWeight
                                                                            .bold,
                                                                    fontSize:
                                                                        18),
                                                              ),
                                                              style: ButtonStyle(
                                                                  padding: MaterialStateProperty.all<EdgeInsets>(
                                                                      EdgeInsets.fromLTRB(
                                                                          15.0,
                                                                          15.0,
                                                                          15.0,
                                                                          15.0)),
                                                                  foregroundColor:
                                                                      MaterialStateProperty.all<Color>(Colors
                                                                          .white),
                                                                  backgroundColor:
                                                                      MaterialStateProperty.all(Colors
                                                                          .green),
                                                                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                                                                      RoundedRectangleBorder(borderRadius: BorderRadius.circular(18.0), side: BorderSide(color: Colors.green)))),
                                                              onPressed: () async {
                                                                currentItem = itrmsList
                                                                    .where((f) => f.itemNo ==  _currentSelectedValue).toList();
                                                                Dialogs.bottomMaterialDialog(
                                                                    context: context,
                                                                    title: 'Your request is processing',
                                                                    lottieBuilder: Lottie.network(
                                                                        'https://assets1.lottiefiles.com/datafiles/bEYvzB8QfV3EM9a/data.json'));
                                                                      final bool? isSuccess = await AddInventoryItem();

                                                                      if(isSuccess!){
                                                                        Dialogs.bottomMaterialDialog(
                                                                            context: context,
                                                                            title: 'Item Added Successfully',
                                                                            lottieBuilder: Lottie.network(
                                                                                'https://assets5.lottiefiles.com/packages/lf20_tAtUrg.json'));
                                                                        sleep(Duration(seconds: 5));
                                                                        Future.delayed(const Duration(seconds: 3), () {
                                                                          Navigator.pop(context, false);
                                                                          Navigator.pushNamed(context, '/inventory');
                                                                        });
                                                                      }
                                                                      else{
                                                                        Dialogs.bottomMaterialDialog(
                                                                            context: context,
                                                                            title: 'Error! Inserting Item',
                                                                            lottieBuilder: Lottie.network(
                                                                                'https://assets5.lottiefiles.com/packages/lf20_yw3nyrsv.json'));
                                                                        sleep(Duration(seconds: 5));
                                                                        Future.delayed(const Duration(seconds: 3), () {
                                                                          Navigator.pop(context, false);
                                                                          Navigator.pushNamed(context, '/dash');
                                                                        });
                                                                      }
                                                              },
                                                            ),
                                                          )))
                                                        ],
                                                      ),
                                                      SizedBox(
                                                        height: 20,
                                                      ),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                              child: Container(
                                                            child: Padding(
                                                              padding:
                                                                  EdgeInsets
                                                                      .fromLTRB(
                                                                          40,
                                                                          0.0,
                                                                          40,
                                                                          0.0),
                                                              child: TextButton(
                                                                child: Text(
                                                                  'Cancel',
                                                                  style: TextStyle(
                                                                      fontWeight:
                                                                          FontWeight
                                                                              .bold,
                                                                      fontSize:
                                                                          18),
                                                                ),
                                                                style: ButtonStyle(
                                                                    padding: MaterialStateProperty.all<EdgeInsets>(
                                                                        EdgeInsets.fromLTRB(
                                                                            0.0,
                                                                            15.0,
                                                                            0.0,
                                                                            15.0)),
                                                                    foregroundColor:
                                                                        MaterialStateProperty.all<Color>(Colors
                                                                            .white),
                                                                    backgroundColor:
                                                                        MaterialStateProperty.all(Colors
                                                                            .red),
                                                                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                                                                        RoundedRectangleBorder(borderRadius: BorderRadius.circular(18.0), side: BorderSide(color: Colors.red)))),
                                                                onPressed: () =>
                                                                    {
                                                                  Navigator.of(
                                                                          context,
                                                                          rootNavigator:
                                                                              true)
                                                                      .pop()
                                                                },
                                                              ),
                                                            ),
                                                          ))
                                                        ],
                                                      ),
                                                      space10(),
                                                    ],
                                                  ),
                                                ),
                                              ),
                                            );
                                          });
                                        },
                                      );
                                    },
                                    child: Text('Add New Item ',
                                        style: TextStyle(
                                            fontSize: 18,
                                            fontWeight: FontWeight.bold,
                                            color: Colors.blue)),
                                  ),
                                ),
                              ),
                            )
                          ],
                        ),
                        SizedBox(height: 20,),
                        Row(
                          children: [
                            Expanded(
                              flex: 1,
                              child: TextButton(
                                child: Text('Make Request'),
                                style: ButtonStyle(
                                    padding: MaterialStateProperty.all<EdgeInsets>(
                                        EdgeInsets.all(15)),
                                    foregroundColor:
                                    MaterialStateProperty.all<Color>(Colors.white),
                                    backgroundColor:
                                    MaterialStateProperty.all(Colors.green),
                                    shape:
                                    MaterialStateProperty.all<RoundedRectangleBorder>(
                                        RoundedRectangleBorder(
                                            borderRadius: BorderRadius.circular(18.0),
                                            side: BorderSide(color: Colors.green)))),
                                onPressed: () async {
                                  Navigator.pop(context, false);
                                  Navigator.pushNamed(context, '/requisition');
                                },
                              ),
                            )
                          ],
                        ),
                        space10(),
                        Row(
                          children: [
                            Expanded(
                              flex: 1,
                              child: TextButton(
                                child: Text('Cancel'),
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
                                            side: BorderSide(
                                                color: Colors.red)))),
                                onPressed: () =>
                                    {Navigator.pushNamed(context, '/dash')},
                              ),
                            )
                          ],
                        ),
                        space10(),
                      ],
                    ),
                  ),
                );
              }
              return Center(
                child: CircularProgressIndicator(),
              );
            }));
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
