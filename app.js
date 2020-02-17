function calculate() {
    let totalIn = parseFloat(document.getElementById("totalIN").value);
    console.log(typeof totalIn);
    let rateIn = parseFloat(document.getElementById("rateIN").value);
    if (totalIn == "" || rateIn == "") {
        alert("Enter the ammount");
    }
    document.getElementById("Tip").innerHTML = "$" + (totalIn * rateIn)/100;
    document.getElementById("Tax").innerHTML = "$" +  5.5;
    document.getElementById("Grand Total").innerHTML = "$" + (totalIn +((totalIn * rateIn)/100 )+ 5.5);
  
    return false;
}