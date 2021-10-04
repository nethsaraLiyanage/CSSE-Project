
import 'dart:convert';
import 'dart:developer';

import 'package:csse_app/models/ItemsModel.dart';
import 'package:csse_app/models/PurchaseOrderItemsQtyModel.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:http/http.dart' as http;


class Requisition extends StatefulWidget {
  Requisition({Key? key}) : super(key: key);

  @override
  _RequisitionState createState() => _RequisitionState();
}

class _RequisitionState extends State<Requisition> {
  final TextEditingController _Datecontroller = TextEditingController();
  final siteController = TextEditingController();
  final managerController = TextEditingController();



  Future<List<ItemsModel>> fetchItemsList() async {
    final response = await http.get(Uri.parse('http://10.0.2.2:8090/item/allItems'));

    if (response.statusCode == 200) {
      List<dynamic> body = jsonDecode(response.body);

      List<ItemsModel> Items = body
          .map((dynamic item) => ItemsModel.fromJson(item))
          .toList();

      return Items;
    } else {
      debugPrint('error');
      log('cant fecth data');
      throw "cant get products";
    }
  }

  DateTime _requestDateDate = DateTime.now();
  int? _currentSelectedValue;
  List<PurchaseOrderItemsQtyModel> selectedItemsList = [];
  int? _itemsQuantity = 0;
  int? _totalPrice = 0;

  void createSelectList(ItemsModel selectedItem){
    int item_Id = selectedItem.itemNo;
    int quantity = _itemsQuantity!;
    int price = quantity * selectedItem.estimatedUnitPrice;
    PurchaseOrderItemsQtyModel processedItem = PurchaseOrderItemsQtyModel(itemNo: item_Id, itemName: selectedItem.itemName,quantity: quantity, Price: price);
    setState(() {
      selectedItemsList.add(processedItem);
    });
    _totalPrice = (_totalPrice! + price)!;
    debugPrint(selectedItemsList.length.toString());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
        future: fetchItemsList(),
        builder: (BuildContext context , AsyncSnapshot<List<ItemsModel>> snapshot){
          List<ItemsModel>? itrmsList = snapshot.data;
          debugPrint(itrmsList.toString());
          if(snapshot.hasData){
            _currentSelectedValue = itrmsList![0].itemNo;
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
                                  'Requisition',
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
                    space10(),
                    Divider(color: Colors.blue[900]),
                    space10(),
                    Row(
                      children: [
                        Expanded(
                            child: Container(
                                child: Padding(
                                  padding: EdgeInsets.fromLTRB(10.0, 0.0, 10.0, 0.0),
                                  child: Text(
                                    'Site Name',
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 18,
                                        color: Colors.black),
                                  ),
                                )
                            )
                        )
                      ],
                    ),
                    Row(
                      children: [
                        Expanded(
                          child: Padding(
                            padding: EdgeInsets.fromLTRB(10.0, 5.0, 10.0, 5.0),
                            child: TextFormField(
                              controller: siteController,
                              // The validator receives the text that the user has entered.
                              validator: (value) {
                                if (value == null || value.isEmpty) {
                                  return 'Please enter some text';
                                }
                                return null;
                              },
                              decoration: new InputDecoration(
                                contentPadding: EdgeInsets.fromLTRB(30.0, 0.0, 0.0, 10.0),
                                focusedBorder: OutlineInputBorder(
                                    borderSide: BorderSide(color: Colors.blue, width: 2.0),
                                    borderRadius: BorderRadius.circular(20)
                                ),
                                enabledBorder: OutlineInputBorder(
                                    borderSide: BorderSide(color: Colors.blue, width: 2.0),
                                    borderRadius: BorderRadius.circular(20)
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    space10(),
                    Row(
                      children: [
                        Expanded(
                            child: Container(
                                child: Padding(
                                  padding: EdgeInsets.fromLTRB(10.0, 0.0, 10.0, 0.0),
                                  child: Text(
                                    'Site Manager',
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 18,
                                        color: Colors.black),
                                  ),
                                )
                            )
                        )
                      ],
                    ),
                    Row(
                      children: [
                        Expanded(
                          child: Padding(
                            padding: EdgeInsets.fromLTRB(10.0, 5.0, 10.0, 5.0),
                            child: TextFormField(
                              controller: managerController,
                              // The validator receives the text that the user has entered.
                              validator: (value) {
                                if (value == null || value.isEmpty) {
                                  return 'Please enter some text';
                                }
                                return null;
                              },
                              decoration: new InputDecoration(
                                contentPadding: EdgeInsets.fromLTRB(30.0, 0.0, 0.0, 10.0),
                                focusedBorder: OutlineInputBorder(
                                    borderSide: BorderSide(color: Colors.blue, width: 2.0),
                                    borderRadius: BorderRadius.circular(20)
                                ),
                                enabledBorder: OutlineInputBorder(
                                    borderSide: BorderSide(color: Colors.blue, width: 2.0),
                                    borderRadius: BorderRadius.circular(20)
                                ),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    space10(),
                    Row(
                      children: [
                        Expanded(
                            child: Container(
                                child: Padding(
                                  padding: EdgeInsets.fromLTRB(10.0, 0.0, 10.0, 0.0),
                                  child: Text(
                                    'Required Date',
                                    style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 18,
                                        color: Colors.black),
                                  ),
                                )
                            )
                        )
                      ],
                    ),
                    Row(
                      children: [
                        Expanded(
                          child: Padding(
                            padding: EdgeInsets.fromLTRB(10.0, 5.0, 10.0, 5.0),
                            child: TextFormField(
                              controller: _Datecontroller,
                              // The validator receives the text that the user has entered.
                              validator: (value) {
                                if (value == null || value.isEmpty) {
                                  return 'Please Enter the request date';
                                }
                                return null;
                              },
                              decoration: new InputDecoration(
                                contentPadding: EdgeInsets.fromLTRB(30.0, 0.0, 0.0, 10.0),
                                focusedBorder: OutlineInputBorder(
                                    borderSide: BorderSide(color: Colors.blue, width: 2.0),
                                    borderRadius: BorderRadius.circular(20)
                                ),

                                enabledBorder: OutlineInputBorder(
                                    borderSide: BorderSide(color: Colors.blue, width: 2.0),
                                    borderRadius: BorderRadius.circular(20)
                                ),
                                suffixIcon: IconButton(
                                  onPressed: (){},
                                  icon: Icon(Icons.calendar_today),
                                ),
                              ),
                              readOnly: true,
                              onTap: () async {
                                final date = await showDatePicker(
                                    context: context,
                                    firstDate: DateTime(1960),
                                    initialDate: DateTime.now(),
                                    lastDate: DateTime(2100));
                                if (date != null) {
                                  _requestDateDate = date;
                                  _Datecontroller
                                    ..text = DateFormat.yMMMd().format(_requestDateDate)
                                    ..selection = TextSelection.fromPosition(TextPosition(
                                        offset: _Datecontroller.text.length,
                                        affinity: TextAffinity.upstream));
                                }
                              },

                            ),
                          ),
                        ),
                      ],
                    ),
                    space10(),
                    Container(
                      child: Center(
                        child: DataTable(
                            headingRowColor: MaterialStateColor.resolveWith((states) {return Colors.amberAccent;},),
                            columns: [
                              DataColumn(
                                  label: Text('Item',
                                      style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold))),
                              DataColumn(
                                  label: Text('Quantity',
                                      style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold))),
                              DataColumn(
                                  label: Text('Price',
                                      style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold))),

                            ],
                            rows: selectedItemsList.map((e) {
                              return DataRow(
                                cells: [
                                  DataCell(
                                      Padding(
                                        padding: EdgeInsets.fromLTRB(0.0, 10.0, 0.0, 10.0),
                                        child: Column(
                                            children: [
                                              Row(
                                                children: [
                                                  Expanded(
                                                      child: Container(
                                                        child: Text(e.itemNo.toString(), style: TextStyle(fontSize: 12)),
                                                      )
                                                  )
                                                ],
                                              ),
                                              Row(
                                                children: [
                                                  Expanded(
                                                      child: Container(
                                                        child: Text(e.itemName, style: TextStyle(fontSize: 15 , fontWeight: FontWeight.bold)),
                                                      )
                                                  )
                                                ],
                                              )
                                            ]
                                        ),
                                      )
                                  ),
                                  DataCell(Text(e.quantity.toString(), style: TextStyle(fontSize: 14))),
                                  DataCell(Text(e.Price.toString(), style: TextStyle(fontSize: 14))),
                                ],

                              );

                            }).toList() ,
                            dataRowHeight: 55,
                            columnSpacing: 40.0
                        ),
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
                                    borderRadius: BorderRadius.circular(25.0),
                                  ),
                                  side: BorderSide(
                                      width: 2,
                                      color: Colors.blue
                                  ),
                                  padding: EdgeInsets.fromLTRB(100, 0, 100, 0),
                                ),
                                onPressed: () {
                                  showDialog(
                                    context: context,
                                    builder: (context) {
                                      return StatefulBuilder(
                                          builder: (context , setState){
                                            List<ItemsModel> currentItem;
                                            return Dialog(
                                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                                              elevation: 16,
                                              child: Padding(
                                                padding: EdgeInsets.fromLTRB(10.0, 30.0, 10.0, 30.0),
                                                child: SingleChildScrollView(
                                                  scrollDirection: Axis.vertical,
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
                                                                        fontWeight: FontWeight.bold,
                                                                        fontSize: 30,
                                                                        color: Colors.blueGrey
                                                                    ),
                                                                  ),
                                                                ),
                                                              )
                                                          )
                                                        ],
                                                      ),
                                                      SizedBox(height: 10,),
                                                      Divider(color: Colors.blue[900] ,),
                                                      SizedBox(height: 10,),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                              child: Container(
                                                                  child: Padding(
                                                                    padding: EdgeInsets.fromLTRB(10.0, 0.0, 10.0, 0.0),
                                                                    child: Text(
                                                                      'Item',
                                                                      style: TextStyle(
                                                                          fontWeight: FontWeight.bold,
                                                                          fontSize: 18,
                                                                          color: Colors.black),
                                                                    ),
                                                                  )
                                                              )
                                                          )
                                                        ],
                                                      ),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                            child: Padding(
                                                                padding: EdgeInsets.fromLTRB(10.0, 5.0, 10.0, 5.0),
                                                                child:  FormField<String>(
                                                                  builder: (FormFieldState<String> state) {
                                                                    return InputDecorator(
                                                                      decoration: InputDecoration(
                                                                        contentPadding: EdgeInsets.fromLTRB(30.0, 0.0, 30.0, 0.0),
                                                                        enabledBorder: OutlineInputBorder(
                                                                            borderSide: BorderSide(color: Colors.blue, width: 3.0),
                                                                            borderRadius: BorderRadius.circular(20)
                                                                        ),
                                                                      ),
                                                                      child: DropdownButtonHideUnderline(
                                                                        child: DropdownButton(
                                                                          isExpanded: true,
                                                                          //hint: Text("Status"),
                                                                          value: _currentSelectedValue,
                                                                          elevation: 6,
                                                                          onChanged: (int? newValue) {
                                                                            setState(() {
                                                                              _currentSelectedValue = newValue!;
                                                                            });
                                                                          },
                                                                          items: List.generate(
                                                                            itrmsList!.length,
                                                                                (index) => DropdownMenuItem(
                                                                              child: Padding(
                                                                                padding: const EdgeInsets.fromLTRB(1.0, 1.0, 1.0, 1.0),
                                                                                child: Text(
                                                                                    itrmsList[index].itemName
                                                                                ),
                                                                              ),
                                                                              value: itrmsList[index].itemNo
                                                                            ),
                                                                          ),
                                                                        ),
                                                                      ),
                                                                    );
                                                                  },
                                                                )
                                                            ),
                                                          ),
                                                        ],
                                                      ),
                                                      space10(),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                              child: Container(
                                                                  child: Padding(
                                                                    padding: EdgeInsets.fromLTRB(10.0, 0.0, 10.0, 0.0),
                                                                    child: Text(
                                                                      'quantity',
                                                                      style: TextStyle(
                                                                          fontWeight: FontWeight.bold,
                                                                          fontSize: 18,
                                                                          color: Colors.black),
                                                                    ),
                                                                  )
                                                              )
                                                          )
                                                        ],
                                                      ),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                            child: Padding(
                                                              padding: EdgeInsets.fromLTRB(10.0, 5.0, 10.0, 5.0),
                                                              child: TextFormField(
                                                                // The validator receives the text that the user has entered.
                                                                validator: (value) {
                                                                  if (value == null || value.isEmpty) {
                                                                    return 'Please enter the quantity';
                                                                  }
                                                                  return null;
                                                                },
                                                                decoration: new InputDecoration(
                                                                  contentPadding: EdgeInsets.fromLTRB(30.0, 0.0, 0.0, 10.0),
                                                                  focusedBorder: OutlineInputBorder(
                                                                      borderSide: BorderSide(color: Colors.blue, width: 3.0),
                                                                      borderRadius: BorderRadius.circular(20)
                                                                  ),
                                                                  enabledBorder: OutlineInputBorder(
                                                                      borderSide: BorderSide(color: Colors.blue, width: 3.0),
                                                                      borderRadius: BorderRadius.circular(20)
                                                                  ),
                                                                ),
                                                              ),
                                                            ),
                                                          ),
                                                        ],
                                                      ),
                                                      SizedBox(height: 20,),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                              child: Container(
                                                                  child: Padding(
                                                                    padding:EdgeInsets.fromLTRB(40, 0.0, 40, 0.0),
                                                                    child: TextButton(
                                                                      child: Text(
                                                                        'Add',
                                                                        style: TextStyle(
                                                                            fontWeight: FontWeight.bold,
                                                                            fontSize: 18
                                                                        ),
                                                                      ),
                                                                      style: ButtonStyle(
                                                                          padding: MaterialStateProperty.all<EdgeInsets>(
                                                                              EdgeInsets.fromLTRB(15.0, 15.0, 15.0, 15.0)),
                                                                          foregroundColor:
                                                                          MaterialStateProperty.all<Color>(Colors.white),
                                                                          backgroundColor:
                                                                          MaterialStateProperty.all(Colors.green),
                                                                          shape:
                                                                          MaterialStateProperty.all<RoundedRectangleBorder>(
                                                                              RoundedRectangleBorder(
                                                                                  borderRadius: BorderRadius.circular(18.0),
                                                                                  side: BorderSide(color: Colors.green)))),
                                                                      onPressed: () => {
                                                                        currentItem = itrmsList.where((f) => f.itemNo == _currentSelectedValue).toList(),
                                                                        createSelectList(currentItem[0])
                                                                      },
                                                                    ),
                                                                  )
                                                              )
                                                          )
                                                        ],
                                                      ),
                                                      SizedBox(height: 20,),
                                                      Row(
                                                        children: [
                                                          Expanded(
                                                              child: Container(
                                                                child: Padding(
                                                                  padding: EdgeInsets.fromLTRB(40, 0.0, 40, 0.0),
                                                                  child: TextButton(
                                                                    child: Text(
                                                                      'Cancel',
                                                                      style: TextStyle(
                                                                          fontWeight: FontWeight.bold,
                                                                          fontSize: 18
                                                                      ),
                                                                    ),
                                                                    style: ButtonStyle(
                                                                        padding: MaterialStateProperty.all<EdgeInsets>(
                                                                            EdgeInsets.fromLTRB(15.0, 15.0, 15.0, 15.0)),
                                                                        foregroundColor:
                                                                        MaterialStateProperty.all<Color>(Colors.white),
                                                                        backgroundColor:
                                                                        MaterialStateProperty.all(Colors.red),
                                                                        shape:
                                                                        MaterialStateProperty.all<RoundedRectangleBorder>(
                                                                            RoundedRectangleBorder(
                                                                                borderRadius: BorderRadius.circular(18.0),
                                                                                side: BorderSide(color: Colors.red)))),
                                                                    onPressed: () => {Navigator.of(context, rootNavigator: true).pop()},
                                                                  ),
                                                                ),
                                                              )
                                                          )
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
                                child: Text(
                                    'Add More',
                                    style: TextStyle(
                                        fontSize: 18,
                                        fontWeight: FontWeight.bold,
                                        color: Colors.blue
                                    )
                                ),
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
                          child: Container(
                            child: Center(
                              child: Text(
                                'Total : 2586458.00',
                                style: TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontSize: 25,
                                    color: Colors.black),
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
                            onPressed: () => {Navigator.pushNamed(context, '/dash')},
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
                                padding: MaterialStateProperty.all<EdgeInsets>(
                                    EdgeInsets.all(15)),
                                foregroundColor:
                                MaterialStateProperty.all<Color>(Colors.white),
                                backgroundColor:
                                MaterialStateProperty.all(Colors.red),
                                shape:
                                MaterialStateProperty.all<RoundedRectangleBorder>(
                                    RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(18.0),
                                        side: BorderSide(color: Colors.red)))),
                            onPressed: () => {Navigator.pushNamed(context, '/dash')},
                          ),
                        )
                      ],
                    ),
                    space10(),
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
