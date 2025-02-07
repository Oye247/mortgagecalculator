function checkEligibility() {
    const income = parseFloat(document.getElementById("income").value);
    const creditScore = parseInt(document.getElementById("creditScore").value);
    const dti = parseFloat(document.getElementById("dti").value);
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const propertyValue = parseFloat(document.getElementById("propertyValue").value);

    if (!income || !creditScore || !dti || !loanAmount || !propertyValue) {
        alert("Please fill in all fields.");
        return;
    }

    let resultText = "";
    let eligibility = true;

    // 1️⃣ Loan-to-Income Ratio (LTI) Check
    const maxLoanAmount = income * 4.5;
    if (loanAmount > maxLoanAmount) {
        resultText += `❌ Loan amount (£${loanAmount}) exceeds 4.5x income (£${maxLoanAmount.toFixed(2)}).<br>`;
        eligibility = false;
    } else {
        resultText += `✅ Loan amount is within the 4.5x income limit.<br>`;
    }

    // 2️⃣ Credit Score Check
    if (creditScore < 650) {
        resultText += `❌ Credit score (${creditScore}) is too low. Most lenders require 650+.<br>`;
        eligibility = false;
    } else {
        resultText += `✅ Credit score is acceptable.<br>`;
    }

    // 3️⃣ Debt-to-Income Ratio (DTI) Check
    if (dti > 50) {
        resultText += `❌ Debt-to-Income Ratio (${dti}%) is too high. Must be below 50%.<br>`;
        eligibility = false;
    } else {
        resultText += `✅ Debt-to-Income Ratio is acceptable.<br>`;
    }

    // 4️⃣ Loan-to-Value Ratio (LTV) Check
    const ltv = (loanAmount / propertyValue) * 100;
    if (ltv > 95) {
        resultText += `❌ Loan-to-Value Ratio (${ltv.toFixed(2)}%) is too high. Must be 95% or lower.<br>`;
        eligibility = false;
    } else {
        resultText += `✅ Loan-to-Value Ratio is acceptable.<br>`;
    }

    // 5️⃣ Final Decision
    const resultDiv = document.getElementById("result");
    if (eligibility) {
        resultDiv.className = "eligible";
        resultDiv.innerHTML = `<strong>✅ Congratulations! You are likely eligible for a mortgage.</strong><br><br>${resultText}`;
    } else {
        resultDiv.className = "not-eligible";
        resultDiv.innerHTML = `<strong>❌ Unfortunately, you do not meet the standard mortgage eligibility criteria.</strong><br><br>${resultText}`;
    }
}
