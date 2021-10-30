<?php

function my_custom_scripts() {
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
    wp_enqueue_style('chart-cleaner', get_stylesheet_directory_uri() . '/chart_cleaner.css', array(), rand(100, 1000) . '.' . rand(0, 1000), 'all');
}
add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );

// Add input fields
add_action('woocommerce_before_add_to_cart_button', 'hidden_input_field');
function hidden_input_field() { ?>
    <input style="display: none;" type="text" id="back-skin-material" name="back-skin-material" value=''>
    <input style="display: none;" type="text" id="cam-skin-material" name="cam-skin-material" value=''>
    
    <?php if(is_single(517)){?>
        <div class="et-d-flex" style="padding-bottom: 20px; margin-bottom: 20px; border-bottom: 1px solid #bbb; flex-direction: column;">
            <h3 style="padding: 0; font-style: bold;">Unesite model vašeg telefona</h3>
            <input type="text" placeholder="Npr. Samsung A10" id="phone-model-hidden" name="phone-model" value=''>
        </div>
    <?php }else { ?>
        <input style="display: none;" type="text" id="phone-model-hidden" name="phone-model" value=''>
    <?php }
}

// Add error handler
add_filter('woocommerce_add_to_cart_validation', 'no_skin_error', 10, 3);
function no_skin_error($passed, $product_id, $qty) {
    if(isset($_POST['phone-model']) == '' && sanitize_text_field($_POST['phone-model']) == ''){
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

function main_template_shortcode() {
   $content = '<div class="app et-d-flex">
    <div class="et-container et-d-flex mobile-only-flex">
        <div class="et-mobile-container">
            <figure id="et-figure" class="et-d-flex">
                <div class="inner-holder">
                    <svg style="background: #0c0c0c;" class="main-svg" viewBox="0 0 335 713" width="335" height="720">
                        <image width="335" height="720" class="main-image"
                            href="http://infinityskins.ba/wp-content/uploads/2021/06/base-3.jpg"></image>
                        <image class="cam-image" width="94" height="165" x="33" y="27" href=""></image>
                        <image class="back-image" width="335" height="713" x="0" y="2" href=""></image>
                    </svg>
                </div>
            </figure>
        </div>
        <div class="et-picker-container et-d-flex">
            <div class="et-card et-d-flex"
                style="margin-top: 10px; padding: 0px; background: transparent; border-bottom: none;">
                <small style="margin-right: 10px;">Unesite vaš</p>
                    <p>model&nbsp;telefona</p>
                    <p>
                </small></p>
                <div class="et-sub-container et-d-flex"
                    style="flex-direction: column; width: 100%; border-radius: 5px;"><input id="phone-model"
                        style="color: white;" type="text" placeholder="Npr. Samsung A10" /></div>
                </p>
            </div>
            <div id="et-back-skin" class="et-card et-card-back-skin et-d-flex"
                style="font-size: 18px; justify-content: space-between;">
                <p style="color: #9d94c9;"><strong>POZADINA</strong></p>
                <div class="et-sub-container et-d-flex">
                    9.90 KM</p>
                    <p class="et-d-flex et-button-style et-add-ribbon et-d-flex">DODAJ</p>
                    </p>
                </div>
                <div class="clicable-et-card"></div>
                </p>
            </div>
            <div id="et-cam-skin" class="et-card et-card-camera-skin et-d-flex"
                style="font-size: 18px; justify-content: space-between;">
                <p style="color: #9d94c9;"><strong>KAMERA</strong></p>
                <div class="et-sub-container et-d-flex">
                    2.90 KM</p>
                    <p class="et-d-flex et-button-style et-add-ribbon et-d-flex">DODAJ</p>
                    </p>
                </div>
                <div class="clicable-et-card"></div>
                </p>
            </div>
            <div class="et-card-buy-button et-card et-d-flex" style="font-size: 18px; justify-content: flex-end;">
                <div class="et-sub-container et-d-flex">
                    <p class="et-d-flex et-button-style et-add-ribbon et-buy-button">
                        <span class="cart-button-image"><br />
                            <img src="https://infinityskins.ba/wp-content/uploads/2021/06/shopping-cart-2.png"
                                alt="" /><br />
                        </span><br />
                        Kupi
                    </p>
                    </p>
                </div>
                </p>
            </div>
            <p>
                <!--Choose Skin Popup Window-->
            </p>
            <div class="et-main-popup-window et-d-flex et-close-popup-window">
                <div class="et-section section-one">
                    <div class="et-back-button et-d-flex"><img
                            src="https://infinityskins.ba/wp-content/uploads/2021/06/go-back-arrow.png" alt=""
                            width="25" /></div>
                    <div class="et-choose-style-title et-d-flex" style="flex-direction: column;"><small>Pozadinski
                            Skinovi</small><strong>ODABERI STIL</strong></div>
                    </p>
                </div>
                <div class="et-section section-two">
                    <ul>
                        <li class="material-category">
                            <div id="carbon-gray" class="material-card"><img
                                    src="https://infinityskins.ba/wp-content/uploads/2021/06/carbon-gray-sample.jpg"
                                    alt="" /></div>
                            <div id="carbon-red" class="material-card"><img
                                    src="https://infinityskins.ba/wp-content/uploads/2021/05/Screenshot_2.png" alt="" />
                            </div>
                            <div id="carbon-black" class="material-card"><img
                                    src="https://infinityskins.ba/wp-content/uploads/2021/05/Screenshot_4.png" alt="" />
                            </div>
                            <div id="carbon-white" class="material-card"><img
                                    src="https://infinityskins.ba/wp-content/uploads/2021/06/carbon-white-sample.jpg"
                                    alt="" /></div>
                            <div id="carbon-yellow" class="material-card"><img
                                    src="https://infinityskins.ba/wp-content/uploads/2021/06/yellowCarbon-Sample.jpg"
                                    alt="" /></div>
                            <div id="leopard" class="material-card"><img
                                    src="http://infinityskins.ba/wp-content/uploads/2021/07/tiger-skin-sample.png"
                                    alt="" /></div>
                        </li>
                        <li class="material-category"></li>
                        <li class="material-category"></li>
                        <li class="material-category"></li>
                        <li class="material-category"></li>
                    </ul>
                </div>
                <div class="et-d-flex et-section section-three" style="justify-content: space-between;">
                    <div class="et-d-flex et-delete-material"><img
                            src="https://infinityskins.ba/wp-content/uploads/2021/06/delete.png" alt="" width="20" />
                    </div>
                    <div class="et-d-flex et-button et-button-style et-add-skin-button">ODABERI</div>
                    </p>
                </div>
                </p>
            </div>
            </p>
        </div>
        </p>
    </div>
</div>';

    echo $content;
}

add_shortcode('evertech', 'main_template_shortcode');

?>