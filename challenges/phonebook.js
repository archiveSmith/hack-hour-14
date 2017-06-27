/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
const l = console.log

function findName(jazbook, name) {

  const length = jazbook.length;
  
  // base cases 1
  if (!length) {
    // l('base 1')
    return false;
  }
  // base case 2
  const midI = Math.floor(length / 2)
  if (jazbook[midI][0] === name) {
    // l('base 2')
    return jazbook[midI][1];
  }
  // l('jazbook -->', jazbook)
  // l('midI -->', midI)
  const left = jazbook.slice(0,midI)
  // l('left -->', left)
  const right = jazbook.slice(midI+1)
  // l('right -->', right)
  return findName(left,name) || findName(right,name)

}

jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];

l(findName(jazbook, 'travis'))
l(findName(jazbook, 'dsadas'))


function Phonebook() {}

Phonebook.prototype.add = function (personArr) {
  // console.log('this --> ', this)
  this[personArr[0]] = personArr[1];
};

Phonebook.prototype.lookup = function (name) {
  return this[name] || false;
};

Phonebook.prototype.remove = function (name) {
  delete this[name]
};

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {

  const length = jazbook.length;
  const pb = new Phonebook;
  for (let i=0 ; i<length ; i++){
    pb[jazbook[i][0]] = jazbook[i][1]
  }
  return pb;
}

const newPB = makePhoneBookObject(jazbook)

l('newPB 1 --> ', newPB)
newPB.add(['jim', 4])
l('newPB 2 --> ', newPB)
l('lookup travis -->', newPB.lookup('travis'))
l('lookup gdhghfdu -->', newPB.lookup('gdhghfdu'))
newPB.remove('jae')
l('newPB 3 --> ', newPB)

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
