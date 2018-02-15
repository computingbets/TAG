'use strict';
window.onload=function () {alert("doc loaded")};
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

  console.log("shuffling");
  var arr = [];
  arr.push(one,two,three,four,five,six,seven,eight,nine,ten)
  return arr
}.done(ui.shuffleSuccess);

const onSort = () => {
  console.log("sorting");
  var arr = onShuffle();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      var a = arr[i + 1]
      var b = arr[i]
      arr[i] = b
      arr[i + 1] = a
    }
  }
  return arr;
}.done(ui.sortSuccess);

 $('.sort').on('click', onSort);
 $('.shuffle').on('click', onShuffle);




//sorting alg while loop add conditional logic
//list of functions 1. gen randomnumber function 2. run bubbleSort on array being fed func updates ui function respond to button command
//bubble func steps js grabs current order puts back in bubble sort
//add a way in loop to stop after one interation
