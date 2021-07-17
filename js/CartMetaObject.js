class CartMetaObject{
  constructor(id, backColor, camColor, phoneModel){
    this.id = id;
    this.backColor = backColor;
    this.camColor = camColor;
    this.phoneModel = phoneModel;
  }

  get_object(){
    let object = {"id": this.id, "backColor": this.backColor, "camColor": this.camColor, "phoneModel": this.phoneModel};
    return JSON.stringify(object);
  }
}
