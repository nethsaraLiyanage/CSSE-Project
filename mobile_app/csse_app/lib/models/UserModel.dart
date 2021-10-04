// To parse this JSON data, do
//
//     final userModel = userModelFromJson(jsonString);

import 'dart:convert';

UserModel userModelFromJson(String str) => UserModel.fromJson(json.decode(str));

String userModelToJson(UserModel data) => json.encode(data.toJson());

class UserModel {
  UserModel({
    required this.userId,
    required this.name,
    required this.password,
    required this.email,
    required this.type,
  });

  int userId;
  String name;
  String password;
  String email;
  String type;

  factory UserModel.fromJson(Map<String, dynamic> json) => UserModel(
        userId: json["User_ID"],
        name: json["Name"],
        password: json["Password"],
        email: json["Email"],
        type: json["Type"],
      );

  Map<String, dynamic> toJson() => {
        "User_ID": userId,
        "Name": name,
        "Password": password,
        "Email": email,
        "Type": type,
      };
}
