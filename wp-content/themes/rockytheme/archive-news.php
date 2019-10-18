<?php
/*
Template Name: archive-news
*/
?>

<?php get_header(); ?>

<div class="o-container u-margin-bottom-40">
	<div class="o-row">
		<div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo is_active_sidebar('primary-sidebar') ? 8 : 12 ?>@medium">
			<main role="main">
				<span>年</span>
				<?php
				$url = esc_url($_SERVER['REQUEST_URI']);
				$current_year = get_query_var( 'year' );
				$current_term = get_query_var( 'news_taxonomy' );
				?>
				<form>
					<select onChange="location.href=value;">
						<!-- <option value=""> - </option> -->
						<?php
							$archives = get_archives_by_year();
							foreach($archives as $archive):
						?>
						<option value="<?php echo get_news_archive_link( $archive->year ); ?>"
							<?php
								if (strpos($url, esc_html($archive->year)) !== false) {
									echo 'selected';
								} else {
									echo '';
								}
							?>
						>
							<?php echo esc_html($archive->year.'年') ?>
						</option>
						<?php endforeach; ?>
					</select>
					<?php if ( is_year() ) : // news_taxonomyタクソノミーでの絞り込みは、年で絞り込んでいるときだけ表示 ?>
					<select onChange="location.href=value;">
						<option value=""> - </option>
							<?php
								// 登録されているnews_taxonomyタクソノミーのタームを全て取得
								$terms = get_terms( 'news_taxonomy', array(
									'hide_empty' => false,
								));
								foreach( $terms as $term ):
							?>
						<option
							value="<?php echo get_news_archive_link( $current_year, $term->slug ); ?>"
							<?php echo $current_term === $term->slug ? ' selected' : '' ?>
						>
							<?php echo $term->name ?>
						</option>
						<?php endforeach; ?>
					<?php endif; ?>
					</select>
				</form>

				<?php if($current_year == 0): ?>
					<?php
						$lastarchives = get_archives_by_year();
						foreach($lastarchives as $lastarchive){
							break;
						}
					?>
					<a
						href="<?php echo get_news_archive_link( $lastarchive->year ); ?>"
						<?php echo $current_term === '' ? ' class="active"' : '' ?>
					>
						すべて
					</a>
					<?php
						// 登録されているnews_taxonomyタクソノミーのタームを全て取得
						$terms = get_terms( 'news_taxonomy', array(
							'hide_empty' => false,
						) );
						foreach( $terms as $term ):
					?>
					<a
						href="<?php echo get_news_archive_link( $lastarchive->year, $term->slug ); ?>"
						<?php
							if (strpos($url, esc_html($term->slug)) !== false) {
								echo 'class="active"';
							} else {
								echo '';
							}
						?>
					>
						<?php echo $term->name ?>
					</a>
					<?php endforeach; ?>
				<?php else: ?>
					<a
						href="<?php echo get_news_archive_link( $current_year ); ?>"
						<?php echo $current_term === '' ? 'class="active"' : '' ?>
					>
						すべて
					</a>
					<?php
						// 登録されているnews_taxonomyタクソノミーのタームを全て取得
						$terms = get_terms( 'news_taxonomy', array(
							'hide_empty' => false,
						) );
						foreach( $terms as $term ):
					?>
					<a
						href="<?php echo get_news_archive_link( $current_year, $term->slug ); ?>"
						<?php
							if (strpos($url, esc_html($term->slug)) !== false) {
								echo 'class="active"';
							} else {
								echo '';
							}
						?>
					>
						<?php echo $term->name ?>
					</a>
					<?php endforeach; ?>
				<?php endif; ?>


				<ul class="" style="margin-top: 60px;">
				<?php
					// $args= array(
					// 	'post_type' => 'news',
					// 	'posts_per_page' => 12,
					// 	'paged' => $paged
					// );
					// if(is_year()){
					// 	$setYear = get_the_date('Y');
					// 	$args['year'] = $setYear;
					// }
					// if ( $current_term ) {
					// 	$args['news_taxonomy'] = $current_term;
					// }
					// query_posts($args);
				?>
				<?php if (have_posts()) : ?>
					<?php while (have_posts()) : ?>
						<?php the_post(); ?>
						<article <?php post_class(); ?>>
							<a href="<?php the_permalink(); ?>">
								<?php if( has_post_thumbnail() ): ?>
									<figure>
										<?php the_post_thumbnail(); ?>
									</figure>
								<?php endif; ?>
								<h2><?php the_title(); ?></h2>
								<time datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>">
									<?php echo esc_html( get_the_date() ); ?>
								</time>
								<span>
									<?php
										if ($terms = get_the_terms($post->ID, 'news_taxonomy')) {
											foreach ( $terms as $term ) {
											echo esc_html($term->name);
											}
										}
									?>
								</span>
							</a>
						</article>
					<?php endwhile; ?>
				<?php endif; ?>
				<?php //wp_reset_query(); ?>
				</ul>

				<div class="pagination">
					<?php global $wp_rewrite;
					$paginate_base = get_pagenum_link(1);
					if(strpos($paginate_base, '?') || ! $wp_rewrite->using_permalinks()){
						$paginate_format = '';
						$paginate_base = add_query_arg('paged','%#%');
					}
					else{
						$paginate_format = (substr($paginate_base,-1,1) == '/' ? '' : '/') .
						user_trailingslashit('page/%#%/','paged');;
						$paginate_base .= '%_%';
					}
					echo paginate_links(array(
						'base' => $paginate_base,
						'format' => $paginate_format,
						'total' => $wp_query->max_num_pages,
						'mid_size' => 2,
						'current' => ($paged ? $paged : 1),
						'prev_text' => '«',
						'next_text' => '»',
					)); ?>
				</div>
			</main>
		</div>
		<?php if (is_active_sidebar('primary-sidebar')) : ?>
			<div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium">
				<?php get_sidebar(); ?>
			</div>
		<?php endif; ?>
	</div>
</div>
<?php get_footer(); ?>
