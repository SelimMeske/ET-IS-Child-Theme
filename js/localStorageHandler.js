function addMetaToLocal(object){
  console.log(object);
  let currentLocalMetaList = JSON.parse(window.localStorage.getItem('cart_meta'));
  console.log( typeof currentLocalMetaList);

  for (let i = 0; i < currentLocalMetaList.length; i++) {
    console.log(JSON.parse(currentLocalMetaList[i]).id);
  }
  console.log(currentLocalMetaList);
}
