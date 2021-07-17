let currentCartItems = [];
let backMainText = 'Pozadniski skin';
let camMainText = 'Skin kamere';
let bcMainText = 'Pozadniski + kamera skin';

jQuery.ajax({
  url: "https://infinityskins.ba/wp-json/cocart/v2/cart/items",
  method: "GET",
  dataType: "json",
  contentType: "application/json; charset=utf-8",
  complete: function (response) {
    let odgovor = response.responseJSON;
    for (let i = 0; i < Object.keys(odgovor).length; i++) {
      console.log(camback_variations);
      let customLocalCartMetaObject = JSON.parse(window.localStorage.getItem('cart_meta'));
      let currentResponseId = Object.values(odgovor)[i].id;
      currentCartItems.push(currentResponseId.toString());

      if(window.location.pathname == '/cart/'){
        let all_var_tags = document.querySelectorAll('dd.variation-Skinvariations > p');

        for(let i = 0; i < all_var_tags.length; i++) {
          let currentPtagText = all_var_tags[i].innerTex;
          if(currentPtagText === Object.values(odgovor)[i].meta.variation['Skin variations']){
            let currentInCartProductId = Object.values(odgovor)[i].id;
            for(let p = 0; p < customLocalCartMetaObject.length; p++) {

              let currentMetaObject = JSON.parse(customLocalCartMetaObject[p]);

              console.log(currentMetaObject.id);
              if(parseInt(currentInCartProductId) === parseInt(currentMetaObject.id)){
                if(back_variations.includes(toString(parseInt(currentMetaObject.id)))){
                  currentPtagText = variations_name_mapper[currentPtagText] + ' - Boja: ' + color_variations_mapper[currentMetaObject.backColor];
                }else if (cam_variations.includes(toString(parseInt(currentMetaObject.id)))) {
                  currentPtagText = variations_name_mapper[currentPtagText] + ' - Boja: ' + color_variations_mapper[currentMetaObject.camColor];
                }else if (camback_variations.includes(toString(parseInt(currentMetaObject.id)))) {
                  console.log('Test')

                  currentPtagText = variations_name_mapper[currentPtagText] + ' - Pozadinska boja: ' + color_variations_mapper[currentMetaObject.backColor] + ' Boja kamere: ' + color_variations_mapper[currentMetaObject.camColor];
                }
              }
            }
          }
        }

      }
    }
  }
});
