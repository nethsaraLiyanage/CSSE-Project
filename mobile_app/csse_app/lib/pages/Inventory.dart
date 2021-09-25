import 'package:flutter/material.dart';

class Inventory extends StatelessWidget {
  const Inventory({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
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
                'Inventory',
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
                            borderSide:
                                BorderSide(color: Colors.blue, width: 2.0),
                            borderRadius: BorderRadius.circular(20)),
                        enabledBorder: OutlineInputBorder(
                            borderSide:
                                BorderSide(color: Colors.blue, width: 2.0),
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
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: [
                    DataTable(
                      columns: [
                        DataColumn(
                            label: Text('Item',
                                style: TextStyle(
                                    fontSize: 10,
                                    fontWeight: FontWeight.bold))),
                        DataColumn(
                            label: Text('Status',
                                style: TextStyle(
                                    fontSize: 10,
                                    fontWeight: FontWeight.bold))),
                        DataColumn(
                            label: Text('Count',
                                style: TextStyle(
                                    fontSize: 10,
                                    fontWeight: FontWeight.bold))),
                        DataColumn(
                            label: Text('Actions',
                                style: TextStyle(
                                    fontSize: 10, fontWeight: FontWeight.bold)))
                      ],
                      rows: [
                        DataRow(cells: [
                          DataCell(Text('1', style: TextStyle(fontSize: 10))),
                          DataCell(Text('1', style: TextStyle(fontSize: 10))),
                          DataCell(Text('1', style: TextStyle(fontSize: 10))),
                          DataCell(
                            Center(
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                                  FlatButton(
                                    textColor: Colors.white,
                                    //height: 60.0,
                                    color: Colors.cyan,
                                    onPressed: () {},
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children: [
                                        Padding(
                                          padding: const EdgeInsets.all(0.0),
                                          child: Icon(
                                            Icons.add,
                                            color: Colors.white,
                                          ),
                                        )
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ]),
                        DataRow(cells: [
                          DataCell(Text('1', style: TextStyle(fontSize: 10))),
                          DataCell(Text('1', style: TextStyle(fontSize: 10))),
                          DataCell(Text('1', style: TextStyle(fontSize: 10))),
                          DataCell(
                            Center(
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                                  FlatButton(
                                    textColor: Colors.white,
                                    //height: 60.0,
                                    color: Colors.cyan,
                                    onPressed: () {},
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children: [
                                        Padding(
                                          padding: const EdgeInsets.all(0.0),
                                          child: Icon(
                                            Icons.add,
                                            color: Colors.white,
                                          ),
                                        )
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ]),
                      ],
                    )
                  ],
                ),
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
              )
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
