function addMetaToLocal(object){
  let currentNewObjectId = JSON.parse(object).id;
  let currentLocalMetaList = JSON.parse(window.localStorage.getItem('cart_meta'));

  let newMetaList = [];

  for (let i = 0; i < currentLocalMetaList.length; i++) {
    let currentId = JSON.parse(currentLocalMetaList[i]).id;

    if(parseInt(currentId) === parseInt(currentNewObjectId)){
      return;
    }
    newMetaList.push(currentLocalMetaList[i]);
  }

  newMetaList.push(object);

  window.localStorage.setItem("cart_meta", JSON.stringify(newMetaList));
}
