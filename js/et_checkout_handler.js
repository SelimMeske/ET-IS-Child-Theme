if(window.location.pathname == '/checkout/') {
  let pozadinskiSkin = window.localStorage.getItem('back_skin');
  let kameraSkin =  window.localStorage.getItem('cam_skin');

  let adminMessage = 'Korisnik je narucio pozadniski skin: ' + pozadinskiSkin.replace('_', ' ') + ', a skin kamere je: ' + kameraSkin.replace('_', ' ');

  document.querySelector('#order_comments').value = adminMessage;
}

let back_skin = "381";
let back_and_cam = "382";
let cam_skin = "383";

let cam_skin_from_local = window.localStorage.getItem("cam_skin");
let back_skin_from_local = window.localStorage.getItem("back_skin");

console.log("Type of cam skin from local " + typeof(cam_skin_from_local));
console.log("Type of back skin from local " + typeof(back_skin_from_local));

console.log("Vrijednost cam skin " + cam_skin_from_local);
console.log("Vrijednost back skin " + back_skin_from_local);

setTimeout(function(){
	if(window.location.pathname == '/product/mobilni-skin-konfigurator/') {
		document.querySelector('.et-buy-button').addEventListener('click', function() {

        let cam_skin_from_local = window.localStorage.getItem("cam_skin");
        let back_skin_from_local = window.localStorage.getItem("back_skin");

				if(cam_skin_from_local == "null" && back_skin_from_local == "null"
        || cam_skin_from_local == null && back_skin_from_local == null
        || cam_skin_from_local == "" && back_skin_from_local == ""
        || cam_skin_from_local == null && back_skin_from_local == ""
        || cam_skin_from_local == "" && back_skin_from_local == null){
          alert("Niste odabrali skin, odaberite skin klikom na dugme \"DODAJ\" i odaberite zeljeni skin.");
          return;
        }else if(typeof cam_skin_from_local !== 'undefined' && typeof back_skin_from_local !== 'undefined') {
          document.querySelector('.variation_id').value = back_and_cam;
  				document.querySelector('.single_add_to_cart_button').classList.remove('disabled');
  				document.querySelector('.single_add_to_cart_button').click();

          console.log((cam_skin_from_local !== null))
          console.log((back_skin_from_local !== null))
          console.log(cam_skin_from_local)
          console.log(back_skin_from_local)
          console.log(cam_skin_from_local.typeof())
          console.log(back_skin_from_local.typeof())
          console.log('VARIJACIJA BACK AND CAM ')
          return;
        }else if(cam_skin_from_local !== null || typeof cam_skin_from_local !== 'undefined'){
          document.querySelector('.variation_id').value = cam_skin;
  				document.querySelector('.single_add_to_cart_button').classList.remove('disabled');
  				document.querySelector('.single_add_to_cart_button').click();
          console.log('VARIJACIJA CAM ')
          return;
        }else if(back_skin_from_local !== null || typeof back_skin_from_local !== 'undefined'){
          document.querySelector('.variation_id').value = back_skin;
  				document.querySelector('.single_add_to_cart_button').classList.remove('disabled');
  				document.querySelector('.single_add_to_cart_button').click();
          console.log('VARIJACIJA BACK ')
          return;
        }

		});
	}
}, 2100);
