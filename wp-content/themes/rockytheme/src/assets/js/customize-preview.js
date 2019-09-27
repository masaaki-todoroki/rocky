import $ from 'jquery';
import strip_tags from './helpers/strip.tags';

wp.customize('blogname', (value) => {
  value.bind((to) => {
    console.log(to);
    $('.c-header__blogname').html(strip_tags(to));
  })
});

wp.customize('_themename_site_info', (value) => {
  value.bind((to) => {
    console.log(to);
    $('.c-site-info__text').html(strip_tags(to, '<a>'));
  })
});
