// To parse this JSON data, do
//
//     final userModel = userModelFromJson(jsonString);

import 'dart:convert';

UserDetailModel userDetailModelFromJson(String str) => UserDetailModel.fromJson(json.decode(str));

String userDetailModelToJson(UserDetailModel data) => json.encode(data.toJson());

class UserDetailModel {
  UserDetailModel({
    required this.userId,
    required this.name,
    required this.password,
    required this.email,
    required this.type,
    required this.siteId,
    required this.siteName,
  });

  int userId;
  String name;
  String password;
  String email;
  String type;
  int siteId;
  String siteName;

  factory UserDetailModel.fromJson(Map<String, dynamic> json) => UserDetailModel(
    userId: json["User_ID"],
    name: json["Name"],
    password: json["Password"],
    email: json["Email"],
    type: json["Type"],
    siteId: json["siteId"],
    siteName: json["siteName"],
  );

  Map<String, dynamic> toJson() => {
    "User_ID": userId,
    "Name": name,
    "Password": password,
    "Email": email,
    "Type": type,
  };
}
