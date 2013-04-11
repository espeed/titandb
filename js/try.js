
var validateEmail = function(a) {
    var b,c,d=this;
    return //a.preventDefault(),
    c=$(this).find("input[type=text]"),
    b = c.val(),
    b.length<3||b.indexOf("@")<1?($(".message").html("<span class='error'>Please enter a valid email address.</span>"),!1):($(".message").html("Sending...",submitted=true));
    

}

//$("#ss-form").submit(validateEmail);
