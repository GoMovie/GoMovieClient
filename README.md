# gomovie-client

![Build Status](https://travis-ci.org/GoMovie/GoMovieClient.svg?branch=master)

> OOA/D final project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Project Structure

```
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   ├── pages/                  # routered pages
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   ├── e2e/                    # end-to-end test
│   └── unit/                   # unit test
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
├── .editorconfig               # editor config
├── .travis.yml                 # travis CI
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```

### Hint

- Customize Webpack Loaders: `build/webpack.base.conf.js`
- Directly copy and do not process with webpack: `static/ `
- `@` is the alias of `src`

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
