let balance = 5000;
let correctPIN = "1234";
let enteredPIN = "";
balanceVisible = false;
function addToPIN(num) {
    if (enteredPIN.length < 4) {
        enteredPIN += num;
        document.getElementById("pin-display").value = "****".substring(0, enteredPIN.length);
    }
}
function clearPIN(){
    enteredPIN = "";
    document.getElementById("pin-display").value = "";
}

function validatePIN() {
    if (enteredPIN === correctPIN) {
        document.getElementById("pin-section").style.display = "none";
        document.getElementById("atm-section").style.display = "block";
    } else {
        alert("Incorrect PIN! Please try again.");
        clearPIN();
    }
}
function pressKey(num){
document.getElementById("amount").value += num;
}

function clearInput(){
    document.getElementById("amount").value = "";
}

function deposit(){
    let amount = paraseFloat(document.getElementById("amount").value);
    if(!isNaN(amount) && amount > 0){
        balance += amount;
        updateBalance();
        alert(`₹${amount} withdrawn successfully!`);
        clearInput();
    }
    else{
        alert("Enter a valid number!");
    }
}

function withdraw(){
    let amount = parseFloat(document.getElementById("amount").value);
    if(!isNaN(amount) && amount>0 && amount<=balance){
        balance -= amount;
        updateBalance();
        alert(`₹${amount} withdrawn successfully!`);
        clearInput();
    }
    else{
        alert("Insufficient balance or inavalid amount!");
    }
}

function updateBalance(){
    document.getElementById("balance").innerText = balanceVisible ? balance : "XXXX";
}

function toggleBalance(){
    balanceVisible = !balanceVisisble;
    updateBalance();
}

function changePIN(){
    const newPIN = document.getElementById("new-pin").value;
    if(newPIN.length === 4 && !isNaN(newPIN)){
        correctPIN = newPIN;
        alert("PIN Updated SuccessFull");
        document.getElementById('change-pin-section').style.display = "none";
    }
    else{
        alert("please Enter the valid pin")
    }
}

function showChangePIN(){
    document.getElementById("chnage-pin-section").style.display = "block";
}

function cancleChangePIN(){
    document.getElementById("change-pin-section").style.display = "none";
}
