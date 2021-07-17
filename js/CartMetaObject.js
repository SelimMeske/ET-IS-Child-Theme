class CartMetaObject{
  constructor(id, backColor, camColor){
    this.id = id;
    this.backColor = backColor;
    this.camColor = camColor;
  }

  get_object(){
    let object = {"id": this.id, "backColor": this.backColor, "camColor": this.camColor};
    return JSON.stringify(object);
  }
}
