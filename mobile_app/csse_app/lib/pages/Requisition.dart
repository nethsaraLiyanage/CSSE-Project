import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class Requisition extends StatelessWidget {
  Requisition({Key? key}) : super(key: key);
  final TextEditingController _Datecontroller = TextEditingController();
  DateTime _requestDateDate = DateTime.now();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
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
              space10(),
              Row(
                children: [
                  Expanded(
                      child: Container(
                        child: Padding(
                          padding: EdgeInsets.fromLTRB(10.0, 0.0, 10.0, 0.0),
                          child: Text(
                            'Request Date',
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
                              borderSide: BorderSide(color: Colors.blue, width: 3.0),
                              borderRadius: BorderRadius.circular(20)
                          ),

                          enabledBorder: OutlineInputBorder(
                              borderSide: BorderSide(color: Colors.blue, width: 3.0),
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
                      rows: [
                        DataRow(
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
                                                child: Text('HR258', style: TextStyle(fontSize: 12)),
                                              )
                                          )
                                        ],
                                      ),
                                      Row(
                                        children: [
                                          Expanded(
                                              child: Container(
                                                child: Text('Sample Item  111', style: TextStyle(fontSize: 15 , fontWeight: FontWeight.bold)),
                                              )
                                          )
                                        ],
                                      )
                                    ],
                                  ),
                                )
                            ),
                            DataCell(Text('100', style: TextStyle(fontSize: 14))),
                            DataCell(Text('13256.00', style: TextStyle(fontSize: 14))),
                          ],

                        ),
                        DataRow(
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
                                                child: Text('HR258', style: TextStyle(fontSize: 12)),
                                              )
                                          )
                                        ],
                                      ),
                                      Row(
                                        children: [
                                          Expanded(
                                              child: Container(
                                                child: Text('Sample Item  111', style: TextStyle(fontSize: 15 , fontWeight: FontWeight.bold)),
                                              )
                                          )
                                        ],
                                      )
                                    ],
                                  ),
                                )
                            ),
                            DataCell(Text('100', style: TextStyle(fontSize: 14))),
                            DataCell(Text('13256.00', style: TextStyle(fontSize: 14))),
                          ],

                        ),
                      ],
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
                            onPressed: () {},
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
              space10(),
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
              space10(),
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