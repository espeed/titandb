var emailRules = {"entry.1543047287": {required: true, email: true}};
var emailMessages = {"entry.1543047287": "Please enter a valid email address"};


var url='https://docs.google.com/forms/d/1yihXEMtV6UliSV6ER0SDlZBH_Gce2i3MI1eZS49qtUs/formResponse';

function postContactToGoogle(){
    var email = $('#email').val();
    $.ajax({
        url: "https://spreadsheets.google.com/formResponse",
        data: {"entry.0.single" : email,
               formkey: "dDhjREJ2enpYLTdydHg4bkV2MTBQOHc6MQ"},
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function (){
                $('#email').val("");
		
                alert('1111'); //Success message
		
            },
            200: function (){
		$('#email').val("");
		   
                alert('2222'); //Success Message
		    
            }
        }
    });
}

$(document).ready(function(){

    $("#ss-form").validate({
	rules: emailRules,
	messages: emailMessages,
               
    });

    $('#ss-form').submit(function(e){
	e.preventDefault(); // prevents form submission
	alert('hi');
	postContactToGoogle();
    });




});


    

