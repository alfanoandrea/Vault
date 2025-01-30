document.addEventListener("DOMContentLoaded", function () {
    let backgroundImage;

    if (window.location.pathname.includes("about.html")) 
        backgroundImage = "url('../images/about.webp')";
    else if (window.location.pathname.includes("projects.html")) 
        backgroundImage = "url('../images/projects.webp')";
    
    else if (window.location.pathname.includes("tools.html")) 
        backgroundImage = "url('../images/tools.webp')";
    else if (window.location.pathname.includes("guide.html")) 
        backgroundImage = "url('../images/guide.webp')";
    else
        backgroundImage = "url('images/index.webp')";

    document.body.style.background = `${backgroundImage} no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
    document.body.style.position = "relative";

    const overlay = document.createElement('div');
    overlay.style.position = "absolute";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Overlay scuro
    overlay.style.zIndex = -1;

    document.body.appendChild(overlay);
});