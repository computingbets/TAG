'use strict';

const onShuffle = () => {
  var one = Math.floor(Math.random() * 101;
  var two = Math.floor(Math.random() * 101;
  var three = Math.floor(Math.random() * 101;
  var four = Math.floor(Math.random() * 101;
  var five = Math.floor(Math.random() * 101;
  var six = Math.floor(Math.random() * 101;
  var seven = Math.floor(Math.random() * 101;
  var eight = Math.floor(Math.random() * 101;
  var nine = Math.floor(Math.random() * 101;
  var ten = Math.floor(Math.random() * 101;

  var arr = [];
  arr.push(one,two,three,four,five,six,seven,eight,nine,ten)
  return arr
}.done(ui.shuffleSuccess);

var i = 0;
var j = onShuffle().length -1;

const bubbleStep = (arr,i,j,swapped) => {
  var arr = onShuffle();
  if (arr[i] > arr[i+1]) {
    var x = arr[i];
    var y = arr[i+1];
    arr[i] = y;
    arr[i+1] = x;
    swapped = true;
  }
  i++;
  if (i===j) {
    j--;
  }
  }
  return arr;
}.done(ui.sortSuccess);

 $('.sort').on('click', onSort);
 $('.shuffle').on('click', onShuffle);
