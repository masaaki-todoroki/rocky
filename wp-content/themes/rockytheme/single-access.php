<?php get_header(); ?>

<div class="o-container u-margin-bottom-40">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo is_active_sidebar('primary-sidebar') ? 8 : 12 ?>@medium">
      <ul>
        <?php
        $current_page_id = $wp_query->get_queried_object_id();
        $args = array(
          'post_type' => 'access',
        );
        $access_posts = get_posts($args);
        foreach ( $access_posts as $post ) {
          setup_postdata($post);
          $current_class = null;
          $listed_page_id = null;
          $listed_page_id = $post->ID;
          if ( $listed_page_id == $current_page_id ) {
            $current_class = ' current_page_item';
          }
          ?>
          <li class="page_item<?php echo $current_class; ?>"><a href="<?php the_permalink() ?>"><?php the_title() ?></a></li>
        <?php
        }	
        ?>
      </ul>
      <main role="main">
        <?php if (have_posts()): while (have_posts()) : the_post(); ?>
          <article id="post-<?php the_ID(); ?>" class="pages">
            <h6>ACCESS</h6>
            <section class="pages__ttl">
              <?php the_title( '<h1><span class="">', '</span></h1>' ); ?>
            </section>
            <section class="pages__body">
              <div>
                <?php if( get_field('map') ): ?>
                  <img src="<?php the_field('map'); ?>" />
                <?php endif; ?>
              </div>
              <table>
                  <tr>
                      <th>所在地</th>
                      <td><?php echo  nl2br(get_field('location')); ?></td>
                  </tr>
                  <tr>
                      <th>電話</th>
                      <td><?php echo  nl2br(get_field('tel')); ?></td>
                  </tr>
                  <tr>
                      <th>アクセス</th>
                      <td><?php echo  nl2br(get_field('access')); ?></td>
                  </tr>
                  <tr>
                      <th>駐車場</th>
                      <td><?php echo nl2br(get_field('parking-lot')); ?></td>
                  </tr>
                  <?php if( get_field('overtime-entrance') ): ?>
                    <tr>
                        <th>時間外出入口</th>
                        <td><?php echo nl2br(get_field('overtime-entrance')); ?></td>
                    </tr>
                  <?php endif; ?>
              </table>
            </section>
          </article>
        <?php endwhile;endif; ?>
      </main>
      <div class="local-navigation">
        <?php the_breadcrumbs(); ?>
      </div>
    </div>
    <?php if (is_active_sidebar('primary-sidebar')) : ?>
      <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium">
        <?php get_sidebar(); ?>
      </div>
    <?php endif; ?>
  </div>
</div>
<?php get_footer(); ?>