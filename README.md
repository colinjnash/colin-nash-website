# React Personal Website

**Built on**: React, Webpack, Express, Styled Components.

**Deployment**: Initially on Heroku with a static redirect from S3, but in order to take full advantage of enabling SSL via Firebase Hosting, as well as automatically deploying gzip for the bundle, the site was migrated over to Firebase.

## Configuration

### Webpack

Webpack configured without bloat, and uses `Webpack-Image-Compression`, `SWPreCacheConfig` for the Serviceworker. 

A bundle.js.gz is still created for serving gzipped files under the Express server.

For any changes:

**dev**: Webpack.config.js
**prod**: Webpack.prod.config.js

### Initalization

for `localhost` testing, run `npm start`.

for `localhost` production build, run `npm run build`, followed by `npm run prod`, which will point to the express server.  

### Deployment

**Heroku**: Simply push the repo to `Heroku master`. `Server.js` should be a web proc and the entry point for Heroku builds.

**Firebase**: Firebase deployment just needs the copy of `index.HTML` moved into build directory before deployment. `Server.js` and other express dependencies may be removed.
