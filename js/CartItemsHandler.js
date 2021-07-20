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

    console.log(odgovor);
    cleanMetaDataInLocal(odgovor);
  }
});
