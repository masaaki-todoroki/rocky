<?php get_header(); ?>

<div class="o-container u-margin-bottom-40">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo is_active_sidebar('primary-sidebar') ? 8 : 12 ?>@medium">
      <main role="main">
        <?php if(have_posts()): while(have_posts()):the_post(); ?>
          <h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
          <time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y.m.d'); ?></time>
          <p><?php the_category(', '); ?></p>
          <p><?php the_content('Read more'); ?></p>
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