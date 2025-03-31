const data = {
    404 : "<h1>Page not found</h1>",
    home : "<h1>Welcome to the Home Page</h1><p>This is the home page of our single page application.</p>",
    about : "<h1>About Us</h1><p>This is the about page of our single page application.</p>",
    contact : "<h1>Contact Us</h1><p>This is the contact page of our single page application.</p>",
}

function getInfo(){
    const hash = location.hash.substring(1) || 'home';
    const content = document.getElementById('content');
    content.innerHTML = data[hash];
}

window.addEventListener('load', getInfo);
window.addEventListener('hashchange', getInfo);
