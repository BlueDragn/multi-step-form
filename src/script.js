//Select the elements
var currentPageIndex = 0;

//Select the elements
var pages = document.getElementsByClassName('form-container');
var thankYouSection = document.getElementById("thank_you");
var stepListItems = document.getElementsByClassName('indicator_num');
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




// Plan Prices
let arcadePrice = document.getElementById("arcadePrice");
let advancedPrice = document.getElementById("advancedPrice");
let proPrice = document.getElementById("proPrice");

//add ons prices
let onlineServicePrice  = document.getElementById("onlineServicePrice");
let largerStoragePrice = document.getElementById("storagePrice");
let customizedProfilePrice = document.getElementById("profilePrice");

 // Retrieve the toggle switch element
 const toggleSwitch = document.getElementById('toggle-switch');

// Add an event listener to detect changes in the toggle switch
toggleSwitch.addEventListener('change', function() {

  if (toggleSwitch.checked) {

    // Modify the price of components for yearly option in step 2 and 3
    arcadePrice.innerHTML = '$90/yr';
    advancedPrice.innerHTML = '$120/yr';
    proPrice.innerHTML = '$150/yr';

    //step 3
    onlineServicePrice.innerHTML ='+$10/yr';
    largerStoragePrice.innerHTML ='+$20/yr';
    customizedProfilePrice.innerHTML  ='+$20/yr';
  } else {

    // Modify the price of components for monthly option in step 2 and 3
    arcadePrice.innerHTML = '$9/mo';
    advancedPrice.innerHTML = '$12/mo';
    proPrice.innerHTML = '$15/mo';

    //Step 3
    onlineServicePrice.innerHTML ='+$1/mo';
    largerStoragePrice.innerHTML ='+$2/mo';
     customizedProfilePrice.innerHTML  ='+$2/mo';
   }
});


// Selection on step 3

// Get all the plan buttons
const planButtons = document.querySelectorAll('.billing-op-btn');

// Add click event listener to each button
planButtons.forEach(button => {
  button.addEventListener('click', (e) => {
   e.preventDefault(); // Prevent default form submission

    // Remove the selected class from all plan buttons
    planButtons.forEach(btn => btn.classList.remove('selected'));

    // Add the selected class to the clicked plan button
    button.classList.add('selected');

     // Add the selected class to the clicked plan button
     button.classList.add('selected');
  });
});

// selections of step 4

const addOnCheckboxes = document.querySelectorAll('.addOn');

  addOnCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const check_box = checkbox.closest('.check_box');
      if (checkbox.checked) {
        check_box.classList.add('selected');
      } else {
        check_box.classList.remove('selected');
      }
    });
  });
