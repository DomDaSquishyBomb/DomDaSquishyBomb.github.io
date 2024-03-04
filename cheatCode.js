function verifyAndCache() {
    // Get the input value
    var inputValue = document.getElementById('textInput').value;

    // Check if the input is not empty
    if (inputValue.trim() !== '') {
        // Retrieve the array of cached strings from localStorage
        var cachedStrings = JSON.parse(localStorage.getItem('cachedStrings')) || [];

        // Check if the input value is not already in the array
        if (!cachedStrings.includes(inputValue)) {
            if (inputValue == "rizz") {
                // Add the input value to the array
                cachedStrings.push(inputValue);

                // Save the updated array to localStorage
                localStorage.setItem('cachedStrings', JSON.stringify(cachedStrings));
                alert('W');
            } else {
                alert('L, wrong code');
            }
        } else {
            alert('No idea what ur referring to (wink*)');
        }
    } else {
        alert('L, empty.');
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        // Call the function you want to execute when Enter is pressed
        verifyAndCache();
    }
}
