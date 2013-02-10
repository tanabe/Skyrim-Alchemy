var ingredients = (require('./ingredients.json')).ingredients;
var effects = (require('./effects.json')).effects;

var exportIngredients = function() {
  var html = '';
  for (var i = 0, length = ingredients.length; i < length; i++) {
    var row = '';
    var ingredient = ingredients[i];
    var name       = ingredient.name;
    var effects    = ingredient.effects;
    row = [
      '<tr>',
        '<td class="ingredientName">', '<a name=', name, '>', name, '</a>', '</td>',
        '<td>', '<a href=#', effects[0], '>', effects[0], '</a>', '</td>',
        '<td>', '<a href=#', effects[1], '>', effects[1], '</a>', '</td>',
        '<td>', '<a href=#', effects[2], '>', effects[2], '</a>', '</td>',
        '<td>', '<a href=#', effects[3], '>', effects[3], '</a>', '</td>',
      '</tr>'
    ].join('');
    html += row;
  }
  return html;
};

var getIngredients = function(effectName) {
  var result = [];
  for (var i = 0, length = ingredients.length; i < length; i++) {
    var ingredient = ingredients[i];
    var ingredientName    = ingredient.name;
    var ingredientEffects = ingredient.effects;
    for (var j = 0; j < effects.length; j++) {
      if (ingredientEffects[j] === effectName) {
        result.push(['<a href=#', ingredientName, '>', ingredientName, '</a>'].join(''));
        break;
      }
    }
  }
  return result;
};

var exportEffects = function() {
  var html = '';
  for (var i = 0, length = effects.length; i < length; i++) {
    var row = '';
    var name = effects[i];
    var ingredients = getIngredients(name);
    row = [
      '<tr>',
        '<td class="effectName">', '<a name=', name, '>', name, '</a>', '</td>',
        '<td>', ingredients.join(', ') , '</td>',
      '</tr>'
    ].join('');
    html += row;
  }
  return html;
};

switch (process.argv[2]) {
  case 'ingredients' :
    console.log(exportIngredients());
    break;
  case 'effects' :
    console.log(exportEffects());
    break;
}
