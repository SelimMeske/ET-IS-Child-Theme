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


function add_my_field() { ?>

<div class="my-field">
    <input type="text" name="my-filed" value=''>
</div>

<?php }

add_action('woocommerce_before_add_to_cart_button', 'add_my_field')

?>
