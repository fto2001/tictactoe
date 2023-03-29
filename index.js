const area = document.getElementById("area");
let move = 0;

area.addEventListener("click", function(event) {
  if (event.target.className == "box") {
    if(move % 2==0){
      event.target.innerHTML = 'Х';
     } else {
      event.target.innerHTML = 'O';
     }
    move++;
    check();
  }
})

function check() {
  const boxes = document.getElementsByClassName('box');
  if (boxes[0].innerHTML=='Х' && boxes[1].innerHTML=='Х' && boxes[2].innerHTML=='Х') 
      {
        alert('Победа Х');
        location.reload();
  }
  if (boxes[3].innerHTML=='Х' && boxes[4].innerHTML=='Х' && boxes[5].innerHTML=='Х')
       {
        alert('Победа Х');
        location.reload();
  }
  if (boxes[6].innerHTML=='Х' && boxes[7].innerHTML=='Х' && boxes[8].innerHTML=='Х') 
       {
        alert('Победа Х');
        location.reload();
  }
  if (boxes[0].innerHTML=='Х' && boxes[3].innerHTML=='Х' && boxes[6].innerHTML=='Х')
       {
        alert('Победа Х');
        location.reload();
  }
  if (boxes[1].innerHTML=='Х' && boxes[4].innerHTML=='Х' && boxes[7].innerHTML=='Х') 
       {
        alert('Победа Х');
        location.reload();
  }
  if (boxes[2].innerHTML=='Х' && boxes[5].innerHTML=='Х' && boxes[8].innerHTML=='Х')
        {
        alert('Победа Х');
        location.reload();
  }
  if (boxes[0].innerHTML=='Х' && boxes[4].innerHTML=='Х' && boxes[8].innerHTML=='Х') 
       {
        alert('Победа Х');
        location.reload();
  }
  if (boxes[2].innerHTML=='Х' && boxes[4].innerHTML=='Х' && boxes[6].innerHTML=='Х') 
       {
        alert('Победа Х');
        location.reload();
  }
  if (boxes[0].innerHTML=='O' && boxes[1].innerHTML=='O' && boxes[2].innerHTML=='O') 
       {
        alert('Победа O')
        location.reload();
  } 
  if (boxes[3].innerHTML=='O' && boxes[4].innerHTML=='O' && boxes[5].innerHTML=='O') 
       {
        alert('Победа O')
        location.reload();
  }
  if (boxes[6].innerHTML=='O' && boxes[7].innerHTML=='O' && boxes[8].innerHTML=='O') 
       {
        alert('Победа O')
        location.reload();
  }
  if (boxes[0].innerHTML=='O' && boxes[3].innerHTML=='O' && boxes[6].innerHTML=='O')
       {
        alert('Победа O')
        location.reload();
  }
  if (boxes[1].innerHTML=='O' && boxes[4].innerHTML=='O' && boxes[7].innerHTML=='O') 
       {
        alert('Победа O')
        location.reload();
  }
   if (boxes[2].innerHTML=='O' && boxes[5].innerHTML=='O' && boxes[8].innerHTML=='O') 
        {
        alert('Победа O')
        location.reload();
  }
  if (boxes[0].innerHTML=='O' && boxes[4].innerHTML=='O' && boxes[8].innerHTML=='O') 
       {
        alert('Победа O')
        location.reload();
  }
  if (boxes[2].innerHTML=='O' && boxes[4].innerHTML=='O' && boxes[8].innerHTML=='O') 
       {
        alert('Победа O')
        location.reload();
  }
  if (move === 9) {
        alert("Draw");
        location.reload();
  }
}

