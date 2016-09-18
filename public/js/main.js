$(document).ready(function() {

  // Place JavaScript code here...

});

$(document).on('click', '#search-btn', () => {
  window.location = '?search=' + $('#search-query').val()
})

$(document).on('keypress', '#search-query', (e) => {
  if (e.keyCode == 13) {
    window.location = '?search=' + $('#search-query').val()
  }
})
