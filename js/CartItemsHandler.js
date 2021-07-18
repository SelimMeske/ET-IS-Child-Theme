let currentCartItems = [];
let backMainText = 'Pozadniski skin';
let camMainText = 'Skin kamere';
let bcMainText = 'Pozadniski + kamera skin';

if(window.location.pathname == '/cart/'){
  document.querySelector('#post-87').style.display = 'none';
}

jQuery.ajax({
  url: "https://infinityskins.ba/wp-json/cocart/v2/cart/items",
  method: "GET",
  dataType: "json",
  contentType: "application/json; charset=utf-8",
  complete: function (response) {
    let odgovor = response.responseJSON;
    let remove_buttons = document.querySelectorAll('.remove');


    cleanMetaDataInLocal(odgovor);

    refresh_names(odgovor);

    for (let o = 0; o < remove_buttons.length; o++) {
      remove_buttons[o].addEventListener('click', function(){
        //Implementation in progress
      });
    }

    
    function refresh_names(odgovor){
      for (let i = 0; i < Object.keys(odgovor).length; i++) {
        let customLocalCartMetaObject = JSON.parse(window.localStorage.getItem('cart_meta'));
        let currentResponseId = Object.values(odgovor)[i].id;
        currentCartItems.push(currentResponseId.toString());
  
        if(window.location.pathname == '/cart/'){
          let all_var_tags = document.querySelectorAll('dd.variation-Skinvariations > p');
  
          for(let i = 0; i < all_var_tags.length; i++) {
            let currentPtagText = all_var_tags[i].innerText;
            if(currentPtagText === Object.values(odgovor)[i].meta.variation['Skin variations']){
              let currentInCartProductId = Object.values(odgovor)[i].id;
              for(let p = 0; p < customLocalCartMetaObject.length; p++) {
  
                let currentMetaObject = JSON.parse(customLocalCartMetaObject[p]);
                if(parseInt(currentInCartProductId) === parseInt(currentMetaObject.id)){
                  if(back_variations.includes('' + currentMetaObject.id)){
                    all_var_tags[i].innerText = variations_name_mapper[currentPtagText] + ' - Boja: ' + color_variations_mapper[currentMetaObject.backColor];
                  }else if (cam_variations.includes('' + currentMetaObject.id)) {
                    all_var_tags[i].innerText = variations_name_mapper[currentPtagText] + ' - Boja: ' + color_variations_mapper[currentMetaObject.camColor];
                  }else if (camback_variations.includes('' + currentMetaObject.id)) {
                    all_var_tags[i].innerText = variations_name_mapper[currentPtagText] + ' - Pozadinska boja: ' + color_variations_mapper[currentMetaObject.backColor] + ' Boja kamere: ' + color_variations_mapper[currentMetaObject.camColor];
                  }
                }
              }
            }
          }
          document.querySelector('#post-87').style.display = 'block';
        }
      }
    }
  }
});
