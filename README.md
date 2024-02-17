<h1 align="center">
    <br>
    Ordering App 🍔
</h1>

<h4 align="center">
  Ordering App with React Native, Expo and Zustand.
</h4>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<div style="display: flex;">
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/home.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/home-add-products.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/screen-add-product.png" height="400" >
</div>
<div style="display: flex;">
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/remove-product-cart.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/cart.png" height="400" >
<img alt="" src="https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/order-whatsapp.png" height="400" >
</div>

<!-- ![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/home.png)
![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/home-add-products.png)
![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/screen-add-product.png)
![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/cart.png)
![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/remove-product-cart.png)
![App Screenshot](https://res.cloudinary.com/danilopereira/image/upload/v1708198754/ordering-app/order-whatsapp.png) -->

<p align="center">
  <a href="https://dpshoes.netlify.app/" target="_blank">
    <img alt="Demo on Netlify" src="https://res.cloudinary.com/danilopereira/image/upload/v1582659473/Rocketshoes/demoNetlifyy.png">
  </a>
</p>

## :rocket: Technologies

This project was developed at the [Rocketseat GoStack Bootcamp](https://rocketseat.com.br/bootcamp) with the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [ReactJS](https://reactjs.org/)
- [Expo](https://expo.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Tailwind](https://tailwindcss.com/)
- [NativeWind](https://www.nativewind.dev/getting-started/typescript)
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :evergreen_tree: Project Structure

<!-- tree -I "node_modules" -->

The file structure is as follows:
.
├── assets
│   └── images
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── src
│   ├── app
│   │   ├── \_layout.tsx
│   │   ├── cart.tsx
│   │   ├── index.tsx
│   │   └── product
│   │   └── [id].tsx
│   ├── assets
│   │   ├── logo.png
│   │   └── products
│   │   ├── cover
│   │   │   ├── 1.png
│   │   │   ├── 2.png
│   │   │   ├── 3.png
│   │   │   ├── 4.png
│   │   │   ├── 5.png
│   │   │   ├── 6.png
│   │   │   └── 7.png
│   │   └── thumbnail
│   │   ├── 1.png
│   │   ├── 2.png
│   │   ├── 3.png
│   │   ├── 4.png
│   │   ├── 5.png
│   │   ├── 6.png
│   │   └── 7.png
│   ├── components
│   │   ├── button.tsx
│   │   ├── category-button.tsx
│   │   ├── header.tsx
│   │   ├── input.tsx
│   │   ├── link-button.tsx
│   │   ├── loading.tsx
│   │   └── product.tsx
│   ├── stores
│   │   ├── cart-store.ts
│   │   └── helpers
│   │   └── cart-in-memory.ts
│   ├── types
│   │   └── nativewind.d.ts
│   └── utils
│   ├── data
│   │   └── products.ts
│   └── functions
│   └── format-currency.ts
├── app.json
├── babel.config.js
├── expo-env.d.ts
├── package-lock.json
├── package.json
├── LICENSE
├── tailwind.config.js
├── README.md
└── tsconfig.json

17 directories, 44 files

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v18][nodejs] or higher + [NPM v10][npm] or higher installed on your computer, [Xcode][xcode] with Simulator for iOS or [Android Studio][android-studio] Emulator for Android configured. Case don't have, follow this [tutorial][tutorial]. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dev-danilo/ordering-app.git

# Go into the repository
$ cd ordering-app

# Install dependencies
$ npm i

# Run your simulator(iOS) or emulator(android) and read the QR code to running on your device

# Run the app
$ npx expo start
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/dev-danilo/ordering-app/blob/main/LICENSE) for more information.

---

Made with ♥ by Danilo Pereira :wave: [Get in touch!](https://www.linkedin.com/in/danilopx/)

[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[tutorial]: https://react-native.rocketseat.dev/
[xcode]: https://developer.apple.com/xcode/
[android-studio]: https://developer.apple.com/xcode/
