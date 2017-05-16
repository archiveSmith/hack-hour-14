/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
<<<<<<< HEAD

 For example:
 drawStairs(6) ->
=======
 
 For example:     
 drawStairs(6) ->          
>>>>>>> 3e9cf2ee6443d40c100aa021ce49621a41b9e417
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
<<<<<<< HEAD
  var next = n;

  for (var i=0; i<n; i++){
    var char = '';
    for (var j=0; j<next-1; j++){
      char += ' ';
    }
    for (var k=next-i-1; k<next; k++){
      char += '*';
    }
    next--;
    console.log(char);
  }
}



=======

}


>>>>>>> 3e9cf2ee6443d40c100aa021ce49621a41b9e417
module.exports = drawStairs;
