// ignore_for_file: prefer_const_constructors_in_immutables

import 'dart:convert';
import 'dart:io';

import 'package:csse_app/models/UserModel.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:http/http.dart' as http;
import 'package:material_dialogs/material_dialogs.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Login extends StatefulWidget {
  Login({Key? key}) : super(key: key);

  @override
  _LoginState createState() => _LoginState();
}

Future<UserModel?> GetUser(String email, String password) async {
  final String apiUrl = "http://10.0.2.2:8090/auth";
  final bodyData = jsonEncode({"email": email, "password": password});

  final response = await http.post(Uri.parse(apiUrl),
      body: bodyData,
      headers: {HttpHeaders.contentTypeHeader: 'application/json'});

  debugPrint(response.body);

  if (response.statusCode == 200) {
    final String responseString = response.body;

    return userModelFromJson(responseString);
  } else {
    return null;
  }
}

class _LoginState extends State<Login> {
  //text controllers
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passswordController = TextEditingController();

  //global variables
  late UserModel _user;

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
                  controller: _emailController,
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
                  controller: _passswordController,
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
                        onPressed: () async {
                          Dialogs.bottomMaterialDialog(
                              context: context,
                              title: 'Verify in progress',
                              lottieBuilder: Lottie.network(
                                  'https://assets1.lottiefiles.com/datafiles/bEYvzB8QfV3EM9a/data.json'));

                          final String _emailInput = _emailController.text;
                          final String _passwordInput =
                              _passswordController.text;

                          debugPrint(_passwordInput);

                          final UserModel? user =
                              await GetUser(_emailInput, _passwordInput);
                          ;

                          if (user != null) {
                            //sleep(Duration(seconds: 2));
                            //save to local disk
                            final prefs = await SharedPreferences.getInstance();
                            prefs.setString('username', user.name);
                            prefs.setString('type', user.type);
                            prefs.setString('email', user.email);
                            prefs.setString('password', user.password);
                            prefs.setInt('id', user.userId);
                            if(user.type == "Site Manager"){
                              Navigator.pop(context, false);
                              Navigator.pushNamed(context, '/selectSite');
                            }
                            else{
                              Navigator.pop(context, false);
                              Navigator.pushNamed(context, '/dash');
                            }

                          } else {
                            Dialogs.bottomMaterialDialog(
                                context: context,
                                title: 'Error! user not found',
                                lottieBuilder: Lottie.network(
                                    'https://assets5.lottiefiles.com/packages/lf20_yw3nyrsv.json'));
                            sleep(Duration(seconds: 5));
                            Future.delayed(const Duration(seconds: 3), () {
                              Navigator.pop(context, false);
                              Navigator.pushNamed(context, '/login');
                            });
                          }
                        },
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
