# React Notes

---

## Getting Setup

- [Visual Studio Code](https://code.visualstudio.com/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)

---

## Some VS Shortcuts that I use frequently

- [Visual Studio Code Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- Duplicate line: `SHIFT + ALT + UP/DOWN ARROW`
- Move line up or down: `OPT + UP/DOWN ARROW`
- Delete line: `SHIFT + CMD + K`

---

## Some info about React

- [Create a React app in CLI with `create-react-app`.](https://github.com/facebook/create-react-app)
- [React uses webpack which is a script bundler.](https://webpack.js.org/)
- [React uses Babel which compiles your React code into browser compatible code such as ES6.](https://babeljs.io/)
- [An alternative to webpack is Parcel.](https://parceljs.org/)

---

**Here are the steps to install and create a new React app.**

## Install it globally

If it's already installed, then you don't need to do this. Normally you just do this the first time you install it to your computer and then get it setup.

```
sudo npm install -g create-react-app
```

## Create your new React app

First you create your app using the `create-react-app` command. When you do this, it creates 3 things:

- **react**: The main library.
- **react-dom**: Allows it to work with the browser and the DOM.
- **react-scripts**: Where webpack and config scripts are contained.

```
create-react-app contact-manager
cd contact-manager
npm start
```

Once that's done, then you can go to work building your app. Once your app is built out comletely and you're ready to deploy it, you can run this command to build out your static assets.

```
npm run build
```
