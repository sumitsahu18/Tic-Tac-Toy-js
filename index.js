const tictac = document.querySelector('.tictac')
   const boxes = document.querySelectorAll('.box')  // bhai ye all bhi kerna padta hai
   const h1 = document.getElementById('head')
   const rbtn = document.getElementById('res')
  
   let currentplayer = "X"
   let count = 0;
   let winningcondition = [
   
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
   ];
    function startgame(e) {
      //   console.log(e.target)  
      if(e.target.className !== "tictac"){

          if(e.target.innerText === "") {
        e.target.textContent = currentplayer;
        count++;
       let fill = winner();
        currentplayer = currentplayer === "X" ? "O":"X";
          
         }

           if(count === 9 && fill !=true ){
            h1.innerHTML = "match draw"
    }
   }
  }
    tictac.addEventListener('click',startgame)        
        function winner(){  
          fill = false;
          winningcondition.forEach((item) =>{ 
            let index0 = item[0]   
            let index1 = item[1]
            let index2 = item[2]
            let val0 = boxes[index0].innerHTML    
            let val1 = boxes[index1].innerHTML
            let val2 = boxes[index2].innerHTML
            if(val0!='' && val1 != '' && val2 != ''){
                    if(val0 === val1 && val0 === val2){
                      boxes[index0].classList.add("winnerclass")  
                      boxes[index1].classList.add("winnerclass")
                      boxes[index2].classList.add("winnerclass")
                      h1.innerHTML = `winner is ${val0}`
                      tictac.removeEventListener('click',startgame)
                      fill = true;
                    }
                  }
               })
             }     
        rbtn.addEventListener('click',()=>{
          h1.innerHTML = "TIC TAC TOY"
          currentplayer = "X"
          count =0;
          boxes.forEach(item=>{
            item.classList.remove("winnerclass")
            item.innerHTML =''
          })
          tictac.addEventListener('click',startgame)
        })
   
