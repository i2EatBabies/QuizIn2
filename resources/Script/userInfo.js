let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
let user_correct = sessionStorage.getItem("corrects");
document.querySelector("span.corrects").innerHTML = user_correct;

function submitForm(e){
    e.preventDefault();
    location.href="index.html";
    }
    function submitForm1(e){
        e.preventDefault();
        location.href="answers.html";
        }
