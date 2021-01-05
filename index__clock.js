function getTime() {
    const clock = document.querySelector(".clock");
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerText = ` ${hour < 10 ? `0${hour}` : hour}시${minutes < 10 ? `0${minutes}` : minutes}분${seconds < 10 ? `0${seconds}` : seconds}초`
}
setInterval(getTime, 1000);