# JavascriptAppTemplate Project Overview

Node.js project to demonstrate using npm modules and bundling into a single Javascript file.


## Steps To Use Template Directly

* Clone template to new directory.
   * Create project directory `md Project1`
   * Open project directory in VSCode `code Project1`
   * Using VSCode integrated terminal clone repository into directory
   `git clone https://github.com/Neutrino-Sunset/JavascriptAppTemplate.git .`
* If desired update the project name in packages.json `name` field.
* If desired update the project output file name in webpack.config.js `filename` field.
* Run `npm i` to install all modules.
* Run `npm run build` to bundle the entire application to a single Javascript file using WebPack. On Windows this Javascript file can be executed by passing it to the Node.js interpreter `node.exe <applicationname>.js`, or you can right click the file, select `Open With...` select `node.exe` from wherever you have Node.js installed, and then `<applicationname>.js` can be executed directly from either a command prompt or from Explorer.


## Steps to Create Project From Scratch

* Open directory in VSCode.
* Create Main.js
* Click `Debug->Add Configuration` select node.js
* Run `npm init`. Enter lowercase project name, accept all other default settings
* Add required app modules, e.g. `npm install --save underscore`

write code...


## Bunding with WebPack

* Install WebPack `npm i --save-dev webpack`
* Create basic webpack.config.js e.g.

```javascript
module.exports = {
   entry: './Main.js',
   output: {
      filename: './dist/JavascriptAppTemplate.js'
   }
}
```

* Build using webpack `./node_modules/.bin/webpack`
* Run application `.dist\JavascriptAppTemplate.js` (requires .js files to be set to open using node.exe).
* Create npm script to run webpack via npm by adding the following script to packages.json

```javascript
"scripts": {
   "build": "webpack"
},
```

* Now WebPack can be run via `npm run build`
