function attachEventsListeners() {
    const daysConvert = document.getElementById('daysBtn').addEventListener('click', convertDays);
    const hoursConvert = document.getElementById('hoursBtn').addEventListener('click', convertHours);
    const minutesConvert = document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
    const secondsConvert = document.getElementById('secondsBtn').addEventListener('click', convertSeconds);

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    function convertDays(e) {
        const value = Number(e.target.parentNode.children[1].value);

        hours.value = 24 * value;
        minutes.value = 1440 * value;
        seconds.value = 86400 * value;
    }

    function convertHours (e) {
        const value = Number(e.target.parentNode.children[1].value);

        days.value = value / 24;
        minutes.value = value * 60;
        seconds.value = value * 3600;
    }

    function convertMinutes(e) {
        const value = Number(e.target.parentNode.children[1].value);

        days.value = value / 1440;
        hours.value = value / 60;
        seconds.value = value * 60;
    }

    function convertSeconds(e) {
        const value = Number(e.target.parentNode.children[1].value);

        days.value = value / 86400;
        hours.value = value / 3600;
        minutes.value = value / 60;
    }

}