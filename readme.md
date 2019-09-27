# Version 1: Section 20: Chapter 220: Folder Structure
   Made folder structure with the command line
   Downloaded jquery-3.4.1.min.js instead of the 2.1.4.min.js that he used since
      that version is no longer supported
   Added default .css and .js files

# Version 2: Section 20: Chapter 221: Todo List: Basic HTML
   Made a <div></div>
   Inside that <div> made an:
      <h1></h1>
      <ul>
         <li> <span></span> </li>
      </ul>
   Did some basic css styling. Will save the rest of the styling for last.

# Version 3: Section 20: Chapter 222: Todo List: Marking Completion
   Add the click listeners to the li's. I went ahead and used jQuery .toggleClass
      to line through the text and change the color to dark gray and back on click.

# Version 4: Section 20: Chapter 223: Todo List: Deleting Todos
   Added a click listener on each <span> X </span> and then used $(this).parent().remove()
      to delete the parent <li></li> from the DOM
   Add a fadeout when the item is deleted

# Version 5: Section 20: Chapter 225: Todo List: Creating Todos
   Learned how to add click listeners to a parent element, but have it only fire
      on a certain child element.
      $('ul').on('click', 'li', function() {})
      We need this since we need to be able to click on li items that are added
         to the page after it is loaded