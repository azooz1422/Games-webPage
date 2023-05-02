function myfunc() {
    
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
 
    
    

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        
    }
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
 
        
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
 
 
    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
        b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
        b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
    }
 
    
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
    }
    else {
 
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}
 

function myfunc_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
 
}
 

flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
 
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
 
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}
function infoA(){
    document.getElementById("Abdulaiz").innerHTML="Student Name:Abdulaziz abdulkarim Alsidais <br> Student ID: 441010036 <br> University Email: s441010036@st.uqu.edu.sa" ;
}
function infoR(){
    document.getElementById("p").innerHTML="Student Name:Rayan Hassan Majrashi<br> Student ID: 441009006 <br> University Email: s441009006@st.uqu.edu.sa" ;
}
var check;
function registration()
	{
        check = true;
        document.getElementById("namere").innerHTML="";
        document.getElementById("emailre").innerHTML="";
        document.getElementById("usernamere").innerHTML="";
        document.getElementById("passre").innerHTML="";
        document.getElementById("cnpassre").innerHTML="";
		var name= document.getElementById("c").value;
		var email= document.getElementById("email").value;
		var uname= document.getElementById("t3").value;
		var pwd= document.getElementById("pwd").value;			
		var cpwd= document.getElementById("cpwd").value;
		
        
		var pwd_expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{1,22}$/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      

        

		if(name=='')
		{
			document.getElementById("namere").innerHTML="Please enter your name";
            check=false
            return check;
		}
		else if(!letters.test(name))
		{
			document.getElementById("namere").innerHTML="Name field required only alphabet characters";
            check=false
            return check;
		}
		else if(email=='')
		{
			document.getElementById("emailre").innerHTML="Please enter your user email";
            check=false
            return check;
		}
		else if (!filter.test(email))
		{
			document.getElementById("emailre").innerHTML="Invalid email";
            check=false
            return check;
		}
		else if(uname=='')
		{
			document.getElementById("usernamere").innerHTML="Please enter the user name.";
            check=false
            return check;
            
		}
		else if(!letters.test(uname))
		{
			document.getElementById("usernamere").innerHTML="User name field required only alphabet characters";
            check=false
            return check;
		}
		else if(pwd=='')
		{
			document.getElementById("passre").innerHTML="Please enter Password";
            check=false
            return check;
		}
		else if(cpwd=='')
		{
			document.getElementById("cnpassre").innerHTML="Enter Confirm Password";
            check=false
            return check;
		}
		else if(!pwd_expression.test(pwd))
		{
			document.getElementById("passre").innerHTML="Upper case, Lower case, Special character and Numeric letter are required in Password filed";
            check=false
            return check;
            
		}
		else if(pwd != cpwd)
		{
			document.getElementById("cnpassre").innerHTML="Password not Matched";
            check=false
            return check;
            
		}
		else if(pwd.length < 6)
		{
			document.getElementById("passre").innerHTML="Password minimum length is 6";
            check=false
            return check;
		}
		else if(pwd.length > 12)
		{
			document.getElementById("passre").innerHTML="Password max length is 12";
            check=false
            return check;
		}
    }

    const gameBoard = document.querySelector("#GameBoard")
const ctx = gameBoard.getContext("2d")
const scoreText = document.querySelector("#scoreText")
const resetBtn = document.querySelector("#resetBtn")
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "black"
const snakeColor = "white"
const snakeBorder = "gold"
let foodColor;
const unitSize = 25
const colors = ["red","orange","yellow","green","indigo","violet"]
const unLosable = false;
let colorPicker = 0;
let speed = 100
let running = false
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0
let snake = [
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
]
window.addEventListener("keydown", changeDirection)
resetBtn.addEventListener("click", resetGame)
gameStart();

function gameStart() {
    running = true;
    scoreText.textContent = score;
    createFood();
    drawfood();
    nextTick();
};
function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawfood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, speed);
    } else {
        displayGameOver();
    }
};
function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight)
};
function createFood() {
    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize)
    foodY = randomFood(0, gameWidth - unitSize)
};
function drawfood() {
    colorPicker = colorPicker%colors.length;
    ctx.fillStyle = colors[colorPicker];
    ctx.fillRect(foodX, foodY, unitSize, unitSize)
    colorPicker++;
};
function moveSnake() {
    const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity }
    snake.unshift(head);
    if (snake[0].x == foodX && snake[0].y == foodY) {
        score += 1;
        scoreText.textContent = score;
        if (speed >= 0) {
            speed -= 2;
        }
        createFood();
    } else { snake.pop(); }
};
function drawSnake() {
    ctx.fillStyle = snakeColor
    ctx.strokeStyle = snakeBorder
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    })
};
function changeDirection(event) {
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);

    switch (true) {
        case (keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize
            yVelocity = 0;
            break;
        case (keyPressed == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case (keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize
            yVelocity = 0;
            break;
        case (keyPressed == DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
};
function checkGameOver() {
    if (!unLosable) {
        switch (true) {
            case (snake[0].x < 0):
                running = false;
                break;
            case (snake[0].x >= gameWidth):
                running = false;
                break;
            case (snake[0].y < 0):
                running = false;
                break;
            case (snake[0].y >= gameHeight):
                running = false;
                break;
        }
        for(let i=1; i < snake.length; i+=1){
            if(snake[i].x == snake[0].x && snake[i].y==snake[0].y){
                running =false;
            }
        }
    }
};
function displayGameOver() {
    ctx.font = "50px MV Boli";
    ctx.fillStyle ="gold";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!",gameWidth/2,gameHeight/2)
    running = false;
};
function resetGame() { 
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    speed = 100;
    snake = [
        { x: unitSize, y: 0 },
        { x: 0, y: 0 }
    ]
    gameStart();
};
  
  