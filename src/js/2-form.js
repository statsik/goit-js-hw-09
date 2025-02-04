const formData = {
  email: "",
  message: "",
}
const form = document.querySelector("form");
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const button = document.querySelector("button");

email.addEventListener("input", (event) => {
  const inputEmail = event.currentTarget.value.trim();
  formData.email = inputEmail;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})

message.addEventListener("input", (event) => {
  const inputMessage = event.currentTarget.value.trim();
  formData.message = inputMessage;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})

const originalEmail = email.value;
email.addEventListener("mousedown", (event) => {
  email.value = "Type area";
})
email.addEventListener("mouseup", (event) => {
  email.value = originalEmail;
})

function loadFormData() {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;

    email.value = formData.email;
    message.value = formData.message;
  }
}

loadFormData();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
  }

  console.log(formData);
  form.reset();
  formData.email = "";
  formData.message = "";

})
