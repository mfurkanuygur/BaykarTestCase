
const API = "https://jsonplaceholder.typicode.com/posts";

let numberofQuestion = 1;
let questions = [];

const question_number = document.getElementById("questionNumber")
const question_text = document.getElementById("questionText")
const selection_A = document.getElementById("selectionA");
const selection_B = document.getElementById("selectionB");
const selection_C = document.getElementById("selectionC");
const selection_D = document.getElementById("selectionD");

//Fetch questions text
const pageUpload = async () => {
    try {
        const response = await fetch(API);
        const data = await response?.json();
        questions = data?.slice(0, 10)
        console.log(questions)
        renderQuestion();
    }
    catch (error) {
        alert(error)
    }
}
window.addEventListener("load", pageUpload)


const renderQuestion = () => {
    if (numberofQuestion < 11) {
        question_number.innerHTML = "Q" + numberofQuestion + "."
        question_text.innerHTML = questions[numberofQuestion - 1]?.body + "?"

        selection_A.innerHTML = questions[numberofQuestion - 1]?.body.split(" ")[0]
        selection_B.innerHTML = questions[numberofQuestion - 1]?.body.split(" ")[1]
        selection_C.innerHTML = questions[numberofQuestion - 1]?.body.split(" ")[2]
        selection_D.innerHTML = questions[numberofQuestion - 1]?.body.split(" ")[3]

        const buttons = document.querySelectorAll("button")
        buttons?.forEach(btn => btn.disabled = true)

        buttons?.forEach(btn => btn.disabled = false)
        buttons?.forEach(btn => btn.addEventListener("click", nextQuestion))
    }
    // else{
    // alert("sonuçlar")
    // }

}
const nextQuestion = () => {
    console.log(this.innerHTML)
    numberofQuestion++;
    renderQuestion();
}

// let timeoutId;
// timeoutId = setTimeout(() => {
//     nextQuestion();
//     console.log("Süre doldu, bir sonraki soruya geçiliyor.");
// }, 10000);

// buttons.forEach(btn => btn.addEventListener("click", () => {
//     clearTimeout(timeoutId); // Butona tıklandığında beklemeyi iptal et
//     nextQuestion(); // Bir sonraki soruya geç
// }));

// // Eğer kullanıcı 10 saniyelik süre içerisinde butona tıklamazsa:
// timeoutId = setTimeout(() => {
//     nextQuestion();
//     console.log("Süre doldu, bir sonraki soruya geçiliyor.");
// }, 30000);

