// ===> SideBar Menu - Tutorial from www.codinglabweb.com 

const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";
    }

});

// ===> BUDGET APP - With help from a tutorial https://codingartistweb.com/

// Selectors

let totalIncome = document.getElementById("total-income");
let userExpenses = document.getElementById("buy-amount");
const submitAmountBtn = document.getElementById("submit-amount-btn");
const totalIncomeBtn = document.getElementById("total-income-btn");
const productTitle = document.getElementById("buy-title");
const errorMessageIncome = document.getElementById("income-error");
const errorMessageExpenses = document.getElementById("expenses-title-error");
const errorMessageBuy = document.getElementById("expenses-amount-error");
const income = document.getElementById("income-value");
const expenses = document.getElementById("expenses-value");
const balance = document.getElementById("balance-value");
const list = document.getElementById("list-dash");
let tempAmount = 0;

// ===> Set Income Amount
totalIncomeBtn.addEventListener("click", () => {
    tempAmount = totalIncome.value;

    //error if empty or negative
    if (tempAmount === "" || tempAmount < 0) {
        errorMessageIncome.classList.remove("hide");
    } else {
        errorMessageIncome.classList.add("hide");
        //Set income
        income.innerHTML = tempAmount;
        //Set balance
        balance.innerText = tempAmount - expenses.innerText;
        //Clear input
        totalIncome.value = "";
    }
});

// ===> Disable Buttons
const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool;
    });
};

// ===> Edit elements on expenses list
const editItem = (item, edit = false) => {
    let parentDiv = item.parentElement;
    let currentBalance = balance.innerText;
    let currentExpenses = expenses.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
        let parentText = parentDiv.querySelector(".product").innerText;
        productTitle.value = parentText;
        userExpenses.value = parentAmount;
        disableButtons(true);
    }
    balance.innerText = parseInt(currentBalance) + parseInt(parentAmount);
    expenses.innerText = parseInt(currentExpenses) - parseInt(parentAmount);
    parentDiv.remove();
};

// ===> Function to create expenses list
const listCreate = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content");
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<div class="text-list-dash"><p class="product">${expenseName}</p><p class="amount">${expenseValue}</p></div>`;
    let editButton = document.createElement("button");
    editButton.classList.add("bx", "bxs-edit", "edit", "icon");
    editButton.style.fontSize = "24px";
    editButton.addEventListener("click", () => {
        editItem(editButton, true);
    });
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("bx", "bx-trash", "delete", "icon");
    deleteButton.style.fontSize = "24px";
    deleteButton.addEventListener("click", () => {
        editItem(deleteButton);
    });
    sublistContent.appendChild(editButton);
    sublistContent.appendChild(deleteButton);
    document.getElementById("list-dash").appendChild(sublistContent);
};

// ===> Function to Add Expenses
submitAmountBtn.addEventListener("click", () => {
    //Reset input
    if (!userExpenses.value || !productTitle.value) {
        errorMessageExpenses.classList.remove("hide");
        errorMessageBuy.classList.remove("hide");
        return false;
    }
    //Enable buttons
    disableButtons(false);
    //Expense
    let expenditure = parseInt(userExpenses.value);
    //Total Expense (existing + new)
    let sum = parseInt(expenses.innerText) + expenditure;
    expenses.innerText = sum;
    //Total Balance
    const totalBalance = tempAmount - sum;
    balance.innerText = totalBalance;
    //Create list elements
    listCreate(productTitle.value, userExpenses.value);
    //Empty inputs
    productTitle.value = "";
    userExpenses.value = "";
});