const months = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY",
    "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const realTime = document.querySelector('.time');

function displayTime() {
    const now = new Date();
    const date = now.getDate();
    const dateSuffix = getDateSuffix(date);
    const month = months[now.getMonth()];
    const hour = now.getHours();
    const minute = now.getMinutes().toString().padStart(2, '0');

    const timeDiv = document.createElement('div');
    timeDiv.className = "timeDIv";

    const timeP = document.createElement('h1');
    timeP.className = "timeP";
    timeP.textContent = `${hour}:${minute}`;

    const dateP = document.createElement('p');
    dateP.className = "dateP";
    dateP.textContent = `${date}${dateSuffix} ${month}`;

    timeDiv.appendChild(timeP);
    timeDiv.appendChild(dateP);

    realTime.innerHTML = "";
    realTime.appendChild(timeDiv);
}

function getDateSuffix(date) {
    if (date >= 11 && date <= 13) {
        return "th";
    }
    switch (date % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}

function addAlarm() {
    const details = document.querySelector('.details');
    details.innerHTML = ""; // Clear previous content

    const addContent = document.createElement('div');
    addContent.className = 'addContent';

    const timeText = document.createElement('p');
    timeText.textContent = "Enter Time";

    const timeI = document.createElement('input');
    timeI.type = 'time';
    timeI.placeholder = "6:30 AM";

    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const weekDiv = document.createElement('div');
    weekDiv.className = "weeks";
    weekdays.forEach(function (weekday) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'weekday';
        checkbox.value = weekday.toLowerCase();
        checkbox.id = `${weekday.toLowerCase()}Checkbox`;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = weekday;

        weekDiv.appendChild(checkbox);
        weekDiv.appendChild(label);
        weekDiv.appendChild(document.createElement('br'));
    });

    const submitAlarm = document.createElement('button');
    submitAlarm.textContent = "Add Alarm";

    addContent.appendChild(timeText);
    addContent.appendChild(timeI);
    addContent.appendChild(weekDiv);
    addContent.appendChild(submitAlarm);

    details.appendChild(addContent);

    submitAlarm.addEventListener('click', function () {
        const alarmTime = timeI.value;
        const selectedWeekdays = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);

        const alarm = {
            time: alarmTime,
            weekdays: selectedWeekdays,
            isOn: true
        };

        alarms.push(alarm);
        loadAlarm();

        // Remove the addContent from details
        details.removeChild(addContent);
    });
}


function loadAlarm() {
    const alarmDiv = document.querySelector('.alarms');
    alarmDiv.innerHTML = ""; // Clear previous content

    alarms.forEach(function(alarm, index) {
        const divA = document.createElement('div');
        divA.className = "eachAlarm";

        // Create container for time and toggle button
        const timeToggleContainer = document.createElement('div');
        timeToggleContainer.className = "timeToggleContainer";

        const pTime = document.createElement('p');
        pTime.textContent = `${alarm.time}`;
        timeToggleContainer.appendChild(pTime);

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = alarm.isOn ? "ON" : "OFF";
        toggleBtn.addEventListener('click', function() {
            alarms[index].isOn = !alarms[index].isOn;
            toggleBtn.textContent = alarms[index].isOn ? "ON" : "OFF";
            divA.classList.toggle('off');
        });
        timeToggleContainer.appendChild(toggleBtn);

        divA.appendChild(timeToggleContainer);

        // Create container for weekdays
        const pDays = document.createElement('p');
        pDays.className = "days";
        const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        weekdays.forEach(function(day) {
            const span = document.createElement('span');
            span.textContent = day;
            if (alarm.weekdays.includes(day.toLowerCase())) {
                span.classList.add('selected');
            }
            pDays.appendChild(span);
        });
        divA.appendChild(pDays);

        alarmDiv.appendChild(divA);
    });

    // Increase the height of .alarmCard
    const alarmCard = document.querySelector('.alarmCard');
    const currentHeight = parseInt(alarmCard.style.height) || 100;
    const newHeight = currentHeight + 130; // Increase by 100px (adjust as needed)
    alarmCard.style.height = newHeight + "px";
}


const alarms = [];
const addBtn = document.querySelector('.addAlarm .btn');
addBtn.addEventListener('click', addAlarm);

// Initialize the time display and load alarms
displayTime();
loadAlarm();
setInterval(displayTime, 1000); // Update time every second
