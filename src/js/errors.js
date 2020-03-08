(function(window, document, $) {
  //jQuery time
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".next").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this)
      .parent()
      .next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li")
      .eq($("fieldset").index(next_fs))
      .addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function(now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = now * 50 + "%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute"
          });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function() {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: "easeInOutBack"
      }
    );
  });

  $(".previous").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this)
      .parent()
      .prev();

    //de-activate current step on progressbar
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function(now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = (1 - now) * 50 + "%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({ left: left });
          previous_fs.css({
            transform: "scale(" + scale + ")",
            opacity: opacity
          });
        },
        duration: 800,
        complete: function() {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: "easeInOutBack"
      }
    );
  });

  $(".submit").click(function() {
    return false;
  });

  // Vars
  var $errOneTrigger = $(".js-trigger-error-1"),
    $errTwoTrigger = $(".js-trigger-error-2"),
    $errThreeTrigger = $(".js-trigger-error-3");

  function errorOne() {
    console.log("Error 1 triggered!");
    return foo.bar;
  }

  function errorTwo() {
    console.log("Error 2 triggered!");
    if (testArray === 0) {
      console.log("Array is empty");
    }
  }

  function errorThree() {
    console.log("Error 3 triggered!");
    var a = new Array(1);
    function recurse(a) {
      a[0] = new Array(1);
      recurse(a[0]);
    }
    recurse(a);
  }

  function init() {
    $errOneTrigger.click(errorOne);
    $errTwoTrigger.click(errorTwo);
    $errThreeTrigger.click(errorThree);
  }

  $(document).ready(function() {
    init();
  });
})(window, document, jQuery);
