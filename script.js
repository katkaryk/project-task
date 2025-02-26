document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const totalAmountDisplay = document.getElementById("total-amount");

    function updateTotal(option) {
        const price = option.querySelector(".price").textContent.trim();
        totalAmountDisplay.textContent = price;
    }

    const defaultOption = document.querySelector(".option input[type='radio']:checked").closest(".option");
    if (defaultOption) {
        defaultOption.classList.add("selected");
        updateTotal(defaultOption);
    }

    options.forEach(option => {
        const radioInput = option.querySelector("input[type='radio']");
        
        radioInput.addEventListener("change", function () {
            options.forEach(opt => opt.classList.remove("selected"));
            option.classList.add("selected");
            updateTotal(option);
        });
    });
});
