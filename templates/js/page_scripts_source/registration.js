// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    var classInput, classSelectors, raceInput, raceSelectors, selectorFunction, sexInput, sexSelectors;
    raceSelectors = $(".choose_race .race");
    raceInput = $("#race");
    classSelectors = $(".choose_class .class_caption");
    classInput = $("#class");
    sexSelectors = $(".choose_sex .sex");
    sexInput = $("#sex");
    raceInput.val(raceSelectors.filter(".selected").data("id") || false);
    classInput.val(classSelectors.filter(".selected").data("id") || false);
    sexInput.val(sexSelectors.filter(".selected").data("id") || false);
    selectorFunction = function(event, inp, selector, current) {
      event.preventDefault();
      event.stopPropagation();
      current = $(current);
      inp.val(current.data("id"));
      selector.removeClass("selected");
      return current.addClass("selected");
    };
    raceSelectors.on("click", function(event) {
      return selectorFunction(event, raceInput, raceSelectors, this);
    });
    classSelectors.on("click", function(event) {
      return selectorFunction(event, classInput, classSelectors, this);
    });
    return sexSelectors.on("click", function(event) {
      return selectorFunction(event, sexInput, sexSelectors, this);
    });
  });

}).call(this);