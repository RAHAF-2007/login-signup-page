 // Get references to the form and message box, and other elements to hide
        const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const messageBox = document.getElementById('messageBox');
        const newUserText = document.getElementById('newUserText');
        const createAccountButton = document.getElementById('createAccountButton');
        const mainContainer = document.querySelector('.main'); // Get the main container to adjust its size

        // Function to display messages
        function showMessage(message, type) {
            messageBox.textContent = message; // Set the message text
            messageBox.className = 'message-box show ' + type; // Add classes for styling and visibility

            // If it's a success message, hide the form and related elements
            if (type === 'success') {
                loginForm.classList.add('hidden');
                newUserText.classList.add('hidden');
                createAccountButton.classList.add('hidden');
                // Optionally, adjust the main container's padding/height if needed
                mainContainer.style.paddingBottom = '2rem'; // Reduce padding if content is less
                mainContainer.style.paddingTop = '2rem';
                mainContainer.style.height = 'auto'; // Let height adjust to content
            }

            // Automatically hide the message after 3 seconds if it's an error
            // For success, we want it to stay until the user navigates or refreshes
            if (type === 'error') {
                setTimeout(() => {
                    messageBox.classList.remove('show');
                }, 3000);
            }
        }

        // Add an event listener for the form submission
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission (page reload)

            const username = usernameInput.value.trim(); // Get username and remove leading/trailing whitespace
            const password = passwordInput.value.trim(); // Get password and remove leading/trailing whitespace

            // Simple validation: check if username is 'bob'
            // In a real application, you would send this to a server for database validation
            if (username === 'bob') {
                // For demonstration, any password works for 'bob'
                showMessage('Login successful! Welcome, Bob.', 'success');
                // You can redirect the user or perform other actions here
                // window.location.href = 'dashboard.html';
            } else {
                showMessage('You do not have an account. Please create one.', 'error');
            }

            // Clear password field after attempt
            passwordInput.value = '';
        });