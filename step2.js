document.addEventListener('DOMContentLoaded', function() {
    var current_step = 1;
    var steps_count = 3;
  
    // Show the first step
    document.querySelector("#step-" + current_step).style.display = "block";
  
    // Handle the "Next" button click
    document.querySelector("#next-step").addEventListener("click", function() {
      if (current_step < steps_count) {
        // Hide the current step
        document.querySelector("#step-" + current_step).style.display = "none";
        // Update the current step
        current_step++;
        // Show the next step
        document.querySelector("#step-" + current_step).style.display = "block";
      }
    });
  
    // Handle the "Previous" button click
    document.querySelector("#prev-step").addEventListener("click", function() {
      if (current_step > 1) {
        // Hide the current step
        document.querySelector("#step-" + current_step).style.display = "none";
        // Update the current step
        current_step--;
        // Show the previous step
        document.querySelector("#step-" + current_step).style.display = "block";
      }
    });
  });