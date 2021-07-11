jQuery.ajax({
  url: "https://infinityskins.ba/wp-json/cocart/v2/cart/items",
  method: "GET",
  dataType: "json",
  contentType: "application/json; charset=utf-8",
  complete: function (response) {
    console.log(response.responseJSON)
    let odgovor = response.responseJSON;
    let currentCartItems = [];
    for (let i = 0; i < Object.keys(odgovor).length; i++) {
      currentCartItems.push(Object.values(odgovor)[i].id);
    }
  }
});
