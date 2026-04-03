class person{
  #phone;
  constructor(name,address,phone){
    this.name = name;
      this.address = address;
      this.#phone = phone;
  }
  fullinfo = () => {
     alert(this.name + "," + this.address);
  }
  getNumber(){
    alert(this.#phone);
  }
}

const p1 = new person("anuj","BRT",6232832);
p1.fullinfo();