<?php
/*
Template Name: page-news
*/
?>

<?php get_header(); ?>

<div class="o-container u-margin-bottom-40">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo is_active_sidebar('primary-sidebar') ? 8 : 12 ?>@medium">
      <main role="main">
        <?php // 年別アーカイブリストを表示
          $year=NULL; // 年の初期化
          $year_args = array( // クエリの作成
            'post_type' => 'news', // 投稿タイプの指定
            'orderby' => 'date', // 日付順で表示
            'posts_per_page' => 20 // すべての投稿を表示
          );
          $the_query = new WP_Query($year_args); if($the_query->have_posts()){ // 投稿があれば表示
            echo '<ul class="year-list">';
            while ($the_query->have_posts()): $the_query->the_post(); // ループの開始
              if ($year != get_the_date('Y')){ // 同じ年でなければ表示
                $year = get_the_date('Y'); // 年の取得
                echo '<li><a href="'.home_url( '/', 'http' ).'news/'.$year.'">'.$year.'年</a></li>'; // 年別アーカイブリストの表示
              }
            endwhile; // ループの終了
            echo '</ul>';
          }
        ?>



        <ul class="year-posts">
          <?php 
            $posts = get_posts( $year_args );
            if( $posts ) : foreach( $posts as $post) : setup_postdata( $post ); ?>
              <li>
                <?php the_time( 'Y年m月d日' ); ?>
                <?php the_author_meta( 'display_name' ); ?>
                <?php if ( has_post_thumbnail() ) : ?>
                  <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
                <?php endif; ?>
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
              </li>
            <?php endforeach; ?>
          <?php else : //記事が無い場合 ?>
            <li><p>記事はまだありません。</p></li>
          <?php endif;
          wp_reset_postdata(); //クエリのリセット ?>
        </ul>
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