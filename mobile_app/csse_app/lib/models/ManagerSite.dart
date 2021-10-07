// To parse this JSON data, do
//
//     final managerSite = managerSiteFromJson(jsonString);

import 'dart:convert';

ManagerSite managerSiteFromJson(String str) => ManagerSite.fromJson(json.decode(str));

String managerSiteToJson(ManagerSite data) => json.encode(data.toJson());

class ManagerSite {
  ManagerSite({
    required this.data,
  });

  List<Datum> data;

  factory ManagerSite.fromJson(Map<String, dynamic> json) => ManagerSite(
    data: List<Datum>.from(json["data"].map((x) => Datum.fromJson(x))),
  );

  Map<String, dynamic> toJson() => {
    "data": List<dynamic>.from(data.map((x) => x.toJson())),
  };
}

class Datum {
  Datum({
    required this.userId,
    required this.name,
    required this.password,
    required this.email,
    required this.type,
    required this.sites,
  });

  int userId;
  String name;
  String password;
  String email;
  String type;
  List<Site> sites;

  factory Datum.fromJson(Map<String, dynamic> json) => Datum(
    userId: json["User_ID"],
    name: json["Name"],
    password: json["Password"],
    email: json["Email"],
    type: json["Type"],
    sites: List<Site>.from(json["Sites"].map((x) => Site.fromJson(x))),
  );

  Map<String, dynamic> toJson() => {
    "User_ID": userId,
    "Name": name,
    "Password": password,
    "Email": email,
    "Type": type,
    "Sites": List<dynamic>.from(sites.map((x) => x.toJson())),
  };
}

class Site {
  Site({
    required this.siteId,
    required this.siteName,
    required this.location,
    required this.address,
    required this.siteManagerId,
    required this.siteImage,
  });

  int siteId;
  String siteName;
  String location;
  String address;
  int siteManagerId;
  String siteImage;

  factory Site.fromJson(Map<String, dynamic> json) => Site(
    siteId: json["Site_Id"],
    siteName: json["Site_Name"],
    location: json["Location"],
    address: json["Address"],
    siteManagerId: json["Site_Manager_Id"],
    siteImage: json["siteImage"],
  );

  Map<String, dynamic> toJson() => {
    "Site_Id": siteId,
    "Site_Name": siteName,
    "Location": location,
    "Address": address,
    "Site_Manager_Id": siteManagerId,
    "siteImage": siteImage,
  };
}
