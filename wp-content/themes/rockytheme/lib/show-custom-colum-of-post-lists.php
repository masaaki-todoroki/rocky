<?php

function add_custom_column( $columns ) {
  $date_escape = $columns['date'];
  unset($columns['date']);
  $columns['thumbnail'] = 'アイキャッチ画像';
  $columns['news_taxonomy'] = 'タグ';
  $columns['date'] = $date_escape;
  return $columns;
}
add_filter('manage_news_posts_columns', 'add_custom_column');

function add_custom_column_id($column_name, $id) {
  if ( 'thumbnail' === $column_name ) {
    $thumb_id  = get_post_thumbnail_id( $id );
    if ( $thumb_id ) {
        $thumb_img = wp_get_attachment_image_src( $thumb_id, 'medium' );
        echo '<img src="',$thumb_img[0],'" width="160px">';
    } else {
        echo 'アイキャッチ画像が設定されていません';
    }
  }
  if( $column_name == 'news_taxonomy' ) {
    echo get_the_term_list($id, 'news_taxonomy', '', ', ');
  }
}
add_action('manage_news_posts_custom_column', 'add_custom_column_id', 10, 2);
