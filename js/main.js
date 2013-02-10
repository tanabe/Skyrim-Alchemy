(function() {
  var hilight = function() {
    $(document).find('tr').css('background-color', '#272b30');
    var targetName = decodeURI(location.hash.replace('#', ''));
    var anchors = $(document).find('td.effectName a, td.ingredientName a');
    anchors.each(function(index, element) {
      if (element.name === targetName) {
        var tr = $(element).closest('tr');
        tr.css('background-color', '#891100');
      }
    });
    var currentScrollTop = $('body').scrollTop();
    var margin = 50;
    if (($('html').height() - currentScrollTop) - document.documentElement.clientHeight > margin ) {
      $('body').scrollTop(currentScrollTop - margin);
    }
  };

  if (window.addEventListener) {
    window.addEventListener('hashchange', function() {
        hilight();
    });
  } else {
    window.attachEvent('onhashchange', function() {
        hilight();
    });
  }
})();
