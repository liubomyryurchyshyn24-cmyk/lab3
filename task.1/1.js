function calcEllipse() {
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;
  if (a && b) {
    let s = Math.PI * a * b; // формула площі еліпса
    document.getElementById('ellipseArea').innerText = s.toFixed(2);
  } else {
    document.getElementById('ellipseArea').innerText = 0;
  }
}

document.getElementById('a').addEventListener('input', calcEllipse);
document.getElementById('b').addEventListener('input', calcEllipse);
