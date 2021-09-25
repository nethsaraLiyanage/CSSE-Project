// ignore: file_names
// ignore_for_file: prefer_const_constructors_in_immutables

import 'package:flutter/material.dart';

class Dashboard extends StatefulWidget {
  Dashboard({Key? key}) : super(key: key);

  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
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
                          child: const Text('AH'),
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
                            onTap: () =>
                                {Navigator.pushNamed(context, '/inventory')},
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
