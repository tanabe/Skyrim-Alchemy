#!/bin/bash

node src/export.js ingredients > src/ingredients.html
node src/export.js effects > src/effects.html
php src/source.html > index.html
