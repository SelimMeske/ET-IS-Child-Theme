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

  if(!currentNewObjectId){
    return;
  }else{
    newMetaList.push(object);
  }
  window.localStorage.setItem("cart_meta", JSON.stringify(newMetaList));
}

function cleanMetaDataInLocal(APIlist){

  let currentLocalMetaList = JSON.parse(window.localStorage.getItem('cart_meta'));
  let cleanList = [];

  for(let i = 0; i < Object.keys(APIlist).length; i++) {
    for(let p = 0; p < currentLocalMetaList.length; p++) {
      if(parseInt(Object.values(APIlist)[i].id) === parseInt(currentLocalMetaList[p].id)){
        cleanList.push(currentLocalMetaList[p]);
      }
    }
  }
  window.localStorage.setItem("cart_meta", JSON.stringify(cleanList));
}
