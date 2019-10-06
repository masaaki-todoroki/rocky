<?php

function function_to_add($query) {
  if($query->is_main_query()) {
    $query->set('posts_per_page', 12);
  }
  if($query->is_year()){
    $query->set('posts_per_page', 12);
  }
  if($query -> is_post_type_archive('news')){
    $query -> set('posts_per_page', 12);
    $query -> set('order','DESC');
    $query -> set('orderby', 'date');
  }
  if ($query -> is_tax('information')) {
    $query -> set('posts_per_page', 12);
    $query -> set('order', 'DESC');
    $query -> set('orderby', 'date');
  }
  if ($query -> is_tax('notice')) {
    $query -> set('posts_per_page', 12);
    $query -> set('order', 'DESC');
    $query -> set('orderby', 'date');
  }
  if ($query -> is_tax('warning')) {
    $query -> set('posts_per_page', 12);
    $query -> set('order', 'DESC');
    $query -> set('orderby', 'date');
  }
}
add_action('pre_get_posts', 'function_to_add', 10, 1);
