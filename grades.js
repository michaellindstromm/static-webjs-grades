

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

  let a = [];
  let b = [];
  let c = [];
  let d = [];
  let f = [];
  let min = Math.min.apply(null, scores)
  let max = Math.max.apply(null, scores)


for (var i = 0; i < scores.length; i++) {
  if (scores[i] > 90) {
    a.push(scores[i]);
  } else if (scores[i] > 80) {
    b.push(scores[i]);
  } else if (scores[i] > 70) {
    c.push(scores[i]);
  } else if (scores[i] > 60) {
    d.push(scores[i]);
  } else {
    f.push(scores[i]);
  }
}

console.log("There are ", a.length," A's." );
console.log("There are ", b.length," B's." );
console.log("There are ", c.length," C's." );
console.log("There are ", d.length," D's." );
console.log("There are ", f.length," F's." );
console.log("The lowest score is ", min);
console.log("The highest score is ", max);
