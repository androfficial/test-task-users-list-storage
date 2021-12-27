export const userItem = (name, phone) => {
  return `
      <div class="store__user-item user-item">
        <form class="user-item__form form">
          <div class="user-item__info">
            <div class="user-item__input-wrapper">
              <input type="text" name="name" placeholder="Имя *" value=${name} class="user-item__input _name input" disabled />
            </div>
            <div class="user-item__input-wrapper">
              <input type="number" name="phone" placeholder="Телефон *" value=${phone} class="user-item__input _phone input" disabled />
            </div>
          </div>
          <div class="user-item__take-actions">
            <div class="user-item__btn-wrapper">
              <button class="user-item__btn _edit btn" type="button" id="edit">Редактировать</button>
              <button class="user-item__btn _save btn" type="button" id="save">Сохранить</button>
            </div>
            <div class="user-item__btn-wrapper">
              <button class="user-item__btn _delete btn" type="button" id="delete">Удалить</button>
              <button class="user-item__btn _clear btn" type="button" id="clear">Очистить</button>
            </div>
          </div>
        </form>
      </div>
    `;
};
