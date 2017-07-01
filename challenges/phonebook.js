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
<<<<<<< HEAD
  for (let index in jazbook) {
    if (jazbook[index][0].match(/^[0-9]$/))
      if (jazbook[index][1] === name)
        return jazbook[index][0];
    else
      if (jazbook[index][0] === name)
        return jazbook[index][1];
  }
  return false;
=======

>>>>>>> e05a5bdca0729f38b0df42019f7d1f5ceee58fbe
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
<<<<<<< HEAD
  let phonebook = {};
  for (let index in jazbook) {
    if (jazbook[index][0].match(/^[0-9]$/)) phonebook[jazbook[index][1]] = jazbook[index][0]; 
    else phonebook[jazbook[index][0]] = jazbook[index][1];
  }
  return phonebook;
=======

>>>>>>> e05a5bdca0729f38b0df42019f7d1f5ceee58fbe
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
