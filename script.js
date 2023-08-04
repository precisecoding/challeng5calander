//   <!-- # FizzBuzz Challenge
// - Youre give an array of numbers. The output is each individual number.
// However, any number divisile by 3, should instead print 'fizz'.
// Any number divisible by 5, should instead print 'buzz'. 
// Finally, any number divisible by 3 and 5, should instead print 'fizzBuzz'.

// 1.) Define the input 
// - into an array 
// 2.) Find out which numbers are divisible by 3 - Look through the deck 'Iterating' over the array. 
// 4.) If the number is divisible by 5, write fizzBuzz.
// 5.) If divisible by 3 and 5, write fizzBuzz 
// 1, 2,  -->

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// <!-- GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//     1) Capture current date
//         - make a function to get the current date
//         - use day.js
//     2) Display it
//         - indentify target (document.querySelector, document.getElementById, $())
//         - textContent or text
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am to 5pm
//     1) Enter the remaining time grids into the application such that there are 8 time blocks, 9 to 5.
//         - Copy and paste the previous examples such that there are 8 time blocks.
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future (gray, red, or green)
//     1) define the past, present, or future
//         - Already done!!! Use the past, present, or future classes
//     2) Assign a color to each
//         - Define the present time
//         - iterate over all of the time blocks
//             - condition:
//                 - if the time block is equal to the current time, give it the present class
//                 - if the time block is less than the current time, give it the past class
//                 - if the time block is greater than the current time, give it the future class
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//     1) Listen for when the save button is clicked
//         - add an event listener to
//     2) Each block is savable independent of the other blocks
// WHEN I refresh the page
// THEN the saved events persist
//     1) When page loads, utilize localStorage to grab any data and display it to the screen -->
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//





//when html is loaded into the browser then run the javascript code
// jquery function allows javascript to interact with html as a document object model
$(document).ready(function () {
    // dayjs library plugin for advanced format current date & time.
    dayjs.extend(window.dayjs_plugin_advancedFormat)
    // document.getElementById('currentDay') is id tag selector, id='currentDay' from HTML assigned to let currentDay
    // variable, then we assign dayjs method value of current date & time to getCurrentDay variable.
    const currentDay = document.getElementById('currentDay');
    let getCurrentDay = dayjs().format('dddd, MMMM Do');
    // getCurrentDay is the value assigned from the dayjs plugin, when we target currentDay elemenet id tage and apply
    // .textContent this displays the plugin value from dayjs to that elements text content area in HTML.
    currentDay.textContent = getCurrentDay
    // new Date() is a built in method from javascript that grabs the time from my browser connection stored locally
    // on my computer being assigned to variable let currentHour.
    let currentHour = new Date().getHours();
    // document.getElementsByClassName('time-block') is class selector, class ='time-block' from HTML assigned to let 
    // updateCurrentHour variable.
    let updateCurrentHour = document.getElementsByClassName('time-block')
    // i = 0 indicates the starting point for the 'for loop', i < updateCurrentHour.length determines the condition for 
    // how many times this 'for loop' will run, i++ determines the incremental increase for each loop.
    for (let i = 0; i < updateCurrentHour.length; i++) {
        let hourArray = updateCurrentHour[i].id.split("-")[1]
        updateCurrentHour[i].classList.remove("past", "present", "future")
        // if statement below sets condition for the 'for loop', number() global method converts string to a number,
        // this is checking to see if the hourArray value is less than the current time variable 'currentHours'.
        if (Number(hourArray) < currentHour) {
            updateCurrentHour[i].classList.add("past")
            // the else if statement below sets condition for the 'for loop', again using number() global method converting the 
            // hourArray string to a number and checking to see if it is === current time variable 'currentHours'.
        } else if (Number(hourArray) === currentHour) {
            updateCurrentHour[i].classList.add("present")
            // the else if statement below sets condition for the 'for loop', again using number() global method converting the 
            // hourArray string to a number and checking to see if it is > than current time variable 'currentHours'.
        }
        else if (Number(hourArray) > currentHour) {
            updateCurrentHour[i].classList.add("future")
        }
    }
    // localStorage.getItem('hour-9') is a global variable using getItem() method to assign value from local storage
    // to const variable 'key9', Then we use document.querySelector('#-9 textarea') to select the hour-9 id parent
    // then selecting the textarea child element of 'hour-9' id and assigning it to the let key9TextArea variable, 
    // then we are assigning the key9 variable value to key9textArea.value (text input area of html selected element)
    // Alternatively could use for loop to operate functioning defined below to condense total size of javascript.js file.
    const key9 = localStorage.getItem("hour-9")
    let key9TextArea = document.querySelector("#hour-9 textarea")
    key9TextArea.value = key9

    const key10 = localStorage.getItem("hour-10")
    let key10TextArea = document.querySelector("#hour-10 textarea")
    key10TextArea.value = key10

    const key11 = localStorage.getItem("hour-11")
    let key11TextArea = document.querySelector("#hour-11 textarea")
    key11TextArea.value = key11

    const key12 = localStorage.getItem("hour-12")
    let key12TextArea = document.querySelector("#hour-12 textarea")
    key12TextArea.value = key12

    const key13 = localStorage.getItem("hour-13")
    let key13TextArea = document.querySelector("#hour-13 textarea")
    key13TextArea.value = key13

    const key14 = localStorage.getItem("hour-14")
    let key14TextArea = document.querySelector("#hour-14 textarea")
    key14TextArea.value = key14

    const key15 = localStorage.getItem("hour-15")
    let key15TextArea = document.querySelector("#hour-15 textarea")
    key15TextArea.value = key15

    const key16 = localStorage.getItem("hour-16")
    let key16TextArea = document.querySelector("#hour-16 textarea")
    key16TextArea.value = key16

    const key17 = localStorage.getItem("hour-17")
    let key17TextArea = document.querySelector("#hour-17 textarea")
    key17TextArea.value = key17
    // code to display the current date in the header of the page.
    // Selects the immediate parent container of ALL of the buttons.
    var container = document.querySelector('.container-lg');
    // Event listener on the PARENT container of all the buttons.
    container.addEventListener('click', (event) => {
        // conditional that checks if the element that was clicked is a button
        if (event.target.className.includes('btn')) {
            // console.log(event.target.parentElement.id)
            // If a button element was clicked, print the value of the textbox next to THAT button.
            // console.log(event.target.previousElementSibling.value)
            localStorage.setItem(event.target.parentElement.id, event.target.previousElementSibling.value)

        }
    })
});


