<?php

function function_to_add($query) {
  if($query->is_main_query()) {
    $query->set('posts_per_page', 20);
  }
}
add_action('pre_get_posts', 'function_to_add', 10, 1);