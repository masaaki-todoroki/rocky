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
        <form>
          <select onChange="location.href=value;">
            <?php
              $archives = get_archives_by_year();
              foreach($archives as $archive):
            ?>
            <option value="<?php echo home_url() ?>/news/<?php echo esc_html($archive->year) ?>"><?php echo esc_html($archive->year.'年') ?></option>
            <?php endforeach; ?>
          </select>
        </form>

        <ul class="">
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
                </a>
              </article>
            <?php endwhile; ?>
          <?php endif; ?>
          <?php wp_reset_query(); ?>
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