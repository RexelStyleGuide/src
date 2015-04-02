#[REXEL UX STYLE GUIDE](http://RexelStyleGuide.github.io) 

**2 new repos now exist in Github**
* **[SRC](https://github.com/RexelStyleGuide/src)** - all files required to work on the Style Guide <br>
* **[REXEL STYLE GUIDE](https://github.com/RexelStyleGuide/RexelStyleGuide.github.io)** - clean, deployable Style Guide
<hr>

### CREATING THE STYLE GUIDE
**1.** **Clone the `src` repo locally**<br>
**2.** **Install [Angular](https://angularjs.org/) and [Zurb Foundation](http://foundation.zurb.com/)**<br>
* Install [Yeoman](http://yeoman.io/), it's dependancies, & the [Angular template](https://github.com/yeoman/generator-angular)<br>
* run `yo angular`<br>
* `y` to compass<br>
* `n` to bootstrap<br>
* select all Angular modules by navigating to empty circle. hit `Space` to select <br>
* run `npm install`<br>
* run `bower install`<br>
* run `grunt serve` (Your browser should load the site automatically)<br>
* run `bower install foundation --save`<br>
* open the file `/app/scripts/app.js` <br>
* enter `$(document).foundation();` after use strict then `save`<br>
* run `grunt build` <br>
* `stage`, `commit` & `publish` to Github<br>

**3.** **Install [Grunt Build Control](https://github.com/robwierzbowski/grunt-build-control)**<br>
* run `npm install grunt-build-control --save-dev`<br>
* add the following under `karma testing` in `/gruntfile.js` - <br>
```html
buildcontrol: {
    options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
    },
    pages: {
        options: {
            remote: 'https://github.com/RexelStyleGuide/RexelStyleGuide.github.io.git',
            branch: 'master'
        }
    },
    local: {
        options: {
            remote: 'https://github.com/RexelStyleGuide/src.git',
            branch: 'dist'
        }
    }
}
```
* Lastly, run`grunt buildcontrol`

<hr>

**Now we have a LIVE STYLE GUIDE @ http://rexelstyleguide.github.io/**

Complete dev package -<br>
* https://github.com/RexelStyleGuide/src <br>

Cleaned deployable package is in a sibling branch called `dist` -<br>
* https://github.com/RexelStyleGuide/src/tree/dist
* This branch is available when linked with Github, do not edit this branch directly<br>
* Use this when deploying to other server

<hr>

##SETTING UP THE DEV ENVIRONMENT

I've tried to make this as simple as possible. All the hard work was done in the actual creation of the Style Guide. Follow these steps to get this working locally as quick as possible.

**Prerequisites -**<br>
* access to [orginization and repos](https://github.com/RexelStyleGuide) in Github (granted by repo admins)
* [ssh key](https://help.github.com/articles/generating-ssh-keys/) paired with Github (this should already be done)
* [node](https://nodejs.org/), [grunt](http://gruntjs.com/), & [bower](http://bower.io/) installed globally 
* [Tower2](http://www.git-tower.com/) or other git GUI or basic knowledge of [git CLI](http://gitref.org/)

**Steps -**<br>
* clone `https://github.com/RexelStyleGuide/src.git` locally
* run `npm install`
* run `bower install`

<hr>

##EDITING THE STYLE GUIDE

* use `grunt serve` while editing, `livereload` will reload your browser after every save
* all work is done in the `/app` directory
* run `grunt build` when work is complete
* `stage`, `commit`, & `push` to Github `master` branch
* run `grunt buildcontrol` to deploy clean package LIVE  & to `src > dist` branch
