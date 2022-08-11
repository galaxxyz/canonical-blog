# Canonical blog

А simple web page that displays blog posts.

## Technologies

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Vanilla framework](https://vanillaframework.io/docs) was used for styling.

## Demo

https://galaxxyz.github.io/canonical-blog/

## Project Structure

### `Components`

- Loader
- PostPreview

### `Services`

- api.js - includes functions for interacting with API: pulling posts data

### `Helpers`

- dateParser.js - contain function for parsing GMT date
  - Parameters: `parseDate(dateGMT)`
  - Return value (example): `12 January 2020`
- stringTrimmer.js - contain function for trimming string if it is too long (default max length is 50)
  - Parameters: `trimString(str[, length])`
  - Return value: trimmed string followed by `...`, or original string

## Result

![screenshot](./assets/canonical-blog.jpg)
