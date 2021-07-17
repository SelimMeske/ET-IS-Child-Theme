function addMetaToLocal(object){
  let currentNewObjectId = JSON.parse(object).id;
  let currentLocalMetaList = JSON.parse(window.localStorage.getItem('cart_meta'));

  let newMetaList = [];

  for (let i = 0; i < currentLocalMetaList.length; i++) {
    let currentId = JSON.parse(currentLocalMetaList[i]).id;
    console.log(parseInt(currentId));
    console.log(parseInt(currentNewObjectId))

    if(!parseInt(currentId) === parseInt(currentNewObjectId)){
      newMetaList.push(currentLocalMetaList[i]);
      console.log("los nikakav");
    }
    newMetaList.push(object);
  }

  window.localStorage.setItem("cart_meta", JSON.stringify(newMetaList));
}
