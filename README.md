# google-books-api

```
$ npm install
$ npm test
$ npm start
```

[master branch](https://github.com/sanjsanj/google-books-api) uses phantomjs to host the DOM for unit tests but there is a [jsdom branch](https://github.com/sanjsanj/google-books-api/commits/jsdom) which shows how to use jsdom-global instead.

webpack-dev-server compiles the bundle in to memory, to actually create the dist/bundle.js file run `$ webpack`

Todo:
- Apply grayscale for images in IE10+
- Fix differing item heights
- Check if description is over 200 characters before applying ellipses
