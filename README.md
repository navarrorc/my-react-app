# A React JS with TypeScript and SASS workflow bundling with webpack and gulp

## Prerequisites

**Node JS**

`download from https://nodejs.org/en/`

**Git**

`download from https://git-scm.com/downloads`

**Gulp**

`npm install gulp -g`

**tsd** 

`npm intall tsd -g`

## Clone the project and then run

`npm install`

then

`tsd install`

and then finally

`gulp`


## File structure

**/src** - This folder contains all the SASS, and TypeScript files.

**/builds/dev** - This folder contains all bundled JS and CSS files.

**/builds/prod** - This folder contains all bundled minified JS an CSS files.

**/public** - This folder contains the index.html that uses files from either the builds/dev or builds/prod directories.

**/src/app** - This folder contains the TypeScript used throughout the site.

**/src/sass** - This folder contains the SASS files that webpack compiles to one CSS file for use throughout the site.
