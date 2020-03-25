(function(window, document, $) {
  var enableErrors = false;

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
    if (enableErrors) {
      $errOneTrigger.click(errorOne);
      $errTwoTrigger.click(errorTwo);
      $errThreeTrigger.click(errorThree);
    }
  }

  $(document).ready(function() {
    init();
  });
})(window, document, jQuery);
