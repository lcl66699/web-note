// 定义属性装饰器;
function logProperty(params: any) {
  // target--->类的原型对象；attr--->传入的参数url
  // return function(target: any, attr: any) {
  //   console.log("属性装饰器;", target, attr);
  //   target[attr] = params;
  // };
  return (url: any, trueUrl: string) => {
    console.log("属性装饰", url, trueUrl);
  };
}

class HttpClient {
  @logProperty("http://www.baidu.com")
  public url: any | undefined;
  constructor() {}
  getUrl() {
    console.log("getUrl", this.url);
  }
}

console.log(new HttpClient().getUrl());
