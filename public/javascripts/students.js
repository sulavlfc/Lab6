$(document).ready(function(){

    $(".li a").click(function(){
      // console.log($(this).siblings('a').text());
     if ($(this).text() == "Admin"){
         $('#role').text() == "Admin";
         $('.admin').show();
         

     }      
    });
    //  alert($('#role li.selected').attr('data-input'));
})