const images = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// appenChild = createElement로 생성한 요소를 자식으로 생성해줌(위에선 body의 자식으로)