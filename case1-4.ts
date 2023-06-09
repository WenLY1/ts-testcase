export default {}

class Home {
  private str_ : string
  get str(): string {
    return this.str_;
  }
  set str(value: string) {
    if (this.str_ == value) return;
    this.str_ = value;
  }
  constructor() {
    this.str_ = 'title'
  }

  changeStr() {
    // 问题1：编译时报错 Invalid assign target 
    // 使用 this.str = this.str + '2' 可以跳过这个报错
    this.str += '2'
  }
}
const home = new Home()
