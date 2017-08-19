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
  return jazbook.reduce((all, item)=>{
    if(item[0] === name){
      all = item[1]; 
    }
    return all
  }, false)
  // let obj = makePhoneBookObject(jazbook); 
  // return obj[name] ? obj[name] : false;  

}

  let jazbook = [
     ['alex','301-844-3421'],
     ['jae','301-844-1211'],
     ['david','301-844-0978'],
     ['travis','301-844-8505'],
     ['jasmine','1800-974-4539'],
   ];
//    let name = 'travis'; 

// console.log(findName(jazbook, 'name'))

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  let obj = {};
  for(prop in jazbook){
    let key = jazbook[prop][0] 
    obj[key] = jazbook[prop][1]  
  }

  obj.add = function(key, value){
    obj[key] = value;
  }

   obj.delete = function(key){
    delete obj[key];
  }

  obj.find = function(key){
    return obj[key]; 
  }

  return obj; 
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
