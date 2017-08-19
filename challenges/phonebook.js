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
function findName(jazbook, name) {
  //earches through the jazbook
  let combine = jazbook.join(",");
  let combineArr = combine.split(",");
  //if person exist return 
  if (combineArr.indexOf(name) > -1) return combineArr[combineArr.indexOf(name)+1];
  //If the person does not exists, return false
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  let outarr= [];
  let objBook = {};
  let phonebookCon = jazbook.join(",").split(",");
  for (let i = 0; i < phonebookCon.length; i+=2) {
    objBook[phonebookCon[i]] = phonebookCon[i+1];
  }
  let sorted = Object.keys(objBook).sort()
  sorted.map((ele) => {
    if (objBook[ele]) {
      ele = [ele, objBook[ele]];
    }
  });
  return sorted;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
