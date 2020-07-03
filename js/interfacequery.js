$(document).ready(function () {
    //cambio de casilla------------------------------
 var cambio=$(".casilla")
   cambio.mouseover(function(){

        $(this).css("background","yellow");
        $(this).css("width","320px");
        $(this).css("height","320px");



    });
    cambio.mouseout(function(){

        $(this).css("background","#1265c9");
        $(this).css("width","300px");
        $(this).css("height","300px");
    })

    //cambio de imagen -------------------------------------------
    var ima=$(".imagen")
    ima.mouseover(function(){
 
         
         $(this).css("width","310px");
         
 
 
 
     });
     ima.mouseout(function(){
         $(this).css("width","290px");
         
     })

    
});