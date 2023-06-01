//Select the elements
var currentPageIndex = 0;

//Select the elements
var pages = document.getElementsByClassName('form-container');
var thankYouSection = document.getElementById("thank_you");
var stepListItems = document.getElementsByClassName('step-list');
var nextBtn = document.getElementById("next_btn");
var backBtn = document.getElementById("back_btn")
var confirmBtn = document.getElementById("confirm_btn");
// Function to update the style of the list items based on the current section


function updateStepList() {
  // Reset the style of all list items
  for (var i = 0; i < stepListItems.length; i++) {
    stepListItems[i].classList.remove('active');
  }

  // Set the style for the current section
  stepListItems[currentPageIndex].classList.add('active');
}

//Function to Navigate to different section of form
function navigatePage(offset) {

  // Hide the current page
  pages[currentPageIndex].style.display = 'none';
  // Update the current page index
  currentPageIndex += offset;

  //Ensure the index stays within bounds
  if (currentPageIndex < 0) {
    currentPageIndex = 0;


  } else if (currentPageIndex >= pages.length - 1) {
    currentPageIndex = pages.length - 1;
    //nextBtn.style.display = 'none';
    //confirmBtn.style.display = 'block';
  }
  // Show the new current page
  pages[currentPageIndex].style.display = 'block';


   // Hide or show the next and confirm buttons
   if (currentPageIndex === pages.length - 1) {
    nextBtn.style.display = 'none';
    confirmBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'block';
    confirmBtn.style.display = 'none';
  }
  // Update the style of the list items
  updateStepList();
}

// Function to confirm the last page and show the thank you section
function confirmPage() {
  // Hide the current page (last form page)
  pages[currentPageIndex].style.display = "none";

  // Show the thank you section
  thankYouSection.style.display = "block";
  confirmBtn.style.display = 'none';
  backBtn.style.display = 'none';

}

// Call the updateStepList function initially to set the style for the first section
updateStepList();