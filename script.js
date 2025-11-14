document.getElementById("loanForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const months = parseInt(document.getElementById("months").value);
  
    if (isNaN(principal) || isNaN(rate) || isNaN(months) || principal <= 0 || rate < 0 || months <= 0) {
      alert("សូមបញ្ចូលតម្លៃត្រឹមត្រូវទាំងអស់។");
      return;
    }
  
    const monthlyPrincipal = principal / months;
    let balance = principal;
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
  
    for (let i = 1; i <= months; i++) {
      const interest = balance * rate;
      const payment = monthlyPrincipal + interest;
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${i}</td>
        <td>${payment.toFixed(2)}</td>
        <td>${monthlyPrincipal.toFixed(2)}</td>
        <td>${interest.toFixed(2)}</td>
        <td>${balance.toFixed(2)}</td>
      `;
      tableBody.appendChild(row);
  
      balance -= monthlyPrincipal;
    }
  });