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
  for(let i = 0; i < jazbook.length; i ++){
    if(jazbook[i].includes(name)){
      return jazbook[i][1]
    }
  }
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  let obj = {};
  for(let i = 0; i < jazbook.length; i ++){
    console.log(jazbook[i])
    obj[jazbook[i][0]] = jazbook[i][1]
  }
  return obj;
}

function addPerson(name, number, jazbook){
  jazbook[name] = number;
  return jazbook
}

function lookUp(name, jazbook){
  return jazbook[name]
}

function remove(name, jazbook){
  for(let key in jazbook){
    if(key === name){
      delete jazbook[key]
    }
  }
  return jazbook
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505'],
     ['jasmine','1800-974-4539'],
   ];

  jazbookObj = { 
    alex: '301-844-3421',
  jae: '301-844-1211',
  david: '301-844-0978',
  travis: '301-844-8505',
  jasmine: '1800-974-4539' 
}

   console.log('findName', findName(jazbook, 'david'))
   console.log('makePhoneBookObject', makePhoneBookObject(jazbook))
   console.log('addPerson', addPerson('john', '912-234-5123', jazbookObj))
   console.log('lookUp', lookUp('john', jazbookObj))
   console.log('remove', remove('john', jazbookObj))

module.exports = objectToExport;
