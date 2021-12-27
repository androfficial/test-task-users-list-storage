import { addUser } from "./vendors/addUser.js";
import { sendData } from "./vendors/api.js";

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 5; i++) {
    addUser();
  }
});

const form = document.forms[0];
if (form) {
  const formFieldset = form.firstElementChild;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const actionBtns = document.querySelectorAll(".user-item__btn");

    const params = new FormData(form);
    const { name, phone } = Object.fromEntries(params.entries());

    formFieldset.setAttribute("disabled", "disabled");
    if (actionBtns.length > 0) {
      for (const actionBtn of actionBtns) {
        actionBtn.setAttribute("disabled", "disabled");
      }
    }
    // sendData(undefined, "POST", params);

    setTimeout(() => {
      addUser(name, phone);
      formFieldset.removeAttribute("disabled");
      form.reset();
      if (actionBtns.length > 0) {
        for (const actionsBtn of actionBtns) {
          actionsBtn.removeAttribute("disabled");
        }
      }
    }, 1000);
  });
}
