// $('li').on('click', function(e) {
//    $(this).css({
//       textDecorationLine: 'line-through',
//       color: 'darkgray'
//    })
// })

// Adds or removes a class from an li once it is clicked
// Had to use ul as the listener since we can only add listeners in jQuery that
//    exist when the page loads. The ul exists, but any added Todo li's don't exist
//    yet, so we can't use li as the selecter. This new format adds a click
//    listener on the ul, but adding the li after the click means only fire when
//    an li inside a ul is clicked
$('ul').on('click', 'li', function(e) {
      $(this).toggleClass('completed')
})

// Delete the Todo when clicking on the X in the span
$('ul').on('click', 'span', function(e) {
   // This stops the click listener from bubbling up to parent items
   e.stopPropagation()
   $(this).parent().fadeOut(300, function() {
      $(this).remove()
   })
})

$('input[type="text"]').keypress(function(e) {
   // Checks to see if the enter key has been pressed
   if (e.which === 13) {
      $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + $(this).val() + '</li>')
      $(this).val("")
   }
})

$('.fa-plus').on('click', function() {
   $('input').toggle()
})