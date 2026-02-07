function checkRose(isCorrect) {
    const status = document.getElementById('status');
    if(isCorrect) {
        status.innerHTML = "<span style='color: #28a745;'>Success! ❤️ Opening letter...</span>";
        setTimeout(() => { window.location.href = "letter.html"; }, 1200);
    } else {
        status.innerHTML = "<span style='color: #ff4b5c;'>Try another rose! 🌹</span>";
    }
}
