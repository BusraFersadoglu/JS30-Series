const header = document.querySelector("#header")
const text = document.querySelector("h1")
const px  = 500

function shodow(e){
    
    const { offsetWidth: width , offsetHeight: height } = header
    let { offsetX: x , offsetY: y} = e;

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xPx = Math.round((x / width * px) - (px / 2));
    const yPx = Math.round((y / height * px) - (px / 2));

    text.style.textShadow = `
    ${xPx}px ${yPx}px 0 red,
    ${xPx * -1}px ${yPx}px 0 black,
    ${xPx}px ${yPx * -1}px 0 yellow,
    ${yPx * -1}px ${xPx}px 0 blue,
    ${yPx}px ${xPx * -1}px 0 orange`
    
}

header.addEventListener("mousemove", shodow)
