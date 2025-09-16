let correct = 0, total = 0, x, y, op, rightAns;

function generateTask() {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    let ops = ["+", "-", "*", "/"];
    op = ops[Math.floor(Math.random() * ops.length)];
    
    if (op === "/") { 
        y = y === 0 ? 1 : y; 
        rightAns = (x / y).toFixed(2); 
    } else if (op === "+") {
        rightAns = x + y;
    } else if (op === "-") {
        rightAns = x - y;
    } else if (op === "*") {
        rightAns = x * y;
    }
    
    document.getElementById("task").innerText = `${x} ${op} ${y} = ?`;
    document.getElementById("answer").value = "";
}

function check() {
    let userAns = document.getElementById("answer").value;
    total++;
    
    if (userAns == rightAns) {
        correct++;
        document.getElementById("result").innerText = "Правильно!";
        document.getElementById("result").style.color = "#2ecc71";
    } else {
        document.getElementById("result").innerText = `Помилка, правильна відповідь ${rightAns}`;
        document.getElementById("result").style.color = "#e74c3c";
    }
    
    document.getElementById("score").innerText = `Рахунок: ${correct}/${total}`;
}

function nextTask() { 
    generateTask(); 
    document.getElementById("result").innerText = "";
}


document.addEventListener('DOMContentLoaded', function() {
    generateTask();
    
    document.getElementById("check-btn").addEventListener("click", check);
    document.getElementById("next-btn").addEventListener("click", nextTask);
    
   і
    document.getElementById("answer").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            check();
        }
    });
});