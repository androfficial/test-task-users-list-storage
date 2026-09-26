# Users List

Page for keeping a list of users: add, edit and delete them, with every change delayed by two seconds to simulate a server request. Built in December 2021 as a take-home assignment.

**Live demo:** [js-users-list.vercel.app](https://js-users-list.vercel.app)

## Features

- The list starts with five sample users.
- The form adds a user with a required name and phone number. The form and every row's buttons lock for two seconds, then the new user appears at the top of the list.
- Each row shows the name and phone in read-only fields with edit and delete buttons. Edit unlocks the fields and swaps the buttons for save and clear.
- Save rejects empty fields with an alert. Otherwise the row locks for two seconds, then keeps the new values and returns to read-only mode.
- Clear empties both fields of the row.
- Delete locks the row's buttons for two seconds and then removes the row, and the list panel disappears with the last row.

## Tech stack

- **Framework:** none, plain HTML, CSS and JavaScript split into ES modules
- **Styling:** CSS with a separate reset stylesheet, Open Sans from Google Fonts
- **Hosting:** Vercel

## Getting started

The page is static with no dependencies, but its scripts are ES modules, which browsers do not load from `file://`, so serve the folder over HTTP, for example with `npx serve .` on Node.js 18 or later.

```bash
git clone https://github.com/androfficial/js-users-list.git
cd js-users-list
npx serve .
```

Then open the local address that `serve` prints.

## Project structure

```text
index.html    the page and the add form
css/          null.css (reset) and style.css
js/           app.js: the sample users and the add form
js/vendors/   addUser.js (row rendering and actions), htmlElements.js (row template), api.js (sendData POST helper)
```

## Notes

- Nothing is saved: the rows exist only in the DOM, so a reload brings back the five sample users.
- The two-second delays are `setTimeout` calls that stand in for requests. `js/vendors/api.js` holds a `sendData` POST helper for a real backend.
