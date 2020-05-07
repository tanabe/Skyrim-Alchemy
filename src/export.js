let target = process.argv[2];
let language = process.argv[3];

let ingredients = (require(`./ingredients_${language}.json`)).ingredients;
let effects = (require(`./effects_${language}.json`)).effects;

const toSnakeCase = (string) => {
    return string.replace(/ /g, '_');
};

const exportIngredients = () => {
  var html = '';
  for (var i = 0, length = ingredients.length; i < length; i++) {
    var row = '';
    var ingredient = ingredients[i];
    var name       = ingredient.name;
    var effects    = ingredient.effects;
    row = [
      '<tr>',
        '<td class="ingredientName">', '<a name=', toSnakeCase(name), '>', name, '</a>', '</td>',
        '<td>', '<a href=#', toSnakeCase(effects[0]), '>', effects[0], '</a>', '</td>',
        '<td>', '<a href=#', toSnakeCase(effects[1]), '>', effects[1], '</a>', '</td>',
        '<td>', '<a href=#', toSnakeCase(effects[2]), '>', effects[2], '</a>', '</td>',
        '<td>', '<a href=#', toSnakeCase(effects[3]), '>', effects[3], '</a>', '</td>',
      '</tr>'
    ].join('');
    html += row;
  }
  return html;
};

const getIngredients = (effectName) => {
  var result = [];
  for (var i = 0, length = ingredients.length; i < length; i++) {
    var ingredient = ingredients[i];
    var ingredientName    = ingredient.name;
    var ingredientEffects = ingredient.effects;
    for (var j = 0; j < effects.length; j++) {
      if (ingredientEffects[j] === effectName) {
        result.push(['<a href=#', toSnakeCase(ingredientName), '>', ingredientName, '</a>'].join(''));
        break;
      }
    }
  }
  return result;
};

const exportEffects = () => {
  var html = '';
  for (var i = 0, length = effects.length; i < length; i++) {
    var row = '';
    var name = effects[i];
    var ingredients = getIngredients(name);
    row = [
      '<tr>',
        '<td class="effectName">', '<a name=', name.replace(/ /g, '_'), '>', name, '</a>', '</td>',
        '<td>', ingredients.join(', ') , '</td>',
      '</tr>'
    ].join('');
    html += row;
  }
  return html;
};


switch (target) {
  case 'ingredients' :
    console.log(exportIngredients());
    break;
  case 'effects' :
    console.log(exportEffects());
    break;
}
