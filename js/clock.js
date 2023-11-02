const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  //2글자 만들기위한 .padStart
  const minutes = String(date.getMinutes()).padStart(2, "0");
  //.padStatr는 스트링에만 적용되는 속성으로 2글자인지 체크
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //화면 나타나자마자 실행되게
setInterval(getClock, 1000); //매 초 반복해서 실시간, 숫자 ms기준 1초 = 1,000ms
