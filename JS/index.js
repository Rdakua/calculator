var input=document.querySelector(".inputBox");
var inputEq=document.querySelector(".inputEq");
var answer=[];
var equation=[];

function getVal(num)
{
    if(input.value==0)
        input.value = num;
    else
         input.value += num;
}

function getop(op)
{
    input.value += op;
}

function getAns()
{
    answer.push(eval(input.value));
    equation.push(input.value+'=');
    document.querySelector(".inputEQ").value=input.value+'='
    input.value=eval(input.value) 
}

function clearVal()
{
    input.value=0;
    document.querySelector(".inputEQ").value=''
    
}

function showHistory()
{
var History=document.querySelector(".history-div");
    for(let i=0;i<answer.length;i++)
  {  History.innerHTML+="<h4>"+equation[i]+"</h4><h4>"+answer[i]+"</h4>"}

}

function clrHistory()
{
    History.innerHTML='';
    answer=[];
    equation=[];
}