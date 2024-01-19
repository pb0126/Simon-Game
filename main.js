var player = [];
var machine =[];
var level=0;

//function to start the game
function startGame(){
  $(".game-body").removeClass("d-none");
  setTimeout(()=>{
    machinePlay();
  },1000)
}

//Function for machine 
function machinePlay(){
  level++;
  $(".game-level").text("Level: "+level);
  player=[];
  var num = randomNumGenerator();
  colorSequence(num);
  machine.push(num);
  console.log(machine);
}

//Function to find random output
function randomNumGenerator(){
  var randomNum= Math.floor(Math.random()*4);
  return randomNum+1;
}

//Function to animate button
function colorSequence(input){
  switch(input){
    case 1:      
      $(".btn-1").addClass("animation");
      playSound(input);
      setTimeout(()=>{
        $(".btn-1").removeClass("animation");
      },"300");
    break;
    case 2:      
      $(".btn-2").addClass("animation");
      playSound(input);
      setTimeout(()=>{
        $(".btn-2").removeClass("animation");
      },"300");
    break;
    case 3:
      $(".btn-3").addClass("animation");
      playSound(input);
      setTimeout(()=>{
        $(".btn-3").removeClass("animation");
      },"300");
    break;
    case 4:
      $(".btn-4").addClass("animation");
      playSound(input);
      setTimeout(()=>{
        $(".btn-4").removeClass("animation");
      },"300");
    break;

    default:
      playSound("wrong");
  }
}

//Function for identifying key pressed by user
function keyPressed(keynote){ 
  colorSequence(keynote);
  player.push(keynote);
  console.log(player);
  resultCheck(player.length-1);
}

//function to check result
function resultCheck(input){
  if(player[input]===machine[input]){
    if(player.length===machine.length){
      setTimeout(()=>{
        machinePlay();
      },1500)
      
    }
  }else{
    $(".game-level").text("Game Over");
    gameOver();
  }
}

//Function for game over
function gameOver(){
  machine=[];
  $(".game-body").addClass("d-none");
  level=0;
  $(".game-level").text("Level: "+level);
  playSound("wrong");
  $("body").css("background-color", "red");
  setInterval(()=>{
    $("body").css("background-color", "white");
  },500);
  
}

//Function to play sound
function playSound(sound){
  var audio =new Audio("sounds/"+sound+".mp3");
  audio.play();
}