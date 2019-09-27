// $('li').on('click', function(e) {
//    $(this).css({
//       textDecorationLine: 'line-through',
//       color: 'darkgray'
//    })
// })

// Adds or removes a class from an li once it is clicked
$('li').on('click', function(e) {
      $(this).toggleClass('completed')
})

// Delete the Todo when clicking on the X in the span
$('span').on('click', function(e) {
   // This stops the click listener from bubbling up to parent items
   e.stopPropagation()
   $(this).parent().fadeOut(300, function() {
      $(this).remove()
   })
})





// This will toggle the input between display and hide
// $('input').toggle()