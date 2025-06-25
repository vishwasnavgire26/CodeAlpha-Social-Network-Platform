function handleLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in both fields.");
    return false;
  }

  // Simulated login - replace with Firebase or backend call
  if (email === "user@example.com" && password === "password123") {
    alert("Login successful!");
    // Redirect to dashboard or homepage
    window.location.href = "home.html";
  } else {
    alert("Invalid email or password.");
  }

  return false; // prevent actual form submission
}

