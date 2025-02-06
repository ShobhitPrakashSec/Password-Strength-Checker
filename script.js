function checkStrength() {
    let password = document.getElementById("password").value;
    let strengthText = document.getElementById("strengthText");
    
    let strength = "Weak";
    let strengthClass = "weak";
    
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength = "Strong";
        strengthClass = "strong";
    } else if (password.length >= 6 && (/[A-Z]/.test(password) || /[0-9]/.test(password))) {
        strength = "Medium";
        strengthClass = "medium";
    }
    
    strengthText.textContent = "Strength: " + strength;
    strengthText.className = "strength " + strengthClass;
}
