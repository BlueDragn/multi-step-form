
//Set the current tab to 0
var currentPageIndex = 0;
var pages = document.getElementsByClassName('form-container');
var thankYouSection = document.getElementById("thank_you");
var stepListItems = document.getElementsByClassName('step-list');


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
  console.log(currentPageIndex);

  // Ensure the index stays within bounds
  if (currentPageIndex < 0) {
    currentPageIndex = 0;

  } else if (currentPageIndex >= pages.length) {
    currentPageIndex = pages.length - 1;
  }

// Show the new current page or thank you section
if (currentPageIndex < pages.length - 1) {
  pages[currentPageIndex].style.display = 'block';
  thankYouSection.style.display = 'none';

} else {
  pages[currentPageIndex].style.display = 'none';
  thankYouSection.style.display = 'block';
}

  // Update the style of the list items
  updateStepList();
}
// Call the updateStepList function initially to set the style for the first section
updateStepList();