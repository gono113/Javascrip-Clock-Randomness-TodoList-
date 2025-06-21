const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}
// padStart(몇 개로 나타낼 건지, 충족못하면 앞에 뭘 붙일 건지)
// 인터발 함수 1초 대기 전 미리 실행으로 보여주기
getClock();
// 일정한 시간 간격으로 반복 실행되는 함수 (함수, 시간ms)
setInterval(getClock, 1000);
