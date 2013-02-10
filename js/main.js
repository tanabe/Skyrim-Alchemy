(function() {
  if (window.addEventListener) {
    window.addEventListener('hashchange', function() {
      $(document).find('tr').css('background-color', '#272b30');

      var targetName = location.hash.replace('#', '');
      var tr = $(document).find('a[name="' + targetName + '"]').closest('tr');
      console.log(tr);
      tr.css('background-color', '#891100');
      var currentScrollTop = $('body').scrollTop();
      var margin = 50;
      if (($('html').height() - currentScrollTop) - document.documentElement.clientHeight > margin ) {
        $('body').scrollTop(currentScrollTop - margin);
      }
    });
  }
})();
