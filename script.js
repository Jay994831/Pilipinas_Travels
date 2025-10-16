/**
 * Function to switch the displayed content based on the button clicked.
 * @param {string} spotId - The ID of the content div to display (e.g., 'boracay', 'el-nido').
 */
function showContent(spotId) {
    // 1. Get all content divs
    const contents = document.querySelectorAll('.content');

    // 2. Hide all content divs
    contents.forEach(content => {
        content.classList.remove('active-content');
    });

    // 3. Show the selected content div
    const selectedContent = document.getElementById(spotId);
    if (selectedContent) {
        selectedContent.classList.add('active-content');
    }

    // 4. Update the active state of the buttons
    // Get all buttons
    const buttons = document.querySelectorAll('.spot-button');
    
    // Remove 'active' class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the button that was clicked
    // The 'this' keyword inside the 'onclick' attribute in HTML refers to the element itself.
    // However, since we are calling a function, we need to pass the clicked element.
    // A simpler way for this structure is to find the corresponding button.
    // For this example, let's assume the button that calls this function is the one that should be active.
    
    // We will update the HTML onclick to pass 'this'
    // e.g., <button ... onclick="showContent('boracay', this)">
    // NOTE: For simplicity and to keep the JS clean, the button activation logic is best done by finding the button that has the same function in the real world.
    // In this basic example, we will find the button whose text or ID is related to the spotId.
    
    // A better way for this basic setup is to find the button by its onclick attribute's value (a bit complex) or by a data attribute.
    // For a simple solution, we will re-iterate and find the one that corresponds to the spotId.
    
    buttons.forEach(button => {
        // A simple check: if the button's onclick contains the spotId
        if (button.getAttribute('onclick').includes(spotId)) {
            button.classList.add('active');
        }
    });

    // The initial button state is set in the HTML for the first load.
}

// OPTIONAL: Call showContent on page load to ensure the 'active' button style is correct if not manually set in HTML.
// showContent('boracay'); // Uncomment this if you remove the initial 'active' class from the HTML button/content.