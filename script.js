window.onload = function() {
    // Check if the user has already been asked the question
    if (!localStorage.getItem('hamzaPromptShown')) {
        // Display the confirmation dialog
        var userResponse = confirm("Do you like Hamza?");
        
        // Set a flag in localStorage to mark that the prompt has been shown
        localStorage.setItem('hamzaPromptShown', 'true');

        // Display appropriate message based on the response
        if (userResponse) {
            alert("Awesome! You like Hamza!");
        } else {
            alert("That's okay! Not everyone likes Hamza.");
        }
    }
};
