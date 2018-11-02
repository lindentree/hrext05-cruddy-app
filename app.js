var currentKey;
var cardInfo = {};

var renderDisplay = function(storage) {
  
  for (var key in storage) {
    
    var $vocabDiv = $('<div class="vocab"></div>');
    //console.log(storage[key]);
    
    if(storage.hasOwnProperty(key)) {
      var check = JSON.parse(storage[key]);
      var firstKey = Object.keys(check);
    } else {
        break;
    }
    
    if (check[firstKey] != undefined) {
      $vocabDiv.html(
        '<span class="kanji">' + firstKey  + '</span>' + " " +  " - " + '<span class="definition">' + check[firstKey] + '</span>' + " "
        + '<button class=" del-item" number=' + key + '>Delete</button>'
      ); 


      $(".show-text .data-entries").append($vocabDiv);
    } else {
        continue;
    }
  }

}

var editFeature = function(name) {
  var newVal = prompt("Please make a change");
  var oldVal = name;
  if(newVal === null) {
    return oldVal;
  }
  if(newVal !== '') {
    return newVal;
  }
  return newVal + editFeature(oldVal);
}

$(document).ready(function(){
  console.log("before\n", window.localStorage);
  renderDisplay(localStorage);
  
  $(".add-text-btn").on("click", function(){
    //console.log(curKeyValue);
    if (localStorage["nextKey"] === undefined) { 
      currentKey = 1;
    } else {
      currentKey = localStorage["nextKey"]
    }
    var $value = $('#theValue')
    var $definition = $('#theDefinition')
    var curTextValue = $('#theValue').val(); // reading from <input>
    var curDefValue = $('#theDefinition').val();

      if (curTextValue.length === 0 || curDefValue.length === 0) {
        alert ('Please fill out both fields')
      } else {

          cardInfo[curTextValue] = curDefValue;
          var test = JSON.stringify(cardInfo);
          var $vocabDiv = $('<div class="vocab"></div>');

          localStorage.setItem(currentKey, test);
          console.log(localStorage)
          $(".show-text .data-entries").empty();
          renderDisplay(localStorage);

          currentKey++;
          localStorage.setItem("nextKey", currentKey);
          console.log(currentKey);
          $value.val("");
          $definition.val("");
          cardInfo = {};
        }
    
  });

  // remove item from app
  //clear space for new addition
  $(".clear-previous-btn").on("click", function(){
     $(".show-text .data-entries").empty();
  });


  //button to show previous entries in local storage
  $(".show-previous-btn").on("click", function(){
    $(".show-text .data-entries").empty();
    renderDisplay(localStorage);
  });

  //EDITING FUNCTION

  $('.vocab').children('.kanji').click(function(){
    var $vocab = $(this)[0].innerText;
    console.log($(this).parent());
      
      //var name = this.text;
      //console.log(name) 
     
    })

   $('.vocab').children('.definition').click(function(){
    var $vocab = $(this)[0].innerText;
    console.log($vocab);
      
      //var name = this.text;
      //console.log(name) 
     
    })

//DELETE INDIVIDUAL ENTRY

$(".show-text .data-entries").on("click", ".del-item", function() {
     console.log($(this))
     var numberKey = $(this).attr('number') 
      alert (numberKey);
      $(".show-text .data-entries").empty();
      localStorage.removeItem(numberKey);
      renderDisplay(localStorage);
    // $("#theKey").val(''); //clears input box
  });   

//wipe local storage
  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    currentKey = 0; 
    $(".show-text").empty();
  });

});