let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector(".p_s")
let mElement = document.querySelector(".p_m")
let hElement = document.querySelector(".p_h")

function fixZero(time){
    return time <10 ? "0" + time : time;
}