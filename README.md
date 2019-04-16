# Scrivito Advanced Button
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An alternative button React component/Scrivito widget for the Scrivito CMS.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-adv-button/master/adv-button-screenshot.png)


## Installation

Open your terminal.

`$ cd` to your Scrivito project

```shell
$ npm install scrivito-adv-button
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```shell
import "scrivito-adv-button";
```

Also add the styling of the widget to your app. This can be done by either loading it via `css-loader` (e.g. in `index.js` or `Widgets/index.js`):

```js
import "scrivito-adv-button/index.css";
```

Or by including the styling to your style sheets (e.g. in `index.scss`):

```scss
@import "~scrivito-adv-button/index.css";
```

## Features

The Scrivito Advanced Button Widget renders a button, with optional rounded borders and the option to set an anchor for the link. Works best in conjunction with our Headchor Widget, where you can store an anchor ID. The Headchor Widget is **part** of this package and is accessible in your Scrivito App automatically after you've installed this package.

## Widget properties

In the widget properties you can set:
- Link target - must start with a #, if the target is an anchor on the same page.
- Alignment
- Background color
- Rounded corners