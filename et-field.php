<?php

function add_my_field() { ?>

<div class="my-field">
    <input type="text" name="my-filed" value=''>
</div>

<?php }

add_action('woocommerce_before_add_to_cart_button', 'add_my_field')