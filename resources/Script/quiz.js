window.onload = function() {
    alert("Please Read The Instructions Carefully Before Attempting The Quiz! ")
}
function submitForm(e){
    e.preventDefault();
    var name = document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name",name);
    if(name ===""){alert("Please Input Your Name!")

    }
    else{
        location.href="quiz.html";
    }
    }

