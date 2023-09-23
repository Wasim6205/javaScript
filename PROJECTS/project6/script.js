const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
};

const start = document.getElementById("start")
const stop = document.getElementById("stop");
let interval;
start.addEventListener("click",function(){
    interval = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    },1000)
})

stop.addEventListener("click",function(){
    clearInterval(interval)
    interval = null;
})
