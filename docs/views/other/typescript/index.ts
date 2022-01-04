class Person {
  firstName: string = "常山";
  lastName: string = "赵子龙";
  get fullName() {
    //获取时触发
    return this.firstName + "---" + this.lastName;
  }
  set fullName(value) {
    //修改时触发
    const names = value.split("---");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const p = new Person();
console.log(p.fullName);

p.firstName = "咏春";
p.lastName = "叶问";
console.log(p.fullName);

p.fullName = "篮球---蔡徐坤";
console.log(p.firstName, p.lastName);
