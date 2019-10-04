<?php
function _themename_assets()
{
  wp_enqueue_style('_themename-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), '1.0.0', 'all');
  wp_enqueue_script('_themename-scripts', get_template_directory_uri() . '/dist/assets/js/bundle.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', '_themename_assets');

function _themename_admin_assets()
{
  wp_enqueue_style('_themename-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), '1.0.0', 'all');
  wp_enqueue_script('_themename-admin-scripts', get_template_directory_uri() . '/dist/assets/js/admin.js', array(), '1.0.0', true);
}
add_action('admin_enqueue_scripts', '_themename_admin_assets');

function _themename_customize_preview_js()
{
  wp_enqueue_script('_themename-customize-preview', get_template_directory_uri() . '/dist/assets/js/customize-preview.js', array('customize-preview', 'jquery'), '1.0.0', true);
}
add_action('customize_preview_init', '_themename_customize_preview_js');

//contact form 7 確認画面と完了画面のカスタマイズ
function contact_script()
{
  if (is_page(74)) {
    wp_enqueue_style('_themename-contactform-stylesheet', get_template_directory_uri() . '/dist/assets/css/contactform.css', array(), '1.0.0', 'all');
    wp_enqueue_script('_themename-contactform-inquiry-scripts', get_template_directory_uri() . '/dist/assets/js/contactform-inquiry.js', array('jquery'), '1.0.0', true);
  }
  elseif(is_page(78)) {
  	wp_enqueue_style('_themename-contactform-stylesheet', get_template_directory_uri() . '/dist/assets/css/contactform.css', array(), '1.0.0', 'all');
    wp_enqueue_script('_themename-contactform-production-scripts', get_template_directory_uri() . '/dist/assets/js/contactform-production.js', array('jquery'), '1.0.0', true);
  }
  elseif(is_page(86)) {
  	wp_enqueue_style('_themename-contactform-stylesheet', get_template_directory_uri() . '/dist/assets/css/contactform.css', array(), '1.0.0', 'all');
    wp_enqueue_script('_themename-contactform-recruit-scripts', get_template_directory_uri() . '/dist/assets/js/contactform-recruit.js', array('jquery'), '1.0.0', true);
  }
  elseif(is_page(300)) {
  	wp_enqueue_style('_themename-contactform-stylesheet', get_template_directory_uri() . '/dist/assets/css/contactform.css', array(), '1.0.0', 'all');
    wp_enqueue_script('_themename-contactform-mynumber-scripts', get_template_directory_uri() . '/dist/assets/js/contactform-mynumber.js', array('jquery'), '1.0.0', true);
  }
  elseif(is_page(104)) {
  	wp_enqueue_style('_themename-contactform-stylesheet', get_template_directory_uri() . '/dist/assets/css/contactform.css', array(), '1.0.0', 'all');
    wp_enqueue_script('_themename-contactform-ecd-scripts', get_template_directory_uri() . '/dist/assets/js/contactform-ecd.js', array('jquery'), '1.0.0', true);
  }
  elseif(is_page(113)) {
  	wp_enqueue_style('_themename-contactform-stylesheet', get_template_directory_uri() . '/dist/assets/css/contactform.css', array(), '1.0.0', 'all');
    wp_enqueue_script('_themename-contactform-ir-scripts', get_template_directory_uri() . '/dist/assets/js/contactform-ir.js', array('jquery'), '1.0.0', true);
  }
}
add_action('wp_head', 'contact_script');
