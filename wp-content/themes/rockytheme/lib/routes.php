<?php

/**
 * リライトルールの追加
 * codex: https://wpdocs.osdn.jp/Rewrite_API/add_rewrite_rule
 */
function custom_rewrite_rule() {
  // http://example.com/news/[数字4つ]/[スラッシュと数字以外の文字列] のような場合に、年とタームで絞り込んだnewsのアーカイブページを表示
  add_rewrite_rule( 'news/([0-9]{4})/([^/0-9]+)/?$', 'index.php?post_type=news&year=$matches[1]&news_taxonomy=$matches[2]', 'top' );
  add_rewrite_rule( 'news/([0-9]{4})/([^/0-9]+)/page/([0-9]{1,})/?$', 'index.php?post_type=news&year=$matches[1]&news_taxonomy=$matches[2]&paged=$matches[3]', 'top' );
}
add_action( 'init', 'custom_rewrite_rule', 10, 0 );

/**
 * 投稿タイプnewsのアーカイブページのリンクを取得
 * 引数に年が渡されれば http://example.com/news/[年]
 * 引数に年とタームのスラッグが渡されれば http://example.com/news/[年]/[タームのスラッグ]
 */
function get_news_archive_link( $year = null, $term_slug = null ) {
  $year = esc_html($year);
  $additional_path = ! is_null( $year ) ? ( ! is_null( $term_slug ) ? $year . '/' . $term_slug : $year ) : '';
  return get_post_type_archive_link( 'news' ) . $additional_path;
}
