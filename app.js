/*

 */
var curKeyValue = 0; 
var newKeyValue = curKeyValue.toString();
var cardInfo = {};

$(document).ready(function(){
  console.log("before\n", window.localStorage);
  // add event listener
  $(".add-text-btn").on("click", function(){
    //$(".show-text").empty();

    var $value = $('#theValue')
    var $definition = $('#theValue')
    var curTextValue = $('#theValue').val(); // reading from <input>
    var curDefValue = $('#theDefinition').val();
      if (curTextValue.length === 0 || curDefValue.length === 0) {
        alert ('Please fill out both fields')
      } else {
          cardInfo[curTextValue] = curDefValue;
          var test = JSON.stringify(cardInfo);
          window.localStorage.setItem(newKeyValue, test);
          var vocab = $('<li></li>')
          vocab.text(curTextValue + " - " + curDefValue)
          $(".data-entries").append(vocab);
          curKeyValue++;
          newKeyValue = curKeyValue; 
          $value.empty();
          $definition.empty();
          cardInfo = {};
        }
    
  });

  // remove item from app
  //clear space for new addition
  $(".clear-previous-btn").on("click", function(){
     $(".show-text").empty();
  });


  //button to show previous entries in local storage
  $(".show-previous-btn").on("click", function(){
     $(".show-text").empty();
    var lsDisplay = JSON.stringify(localStorage);
    $(".show-text").append(lsDisplay);
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