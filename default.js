let rgb = [255, 0, 0];
let x1 = 0;
let y1 = 0;
let y2 = 0;

function rainbow() {
    if(rgb[0]<=255 && rgb[2]<=0) {
        rgb[1]+=1;
    }
    if(rgb[1]>=255) {
        rgb[0]-=1;
    }
    if(rgb[0]<=0) {
        rgb[2]+=1;
    }
    if(rgb[2]>=255) {
        rgb[1]-=1;
    }
    if(rgb[1]<=0) {
        rgb[0]+=1;
    }
}

let origin = [550, 300];
let dots = [];

function drawDot(x, y, color) {
    dots.push([document.createElement('canvas'), x, y]);

    let dot = dots[dots.length-1][0];

    dot.style.left = origin[0]+x+'px';
    dot.style.bottom = origin[1]+y+'px';
    
    dot.style.background = color;

    document.body.appendChild(dot);
}

///////////////////
function f(x) {
    return (x*x); //괄호 안의 수식을 변경해 함수를 설정하세요.
}
///////////////////

function draw() {
    x1 = 0;

    let r = 500;

    for(let i=0; i<10000; i++) {
        x1+=0.05;

        y1 = f(x1);
        y2 = f(-x1);

        rainbow();

        drawDot(x1, y1, `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);
        drawDot(-x1, y2, `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);
    }
}

function move(x, y) {
    for(let i=0; i<dots.length; i++) {
        dots[i][0].style.bottom = ((dots[i][0]+origin[0])+y)+'px';
        dots[i][0].style.left = ((dots[i][1]+origin[0])+x)+'px';
    }
}

draw();