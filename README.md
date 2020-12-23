# frontend-react学习指南
react, react hooks, redux, webpack, scss基础配置学习

## Create a New React App
~~npx create-react-app frontend-react~~  
~~npx create-react-app my-app --template redux~~

## Creating a Toolchain from Scratch
* A package manager, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
* A bundler, such as webpack or Parcel. It lets you write modular code and bundle it together into small packages to optimize load time.
* A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.

### Step 1: Initialize NPM (Node Package Manager)
    npm init -y

### Step 2: Install React, Webpack, and Babel
    npm install react react-dom
    npm install --save-dev webpack webpack-cli
    npm install --save-dev webpack-dev-server
    npm install --save-dev html-webpack-plugin
    npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
    npm install @reduxjs/toolkit
    npm install react-router-dom
    npm install --save-dev style-loader css-loader sass-loader node-sass
    npm install --save-dev url-loader

Here's what each package does:  
`react:` UI library for creating modular components.  
`react-dom:` enables us to render the React within the browser DOM.  
`webpack:` bundler that converts your source code into production-ready output.  
`webpack-cli:`   
`webpack-dev-server:` transforms our source code and serves it on a web server as we develop it. continuously. This helps use see the output of your code in the browser.  
`html-webpack-plugin:` an extension to webpack that adds the basic index html file.  
`@babel/core:` a JavaScript transpiler to converts modern JavaScript into a production-ready version that's compatible with all browsers.  
`babel-loader:` connects Babel to webpack's build process.  
`@babel/preset-env:` group of commonly used Babel plugins bundled into a preset that converts modern JavaScript features into widely compatible syntax.  
`@babel/preset-react:` React-specific Babel plugins that convert JSX syntax into plain old JavaScript that browsers can understand.  

### Step 3: Create the files
    touch webpack.config.js
    mkdir src
    cd src
    touch index.js
    touch index.html
