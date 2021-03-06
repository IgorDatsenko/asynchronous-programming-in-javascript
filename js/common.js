/**
 * Created by igor on 16.04.17.
 */
(function () {
  "use strict";

  Array.prototype.concatAll = function () {
    let result = [];
    this.forEach( x => {
      [].push.apply(result, x);
    });
    return result;
  };

  Array.prototype.concatMap = function(callBack) {
    return this.
    map( x => callBack(x)).
    // apply the concatAll function to flatten the two-dimensional array
    concatAll();
  };

  Array.prototype.reduce = function(combiner, initialValue) {
    let counter,
        accumulatedValue;

    // If the array is empty, do nothing
    if (this.length === 0) {
      return this;
    }
    else {
      // If the user didn't pass an initial value, use the first item.
      if (arguments.length === 1) {
        counter = 1;
        accumulatedValue = this[0];
      }
      else if (arguments.length >= 2) {
        counter = 0;
        accumulatedValue = initialValue;
      }
      else {
        throw "Invalid arguments.";
      }

      // Loop through the array, feeding the current value and the result of
      // the previous computation back into the combiner function until
      // we've exhausted the entire array and are left with only one function.
      while(counter < this.length) {
        accumulatedValue = combiner(accumulatedValue, this[counter]);
        counter++;
      }

      return [accumulatedValue];
    }
  };

  Array.zip = function(left, right, combinerFunction) {
    let counter,
        results = [];

    for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
      // Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
      results.push(combinerFunction(left[counter], right[counter]))
    }

    return results;
  };

})();
