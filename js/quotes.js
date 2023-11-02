const quotes = [
  {
    quote: "하루종일 누워있으면 행복해",
    author: "허동구",
  },
  {
    quote: "배고프다!",
    author: "심민지",
  },
  {
    quote: "바나나킥 정말 맛있지?",
    author: "농심",
  },
  {
    quote: "에어팟은 정말 이상해",
    author: "apple",
  },
  {
    quote: "Who are you?",
    author: "Simminji",
  },
  {
    quote: "인공눈물이 있나?",
    author: "MINJI",
  },
  {
    quote: "명신이 12월 결혼함",
    author: "명신&주철",
  },
  {
    quote: "강남으로 찾으러 와라",
    author: "apple",
  },
  {
    quote: "How are you?",
    author: "I'm fine!",
  },
  {
    quote: "오늘저녁 뭐먹을래?",
    author: "심민지",
  },
  {
    quote: "여행은 정말 힘들어",
    author: "허동구",
  },
  {
    quote: "그녀를 사랑해줘요",
    author: "하동균",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//lenth는 알아서 array 길이를 세어줌
//floor 숫자 뒷자리 내림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
