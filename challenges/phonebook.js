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
  jazbook.forEach((el)=>{
    if(el[0] === name) {
      return name
    }
  })
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  
  console.log("jazbook", jazbook)
  let phonebook =  {}

  phonebook.storage = jazbook.reduce((obj, entry)=>{
    obj[entry[0]] = entry[1]
    return obj
  }, {})
  
  console.log("phonebook", phonebook.storage)

  phonebook.add = (name, phonenum = 0) => {
    phonebook.storage[name] = phonenum;
    return true;
  }

  phonebook.lookup = (name) => {
    if(phonebook.storage[name]) {
      return phonebook.storage[name]
    }
    return false;
  }

  phonebook.remove = (name) => {
    if(phonebook.storage[name]) {
      delete phonebook.storage[name]
      return true;
    }
    return false;
  }
  return phonebook;
}


//  let jazbook = [
//      ['alex','301-844-3421'],
//      ['jae','301-844-1211'],
//      ['david','301-844-0978'],
//      ['travis','301-844-8505'],
//      ['jasmine','1800-974-4539'],
//    ];

// let x = makePhoneBookObject(jazbook)
// console.log("\n\nphonebook", x)
// x.add("hello", "310-845-6843")
// const objectToExport = {
//   findName,
//   makePhoneBookObject,
// };

module.exports = objectToExport;
