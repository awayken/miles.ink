# miles.ink

  > The writing homepage for Miles Rausch.

[![Build Status](https://travis-ci.org/awayken/miles.ink.svg?branch=master)](https://travis-ci.org/awayken/miles.ink)

[Miles.ink](https://miles.ink) is the homepage to learn more about Miles Rausch as a writer. It's powered by [Jekyll](http://jekyllrb.com/) and written by me, Miles Rausch.

**WHAT??** Yes, the writer, Miles Rausch, is also [the developer, Miles Rausch](https://github.com/awayken/).

What's Miles.ink made out of?

  * [git](http://git-scm.com/)
  * [GitHub](https://github.com/)
  * [Eleventy](https://www.11ty.io/)
  * [Travis CI](https://travis-ci.org/)

## Generating Miles.ink

Miles.ink is built on Eleventy. To see the site, we have to generate it. Eleventy builds static sites from all sorts of magic parts. There's data, posts, layouts and Sass to do styling.

To generate the site:

    npm run build

## Serving Miles.ink

Eleventy has a built-in server that can watch your files for updates and refresh the page for you. Cool? Def.

To serve the site:

    npm start

## Updating the Service Worker

Miles.ink is a simple [Progressive Web App](https://developers.google.com/web/progressive-web-apps/). The `sw.js` file was built using [Workbox](https://workboxjs.org/), and it's a good idea to update it when changes are made to the site. I'd like to work this into the deploy step at some point. The generator will use a config file so builds will be consistent. You must have Workbox installed.

To update the service worker:

    workbox generateSW workbox-cli-config.js

## Deploying Miles.ink

Miles.ink uses Glynn to deploy it. For obvious reasons, the `_glynn.yml` file is not committed with the project.

To deploy the site:

    glynn
