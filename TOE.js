let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-button");
let playerO=true;
let winnerindi=document.querySelector(".winner-indication");
let win=document.querySelector(".win");


const win_patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const disablebox=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const resetbutton=()=>{
    enableboxe();
    playerO=true;
    win.classList.remove("winner");

}
const enableboxe=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(playerO){
            box.innerText="O"
            playerO=false
        }
        else{
            box.innerText="X";
            playerO=true;
        }    
        box.disabled=true;
        checkwinner();
    })
    
    
});

const checkwinner=()=>{
    for(let pattern of win_patterns)
    {
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("WINNER");
                win.classList.add("winner");
                winnerindi.innerText=`WINNER IS ${pos1Val} !`;
                disablebox();

            }
        }
    }
};
resetbtn.addEventListener("click",resetbutton)