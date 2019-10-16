<?php

function extraction_post_type_of_news($query) {
	if (is_admin() || ! $query->is_main_query()){
		return;
	}

	if ($query->is_post_type_archive('news')) {
		$query->set('posts_per_page', '12');
		return;
	}

	if ( $query->is_home() ) {
		$query->set( 'post_type', 'news' );
		$query->set( 'posts_per_page', '3' );
	}
}
add_action('pre_get_posts', 'extraction_post_type_of_news');
