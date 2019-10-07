<?php get_header(); ?>

<div class="o-container u-margin-bottom-40">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo is_active_sidebar('primary-sidebar') ? 8 : 12 ?>@medium">
      <main role="main">
        <?php if(have_posts()): while(have_posts()):the_post(); ?>
          <article <?php post_class(); ?>>
            <?php if( has_post_thumbnail() ): ?>
              <figure>
                <?php the_post_thumbnail(); ?>
              </figure>
            <?php endif; ?>
            <?php
              $terms = get_the_terms($post->ID,'news_taxonomy');
              foreach( $terms as $term ) {
                echo '<a href="'.get_term_link($term->slug, 'news_taxonomy').'">'. 'CATEGORY TOP >' .'</a>';
              }
            ?>
            <time datetime="<?php echo esc_attr( get_the_date( DATE_W3C ) ); ?>">
              <i class="far fa-clock"></i>
              <?php echo esc_html( get_the_date() ); ?>
            </time>
            <span>
              <?php echo get_the_term_list($post->ID, 'news_taxonomy'); ?>
            </span>
            <br>
            <h1><?php the_title(); ?></h1>
            <?php the_content(); ?>
          </article>
        <?php endwhile; endif; ?>
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