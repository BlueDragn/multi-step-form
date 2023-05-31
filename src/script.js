
//Set the current tab to 0
var currentPageIndex = 0;
var pages = document.getElementsByClassName('form-container');
var thankYouSection = document.getElementById("thank_you");


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
} else {
  pages[currentPageIndex].style.display = 'none';
  thankYouSection.style.display = 'block';
}

}

