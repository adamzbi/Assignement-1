//function to rate the gym from the client space
function rateGym() {
    // Prompt the user to enter their rating
    var rating = prompt("On a scale of 1 to 5, how would you rate this gym?");
    
    // Convert the user input to a number
    rating = parseInt(rating);
  
    // Check if the rating is a valid number
    if (!isNaN(rating) && rating >= 1 && rating <= 5) {
      // Display the rating in the console
      console.log("You have rated this gym " + rating + " out of 5. Thank you for your rating!");
    } else {
      // Handle invalid inputs
      console.log("The rating must be a number between 1 and 5. Please try again.");
    }
  }
  
  // Call the function to allow users to rate the gym
  rateGym();