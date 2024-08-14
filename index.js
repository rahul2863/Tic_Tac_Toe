const buttons = document.getElementsByClassName("play")
let x_or_o = "X";
let buttons_filled=0;
let arr = ['1','2','3','4','5','6','7','8','9'];
// The this keyword does not work as expected in arrow functions 
// because arrow functions do not have their own this context. 
// Instead, they inherit this from the surrounding scope where the function is defined
for(let button of buttons){
    button.addEventListener("click",Play);
}

function Play(){
    if(this.innerText==""){
        this.innerHTML="<h1>"+x_or_o+"</h1>";
        arr.splice(parseInt(this.getAttribute("id")),1,x_or_o)
        if(x_or_o == "X"){
            x_or_o="O";
        }else{
            x_or_o="X";
        }
        console.log(arr);
        setTimeout(evaluate, 100);
    }else{
        alert(`This Block contains ${this.innerText}`);
        return;
    }
}

function evaluate(){
    result = horizontal_evaluate()
    if(result){
        document.getElementById("heading-result").innerHTML=`${result} Wins 😎`;
        return;
    }

    result = vertical_evaluate()
    if(result){
        document.getElementById("heading-result").innerHTML=`${result} Wins 😎`
        return
    }

    result = diagonal_evaluate()
    if(result){
        document.getElementById("heading-result").innerHTML=`${result} Wins 😎`
        return
    }

    
    for(i of arr){
        if(i!='X' && i!="O"){
            return
        }
    }
    document.getElementById("heading-result").innerHTML=`Its a Draw 😶‍🌫️`
}

function horizontal_evaluate(){

    if((arr[0]==arr[1])&&(arr[1]==arr[2]))
    {
            return arr[0];
    }
    else if((arr[3]==arr[4])&&(arr[4]==arr[5])) 
    {
        return arr[3];
    }
    else if((arr[6]==arr[7])&&(arr[7]==arr[8]))
    {
        return arr[6]
    }else{
        return 0
    }
}


function vertical_evaluate(){

    if((arr[0]==arr[3])&&(arr[3]==arr[6]))
    {
            return arr[0];
    }
    else if((arr[1]==arr[4])&&(arr[4]==arr[7])) 
    {
        return arr[1];
    }
    else if((arr[2]==arr[5])&&(arr[5]==arr[8]))
    {
        return arr[2]
    }else{
        return 0
    }
}

function diagonal_evaluate(){
    if((arr[0]==arr[4])&&(arr[4]==arr[8]))
        {
                return arr[0];
        }
        else if((arr[2]==arr[4])&&(arr[4]==arr[6])) 
        {
            return arr[2];
        }
        else{
            return 0
        }
}