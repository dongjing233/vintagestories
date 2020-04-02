$('#form').submit(function(e) {
  $('#name').text($("#name-input").val());

  // Prevent reload page
  e.preventDefault();
});

$('#form').submit(function(e) {
  $('#comment').text($("#comment-input").val());

  // Prevent reload page
  e.preventDefault();
});