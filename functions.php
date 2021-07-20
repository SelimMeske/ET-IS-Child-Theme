<?php

function my_custom_scripts() {
    wp_enqueue_script( 'local-storage-handler', get_stylesheet_directory_uri() . '/js/localStorageHandler.js', array('jquery'), rand(100, 1000) . '.' . rand(0, 1000),true );
    wp_enqueue_script( 'cart-meta-object', get_stylesheet_directory_uri() . '/js/CartMetaObject.js', array('jquery'), rand(100, 1000) . '.' . rand(0, 1000),true );
    wp_enqueue_script( 'cart-items-handler-js', get_stylesheet_directory_uri() . '/js/CartItemsHandler.js', array('jquery'), rand(100, 1000) . '.' . rand(0, 1000),true );
    wp_enqueue_script( 'custom-js-enum', get_stylesheet_directory_uri() . '/js/VarationEnum.js', array(), rand(100, 1000) . '.' . rand(0, 1000),true );
    wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/CamSkin.js', array(), rand(100, 1000) . '.' . rand(0, 1000),true );
    wp_enqueue_script( 'custom-js-2', get_stylesheet_directory_uri() . '/js/BackSkin.js', array(), rand(100, 1000) . '.' . rand(0, 1000),true );
    wp_enqueue_script( 'custom-js-3', get_stylesheet_directory_uri() . '/js/MobileObject.js', array(), rand(100, 1000). '.' . rand(0, 1000),true );
    wp_enqueue_script( 'custom-js-4', get_stylesheet_directory_uri() . '/js/CreatedMobileObjects.js', array(), rand(100, 1000) . '.' . rand(0, 1000),true );
    if (is_single(323)): wp_enqueue_script( 'custom-js-5', get_stylesheet_directory_uri() . '/js/main.js', array('jquery'), rand(100, 1000) . '.' . rand(0, 1000),true ); endif;
    if (is_single(323)): wp_enqueue_script( 'cleaner-js', get_stylesheet_directory_uri() . '/js/cleaner.js', array('jquery'), rand(100, 1000) . '.' . rand(0, 1000),true ); endif;
    wp_enqueue_script( 'et-checkout-js', get_stylesheet_directory_uri() . '/js/et_checkout_handler.js', array('jquery'), rand(100, 1000) . '.' . rand(0, 1000), true );
    if (is_single(323)): wp_enqueue_style('clean-page', get_stylesheet_directory_uri() . '/clean_page_style.css', array(), rand(100, 1000) . '.' . rand(0, 1000), 'all'); endif;
    if (is_single(323)): wp_enqueue_style('et-main-style', get_stylesheet_directory_uri() . '/style.css', array(), rand(100, 1000) . '.' . rand(0, 1000), 'all'); endif;
    if (is_single(88)): wp_enqueue_style('chart-cleaner', get_stylesheet_directory_uri() . '/chart_cleaner.css', array(), rand(100, 1000) . '.' . rand(0, 1000), 'all'); endif;
}
add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );

// Add input fields
add_action('woocommerce_before_add_to_cart_button', 'hidden_input_field');
function hidden_input_field() { ?>
    <input type="text" id="back-skin-material" name="back-skin-material" value=''>
    <input type="text" id="cam-skin-material" name="cam-skin-material" value=''>
    <input type="text" id="phone-model-hidden" name="phone-model" value=''>
<?php }

// Add error handler
add_filter('woocommerce_add_to_cart_validation', 'no_skin_error', 10, 3);
function no_skin_error($passed, $product_id, $qty) {
    if(isset($_POST['back-skin-material']) == '' && isset($_POST['cam-skin-material']) == '' && sanitize_text_field($_POST['back-skin-material']) == '' && sanitize_text_field($_POST['cam-skin-material'])  == '') {
        wc_add_notice( 'Molim vas odaberite skin.', 'error' );
        
        $passed = false;
    }elseif(isset($_POST['phone-model']) == '' && sanitize_text_field($_POST['phone-model']) == ''){
        wc_add_notice( 'Molim vas odaberite model vašeg mobilnog uređaja.', 'error' );
        
        $passed = false;
    }
    return $passed;
}

add_filter( 'woocommerce_add_cart_item_data', 'add_skin_to_cart_data', 10, 2 );
// Add skins to cart
function add_skin_to_cart_data($cart_item, $product_id) {
    if(isset($_POST['back-skin-material']) && isset($_POST['cam-skin-material']) && isset($_POST['phone-model'])){
        $cart_item['back_skin'] = sanitize_text_field($_POST['back-skin-material']);
        $cart_item['cam_skin'] = sanitize_text_field($_POST['cam-skin-material']);
        $cart_item['phone_model'] = sanitize_text_field($_POST['phone-model']);
    }
    return $cart_item;
}

add_action('woocommerce_add_order_item_meta', 'save_skin_data', 10, 2);
function save_skin_data($item_id, $values) {
    if(!empty($values['back_skin'])) {
        wc_add_order_item_meta( $item_id, 'Materijal Pozadine', $values['back_skin'], true );
    }
    
    if(!empty($values['cam_skin'])) {
        wc_add_order_item_meta( $item_id, 'Materijal Kamere', $values['cam_skin'], true );
    }

    if(!empty($values['phone_model'])) {
        wc_add_order_item_meta( $item_id, 'Model telefona', $values['phone_model'], true );
    }
}

add_filter( 'woocommerce_order_item_product', 'show_in_table', 10, 2);

function show_in_table($cart_item, $order_item){
    if(isset($order_item['back_skin']) && isset($order_item['cam_skin']) && isset($order_item['phone_model'])){
        $cart_item['back_skin'] = $order_item['back_skin'];
        $cart_item['cam_skin'] = $order_item['cam_skin'];
        $cart_item['phone_model'] = $order_item['phone_model'];
    }
    return $cart_item;
}

?>
