function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question3.value;
    var correct = 0;


    if (question1 == "Funny") {
        correct++;
    }
    if (question2 == "Take over the world") {
        correct++;
    }
    if (question3 == "Lil and Phil") {
        correct++;
    }
    if (question4 == "Chasing cars") {
        correct++;
    }

    var pictures = ["assets/images/goodgrade.gif", "assets/images/catdog.gif", "assets/images/badgrade.gif"];
    var messages = ["Great job!", "Hey,try again!", "Were you even apart of the 90's bro?"];
    var score;

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];


}
