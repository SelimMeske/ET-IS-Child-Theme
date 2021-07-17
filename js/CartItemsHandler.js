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

      let customLocalCartMetaObject = JSON.parse(window.localStorage.getItem('cart_meta'));
      let currentResponseId = Object.values(odgovor)[i].id;
      currentCartItems.push(currentResponseId.toString());

      if(window.location.pathname == '/cart/'){
        let all_var_tags = document.querySelectorAll('dd.variation-Skinvariations > p');

        for(let i = 0; i < all_var_tags.length; i++) {
          if(all_var_tags[i].innerText === Object.values(odgovor)[i].meta.variation['Skin variations']){
            let currentInCartProductId = Object.values(odgovor)[i].id;
            for(let p = 0; p < customLocalCartMetaObject.length; p++) {
              let currentMetaObject = JSON.parse(customLocalCartMetaObject[p]);
              if(parseInt(currentInCartProductId) === parseInt(currentMetaObject.id)){
                all_var_tags[i].innerText = variations_name_mapper[all_var_tags[i].innerText] + '-' + color_variations_mapper[currentMetaObject.backColor];
              }
            }
          }
        }

      }
    }
  }
});
