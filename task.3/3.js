// Українська та англійська розкладки
let ua = [
  ["й","ц","у","к","е","н","г","ш","щ","з","х","ї","Backspace"],
  ["ф","і","в","а","п","р","о","л","д","ж","є"],
  ["я","ч","с","м","и","т","ь","б","ю"],
  ["Space"]
];
let en = [
  ["q","w","e","r","t","y","u","i","o","p","[","]","Backspace"],
  ["a","s","d","f","g","h","j","k","l",";","'"],
  ["z","x","c","v","b","n","m",",",".","/"],
  ["Space"]
];

let current = ua; // поточна розкладка

function render() {
  let html = "";
  current.forEach(row => {
    html += "<div>";
    row.forEach(key => {
      if (key === "Backspace")
        html += `<button class="wide" onclick="backspace()">Backspace</button>`;
      else if (key === "Space")
        html += `<button class="space" onclick="add(' ')">Space</button>`;
      else
        html += `<button onclick="add('${key}')">${key}</button>`;
    });
    html += "</div>";
  });
  document.getElementById("keyboard").innerHTML = html;
}

function add(ch) {
  document.getElementById("display").value += ch;
}

function backspace() {
  let t = document.getElementById("display");
  t.value = t.value.slice(0, -1);
}

function toggleLayout() {
  current = (current === ua) ? en : ua;
  render();
}

window.onload = render;
