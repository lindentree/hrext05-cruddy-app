/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

$(document).ready(function(){
  console.log("before\n", window.localStorage);

  var curKeyValue = "0"; 

  // add event listener
  $(".add-text-btn").on("click", function(){
    //$(".show-text").empty();
    var curTextValue = $('#theValue').val(); // reading from <input>
    //turn text to card object

    window.localStorage.setItem(curKeyValue, curTextValue);
    $(".data-entries").append(curTextValue);
    if (curTextValue !== undefined) {
      var newKeyValue = parseInt(curKeyValue);
      newKeyValue++;
      curKeyValue = newKeyValue.toString(); 

    }
    $('#theValue').empty();
    curTextValue = undefined;
  });

  // remove item from app
  //clear space for new addition
   $(".clear-previous-btn").on("click", function(){
     $(".show-text").empty();
  });


  //button to show previous entries in local storage
  $(".show-previous-btn").on("click", function(){
     $(".show-text").empty();
    var test = JSON.stringify(localStorage);
    $(".show-text").append(test);
  });

  // listen for click event (del)
  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    curKeyValue = "0"; 
    $(".show-text").empty();
  });

  //

});