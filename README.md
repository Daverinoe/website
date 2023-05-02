# Daverinoe's Website

You too can host and browse my website locally!

To do this, you need to have NodeJS installed, or Docker. 

## NodeJS instructions

NodeJS instructions are to simply run
```js
npm install
npm run dev -- --open
```

This should run the vite build, and open a web browser to the local index.html.

## Docker instructions

For docker, the instructions are to build the image, then run the image, after which you can navigate to https://localhost:5137 in your web browser.

```
docker build -t IMAGE_NAME .
docker container run IMAGE_NAME
```

## Using this website

Though the images and video are mine, you are very welcome to use this as a template to build your own website.
