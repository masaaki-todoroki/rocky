<?php get_header(); ?>

<div class="o-container u-margin-bottom-40">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo is_active_sidebar('primary-sidebar') ? 8 : 12 ?>@medium">
      <main role="main">
        <a href="<?php echo home_url('news') ?>">← ニュース トップ</a>
        <?php if(have_posts()): while(have_posts()):the_post(); ?>
          <article <?php post_class(); ?>>
            <h1><?php the_title(); ?></h1>
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
            <br>
            <?php the_content(); ?>
          </article>
        <?php endwhile; endif; ?>
      </main>
      <?php the_breadcrumbs(); ?>
    </div>
    <?php if (is_active_sidebar('primary-sidebar')) : ?>
      <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium">
        <?php get_sidebar(); ?>
      </div>
    <?php endif; ?>
  </div>
</div>
<?php get_footer(); ?>