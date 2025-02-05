document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mortgageForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const income = parseFloat(document.getElementById("income").value);
        const deposit = parseFloat(document.getElementById("deposit").value);
        const propertyPrice = parseFloat(document.getElementById("propertyPrice").value);
        const loanAmount = parseFloat(document.getElementById("loanAmount").value);
        const creditHistory = document.getElementById("creditHistory").value;

        // Calculate Loan-to-Value Ratio (LTV)
        const LTV = (loanAmount / propertyPrice) * 100;

        // Calculate Debt-to-Income Ratio (DTI)
        const monthlyIncome = income / 12;
        const estimatedMortgagePayment = loanAmount / 300; // Rough estimate (30-year term, 5% interest)
        const DTI = (estimatedMortgagePayment / monthlyIncome) * 100;

        // Eligibility Decision
        let eligibilityMessage = "";

        if (LTV > 90) {
            eligibilityMessage = "Your Loan-to-Value ratio is too high. Consider increasing your deposit.";
        } else if (DTI > 40) {
            eligibilityMessage = "Your Debt-to-Income ratio is too high. Consider borrowing a smaller amount.";
        } else if (creditHistory === "Yes") {
            eligibilityMessage = "Your credit history may affect eligibility. Consider checking with lenders for options.";
        } else {
            eligibilityMessage = "Congratulations! You may be eligible for a mortgage.";
        }

        // Display result
        alert(eligibilityMessage);
    });
});
