$(document).ready(function(){

    $(".li a").click(function(){
      // console.log($(this).siblings('a').text());
     if ($(this).text() == "Admin"){
         $('#role').text() == "Admin";
         $('.student').hide();
         $('.admin').show();
         

     } 
    if ($(this).text() == "Student"){
         $('#role').text() == "Student";
         $('.admin').hide();
         $('.student').show();

     }
    
    });
    $("#myPopup").dialog({
autoOpen: false
});
   $(".myedit").click(function(){
       //console.log($(this)[0].getAttribute('data-mid'));
    var id  = $(this)[0].getAttribute('data-mid')
     $("#myPopup").dialog('open');
     //$("#details").attr("action", "/update/" + id);
    //        $("#submit").click(function(){
    //       $.ajax({
    //                  type: 'POST',
          
    //                  contentType: 'application/json',
    //                 url: window.location.protocol+'//'+window.location.host+'/update/'+id,

    //                              success: function(data,response) {
                                
    //                              }

    //                            });
    //   });

    $("#details").submit(function(e) {
    console.log("heer")
    var url = window.location.protocol+'//'+window.location.host+'/update/'+id; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#details").serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); // show response from the php script.
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});
   });


       //console.log($(this)[0].getAttribute('data-mid'));
     
     //$("#details").attr("action", "/update/" + id);
   });




function onSubmit(e){
    console.log("hello")
}



