import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class Order extends StatelessWidget {
  Order({Key? key}) : super(key: key);
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
                            'Order',
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
              SizedBox(height: 10.0),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Expanded(
                      child: Container(
                        padding: EdgeInsets.fromLTRB(20, 0, 40, 0),
                        child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text(
                                  'Order No :',
                                  style: TextStyle(
                                    fontSize: 22.0, fontWeight: FontWeight.bold,
                                    color: Colors.black,
                                  )
                              ),
                              Text(
                                  'SO658',
                                  style: TextStyle(
                                    fontSize: 22.0, fontWeight: FontWeight.bold,
                                    color: Colors.grey[600],
                                  )
                              )
                            ]
                        ),
                      )
                  )
                ],
              ),
              SizedBox(height: 15.0),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Expanded(
                      child: Container(
                        padding: EdgeInsets.fromLTRB(20, 0, 40, 0),
                        child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text(
                                  'Supplier Name',
                                  style: TextStyle(
                                    fontSize: 20.0, fontWeight: FontWeight.bold,
                                    color: Colors.black,
                                  )
                              ),
                              Text(
                                  'Dummy Supplier',
                                  style: TextStyle(
                                    fontSize: 18.0, fontWeight: FontWeight.bold,
                                    color: Colors.grey[800],
                                  )
                              )
                            ]
                        ),
                      )
                  )
                ],
              ),
              SizedBox(height: 15.0),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Expanded(
                      child: Container(
                        padding: EdgeInsets.fromLTRB(20, 0, 40, 0),
                        child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text(
                                  'Ordered Date',
                                  style: TextStyle(
                                    fontSize: 20.0, fontWeight: FontWeight.bold,
                                    color: Colors.black,
                                  )
                              ),
                              Text(
                                  'Sep 08 2021',
                                  style: TextStyle(
                                    fontSize: 18.0, fontWeight: FontWeight.bold,
                                    color: Colors.grey[600],
                                  )
                              )
                            ]
                        ),
                      )
                  )
                ],
              ),
              SizedBox(height: 15.0),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Expanded(
                      child: Container(
                        padding: EdgeInsets.fromLTRB(20, 0, 40, 0),
                        child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: <Widget>[
                              Text(
                                  'Required Date',
                                  style: TextStyle(
                                    fontSize: 20.0, fontWeight: FontWeight.bold,
                                    color: Colors.black,
                                  )
                              ),
                              Text(
                                  'Oct 03 2021',
                                  style: TextStyle(
                                    fontSize: 18.0, fontWeight: FontWeight.bold,
                                    color: Colors.grey[600],
                                  )
                              )
                            ]
                        ),
                      )
                  )
                ],
              ),
              SizedBox(height: 30.0),
              Row(
                children: [
                  Expanded(
                      child: Container(
                        child: Padding(
                          padding: EdgeInsets.fromLTRB(20, 0.0, 20, 0.0),
                          child: ElevatedButton(
                              style: ButtonStyle(
                                backgroundColor: MaterialStateProperty.all<Color>(Colors.greenAccent),
                              ),
                            onPressed: null,
                            child: Padding(
                              padding: EdgeInsets.fromLTRB(0.0, 15.0, 0.0, 15.0),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                children: <Widget>[
                                  Expanded(
                                      child: Container(
                                        padding: EdgeInsets.fromLTRB(10, 0, 10, 0),
                                        child: Row(
                                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                            children: <Widget>[
                                              Text(
                                                  'Received Item Count',
                                                  style: TextStyle(
                                                    fontSize: 20.0, fontWeight: FontWeight.bold,
                                                    color: Colors.black,
                                                  )
                                              ),
                                              Text(
                                                  '258',
                                                  style: TextStyle(
                                                    fontSize: 18.0, fontWeight: FontWeight.bold,
                                                    color: Colors.grey[600],
                                                  )
                                              )
                                            ]
                                        ),
                                      )
                                  )
                                ],
                              ),
                            )
                          ),
                        ),
                      )
                  )
                ],
              ),
              SizedBox(height: 15.0),
              Row(
                children: [
                  Expanded(
                      child: Container(
                        child: Padding(
                          padding: EdgeInsets.fromLTRB(20, 0.0, 20, 0.0),
                          child: ElevatedButton(
                              style: ButtonStyle(
                                backgroundColor: MaterialStateProperty.all<Color>(Colors.orangeAccent),
                              ),
                              onPressed: null,
                              child: Padding(
                                padding: EdgeInsets.fromLTRB(0.0, 15.0, 0.0, 15.0),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: <Widget>[
                                    Expanded(
                                        child: Container(
                                          padding: EdgeInsets.fromLTRB(10, 0, 10, 0),
                                          child: Row(
                                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                              children: <Widget>[
                                                Text(
                                                    'Remaining Item Count',
                                                    style: TextStyle(
                                                      fontSize: 20.0, fontWeight: FontWeight.bold,
                                                      color: Colors.black,
                                                    )
                                                ),
                                                Text(
                                                    '258',
                                                    style: TextStyle(
                                                      fontSize: 18.0, fontWeight: FontWeight.bold,
                                                      color: Colors.grey[600],
                                                    )
                                                )
                                              ]
                                          ),
                                        )
                                    )
                                  ],
                                ),
                              )
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
