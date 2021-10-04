import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:intl/intl.dart';

class Logs extends StatefulWidget {
  Logs({Key? key}) : super(key: key);

  @override
  _LogsState createState() => _LogsState();
}

class _LogsState extends State<Logs> {
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
                        padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                        child: Text(
                          'Logs',
                          style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 30,
                              color: Colors.blueGrey,
                          ),
                        ),
                      )
                  )
                ],
              ),//Title
              space10(),
              Divider(color: Colors.blue[900]),
              space10(),
              SizedBox(height: 10.0),
              Row(
                  children: [
                    Expanded(
                        child: Padding(
                          padding: EdgeInsets.fromLTRB(5.0, 0.0, 5.0, 20.0),
                          child: Container(
                            child: Column(
                              children: [
                                Row(
                                  children: [
                                    Expanded(
                                        child: Container(
                                          padding: EdgeInsets.fromLTRB(10, 5.0, 10.0, 10.0),
                                          child: Text(
                                            'Previous Logs',
                                            textScaleFactor: 2,
                                            style: TextStyle(
                                                color: Colors.black,
                                              fontWeight: FontWeight.bold
                                            ),
                                          ),
                                        )
                                    )
                                  ],
                                ),
                                Container(
                                  height: 150,
                                  child: SingleChildScrollView(
                                    child: Column(
                                      children: <Widget>[
                                        Container(
                                          padding: EdgeInsets.fromLTRB(20.0, 5.0, 20.0, 5.0),
                                          child: Row(
                                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                            children: <Widget>[
                                              Expanded(
                                                  child: Container(
                                                    padding: EdgeInsets.fromLTRB(20, 10, 20, 10),
                                                    decoration: BoxDecoration(
                                                        border: Border.all(color: Colors.black54 , width: 3)
                                                    ),
                                                    child: Row(
                                                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                                        children: <Widget>[
                                                          Column(
                                                            crossAxisAlignment: CrossAxisAlignment.start,
                                                              children: [
                                                                Text(
                                                                    'SH052',
                                                                    style: TextStyle(
                                                                      fontSize: 16.0, fontWeight: FontWeight.bold,
                                                                      color: Colors.black,
                                                                    )
                                                                ),
                                                                Text(
                                                                    '08 Sep 2021',
                                                                    style: TextStyle(
                                                                      fontSize: 14.0,
                                                                      color: Colors.black,
                                                                    )
                                                                ),
                                                              ],
                                                          ),
                                                          Column(
                                                              children: [
                                                                Text(
                                                                    '23',
                                                                    style: TextStyle(
                                                                      fontSize: 16.0, fontWeight: FontWeight.bold,
                                                                      color: Colors.black,
                                                                    )
                                                                ),
                                                                Text(
                                                                    'Items',
                                                                    style: TextStyle(
                                                                      fontSize: 14.0,
                                                                      color: Colors.black,
                                                                    )
                                                                ),
                                                              ],
                                                          ),
                                                          Column(
                                                            children: [
                                                              Text(
                                                                  'Pending',
                                                                  style: TextStyle(
                                                                    fontSize: 16.0, fontWeight: FontWeight.bold,
                                                                    color: Colors.black54,
                                                                  )
                                                              ),
                                                              Text(
                                                                  'Status',
                                                                  style: TextStyle(
                                                                    fontSize: 14.0,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                            ],
                                                          ),
                                                        ]
                                                    ),
                                                  )
                                              )
                                            ],
                                          ),
                                        ),
                                        Container(
                                          padding: EdgeInsets.fromLTRB(20.0, 5.0, 20.0, 5.0),
                                          child: Row(
                                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                            children: <Widget>[
                                              Expanded(
                                                  child: Container(
                                                    padding: EdgeInsets.fromLTRB(20, 10, 20, 10),
                                                    decoration: BoxDecoration(
                                                        border: Border.all(color: Colors.blue , width: 3)
                                                    ),
                                                    child: Row(
                                                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                                        children: <Widget>[
                                                          Column(
                                                            crossAxisAlignment: CrossAxisAlignment.start,
                                                            children: [
                                                              Text(
                                                                  'SH052',
                                                                  style: TextStyle(
                                                                    fontSize: 16.0, fontWeight: FontWeight.bold,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                              Text(
                                                                  '08 Sep 2021',
                                                                  style: TextStyle(
                                                                    fontSize: 14.0,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                            ],
                                                          ),
                                                          Column(
                                                            children: [
                                                              Text(
                                                                  '23',
                                                                  style: TextStyle(
                                                                    fontSize: 16.0, fontWeight: FontWeight.bold,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                              Text(
                                                                  'Items',
                                                                  style: TextStyle(
                                                                    fontSize: 14.0,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                            ],
                                                          ),
                                                          Column(
                                                            children: [
                                                              Text(
                                                                  'Approved',
                                                                  style: TextStyle(
                                                                    fontSize: 16.0, fontWeight: FontWeight.bold,
                                                                    color: Colors.blue,
                                                                  )
                                                              ),
                                                              Text(
                                                                  'Status',
                                                                  style: TextStyle(
                                                                    fontSize: 14.0,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                            ],
                                                          ),
                                                        ]
                                                    ),
                                                  )
                                              )
                                            ],
                                          ),
                                        ),
                                        Container(
                                          padding: EdgeInsets.fromLTRB(20.0, 5.0, 20.0, 5.0),
                                          child: Row(
                                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                            children: <Widget>[
                                              Expanded(
                                                  child: Container(
                                                    padding: EdgeInsets.fromLTRB(20, 10, 20, 10),
                                                    decoration: BoxDecoration(
                                                        border: Border.all(color: Colors.red , width: 3)
                                                    ),
                                                    child: Row(
                                                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                                        children: <Widget>[
                                                          Column(
                                                            crossAxisAlignment: CrossAxisAlignment.start,
                                                            children: [
                                                              Text(
                                                                  'SH052',
                                                                  style: TextStyle(
                                                                    fontSize: 16.0, fontWeight: FontWeight.bold,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                              Text(
                                                                  '08 Sep 2021',
                                                                  style: TextStyle(
                                                                    fontSize: 14.0,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                            ],
                                                          ),
                                                          Column(
                                                            children: [
                                                              Text(
                                                                  '23',
                                                                  style: TextStyle(
                                                                    fontSize: 16.0, fontWeight: FontWeight.bold,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                              Text(
                                                                  'Items',
                                                                  style: TextStyle(
                                                                    fontSize: 14.0,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                            ],
                                                          ),
                                                          Column(
                                                            children: [
                                                              Text(
                                                                  'Returned',
                                                                  style: TextStyle(
                                                                    fontSize: 16.0, fontWeight: FontWeight.bold,
                                                                    color: Colors.red,
                                                                  )
                                                              ),
                                                              Text(
                                                                  'Status',
                                                                  style: TextStyle(
                                                                    fontSize: 14.0,
                                                                    color: Colors.black,
                                                                  )
                                                              ),
                                                            ],
                                                          ),
                                                        ]
                                                    ),
                                                  )
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
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(2),
                              color: Colors.white,
                              boxShadow: [
                                BoxShadow(color: Colors.black, spreadRadius: 1),
                              ],
                            ),
                            height: 200,
                          ),
                        )
                    )
                  ],

              ),//Previous Logs
              SizedBox(height: 15.0),
              Row(
                children: [
                  Expanded(
                      child: Container(
                        padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                        child: Text(
                          'Pending Goods Receipts',
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 30,
                            color: Colors.blueGrey,
                          ),
                        ),
                      )
                  )
                ],
              ),//Title
              space10(),
              Divider(color: Colors.blue[900]),
              Container(
                child: Center(
                  child: Card(
                    child: InkWell(
                      splashColor: Colors.blue.withAlpha(30),
                      onTap: () {
                        print('Card tapped.');
                      },
                      child: Container(
                        padding: EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0),
                        width: 350,
                        height: 350,
                        child: Column(
                          children: [
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'GR3625',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 22,
                                          color: Colors.blueGrey,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Divider(color: Colors.blue[900]),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Supplier Name',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                        'Dummy Supplier',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.blueGrey,
                                        ),
                                      ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Items Contain',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Item 001 , Item 002',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Item Count',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          '45',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Delivery Advise Note',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                          textAlign: TextAlign.right,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            SizedBox(
                              height: 15,
                            ),

                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: <Widget>[
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(20, 0, 40, 0),
                                      child: Row(
                                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                          children: <Widget>[
                                            ElevatedButton(
                                                style: ButtonStyle(
                                                  backgroundColor: MaterialStateProperty.all<Color>(Colors.blueAccent),
                                                ),
                                                onPressed: null,
                                                child: Padding(
                                                  padding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
                                                  child: Text(
                                                      'Accept',
                                                      style: TextStyle(
                                                        fontSize: 16.0, fontWeight: FontWeight.bold,
                                                        color: Colors.black,
                                                      )
                                                  ),
                                                )
                                            ),
                                            ElevatedButton(
                                                style: ButtonStyle(
                                                  backgroundColor: MaterialStateProperty.all<Color>(Colors.redAccent),
                                                ),
                                                onPressed: null,
                                                child: Padding(
                                                  padding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
                                                  child: Text(
                                                      'Return',
                                                      style: TextStyle(
                                                        fontSize: 16.0, fontWeight: FontWeight.bold,
                                                        color: Colors.black,
                                                      )
                                                  ),
                                                )
                                            ),
                                          ]
                                      ),
                                    )
                                )
                              ],
                            ),

                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),//Goods receipt Card
              Container(
                child: Center(
                  child: Card(
                    child: InkWell(
                      splashColor: Colors.blue.withAlpha(30),
                      onTap: () {
                        print('Card tapped.');
                      },
                      child: Container(
                        padding: EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0),
                        width: 350,
                        height: 350,
                        child: Column(
                          children: [
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'GR3625',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 22,
                                          color: Colors.blueGrey,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Divider(color: Colors.blue[900]),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Supplier Name',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Dummy Supplier',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Items Contain',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Item 001 , Item 002',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Item Count',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          '45',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Delivery Advise Note',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                          textAlign: TextAlign.right,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            SizedBox(
                              height: 15,
                            ),

                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: <Widget>[
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(20, 0, 40, 0),
                                      child: Row(
                                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                          children: <Widget>[
                                            ElevatedButton(
                                                style: ButtonStyle(
                                                  backgroundColor: MaterialStateProperty.all<Color>(Colors.blueAccent),
                                                ),
                                                onPressed: null,
                                                child: Padding(
                                                  padding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
                                                  child: Text(
                                                      'Accept',
                                                      style: TextStyle(
                                                        fontSize: 16.0, fontWeight: FontWeight.bold,
                                                        color: Colors.black,
                                                      )
                                                  ),
                                                )
                                            ),
                                            ElevatedButton(
                                                style: ButtonStyle(
                                                  backgroundColor: MaterialStateProperty.all<Color>(Colors.redAccent),
                                                ),
                                                onPressed: null,
                                                child: Padding(
                                                  padding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
                                                  child: Text(
                                                      'Return',
                                                      style: TextStyle(
                                                        fontSize: 16.0, fontWeight: FontWeight.bold,
                                                        color: Colors.black,
                                                      )
                                                  ),
                                                )
                                            ),
                                          ]
                                      ),
                                    )
                                )
                              ],
                            ),

                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),//Goods receipt Card
              Container(
                child: Center(
                  child: Card(
                    child: InkWell(
                      splashColor: Colors.blue.withAlpha(30),
                      onTap: () {
                        print('Card tapped.');
                      },
                      child: Container(
                        padding: EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0),
                        width: 350,
                        height: 350,
                        child: Column(
                          children: [
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'GR3625',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 22,
                                          color: Colors.blueGrey,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Divider(color: Colors.blue[900]),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Supplier Name',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Dummy Supplier',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Items Contain',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Item 001 , Item 002',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Item Count',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          '45',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Delivery Advise Note',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                          textAlign: TextAlign.right,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            SizedBox(
                              height: 15,
                            ),

                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: <Widget>[
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(20, 0, 40, 0),
                                      child: Row(
                                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                          children: <Widget>[
                                            ElevatedButton(
                                                style: ButtonStyle(
                                                  backgroundColor: MaterialStateProperty.all<Color>(Colors.blueAccent),
                                                ),
                                                onPressed: null,
                                                child: Padding(
                                                  padding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
                                                  child: Text(
                                                      'Accept',
                                                      style: TextStyle(
                                                        fontSize: 16.0, fontWeight: FontWeight.bold,
                                                        color: Colors.black,
                                                      )
                                                  ),
                                                )
                                            ),
                                            ElevatedButton(
                                                style: ButtonStyle(
                                                  backgroundColor: MaterialStateProperty.all<Color>(Colors.redAccent),
                                                ),
                                                onPressed: null,
                                                child: Padding(
                                                  padding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
                                                  child: Text(
                                                      'Return',
                                                      style: TextStyle(
                                                        fontSize: 16.0, fontWeight: FontWeight.bold,
                                                        color: Colors.black,
                                                      )
                                                  ),
                                                )
                                            ),
                                          ]
                                      ),
                                    )
                                )
                              ],
                            ),

                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),//Goods receipt Card
              Container(
                child: Center(
                  child: Card(
                    child: InkWell(
                      splashColor: Colors.blue.withAlpha(30),
                      onTap: () {
                        print('Card tapped.');
                      },
                      child: Container(
                        padding: EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0),
                        width: 350,
                        height: 350,
                        child: Column(
                          children: [
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'GR3625',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 22,
                                          color: Colors.blueGrey,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Divider(color: Colors.blue[900]),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Supplier Name',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Dummy Supplier',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Items Contain',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Item 001 , Item 002',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Item Count',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          '45',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),

                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 0.0, 0.0),
                                      child: Text(
                                        'Delivery Advise Note',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            Row(
                              children: [
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(10, 0.0, 10.0, 0.0),
                                      child: Align(
                                        alignment: Alignment.topRight, // Align however you like (i.e .centerRight, centerLeft)
                                        child: Text(
                                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                          style: TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 16,
                                            color: Colors.blueGrey,
                                          ),
                                          textAlign: TextAlign.right,
                                        ),
                                      ),
                                    )
                                )
                              ],
                            ),
                            SizedBox(
                              height: 15,
                            ),

                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: <Widget>[
                                Expanded(
                                    child: Container(
                                      padding: EdgeInsets.fromLTRB(20, 0, 40, 0),
                                      child: Row(
                                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                          children: <Widget>[
                                            ElevatedButton(
                                                style: ButtonStyle(
                                                  backgroundColor: MaterialStateProperty.all<Color>(Colors.blueAccent),
                                                ),
                                                onPressed: null,
                                                child: Padding(
                                                  padding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
                                                  child: Text(
                                                      'Accept',
                                                      style: TextStyle(
                                                        fontSize: 16.0, fontWeight: FontWeight.bold,
                                                        color: Colors.black,
                                                      )
                                                  ),
                                                )
                                            ),
                                            ElevatedButton(
                                                style: ButtonStyle(
                                                  backgroundColor: MaterialStateProperty.all<Color>(Colors.redAccent),
                                                ),
                                                onPressed: null,
                                                child: Padding(
                                                  padding: EdgeInsets.fromLTRB(20.0, 15.0, 20.0, 15.0),
                                                  child: Text(
                                                      'Return',
                                                      style: TextStyle(
                                                        fontSize: 16.0, fontWeight: FontWeight.bold,
                                                        color: Colors.black,
                                                      )
                                                  ),
                                                )
                                            ),
                                          ]
                                      ),
                                    )
                                )
                              ],
                            ),

                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),//Goods receipt Card
              SizedBox(height: 15.0)
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
