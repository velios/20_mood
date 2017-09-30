# Site for the Mood

The site displays funny quotes from JSON

### Where see result
Visit https://velios.github.io/20_mood/

### Forders structure
* `app` - source of used libs, html and css
    * source css is `app/sass/main.sass`
    * source js is `app/js/common.js`
    * sources compress and minified when execute `gulp build` to `docs/css/main.min.css` and `app/js/sctripts.min.js`
* `docs` - production data(minified and compress) for show to user as site. Folder is called `docs` because GitHub allows to publish only in `gh-pages`, `docs` folders or in branches.

### How to continue develop
Before next steps you need install [NodeJs](https://nodejs.org/en/)
```bash
# Download repository from GitHub
$ git clone https://github.com/velios/20_mood.git
# Change folder to download folder
$ cd 20_mood
# installs the project dependencies listed in package.json
# like pip install -r requirements.txt in python
$ npm i 
# installs the project dependencies listed in bower.json
$ bower install #like pip
# run gulp to continue change markup with browser-sync, sass-combile, etc functions
$ gulp
```
##### Build folder for production
```bash
$ gulp build
```
Now you can publish contents of a folder `docs` to server

# Project Goals

It made to try use nodejs, gulp and sass and try to make responsive markup.
Use [OptimizedHTML - Start HTML Template](https://github.com/agragregra/optimizedhtml-start-template) as prepared template. 

The code is written for educational purposes. Training course for web-developers - [DEVMAN.org](https://devman.org)
