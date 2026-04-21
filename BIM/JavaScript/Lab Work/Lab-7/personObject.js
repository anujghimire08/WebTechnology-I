let person ={
nam:"anuj",
address:"BRT",
phone:28937292343,
fullinfo: function(){
  console.log(this.nam + this.address + this.phone);
}
}
person.fullinfo();