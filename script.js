// Get chat container
const chatContainer = document.getElementById('chat-container');
// Show welcome message and options
function showOptions() {
	chatContainer.innerHTML = `
		<h2>Welcome to Chat Bot!</h2>
		<p>Please select an option:</p>
		<button id="contact-btn">Contact Info</button>
		<button id="cool-stuff-btn">Cool Stuff</button>
		<button id="resume-btn">Resume</button>
	`;

	// Add event listeners for each option
	document.getElementById('contact-btn').addEventListener('click', showContactInfo);
	document.getElementById('cool-stuff-btn').addEventListener('click', showCoolStuff);
	document.getElementById('resume-btn').addEventListener('click', showResume);
}

// Show contact information
function showContactInfo() {
	chatContainer.innerHTML = `
		<h2>Contact Info</h2>
		<p>Find me on Github and LinkedIn:</p>
		<a href="https://github.com/sriranga13/" target="_blank" class="icon-btn"><img src="github.jpg" alt="Github icon"></a>
		<a href="https://www.linkedin.com/in/sri-gorantla-a9121b204/" target="_blank" class="icon-btn"><img src="linkedin.jpg" alt="LinkedIn icon"></a>
		<a href="gorantlasriranga@gmail.com"> <button>Send an Email</button></a> 
		<br>
		<button id="main-menu-btn">Main Menu</button>
	`;

	// Add event listener for "Main Menu" button
	document.getElementById('main-menu-btn').addEventListener('click', showOptions);
}

// Show cool stuff
function showCoolStuff() {
	chatContainer.innerHTML = `
		<h2>Cool Stuff</h2>
		<p>Check out these cool websites:</p>
		<a href="https://sriranga13.github.io/My-3D-Robot/" target="_blank" class="icon-btnn"><img src="robot.png" alt="Cool website 1"></a>
		<a href="https://sriranga13.github.io/wordify/" target="_blank" class="icon-btnn"><img src="wordify.png" alt="Cool website 2"></a>
		<br>
		<button id="main-menu-btn">Main Menu</button>
	`;

	// Add event listener for "Main Menu" button
	document.getElementById('main-menu-btn').addEventListener('click', showOptions);
}

// Show resume
function showResume() {
	chatContainer.innerHTML = `
		<h2>Resume</h2>
		<p>View or download my resume:</p>
		<a href="resume.pdf" download>Download</a>
		<br>
		<button id="main-menu-btn">Main Menu</button>
	`;

	// Add event listener for "Main Menu" button
	document.getElementById('main-menu-btn').addEventListener('click', showOptions);
}

// Show initial options
showOptions();
