<?php
$footer_layout = '3,3,3,3';
$columns = explode(',', $footer_layout);
$footer_bg = _themename_sanitize_footer_bg(get_theme_mod('_themename_footer_bg', 'light'));
$widgets_active = false;
foreach ($columns as $i => $column) {
  if (is_active_sidebar('footer-sidebar-' . ($i + 1))) {
    $widgets_active = true;
  }
}
?>
<?php if ($widgets_active) : ?>
  <div class="c-footer c-footer--<?php echo $footer_bg; ?>">
    <div class="o-container">
      <div class="o-row">
        <?php foreach ($columns as $i => $column) : ?>
          <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo $column ?>@medium">
            <?php if (is_active_sidebar('footer-sidebar-' . ($i + 1))) : ?>
              <?php dynamic_sidebar('footer-sidebar-' . ($i + 1)); ?>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
<?php endif; ?>