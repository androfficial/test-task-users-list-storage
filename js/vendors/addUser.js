import { sendData } from "./api.js";
import { userItem } from "./htmlElements.js";

export const addUser = (name = "testName", phone = "+38050500550") => {
  if (!document.querySelector(".store__list-users")) {
    document.querySelector(".store__container").insertAdjacentHTML(
      "beforeend",
      `
        <div class="store__list-users"></div>
      `
    );
  }

  document
    .querySelector(".store__list-users")
    .insertAdjacentHTML("afterbegin", userItem(name, phone));

  const item = document.querySelector(".store__user-item.user-item");
  const userItemForm = item.querySelector(".user-item__form");
  const takeActions = item.querySelector(".user-item__take-actions");
  const actionInputs =
    item.firstElementChild.querySelectorAll(".user-item__input");
  const actionBtns = item.querySelectorAll(".user-item__btn");

  takeActions.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "edit":
        takeActions.classList.add("_active");
        for (const actionInput of actionInputs) {
          actionInput.removeAttribute("disabled");
        }
        break;
      case "delete":
        for (const actionBtn of actionBtns) {
          actionBtn.setAttribute("disabled", "disabled");
        }
        // const response = sendData(undefined, JSON.stringify(id)) - айди добавленного пользователя полученого с бэка);
        setTimeout(() => {
          for (const actionBtn of actionBtns) {
            actionBtn.removeAttribute("disabled");
          }
          item.remove();
          if (
            document.querySelector(".store__list-users").children.length === 0
          ) {
            document.querySelector(".store__list-users").remove();
          }
        }, 1000);
        break;
      case "save":
        let count = 0;

        for (const actionInput of actionInputs) {
          if (actionInput.value === "") {
            count += 1;
          }
        }

        if (count === 0) {
          const params = new FormData(userItemForm);
          const { name, phone } = Object.fromEntries(params.entries());

          for (const actionBtn of actionBtns) {
            actionBtn.setAttribute("disabled", "disabled");
          }
          for (const actionInput of actionInputs) {
            actionInput.setAttribute("disabled", "disabled");
          }

          // const response = sendData(undefined, params);
          setTimeout(() => {
            for (const actionInput of actionInputs) {
              if (actionInput.classList.contains("_name")) {
                actionInput.setAttribute("value", name);
              } else {
                actionInput.setAttribute("value", phone);
              }
            }
            for (const actionBtn of actionBtns) {
              actionBtn.removeAttribute("disabled");
            }
            takeActions.classList.remove("_active");
          }, 1000);
          break;
        } else {
          alert("Не все поля заполнены");
          break;
        }
      case "clear":
        for (const actionInput of actionInputs) {
          if (actionInput.value.length > 0) {
            actionInput.value = "";
          }
        }
        break;
      default:
        break;
    }
  });
};
