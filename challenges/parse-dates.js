// Parse dates from questionable date strings.

// Your function will be a called with a string which represents a date and time.
// The provided string will be in one of the formats below. Your function must
// return a Date object with the same month, day of month, hour, and minute
// as in the provided string. The year for the returned date object should be
// the current year.

// Example strings:
// Thursday 12:37 PM
// Nov 19th 1:12 PM
// Mar 1st 6:09 PM
// Monday 5:33 PM
// Friday 7:04 PM
// Today 2:01 PM

// - If the date string starts with a day of week (e.g. Monday) then it's the last occurence
//   that day of the week BEFORE today (e.g. if today is Wednesday and the string
//   'Wednesday 12:37 PM' is passed in, then the date you return should be 7 days ago,
//   the last time Wednesday occurred before today.)
// - If the date string starts with a month (e.g. Nov, Sep) assume that it's for this year.
//   Month abbreviations will always be the first 3 letters of the month name with
//   the first letter capitalized.
// - If a string is passed in which does not conform to any of the rules above, then
//   you should simply return a Date object for the current time.

// Example input, assuming the current Date is Thursday December 17, 2015:
// parseDates('Jan 12th 1:09 AM')  => returns new Date object representing 'Mon Jan 12 2015 01:09:00 GMT-0800 (PST)'
// parseDates('Today 8:15 PM')     => returns new Date object representing 'Thu Dec 17 2015 20:15:00 GMT-0800 (PST)'
// parseDates('Sunday 12:59 PM')   => returns new Date object representing 'Sun Dec 13 2015 12:59:00 GMT-0800 (PST)'

// parseDates('Jan 1st')
// parseDates('hello')
// parseDates('Today 2 PM')        => invalid formats, so all return Date object for today at the current time: 'Thu Dec 17 2015 11:31:00 GMT-0800 (PST)'

// FAQ:
// - seconds / milliseconds of the returned Date object do not matter
// - you can assume the provided day of month will be valid if it's a month string
//   (i.e. the function will not be called with 'Jul 84th 1:00 PM') since that's not a real date
// - if any part of the date string is missing then you can consider it an invalid date

//var d = new Date("2015-03-25T12:00:00-06:30");

//"Wed Mar 25 2015 09:56:24 GMT+0100
// month day year time


function getDay()

function parseDates(str) {
  let arr = str.split(/\s/)
  
  //checki if invalid
  if(arr.length < 3) {
    return new Date();
  }
  
  let day = "";
  let month = "";
  let year = 2017;
  let time = "";
  
  
  //first element either DayOfWeek or Month(3 letters)
  if(arr[0].length === 3){
    month = arr[0]
    day = arr[1]
  }
  else {
    month = 'Jul'
    switch(arr[0]) {
      case 'Monday':
        day = '03'
        break
      case 'Tuesday':
        day = '04'
        break
      case 'Wednesday':
        day = '05'
        break
      case 'Thursday':
        day = '06'
        break
      case 'Friday':
        month = 'Jun'
        day = '30'
        break
      case 'Saturday':
        day = '1st'
        break
      case 'Sunday':
        day = '2nd'
        break
      case 'Today':
        day = '7th'
        break
    }
  }
    
  //check each section
  arr.forEach((el, index) =>{

  })
  
}

parseDates('Jan 12th 1:09 AM')