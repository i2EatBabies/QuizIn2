window.onload = function() {
    show(0);
    updateCountDown();
    setInterval(updateCountDown, 1000);
}
let questions = [
    {
      id: 1,
      question: "Q1.What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "Q2.What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "Q3.What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    },
    {
      id: 4,
      question: "Q4.The common name for the crime of stealing passwords is:",
      answer: "Spoofing",
      options: [
        "Spooling",
        "Identity theft",
        "Spoofing",
        "Hacking"
      ]
    },      
      {
      id: 5,
      question: "Q5.The scrambling of code is known as",
      answer: "Encryption",
      options: [
        "Encryption",
        "Fire walling",
        "Scrambling",
        "Proofing"
      ]
    },
    {
      id: 6,
      question: "Q6.Java was originally invented by",
      answer: "Sun",
      options: [
        "Oracle",
        "Microsoft",
        "Sun",
        "Novell"
      ]
    },
    {
      id: 7,
      question: "Q7.The unit of speed used for super computer is",
      answer: "GELOPS",
      options: [
        "KELOPS",
        "GELOPS",
        "MELOPS",
        "None Of These"
      ]
    },
    {
      id: 8,
      question: "Q8.In which of the following form, data is stored in computer?",
      answer: "Binary",
      options: [
        "Decimal",
        "Binary",
        "HexaDecimal",
        "Octal"
      ]
    },
    {
      id: 9,
      question: "Q9.Find the Odd one out.",
      answer: "POP",
      options: [
        "POP",
        "FTP",
        "TCP",
        "SAP"
      ]
    },
    {
      id: 10,
      question: "Q10.Which supercomputer is developed by the Indian Scientists?",
      answer: "Param",
      options: [
        "Super 301",
        "Param",
        "CRAY YMP",
        "Compaq Presario"
      ]
    }    
  ];


  let correct=0;
  let point=0;
  let question_count = 0;

  let answerArray = [{ answer:null },{ answer:null },{ answer:null } ,{ answer:null },{ answer:null },{ answer:null },{ answer:null },{ answer:null },{ answer:null },{ answer:null }];

  function next(){
    let ques = document.getElementById("questions").children[0].innerHTML;
      let qId = questions.findIndex(x => x.question == ques);

      let listall = document.querySelector('li.option.active') !== null;
      if (listall){
        let user_answer = document.querySelector("li.option.active").innerHTML;
        answerArray[qId].answer = user_answer;
       }

      

      if(document.getElementById("btn-next").innerHTML=='Submit'){
        calculatePoints();
        location.href= "result.html";
        return;
      }
      show(qId+1);
    /*
      let user_answer = document.querySelector("li.option.active").innerHTML;
      let ques = document.getElementById("questions").children[0].innerHTML;
      let qId = questions.findIndex(x => x.question == ques);
      answerArray[qId].answer = user_answer;
       

      if(document.getElementById("btn-next").innerHTML=='Submit'){
        calculatePoints();
        location.href= "result.html";
        return;
      }
      show(qId+1);
      */

        
  }

    function show(count){
        let question = document.getElementById("questions");
        question.innerHTML=`
        <h2>${questions[count].question}</h2>
        <ul class="option_group">
              <li class="option">${questions[count].options[0]}</li>
              <li class="option">${questions[count].options[1]}</li>
              <li class="option">${questions[count].options[2]}</li>
              <li class="option">${questions[count].options[3]}</li>
            </ul>
        `;
        let btn_next = document.getElementById("btn-next");
        if(count<9) {
        btn_next.innerHTML = "Next Question";
        }
        else{
        btn_next.innerHTML = "Submit";
        }
        toggleActive();
    }

    function toggleActive() {
        let option = document.querySelectorAll("li.option");

        for (let i = 0; i < option.length; i++) {
          option[i].onclick = function() {
            for (let j = 0; j < option.length; j++) {
              if (option[j].classList.contains("active")) {
                option[j].classList.remove("active");
              }
            }
            option[i].classList.add("active");
          }
        }
    }

    function calculatePoints(){
      console.log("answerArray")
      for(let i=0; i< questions.length;i++){
        if(answerArray[i].answer == questions[i].answer){
          point+=5;
          correct++;
        }
        else{
          point-=2;
        }
      }
      sessionStorage.setItem("points",point);
      sessionStorage.setItem("corrects",correct);

    }
    const startingMinutes = 5;
    let time = startingMinutes *60;
  const countdownEl =document.getElementById('countdown');

function updateCountDown(){
  
  const minutes = '0' + Math.floor(time/60);
  let seconds = time%60;
  seconds = seconds < 10 ? '0' + seconds:seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  if(time==0){
    calculatePoints();
        location.href= "result.html";

  }
  time--;
}