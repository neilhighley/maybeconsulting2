NODE_ENV=production browserify -t [ reactify --es6 ] main.js | uglifyjs > compiled.min.js

watchify -v -d -t [ reactify --es6 ] main.js -o compiled.js

http://pixelcog.github.io/parallax.js/