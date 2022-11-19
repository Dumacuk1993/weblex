const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const renderTimer = seconds => {
  let hours = 0,
    minutes = 0,
    sec = 0
  hours = Math.floor(seconds / (60 * 60))
  minutes = Math.floor((seconds - (hours * 60 * 60)) / 60)
  sec = seconds % 60
  const editHours = hours < 10 ? `0${hours}` : hours
  const editMinutes = minutes < 10 ? `0${minutes}` : minutes
  const editSec = sec < 10 ? `0${sec}` : sec
  timerEl.textContent = `${editHours}:${editMinutes}:${editSec}`
}
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    renderTimer(seconds)
    const TimerInterval = setInterval(() => {
      seconds = seconds - 1
      if (seconds === 0 || Number(inputEl.value) > 0) {
        clearInterval(TimerInterval)
      }
      renderTimer(seconds)
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  clearInterval(TimerInterval)
  e.target.value = e.target.value.replace(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
