// handles the form submission and the session storage

let form = document
	.querySelector("#cFormTwo")
	.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
	e.preventDefault();
	let formEmail = document.getElementById("signInEmail").value;
	let formPassword = document.getElementById("signPassword").value;
	sessionStorage.setItem(formEmail, formPassword);
	sessionStorage.setItem("status", "isLoggedIn");

	setTimeout(() => {
		window.location.href = "/index.html";
	}, 1000);
}
