<?php
function my_custom_scripts() {
    wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/js/CamSkin.js', array(), rand(1, 100),true );
    wp_enqueue_script( 'custom-js-2', get_stylesheet_directory_uri() . '/js/BackSkin.js', array(), rand(1, 100),true );
    wp_enqueue_script( 'custom-js-3', get_stylesheet_directory_uri() . '/js/MobileObject.js', array(), rand(1, 100),true );
    wp_enqueue_script( 'custom-js-4', get_stylesheet_directory_uri() . '/js/CreatedMobileObjects.js', array(), rand(1, 100),true );
    wp_enqueue_script( 'custom-js-5', get_stylesheet_directory_uri() . '/js/main.js', array(), rand(1, 100),true );
    wp_enqueue_script( 'cleaner-js', get_stylesheet_directory_uri() . '/js/cleaner.js', array(), rand(1, 100),true );
    wp_enqueue_script( 'et-checkout-js', get_stylesheet_directory_uri() . '/js/et_checkout_handler.js', array(), rand(1, 100),true );
    if (is_single(323)): wp_enqueue_style('clean-page', get_stylesheet_directory_uri() . '/clean_page_style.css', array(), rand(1, 100), false); endif;
}
add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );
?>
