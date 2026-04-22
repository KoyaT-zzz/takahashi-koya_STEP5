const input = document.getElementById("inputText");
const showBtn = document.getElementById("showBtn");
const colorBtn = document.getElementById("colorBtn");
const output = document.getElementById("outputArea");
const table = document.getElementById("table");
const body = document.getElementById("body");

let addCount = 0;

//設問1、3〜6
showBtn.addEventListener("click", function () {
const text = input.value;

//設問1
if (text === "") {
    alert("入力値が空です。");
    return;
}

//表示 + ハイライト（設問3）
output.textContent = text;
output.classList.toggle("highlight");

//===== 設問4：テーブル最下部に追加 =====
const row = table.insertRow(-1);
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);

cell1.textContent = text;
cell2.textContent = "削除";

//削除ボタン
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "削除";

//===== 設問5：行削除 + カウント減少 =====
deleteBtn.addEventListener("click", function () {
    table.deleteRow(row.rowIndex);
    addCount--;

    if (addCount < 3) {
        showBtn.style.display = "inline";
    }
});

cell2.textContent = "";
cell2.appendChild(deleteBtn);

addCount++;

});

//設問2
const colors = ["lightblue", "lightgreen", "lightcoral"];
let index = 0;

colorBtn.addEventListener("click", function () {
body.style.backgroundColor = colors[index];
index++;

if (index >= colors.length) {
    index = 0;
}
});

//設問7
for (let i = 1; i <= 5; i++) {
    console.log(i);
}