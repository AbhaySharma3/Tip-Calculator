// document.getElementById("totalTip").style.display="none";
function calculateTip(){
    var billAmnt=document.getElementById("bill_amnt").value;
    var serviceQual=document.getElementById("select_qual").value;
    var numofPeople=document.getElementById("peopleamnt").value;

  //Validate Input
    if(billAmnt==="" || serviceQual==0) {
        alert("Please Enter Value");
        return;
    }

    //Check to see if this input is empty or less than or equal to 1 
    if(numofPeople==="" || numofPeople<=1){
        numofPeople=1;
        document.getElementById("each").style.display="none";
    }
    else {
        document.getElementById("each").style.display="block";
    }


    
var total = (billAmnt*serviceQual)/numofPeople;
total=Math.round(total);
document.getElementById("totalTip").style.display="block";
// document.getElementsByClassName("calculator").style.display="none";
document.getElementById("tip").innerHTML=total;

}


document.getElementById("each").style.display="none";


document.getElementById("calculate").onclick=function() {
    calculateTip();
}