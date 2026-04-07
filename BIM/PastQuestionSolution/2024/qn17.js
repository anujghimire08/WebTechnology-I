function generateTable() {
  const userInput = Number(document.querySelector("#user-input").value);
  if (isNaN(userInput) && userInput <=0) {
    alert("Invalid User Input");
    return;
  }

  let tableHtml = `<table frame="box" rules="all"  cellpadding="3">
    <thead>
      <th colspan="2">Multiplication of ${userInput}</th>
    </thead>
    <tbody><tr>`;

  for (let i = 1; i <= 10; i++) {
    tableHtml += `<tr>
        <td>${userInput}x${i}</td>
        <td>${userInput * i}</td>
      </tr>`;
  }

  document.querySelector("#user-input").value = "";
  tableHtml += `</tbody> </table>`;

  document.getElementById("table").innerHTML = tableHtml;
}
