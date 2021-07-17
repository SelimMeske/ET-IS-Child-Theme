if(window.location.pathname == '/checkout/') {
  let pozadinskiSkin = window.localStorage.getItem('back_skin');
  let kameraSkin =  window.localStorage.getItem('cam_skin');
  let test_our_meta = window.localStorage.getItem("back_skin");
  let adminMessage = 'Korisnik je narucio pozadniski skin: ' + pozadinskiSkin.replace('_', ' ') + ', a skin kamere je: ' + kameraSkin.replace('_', ' ');

  console.log(JSON.parse(localStorage.getItem("cart_meta")));

  document.querySelector('#order_comments').value = adminMessage;
}

let cam_skin_from_local = window.localStorage.getItem("cam_skin");
let back_skin_from_local = window.localStorage.getItem("back_skin");
let cart_meta = [];

jQuery(document).ready(function() {
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
        }else if(cam_skin_from_local !== 'null' && back_skin_from_local !== 'null') {
          let varPick = variation_determination(camback_variations, currentCartItems);
          let meta_obj_id = document.querySelector('.variation_id').value = varPick;
  				document.querySelector('.single_add_to_cart_button').classList.remove('disabled');
  				document.querySelector('.single_add_to_cart_button').click();
          let meta_obj = new CartMetaObject(meta_obj_id, cam_skin_from_local, back_skin_from_local);
          window.localStorage.setItem("cart_meta", meta_obj.get_object());
          return;
        }else if(cam_skin_from_local !== 'null'){
          let varPick = variation_determination(cam_variations, currentCartItems);
          let meta_obj_id = document.querySelector('.variation_id').value = varPick;
  				document.querySelector('.single_add_to_cart_button').classList.remove('disabled');
  				document.querySelector('.single_add_to_cart_button').click();
          let meta_obj = new CartMetaObject(meta_obj_id, cam_skin_from_local, back_skin_from_local);
          window.localStorage.setItem("cart_meta", meta_obj.get_object());
          return;
        }else if(back_skin_from_local !== 'null'){
          let varPick = variation_determination(back_variations, currentCartItems);
          let meta_obj_id = document.querySelector('.variation_id').value = varPick;
  				document.querySelector('.single_add_to_cart_button').classList.remove('disabled');
          document.querySelector('.single_add_to_cart_button').click();
          let meta_obj = new CartMetaObject(meta_obj_id, cam_skin_from_local, back_skin_from_local);
          window.localStorage.setItem("cart_meta", meta_obj.get_object());
          return;
        }

		});
	}
});


function variation_determination(var_list, restricted_vars){

  if (arrayCompare(var_list, restricted_vars)){
    return 00000;
  }else {
    for(let i = 0; i < var_list.length; i++) {
      if(!(restricted_vars.includes(var_list[i]))){
        return var_list[i];
      }
    }
  }
}

function arrayCompare(_arr1, _arr2) {
    if (
      !Array.isArray(_arr1)
      || !Array.isArray(_arr2)
      || _arr1.length !== _arr2.length
      ) {
        return false;
      }

    // .concat() to not mutate arguments
    const arr1 = _arr1.concat().sort();
    const arr2 = _arr2.concat().sort();

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
         }
    }

    return true;
}
