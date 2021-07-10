<?php
function my_custom_scripts() {
    wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/CamSkin.js', '3.0.0',true );
    wp_enqueue_script( 'custom-js-2', get_stylesheet_directory_uri() . '/js/BackSkin.js', '3.0.0',true );
    wp_enqueue_script( 'custom-js-3', get_stylesheet_directory_uri() . '/js/MobileObject.js', '3.0.0',true );
    wp_enqueue_script( 'custom-js-4', get_stylesheet_directory_uri() . '/js/CreatedMobileObjects.js', '3.0.0',true );
    wp_enqueue_script( 'custom-js-5', get_stylesheet_directory_uri() . '/js/main.js', '3.0.0',true );
    wp_enqueue_script( 'cleaner-js', get_stylesheet_directory_uri() . '/js/cleaner.js', '3.0.0',true );
    wp_enqueue_script( 'et-checkout-js', get_stylesheet_directory_uri() . '/js/et_checkout_handler.js', '3.0.0',true );
    if (is_single(323)): wp_enqueue_style('clean-page', get_stylesheet_directory_uri() . '/clean_page_style.css', '3.0.0', false); endif;
}
add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );
?>
