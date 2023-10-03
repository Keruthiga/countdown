function updateCountdown() {
    const now = new Date ();
    const newYear = new Date(now.getFullYear()+1,0,1,0,0,0);
    const timeLeft = newYear- now;

    const days = Math.floor(timeLeft / (1000*60*60*24));
    const hours = Math.floor((timeLeft %(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((timeLeft %(1000*60*60))/(1000*60));
    const seconds = Math.floor((timeLeft %(1000*60))/(1000));

    
    const formattedDays = (days < 10) ? `0${days}`:days;
    const formattedHours = (hours < 10) ? `0${hours}`: hours;
    const formattedMinutes = (minutes < 10) ? `0${minutes}`:minutes;
    const formattedSeconds = (seconds < 10) ? `0${seconds}`: seconds;

    document.getElementById('days').textContent = formattedDays ;
    document.getElementById('text1').textContent = 'Days';
    document.getElementById('hours').textContent =formattedHours ;
    document.getElementById('text2').textContent = 'Hours';
    document.getElementById('minutes').textContent = formattedMinutes ;
    document.getElementById('text3').textContent = 'Minutes';
    document.getElementById('seconds').textContent = formattedSeconds ;
    document.getElementById('text4').textContent = 'Seconds';

}
updateCountdown();
setInterval(updateCountdown, 1000);