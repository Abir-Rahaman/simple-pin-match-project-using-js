
function pin (){
    let math = Math.round(Math.random()*10000);
    let str = math+'';
    if(str.length==4){
        return math;
    }
    else{
        return pin();
    }
}

function autoPin(){
    let push = pin();
    let inputArea =document.getElementById('input-area');
    inputArea.value = push;
}

document.getElementById('calc-body').addEventListener('click',function(event){
   let num = event.target.innerText;
   let formArea = document.getElementById('formArea');
   if(isNaN(num)){
       if(num == 'C'){
        formArea.value = '';
       }
   }

   else{
    let formAreaValue = formArea.value;
    let sumOfValue = formAreaValue+num;
    formArea.value =sumOfValue; 

   }
   

})

document.getElementById('submit').addEventListener('click',function(){
    let inputArea =document.getElementById('input-area');
    let formArea = document.getElementById('formArea');
   
   
    let fail =document.getElementById('fail');
    let pass =document.getElementById('pass');
  
    if(inputArea.value == formArea.value){
       
        fail.style.display ='none';   
        pass.style.display ='block';

    }
    else{
        

        fail.style.display ='block';
        pass.style.display ='none';


    }
})