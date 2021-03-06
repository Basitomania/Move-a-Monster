var canvas, ctx;
var monsterX = 100, monsterY = 100, monsterAngle = 0;
var incrementX = 0;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    window.addEventListener("keydown", handleKeydown, false);
    window.addEventListener("keyup", handleKeyup, false);
    requestId = requestAnimationFrame(animationLoop);
}

function handleKeydown(evt) {
    if(evt.keyCode === 37) {
        incrementX = -1;
    } else if (evt.keyCode === 39) {
        incrementX = 1;
}
}

function handleKeyup(evt) {
    incrementX = 0;
}

function animationLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMonster(monsterX, monsterY, monsterAngle, "green", "yellow");
    monsterX += incrementX;
    requestId = requestAnimationFrame(animationLoop);
}

function drawMonster(x, y, angle, headColor, eyeColor) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    ctx.fillStyle=headColor;
    ctx.fillRect(0,0,200,200);

    ctx.fillStyle="red";
    ctx.fillRect(35, 30, 20, 20);
    ctx.fillRect(140, 30, 20, 20);

    ctx.fillStyle=eyeColor;
    ctx.fillRect(43, 37, 10, 10);
    ctx.fillRect(143, 37, 10, 10);

    ctx.fillStyle="black";
    ctx.fillRect(90, 70, 20, 80);

    ctx.fillStyle="purple";
    ctx.fillRect(60, 165, 80, 20);

    ctx.restore();
}

function start() {
    requestId = requestAnimationFrame(animationLoop);
}
function stop() {
    if(requestId) {
        cancelAnimationFrame(requestId);
    }
}
/*
var canvas, ctx;
var monsterX = 100, monsterY = 100, monsterAngle = 0;
var incrementX = 0;

function init() {
    // This function is called after the page is loaded
    // 1 - Get the canvas
    canvas = document.getElementById('myCanvas');
    // 2 - Get the context
    ctx = canvas.getContext('2d');
    // 3 add key listeners to the window element
    window.addEventListener('keydown', handleKeydown, false);
    window.addEventListener('keyup', handleKeyup, false);

    // 4 - start the animation
    requestId = requestAnimationFrame(animationLoop);
}

function handleKeydown(evt) {
    if (evt.keyCode === 37) {
        //left key 
        incrementX = -1;
    } else if (evt.keyCode === 39) {
        // right key
        incrementX = 1;
    }
}
function handleKeyup(evt) {
    incrementX = 0;
}


function animationLoop() {
    // 1 - Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2 Draw
    drawMonster(monsterX, monsterY, monsterAngle, 'green', 'yellow');

    // 3 Move
    monsterX += incrementX;

    // call again mainloop after 16.6 ms (60 frames/s)
    requestId = requestAnimationFrame(animationLoop);
}
function drawMonster(x, y, angle, headColor, eyeColor) {
    // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
    ctx.save();

    // Moves the coordinate system so that the monster is drawn
    // at position (x, y)
    ctx.translate(x, y);
    ctx.rotate(angle)

    // head
    ctx.fillStyle = headColor;
    ctx.fillRect(0, 0, 200, 200);

    // eyes
    ctx.fillStyle = 'red';
    ctx.fillRect(35, 30, 20, 20);
    ctx.fillRect(140, 30, 20, 20);

    // interior of eye
    ctx.fillStyle = eyeColor;
    ctx.fillRect(43, 37, 10, 10);
    ctx.fillRect(143, 37, 10, 10);

    // Nose
    ctx.fillStyle = 'black';
    ctx.fillRect(90, 70, 20, 80);

    // Mouth
    ctx.fillStyle = 'purple';
    ctx.fillRect(60, 165, 80, 20);

    // GOOD PRACTICE !
    ctx.restore();
}

function start() {
    // Start the animation loop, targets 60 frames/s
    requestId = requestAnimationFrame(animationLoop);
}
function stop() {
    if (requestId) {
        cancelAnimationFrame(requestId);
    }
} */