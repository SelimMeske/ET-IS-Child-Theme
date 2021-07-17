jQuery(document).ready(function() {
	let all_empty_p_tags = document.querySelectorAll('p');

	for (let i = 0; i < all_empty_p_tags.length; i++) {
		if(all_empty_p_tags[i].innerText == ""){
			all_empty_p_tags[i].remove();
		}
	}
	let all_brs = document.querySelectorAll('br');
	for(let p = 0; p < all_brs.length; p++){
		all_brs[p].remove();
	}
	console.log(all_brs);
	document.querySelector('.col-2').style.display = 'none';
});
