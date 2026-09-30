<script>

    // =========================
    // SECURITY CHECKER
    // =========================

    function checkSecurity() {

        let score = 0;

        let q1 = document.querySelector('input[name="q1"]:checked');
        let q2 = document.querySelector('input[name="q2"]:checked');
        let q3 = document.querySelector('input[name="q3"]:checked');
        let q4 = document.querySelector('input[name="q4"]:checked');
        let q5 = document.querySelector('input[name="q5"]:checked');

        if (!q1 || !q2 || !q3 || !q4 || !q5) {

            document.getElementById("result").innerHTML =
                "<h3>Please answer all questions.</h3>";

            return;
        }

        if (q1.value === "yes") score += 20;
        if (q2.value === "yes") score += 20;
        if (q3.value === "yes") score += 20;
        if (q4.value === "yes") score += 20;
        if (q5.value === "yes") score += 20;


        let message = "";

        if (score >= 80) {

            message = "🟢 Excellent! Your IoT security practices are strong.";

        }
        else if (score >= 60) {

            message = "🟡 Good! But there are some areas you can improve.";

        }
        else if (score >= 40) {

            message = "🟠 It's okay! Keep trying and improve your security.";

        }
        else {

            message = "🔴 Your security needs improvement. Don't worry, you can make it better!";

        }


        document.getElementById("result").innerHTML =

            "<h3>Your Security Score: " + score + "/100</h3>" +

            "<p>" + message + "</p>";

    }



    // =========================
    // QUIZ
    // =========================

    function checkQuiz() {

        let score = 0;

        let q1 = document.querySelector('input[name="quiz1"]:checked');
        let q2 = document.querySelector('input[name="quiz2"]:checked');
        let q3 = document.querySelector('input[name="quiz3"]:checked');
        let q4 = document.querySelector('input[name="quiz4"]:checked');
        let q5 = document.querySelector('input[name="quiz5"]:checked');


        if (!q1 || !q2 || !q3 || !q4 || !q5) {

            document.getElementById("quizResult").innerHTML =
                "<h3>Please answer all quiz questions.</h3>";

            return;
        }


        if (q1.value === "correct") score++;
        if (q2.value === "correct") score++;
        if (q3.value === "correct") score++;
        if (q4.value === "correct") score++;
        if (q5.value === "correct") score++;


        let percentage = (score / 5) * 100;

        let message = "";


        if (score === 5) {

            message = "😎 Excellent! You are an IoT security pro!";

        }
        else if (score === 4) {

            message = "😺 Good! You have strong IoT security knowledge.";

        }
        else if (score === 3) {

            message = "😸 It's okay! Keep trying and learn more.";

        }
        else {

            message = "😭 Don't worry! Keep learning and improve your knowledge.";

        }


        document.getElementById("quizResult").innerHTML =

            "<h3>Your Quiz Score: " + score + "/5</h3>" +

            "<p>Percentage: " + percentage + "%</p>" +

            "<p>" + message + "</p>";

    }



    // =========================
    // FIELD SURVEY
    // =========================

    function submitSurvey() {

        let q1 = document.querySelector('input[name="survey1"]:checked');
        let q2 = document.querySelector('input[name="survey2"]:checked');
        let q3 = document.querySelector('input[name="survey3"]:checked');
        let q4 = document.querySelector('input[name="survey4"]:checked');
        let q5 = document.querySelector('input[name="survey5"]:checked');


        if (!q1 || !q2 || !q3 || !q4 || !q5) {

            document.getElementById("surveyResult").innerHTML =
                "<h3>Please answer all survey questions.</h3>";

            return;
        }


        let securityAnswers = 0;

        if (q1.value === "yes") securityAnswers++;
        if (q3.value === "yes") securityAnswers++;
        if (q4.value === "yes") securityAnswers++;
        if (q5.value === "yes") securityAnswers++;


        let message = "";


        if (securityAnswers >= 3) {

            message = "Good security awareness! Keep following safe IoT practices.";

        }
        else if (securityAnswers >= 2) {

            message = "Moderate awareness. You can improve your IoT security practices.";

        }
        else {

            message = "More awareness is needed. Learn about IoT security risks and protection.";

        }


        document.getElementById("surveyResult").innerHTML =

            "<h3>✅ Survey Submitted Successfully!</h3>" +

            "<p>Thank you for participating in our IoT Security Survey.</p>" +

            "<p>" + message + "</p>";

    }

</script>