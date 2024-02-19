<h1 align="center">
  🍔 Ordering App 
</h1>

<h4 align="center">
  Ordering App with React Native, Expo and Zustand.
</h4>

<p align="center">
  <a href="#iphone-mobile-application">Preview Application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-main-technologies-used">Technologies Used</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-executing-the-project">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#evergreen_tree-file-structure">File Structure</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :iphone: Mobile Application

<!-- ![App Screenshot](https://github.com/dev-danilo/ordering-app/blob/main/mobile.gif) -->

<p align="center">
  <img alt="" src="https://github.com/dev-danilo/ordering-app/blob/main/mobile.gif" height="400" >
</p>
Screenshots about the application:
<div style="display: flex;">
<p align="center">
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/home.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/home-add-products.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/screen-add-product.png" height="400" >

<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/remove-product-cart.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/cart.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/order-whatsapp.png" height="400" >
</p>
</div>

<!-- ![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/home.png)
![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/home-add-products.png)
![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/screen-add-product.png)
![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/cart.png)
![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/remove-product-cart.png)
![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/order-whatsapp.png) -->

<!-- <p align="center">
  <a href="https://dpshoes.netlify.app/" target="_blank">
    <img alt="Demo on Netlify" src="https://res.cloudinary.com/danilopereira/image/upload/v1582659473/Rocketshoes/demoNetlifyy.png">
  </a>
</p> -->

## :rocket: Main Technologies used

This project was developed with the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [ReactJS](https://reactjs.org/)
- [Expo](https://expo.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Tailwind](https://tailwindcss.com/)
- [NativeWind](https://www.nativewind.dev/getting-started/typescript)
- [WhatsApp API](https://business.whatsapp.com/developers/developer-hub?lang=pt_BR)
- [VS Code][vc] with [EditorConfig][vceditconfig], [Prettier][prettier] and [ESLint][vceslint]

## :information_source: Executing the project

To clone and run this mobile application, you'll need [Git](https://git-scm.com), [Node.js v18][nodejs] or higher + [NPM v10][npm] or higher installed on your computer,
Do you can installed Expo and simulator/emulator follows the [guide][tutorial].

 <!-- [Xcode][xcode] with Simulator for iOS or [Android Studio][android-studio] Emulator for Android configured. Case don't have, follow this [tutorial][tutorial]. From your command line: -->

```bash
# Clone this repository
$ git clone https://github.com/dev-danilo/ordering-app.git

# Go into the repository
$ cd ordering-app

# Install dependencies
$ npm i

# Case using Android:
$ npm run android

# Case using iOS:
$ npm run ios
```

<!-- # Read the QR code to running on your device

# Run your simulator(iOS) or emulator(android) and read the QR code to running on your device

# Run the app
$ npx expo start -->

## :evergreen_tree: File Structure

The file structure is as follows:

<!-- tree -I "node_modules" -->
<!-- tree -d -I "node_modules" only directories -->

```
Root
├── assets
│   └── images
└── src
    ├── app
    │   └── product
    ├── assets
    │   └── products
    │       ├── cover
    │       └── thumbnail
    ├── components
    ├── stores
    │   └── helpers
    ├── types
    └── utils
        ├── data
        └── functions

17 directories, 60 files
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/dev-danilo/ordering-app/blob/main/LICENSE) for more information.

---

Made by Danilo Pereira :wave: [Get in touch!](https://www.linkedin.com/in/danilopx/)

[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[prettier]: https://prettier.io/
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[tutorial]: https://react-native.rocketseat.dev/
[xcode]: https://developer.apple.com/xcode/
[android-studio]: https://developer.apple.com/xcode/
