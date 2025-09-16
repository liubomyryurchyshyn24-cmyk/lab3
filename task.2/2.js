// QWERTY українська розкладка з пробілом та backspace у правильних місцях
const rows = [
  ["й","ц","у","к","е","н","г","ш","щ","з","х","ї","Backspace"],
  ["ф","і","в","а","п","р","о","л","д","ж","є"],
  ["я","ч","с","м","и","т","ь","б","ю"],
  ["Space"]
];

function renderKeyboard(){
  let html = "";
  rows.forEach(row=>{
    html += "<div>";
    row.forEach(key=>{
      if(key==="Space"){
        html += `<button class="space" onclick="addSymbol(' ')">Space</button>`;
      } else if(key==="Backspace"){
        html += `<button class="wide" onclick="backspace()">Backspace</button>`;
      } else {
        html += `<button onclick="addSymbol('${key}')">${key}</button>`;
      }
    });
    html += "</div>";
  });
  document.getElementById("keyboard").innerHTML = html;
}

function addSymbol(symbol){
  document.getElementById("display").value += symbol;
}

function backspace(){
  let field = document.getElementById("display");
  field.value = field.value.slice(0,-1);
}

function clearDisplay(){
  document.getElementById("display").value = "";
}

window.onload = renderKeyboard;
