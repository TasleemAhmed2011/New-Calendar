function showdate() {
    var myform = document.getElementById("myform");
    var myinput = document.getElementById("myinput");
    var myinput1 = document.getElementById("myinput1");
    var myitem = document.getElementById("myitem");
    var date = new Date();
    var dayIndex = date.getDay();
    var dayOfMonth = date.getDate(); // Get the day of the month
    var month = date.getMonth() + 1; // Months are zero-based, so add 1
    var year = date.getFullYear();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[dayIndex];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = 'AM';

    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        session = 'PM';
    }
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    hours = (hours < 10) ? '0' + hours : hours;
    var time = hours + ':' + minutes + ':' + seconds + ' ' + session;

    var calendar = "Date: " + dayOfMonth + "/" + month + "/" + year + "<br>" + "Day: " + day + "<br>" + "Time: " + time;
    document.getElementById('calender').innerHTML = calendar;
    setTimeout(showdate, 1000); // Fix the function name here
}

showdate();

myform.addEventListener("submit", function (event) {
    event.preventDefault();
    createitem(myinput.value);
});

function createitem(inputItems) {
    var date = new Date();
    var dayIndex = date.getDay();
    var dayOfMonth = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[dayIndex];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = 'AM';

    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        session = 'PM';
    }
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    hours = (hours < 10) ? '0' + hours : hours;
    var time = hours + ':' + minutes + ':' + seconds + ' ' + session;
    const timestamp = `Submitted on: ${dayOfMonth}/${month}/${year} (${day}) at ${time}`;

    var items = `
<div class="task-wrapper">
    <li class="task">
        ${inputItems} <br> 
        <small>${timestamp}</small>
    </li>
    <br>
    <button onclick="deleteitem(this)">Delete</button>
    <br><br>
</div>`;

    myitem.insertAdjacentHTML("beforeend", items);

    myinput.value = "";
    myinput.focus();
}