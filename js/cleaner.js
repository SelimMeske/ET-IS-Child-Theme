setTimeout(function(){ 
	let all_empty_p_tags = document.querySelectorAll('p');

	for (let i = 0; i < all_empty_p_tags.length; i++) {
		if(all_empty_p_tags[i].innerText == ""){
			all_empty_p_tags[i].remove();	
		} 
	}

}, 1500);

