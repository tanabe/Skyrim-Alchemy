#!/bin/bash

node src/export.js ingredients ja > src/ingredients_ja.html
node src/export.js effects ja > src/effects_ja.html
php src/template_ja.html > ./public/ja/index.html

node src/export.js ingredients en > src/ingredients_en.html
node src/export.js effects en > src/effects_en.html
php src/template_en.html > ./public/en/index.html
