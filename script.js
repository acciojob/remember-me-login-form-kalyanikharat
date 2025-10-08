 window.addEventListener("DOMContentLoaded", () => {
    // Ensure initial expectations: empty fields & unchecked checkbox
    usernameInput.value = "";
    passwordInput.value = "";
    rememberCheckbox.checked = false;
    updateExistingVisibility();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (rememberCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    updateExistingVisibility();
  });

  existingBtn.addEventListener("click", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      alert(`Logged in as ${savedUsername}`);
    }
  });
})();