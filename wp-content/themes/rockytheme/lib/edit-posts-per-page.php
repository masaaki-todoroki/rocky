<?php
function edit_posts_per_page ($posts_per_page) {
	return 50;
}
add_filter('edit_posts_per_page', 'edit_posts_per_page');
