const async = require('async');

var count = 0;
async.whilst(
    function() { return count < 10; },
    function(callback) {
        count++;
        setTimeout(() => {
          if(Date.now() % 2 == 0)
          {
            console.log(Date.now());
          }
          else
          {
            console.log(":)");
          }
          callback(null, count);
        }, 1000);
    },
);

var num = [0,1];
async.until(
  function() {return num[9]; },
  function(num, callback) {
    var last = num.slice(-1).pop();
    var semiLast = num.slice(-2, -1).pop();
    var res = last + semiLast;
    num.push(res);
    callback(null, num);
  },
  function (err, numbers)
  {
    console.log(numbers[9]);
  }
)
