if(window.location.pathname == '/checkout/') {
  document.querySelector('#order_comments').value = window.localStorage.getItem('back_skin');
  document.querySelector('#order_comments').value += window.localStorage.getItem('cam_skin');
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
        || cam_skin_from_local == "null" && back_skin_from_local == ""
        || cam_skin_from_local == "" && back_skin_from_local == "null"){
          return;
        }else if(cam_skin_from_local !== "null" || cam_skin_from_local !== "" && back_skin_from_local !== "null" || back_skin_from_local !== "") {
          document.querySelector('.variation_id').value = back_and_cam;
  				document.querySelector('.single_add_to_cart_button').classList.remove('disabled');
  				document.querySelector('.single_add_to_cart_button').click();
          return;
        }else if(cam_skin_from_local !== "null" || cam_skin_from_local !== ""){
          document.querySelector('.variation_id').value = cam_skin;
  				document.querySelector('.single_add_to_cart_button').classList.remove('disabled');
  				document.querySelector('.single_add_to_cart_button').click();
          return;
        }else if(back_skin_from_local !== "null" || back_skin_from_local !== ""){
          document.querySelector('.variation_id').value = back_skin;
  				document.querySelector('.single_add_to_cart_button').classList.remove('disabled');
  				document.querySelector('.single_add_to_cart_button').click();
          return;
        }

		});
	}
}, 2100);
