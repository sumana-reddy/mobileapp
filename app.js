function calculate() {
    let totalIn = parseFloat(document.getElementById("totalIN").value);
    console.log(typeof totalIn);
    let rateIn = parseFloat(document.getElementById("rateIN").value);
    if (totalIn == "" || rateIn == "") {
        alert("Enter the ammount");
    }
    document.getElementById("Tip").innerHTML = "$" + totalIn * rateIn;
    document.getElementById("Tax").innerHTML = "$" + totalIn * 0.055;
    document.getElementById("GrandTotal").innerHTML = "$" + (totalIn + (totalIn * rateIn) + (totalIn * 0.055));
    return false;
}