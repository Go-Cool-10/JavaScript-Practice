function displayTime() {
  let date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
displayTime();
setInterval(() => displayTime(), 1000);
