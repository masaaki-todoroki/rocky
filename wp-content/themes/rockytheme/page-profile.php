<?php get_header(); ?>

<div class="o-container u-margin-bottom-40">
  <div class="o-row">
    <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo is_active_sidebar('primary-sidebar') ? 8 : 12 ?>@medium">
      <main role="main">
        <?php if (have_posts()): while (have_posts()) : the_post(); ?>
          <article id="" class="pages">
            <section class="pages__ttl">
              <h1>ABOUT.概要・沿革</h1>
            </section>
            <section class="pages__body">
              <h2>会社概要</h2>
              <table>
                  <tr>
                      <th>会社名</th>
                      <td><?php echo  nl2br(get_field('company-name')); ?></td>
                  </tr>
                  <tr>
                      <th>設立</th>
                      <td><?php echo  nl2br(get_field('establishment')); ?></td>
                  </tr>
                  <tr>
                      <th>代表者</th>
                      <td><?php echo  nl2br(get_field('president')); ?></td>
                  </tr>
                  <tr>
                      <th>役員</th>
                      <td><?php echo nl2br(get_field('board-member')); ?></td>
                  </tr>
                  <tr>
                      <th>資本金</th>
                      <td><?php echo nl2br(get_field('capital')); ?></td>
                  </tr>
                  <tr>
                      <th>売上高</th>
                      <td><?php echo nl2br(get_field('amount-of-sales')); ?></td>
                  </tr>
                  <tr>
                      <th>社員数</th>
                      <td><?php echo nl2br(get_field('number-of-employees')); ?></td>
                  </tr>
                  <tr>
                      <th>事業内容</th>
                      <td><?php echo nl2br(get_field('business-description')); ?></td>
                  </tr>
                  <tr>
                      <th>部門</th>
                      <td><?php echo nl2br(get_field('department')); ?></td>
                  </tr>
                  <tr>
                      <th>所在地</th>
                      <td><?php echo nl2br(get_field('location')); ?></td>
                  </tr>
                  <tr>
                      <th>主要取引先</th>
                      <td><?php echo nl2br(get_field('main-customer')); ?></td>
                  </tr>
                  <tr>
                      <th>株主</th>
                      <td><?php echo nl2br(get_field('shareholder')); ?></td>
                  </tr>
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