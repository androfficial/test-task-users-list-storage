import { addUser } from "./vendors/addUser.js";
import { sendData } from "./vendors/api.js";

const { form } = document.forms;
const formFieldset = form.firstElementChild;
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const actionBtns = document.querySelectorAll(".user-item__btn");

  let count = 0;

  for (const input of inputs) {
    if (input.value === "") {
      count += 1;
    }
  }

  if (count === 0) {
    const params = new FormData(form);
    const values = Object.fromEntries(params.entries());

    formFieldset.setAttribute("disabled", "disabled");
    if (actionBtns.length > 0) {
      for (const actionBtn of actionBtns) {
        actionBtn.setAttribute("disabled", "disabled");
      }
    }
    // sendData(undefined, "POST", params);

    setTimeout(() => {
      addUser(values);
      formFieldset.removeAttribute("disabled");
      form.reset();
      if (actionBtns.length > 0) {
        for (const actionsBtn of actionBtns) {
          actionsBtn.removeAttribute("disabled");
        }
      }
    }, 1000);
  } else {
    alert("Не все поля заполнены!");
  }
});
