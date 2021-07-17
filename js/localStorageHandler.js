function addMetaToLocal(object){
  console.log(object);
  let currentLocalMetaList = JSON.parse(window.localStorage.getItem('cart_meta'));
  console.log( typeof currentLocalMetaList);
  console.log(currentLocalMetaList);
}
