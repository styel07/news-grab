/*jslint browser: true*/
/*global $, jQuery, alert*/

// cache elements by storing it into a variable
// each query traverses the DOM tree, so chain your query or cache it
(function() {

  // $('.parents > ul').hide();
  // $('.parents').css({
  //   display : 'inline-block',
  //   width : '100px'
  // })

  // .mouseenter(function(e) {
  //   // show sub nav
  //   $(this).find('ul').fadeIn(500);
  // })

  // .mouseleave(function(e) {
  //   // hide sub nav
  //   $(this).find('ul').fadeOut(500);
  // });

  // var fourthSubItem = $('<li>', {
  //   html : 'woot 4!'
  // });
  // var fifthSubItem = $('<li>', {
  //   html : 'woot 5!'
  // });

  // $('.parents:last > ul').append(fourthSubItem).append(fifthSubItem);

  // on load, automatically make this request
  $.ajax({
    url : 'https://www.reddit.com/r/programmerhumor.json',
    method : 'GET',
    success : function(data) {

      display(data);

    },
    error : function(err) {
      console.log(err);
    }
  });

  function traverse(data) {
    if ( typeof data == 'object' ) {
      $.each(data, function(key,value) {
        //console.log(obj);
        //if(value){}
        //traverse(obj);

      });
    } else {
      // value is a number or string
      return 'end of tree';
    }
  }

  function display(data) {
    //console.log(traverse(data));
    var newTitle;
    var newUrl;

    // gets the element and throws it into a li
    var newTitleElement;
    var newUrlElement;

    for (var i = 0; i < 20; i++) {
      newTitle = data.data.children[i].data.title;
      newUrl = data.data.children[i].data.url;

      newTitleElement = $('<h1>', {
        html : newTitle
      });
      newUrlElement = $('<h3>', {
        html : newUrl
      });

      $('.posts').append(newTitleElement).append(newUrlElement);
    }
    console.log(newTitleElement);
    console.log(newUrlElement);
  }

})();