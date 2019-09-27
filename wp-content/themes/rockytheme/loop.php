<?php if (have_posts()) : ?>
  <?php while (have_posts()) : ?>
    <?php the_post(); ?>
    <?= get_post_meta($post->ID, 'favorite', true) ?>
    <?php get_template_part('template-parts/post/content'); ?>
  <?php endwhile; ?>
  <?php the_posts_pagination(); ?>
  <?php do_action('_themename_after_pagination'); ?>
<?php else : ?>
  <?php get_template_part('template-parts/post/content', 'none'); ?>
<?php endif; ?>