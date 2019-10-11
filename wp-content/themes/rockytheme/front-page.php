<?php get_header(); ?>

<div class="o-container u-margin-bottom-40">
    <div class="o-row">
        <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo is_active_sidebar('primary-sidebar') ? 8 : 12 ?>@medium">
            <main role="main">
                <ul class="">
                    <?php
                        $args= array(
                            'post_type' => 'news',
                            'posts_per_page' => 3,
                            'paged' => $paged
                        );
                        if(is_year()){
                            $setYear = get_the_date('Y');
                            $args['year'] = $setYear;
                        }
                        query_posts($args);
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
                    <?php wp_reset_query(); ?>
                </ul>
            </main>
            <a href="<?php echo home_url('news') ?>">VIEW MORE →</a>
        </div>
        <?php if (is_active_sidebar('primary-sidebar')) : ?>
            <div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium">
                <?php get_sidebar(); ?>
            </div>
        <?php endif; ?>
    </div>
</div>
<?php get_footer(); ?>