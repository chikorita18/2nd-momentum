const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
//array이다.

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//HTML로 만든다.

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
//js에서 페이지에 이미지 넣기
//appendChild() 함수 안 경로에 정의한 값을 가장 뒤에서 기입. 여기서는 바디 맨밑에
//prependChild() 거꾸로 가장 앞에 기입
