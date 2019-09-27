// $('li').on('click', function(e) {
//    $(this).css({
//       textDecorationLine: 'line-through',
//       color: 'darkgray'
//    })
// })

// Adds or removes a class from an li once it is clicked0
$('li').on('click', function(e) {
   $(this).toggleClass('completed')
})




// This will toggle the input between display and hide
// $('input').toggle()