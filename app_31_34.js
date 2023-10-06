// !chapter_31_34

// var date1 = new Date();
//* q1
// document.write(date1)

//* q2
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var month1 = date1.getMonth();
// document.write("Current month : " + months[month1]); 

//*q3
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day1 = date1.getDate();
// document.write("current day : " + days[day1])

//*q4
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var day1 = date1.getDate();
// var day_final = days[day1]
// if (day_final == "sunday" || day_final == "saturday")
// {
//     alert("it's Fun day");
// }
// else
// {
//     alert("it's not Fun day");
// }

// *q5
// var date_today = date1.getDate();

// if (date_today < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// *q6
// document.write("current date : " + date1)
// var date2 = new Date("jan 1 ,1970");
// var milisec = date1.getTime() - date2.getTime() / (1000 * 60 * 60 *24)
// var min = date1 - date2 / (1000 * 60)
// document.write("<br>mili-seconds since january 1 , 1970 till today : " +  milisec)
// document.write("<br>minutes since january 1 , 1970 till today : " +  min)

// *q7
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// document.write(currentHours)
// if (currentHours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// *q8
// var laterdate = new Date("2020, 12 ,31");
// document.write(laterdate)

//*q9
// var ramdan_2023 = new Date("march 22 ,2023")
// var ramdan_2022 = new Date("April 3 , 2022")
// var timeDifference = ramdan_2023.getTime() - ramdan_2022.getTime();
// var daysDifference = timeDifference / (1000 * 60 * 60 * 24);

// document.write(daysDifference + " days have passed since 1st ramdan ");


//*q10
// var STARTING_2023 = new Date("jan 1 , 2023")
// var result = date1 - STARTING_2023 / 1000;
// document.write("on reference date :" + date1 +",<br>"+ result+ " seconds passed since beginning of " + date1.getFullYear())


//*q11
// document.write(date1)
// var remaining_hour =  date1.setHours(date1.getHours() - 1) 
// document.write("<br> 1 hour ago , it was "+  date1) 

//*q12
// alert("current date : " + date1)
// var remaining_year = date1.setFullYear(date1.getFullYear() - 100);
// document.write("<br> 100 years ago , it was " +  date1)

//*q13
// var age  = +prompt("input your age : " )
// var dob = date1.getFullYear() - age
// document.write("your age is " + age +"<br>your birth year is " + dob)


//*q14
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var name = prompt("input your name ")
// var month = date1.getMonth()
// month = months[month]
// var units = +prompt("input number of units")
// var chargers = +prompt("charges per unit")
// var after_char =35
// var net_amount = units * chargers;
// var gross_amount = net_amount + after_char;

// document.write("<h1>K-ELECTRIC BILL</h1>")
// document.write("Customer name : <b>" + name + "</b>")
// document.write("<br>Current month : <b>" + month + "</b>")
// document.write("<br>Number of units : <b>" + units+ "</b>")
// document.write("<br>Charges per unit : <b>" + chargers+ "</b>")

// document.write("<br><br><br>Net amount Payable (within Due Date) : <b>" + net_amount + "</b>")
// document.write("<br>late Payment percharges : <b>" + after_char+ "</b>")
// document.write("<br>Gross amount Payable (after Due Date) : <b>" + gross_amount + "</b>")

