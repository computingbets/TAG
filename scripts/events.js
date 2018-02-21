'use strict';
//random num generator returning array to shuffleSuccess and bubStep
const onShuffle = () => {
  var one = Math.floor(Math.random() * 101);
  var two = Math.floor(Math.random() * 101);
  var three = Math.floor(Math.random() * 101);
  var four = Math.floor(Math.random() * 101);
  var five = Math.floor(Math.random() * 101);
  var six = Math.floor(Math.random() * 101);
  var seven = Math.floor(Math.random() * 101);
  var eight = Math.floor(Math.random() * 101);
  var nine = Math.floor(Math.random() * 101);
  var ten = Math.floor(Math.random() * 101);

  var arr = [];
  arr.push(one,two,three,four,five,six,seven,eight,nine,ten)
  return arr
};


// bubStep (as in BubbleStep and EDM) do while loop returning function to pass
//on next click with counter to 1 for one step of bubblesorting
const bubStep = (arr) => {
    var swapped;
    do {
        swapped = 0;
        for (var i=0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                var b = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = b;
                swapped = +1;
            }
        }
    } while (swapped == 1);
    return bubStep(arr);
};

//document ready fixes inactive javascript scripts bug
 $(document).ready(function() {
 $('.sort').on('click', function(){
   sortSuccess();
 })
});
// ui file has seperate ui success functions due to .then not executing
 $(document).ready(function() {
$('.shuffle').on('click', function(){
   let arr = onShuffle();
   shuffleSuccess(arr);
   //bubStep(arr);
   shuffleClass();
   shuffleClass2();
   shuffleClass3();
   shuffleClass4();
   shuffleClass5();
   shuffleClass6();
   shuffleClass7();
   shuffleClass8();
   shuffleClass9();
   shuffleClass10();
 })
 });


 // previous algorith that seperates nested loops

 // var i = 0;
 // var j = onShuffle().length -1;

 // (arr,i,j,swapped) => {
 //   console.log("bubStep");
 //   var arr = onShuffle();
 //   if (arr[i] > arr[i+1]) {
 //     var x = arr[i];
 //     var y = arr[i+1];
 //     arr[i] = y;
 //     arr[i+1] = x;
 //     swapped = true;
 //   }
 //   i++;
 //   if (i===j) {
 //     j--;
 //   }
 //   return arr;
 // };
