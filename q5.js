function animateDiv() {
    const div = document.getElementById('animate-div');
    div.style.transition = 'transform 0.5s ease';
    div.style.transform = 'translateX(200px)';
}

// Example usage for JavaScript Animation
document.getElementById('animate-button').addEventListener('click', animateDiv);