document.addEventListener('DOMContentLoaded', () => {
  const timers = document.querySelectorAll('.timer');

  timers.forEach((el) => {
    const timeNode = el.querySelector('.timer__time');
    const startTime = timeNode.dateTime;

    const timer = () => {
      const time = new Date(startTime) - new Date();
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

      timeNode.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
        seconds < 10 ? '0' : ''
      }${seconds}`;

      if (time <= 0) {
        clearInterval(timeInterval);
        timeNode.textContent = '00:00:00';
      }
    };

    if (new Date(startTime) - new Date() <= 0) {
      timeNode.textContent = '00:00:00';
      return;
    }

    timer();
    const timeInterval = setInterval(timer, 1000);
  });
});
