<?php
/*
Template Name: archive-news
*/
?>

<?php
ini_set("display_errors", 1);
error_reporting(E_ALL);
?>

<?php get_header(); ?>

<div class="o-container u-margin-bottom-40">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo is_active_sidebar('primary-sidebar') ? 8 : 12 ?>@medium">
      <main role="main">
      <ul class="year-archives-list">
          <?php
            $archives = get_archives_by_year();
            foreach($archives as $archive):
          ?>
          <li>
            <a href="<?php echo home_url() ?>/news/<?php echo esc_html($archive->year) ?>"><?php echo esc_html($archive->year) ?></a>
          </li>
          <?php endforeach; ?>
        </ul>

        <ul class="year-posts">
          <?php if (have_posts()) : ?>
            <?php while (have_posts()) : ?>
              <?php the_post(); ?>
              <?php get_template_part('template-parts/post/content'); ?>
            <?php endwhile; ?>
          <?php endif; ?>
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
            'mid_size' => 4,
            'current' => ($paged ? $paged : 1),
            'prev_text' => '« 前へ',
            'next_text' => '次へ »',
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