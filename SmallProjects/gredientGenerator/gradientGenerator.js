let firstButton = document.getElementById("button1");
let secondButton = document.getElementById("button2");
let thirdButton = document.getElementById("button3");
let gradientCode = document.getElementById("gradientcode");
let main = document.getElementById("main");
let Direction = document.getElementById("Direction");

let gradientFirstColor = "#4158D0";
let gradientSecondColor = "#C850C0";
let gradientThirdColor = "#FFCC70";
let gradientDirection = "to right";


Direction.addEventListener("input",()=>{
    gradientDirection = Direction.value;
    updateGredientValue();
});



firstButton.addEventListener("click", () => {
let first = RandomColor();
 firstButton.innerHTML = first;
 gradientFirstColor = first;
 updateGredientValue();
});

secondButton.addEventListener("click", () => {
    let second = RandomColor();
 secondButton.innerText = second;
 gradientSecondColor = second;
 updateGredientValue();
});

thirdButton.addEventListener("click", () => {
    let third = RandomColor();
 thirdButton.innerText = third;
 gradientThirdColor = third;
 updateGredientValue();
});

let RandomColor = (() => {
    let colorValues = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + colorValues[Math.trunc(Math.random() * 16)];
    }
    return color;
})






function updateGredientValue(){
    main.style.backgroundImage = `linear-gradient(${gradientDirection}, ${gradientFirstColor}, ${gradientSecondColor},${gradientThirdColor})`;
    gradientCode.innerText =`background: linear-gradient(${gradientDirection}, ${gradientFirstColor}, ${gradientSecondColor},${gradientThirdColor})`;
}

gradientCode.addEventListener('click',()=>{
   let text =  gradientCode.innerText;
   navigator.clipboard.writeText(text);
   alert("Text Copied on the Clipboard");
    
})