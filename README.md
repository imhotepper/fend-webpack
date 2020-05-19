
# Analyse THIS!

This project will take an artilce url and it will display a 3 sentence summary of it using the [Aylien](https://developer.aylien.com) api.

# Project details

The api was developed using the details presented in the module 5. Build Tools and Single Page Web Apps of the Front End Nano Degree program. 

The front end also uses generated Service Worker so that it can be started without internet connectivity. Of course, there will be no summary displayed since no network is available, only the general layout of the page.

# API details

The api called by the front end is a simple one that is available at the following endpoint:

```js
http://localhost:8080/analyse
```

The returned response has the following structure:

```json
{
  "data":["Sentence 1", "Sentence 2", "Sentence3"]
}
```

At the server side level the number of sentences returned can be configured because this is a parameter of the aylien api.

## Run locally 

The project can be started locally. In order to run it the following steps must be executed:

- use `npm install` or `yarn` in order to install dependencies
- start the webpack-dev server and the express server using `npm run dev` or `yarn dev`

## Deploying

### WIP

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
