

var currentTab = 0;
showTab(currentTab);

var x = document.getElementById("next_btn");




function showTab(tabNum){
    //This function will show the right tab
    var m = document.getElementsByClassName("form-container");

    m[tabNum].style.display = "block";
    if (tabNum == 0){
        document.getElementById("back_btn").style.display = "none";
    }else {
        document.getElementById("back_btn").style.display = "flex";
      }

      if (tabNum == (tabNum.length - 1)) {
        document.getElementById("next_btn").innerHTML = "Confirm";
      }else {
        document.getElementById("next_btn").innerHTML = "Next Step";
      }

}
function nextPrev(tabNum){
    var n = document.getElementsByClassName("form-container");
    console.log(currentTab);
n[currentTab].style.display = "none";
currentTab = currentTab + tabNum;
console.log(currentTab);
showTab(currentTab);
}