const elLoginForm = document.getElementById("loginForm");

elLoginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const formData = new FormData(elLoginForm);
  
  const login = formData.get("login");
  const password = formData.get("password");

  if (login === "fn47" && password === "fn47") {
    localStorage.setItem("token", "fn47");
    location.href = "./index.html";
  } else {
    showToast();
  }
});

function showToast() {
  const toast = document.createElement("div");
  toast.className = "toast toast-top toast-end";
  toast.innerHTML = `
    <div class="alert alert-error">
      <span>Сиз нотугри логин ёки пароль киритдингиз 🤨</span>
    </div>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}

  



