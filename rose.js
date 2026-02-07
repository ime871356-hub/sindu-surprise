function checkRose(isCorrect) {
    const statusElement = document.getElementById('status');
    
    if (isCorrect) {
        statusElement.innerHTML = "<span style='color: #28a745;'>Success! ❤️ Opening letter for Sindu...</span>";
        // Wait 1.2 seconds then move to the letter page
        setTimeout(() => {
            window.location.href = "letter.html";
        }, 1200);
    } else {
        statusElement.innerHTML = "<span style='color: #ff4b5c;'>Try another rose! 🌹</span>";
        // Shake animation effect
        statusElement.style.animation = "none";
        setTimeout(() => {
            statusElement.style.animation = "shake 0.3s";
        }, 10);
    }
}
