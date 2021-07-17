let currentCartItems = [];

jQuery.ajax({
  url: "https://infinityskins.ba/wp-json/cocart/v2/cart/items",
  method: "GET",
  dataType: "json",
  contentType: "application/json; charset=utf-8",
  complete: function (response) {
    console.log(response.responseJSON)
    let odgovor = response.responseJSON;
    for (let i = 0; i < Object.keys(odgovor).length; i++) {
      let currentResponseId = Object.values(odgovor)[i].id;
      currentCartItems.push(currentResponseId.toString());

      if(window.location.pathname == '/cart/'){
        let all_var_tags = document.querySelectorAll('.variation-Skinvariations > p');

        //for(let i = 0; i < all_var_tags.length; i++) {
          //if(all_var_tags[i].innerText == Object.values(odgovor)[i].meta.variation)
        //}

        console.log(Object.values(odgovor)[i].meta.variation);
      }
    }
  }
});
