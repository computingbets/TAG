//on sort button click
//loop through the array
//sort 0,1 then 1,2, 2,3


function bubbleSort(arr) {


  <script type="text/javascript">
  // var one = Math.floor(Math.random() * 101;
  // var two = Math.floor(Math.random() * 101;
  // var three = Math.floor(Math.random() * 101;
  // var four = Math.floor(Math.random() * 101;
  // var five = Math.floor(Math.random() * 101;
  // var six = Math.floor(Math.random() * 101;
  // var seven = Math.floor(Math.random() * 101;
  // var eight = Math.floor(Math.random() * 101;
  // var nine = Math.floor(Math.random() * 101;
  // var ten = Math.floor(Math.random() * 101;

  const onShuffle = () => {
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

  $('.shuffle').on('click', onShuffle());
  $('.sort').on('click', onSort());
