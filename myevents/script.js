// Click event

let button = document.getElementById("clickBtn");
let paragraph = document.getElementById("clickResult");

button.addEventListener('click', () => {
    paragraph.textContent = "Hello All!";
});

// 2. Mouse event
let mouseBox = document.getElementById('mouseBox');
let mouseParagraph = document.getElementById('mouseResult');

mouseBox.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#22e764';
    mouseParagraph.textContent = "Mouse hover";
}); 

mouseBox.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#3498db';
    mouseParagraph.textContent = "Mouse out";
});

// 3. Keyboard event 
let textBox = document.getElementById('keyInput');
let textParagraph = document.getElementById("keyResult");

textBox.addEventListener('keyup', function(event) {
    textParagraph.textContent = `${event.key}`
});

// Form event
let form = document.getElementById('sampleForm');
let formParagraph = document.getElementById('formResult');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formInput = document.getElementById('formInput').value;
    formParagraph.textContent = formInput;
});

// Load event
window.addEventListener('load', function() {
    document.getElementById('loadResult').textContent = 'Page loaded';
});