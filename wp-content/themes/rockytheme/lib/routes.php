<?php

/**
 * リライトルールの追加
 * codex: https://wpdocs.osdn.jp/Rewrite_API/add_rewrite_rule
 */
function custom_rewrite_rule() {
  // http://example.com/news/[数字4つ]/[スラッシュと数字以外の文字列] のような場合に、年とタームで絞り込んだnewsのアーカイブページを表示
  add_rewrite_rule( 'news/([0-9]{4})/([^/0-9]+)/?$', 'index.php?post_type=news&year=$matches[1]&news_taxonomy=$matches[2]', 'top' );
}
add_action( 'init', 'custom_rewrite_rule', 10, 0 );
