//counter 
var counter=0;
var button= document.getElementById('counter');
button.onclick=function ()
{
  //make a req
    
    
    
    //capture the response, store in var
    
    
    // render the variable in the correct span
    counter=counetr+1;
    var span = documnet.getElementById('count');
    span.innerHTML= counter.toString();
};