class Config {
  static appName;
  static version;

  static {
    this.appName = "MyApp";
    this.version = "1.0.0";
    console.log("Static block executed");
  }
}

console.log(Config.appName);