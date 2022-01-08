function test(val: any) {
  console.log("装饰器");
  console.log(val);
}

function logVal(target, name, descriptor): void {
  descriptor.writable = false;
  return descriptor;
}

@test
class A {
  constructor() {
    console.log(312312);
  }
  @logVal("xxx")
  getValue() {
    console.log("获取val");
    return 123;
  }
}

new A().getValue();
