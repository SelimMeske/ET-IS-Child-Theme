jQuery.ajax({
  url: "https://infinityskins.ba/wp-json/cocart/v2/cart/items",
  method: "GET",
  dataType: "json",
  contentType: "application/json; charset=utf-8",
  complete: function (response) {
    let odgovor = response.responseJSON;
    console.log(odgovor);
  }
});
