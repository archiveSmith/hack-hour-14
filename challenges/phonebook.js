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
  // if (!jazbook.length) return false;
  // middle = Math.floor(jazbook.length/2);
  // if (jazbook[middle][0] === name) return jazbook[middle[1]]
  // else if (jazbook[middle][0].charCodeAt(0))

  for (let i = 0; i < jazbook.length; i += 1) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){

  const phonebook = {
    add: function(name, number) {
      this[name] = number;
    },
    lookup: function(name) {
      return this[name];
    },
    remove: function(name) {
      let removed = this[name];
      delete this[name];
      return removed;
    }
  };

  for (let i = 0; i < jazbook.length; i += 1) {
    name = jazbook[i][0];
    number = jazbook[i][1];
    phonebook[name] = number;
  }

  return phonebook;
}

jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505'],
     ['jasmine','1800-974-4539'],
   ];

// console.log(findName(jazbook, 'david'));
const phonebook = makePhoneBookObject(jazbook);

phonebook.add('jacob', '323-770-8513');
console.log(phonebook)
// console.log(phonebook.lookup('jacob'))
console.log(phonebook.remove('jacob'))
console.log(phonebook)

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
