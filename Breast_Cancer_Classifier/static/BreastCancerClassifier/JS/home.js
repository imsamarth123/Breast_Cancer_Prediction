// Toggle sidebar function
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    
    // Disable scroll when sidebar is open
    if (sidebar.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

// Close sidebar when clicking outside
document.getElementById("sidebar-overlay").addEventListener("click", toggleSidebar);

// Add animation to predict button on page load
document.addEventListener("DOMContentLoaded", function() {
    const predictBtn = document.querySelector(".predict-btn");
    
    // Add animation class
    predictBtn.classList.add("animate");
    
    // Remove animation after it completes
    setTimeout(() => {
        predictBtn.classList.remove("animate");
    }, 1000);
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll("button, .predict-btn");
    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement("span");
            ripple.className = "ripple";
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add scroll effect to navbar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(42, 67, 101, 0.9)";
        navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        navbar.style.boxShadow = "none";
    }
});