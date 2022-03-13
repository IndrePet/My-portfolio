let mix = require('laravel-mix');

mix.js('src/js/main.js', 'public').sass('src/sass/main.scss', 'public');
mix.disableNotifications();
