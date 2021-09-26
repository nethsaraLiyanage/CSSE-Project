// ignore_for_file: prefer_const_constructors_in_immutables

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';

class Login extends StatefulWidget {
  Login({Key? key}) : super(key: key);

  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
          padding: const EdgeInsets.fromLTRB(30.0, 50.0, 30.0, 50.0),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              // ignore: prefer_const_literals_to_create_immutables
              children: [
                // ignore: prefer_const_constructors
                Image.asset('assets/logo2.png'),
                lineheightBox(),
                // ignore: prefer_const_constructors
                lineheightBox(),
                Text(
                  'Login',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
                ),
                Divider(
                  color: Colors.blue[400],
                  height: 10,
                ),
                lineheightBox(),
                Text(
                  'Email or Username',
                  style: TextStyle(
                    color: Colors.blueGrey,
                  ),
                ),
                SizedBox(height: 10),
                TextField(
                  cursorColor: Colors.black,
                  style: TextStyle(color: Colors.blueGrey),
                  decoration: InputDecoration(
                    focusedBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.blue, width: 2.0),
                        borderRadius: BorderRadius.circular(20)),
                    enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.blue, width: 2.0),
                        borderRadius: BorderRadius.circular(20)),
                    filled: false,
                    fillColor: Colors.blue[600],
                    border: OutlineInputBorder(
                        borderSide: BorderSide.none,
                        borderRadius: BorderRadius.circular(20)),
                  ),
                ),

                SizedBox(
                  height: 20,
                ),

                Text(
                  'Password',
                  style: TextStyle(
                    color: Colors.blueGrey,
                  ),
                ),
                SizedBox(height: 10),
                TextField(
                  obscureText: true,
                  cursorColor: Colors.black,
                  style: TextStyle(color: Colors.blueGrey),
                  decoration: InputDecoration(
                    focusedBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.blue, width: 2.0),
                        borderRadius: BorderRadius.circular(20)),
                    enabledBorder: OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.blue, width: 2.0),
                        borderRadius: BorderRadius.circular(20)),
                    filled: false,
                    fillColor: Colors.blue[600],
                    border: OutlineInputBorder(
                        borderSide: BorderSide.none,
                        borderRadius: BorderRadius.circular(20)),
                  ),
                ),
                lineheightBox(),

                Row(
                  children: [
                    Expanded(
                      flex: 1,
                      child: TextButton(
                        child: Text('Login'),
                        style: ButtonStyle(
                            padding: MaterialStateProperty.all<EdgeInsets>(
                                EdgeInsets.all(15)),
                            foregroundColor:
                                MaterialStateProperty.all<Color>(Colors.white),
                            backgroundColor:
                                MaterialStateProperty.all(Colors.blue),
                            shape: MaterialStateProperty.all<
                                    RoundedRectangleBorder>(
                                RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(18.0),
                                    side: BorderSide(color: Colors.blue)))),
                        onPressed: () =>
                            {Navigator.pushNamed(context, '/dash')},
                      ),
                    )
                  ],
                )
              ],
            ),
          )),
    );
  }
}

class lineheightBox extends StatelessWidget {
  const lineheightBox({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 20,
      child: const Text(''),
    );
  }
}
