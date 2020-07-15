# miles.ink

  > The writing homepage for Miles Rausch.

[![Build Status](https://travis-ci.org/awayken/miles.ink.svg?branch=master)](https://travis-ci.org/awayken/miles.ink)

[Miles.ink](https://miles.ink) is the homepage to learn more about Miles Rausch as a writer. It's powered by [Eleventy](https://www.11ty.io/) and written by me, Miles Rausch.

**WHAT??** Yes, the writer, Miles Rausch, is also [the developer, Miles Rausch](https://github.com/awayken/).

What's Miles.ink made out of?

  * [git](http://git-scm.com/)
  * [GitHub](https://github.com/)
  * [Eleventy](https://www.11ty.io/)
  * [Travis CI](https://travis-ci.org/)

## Generating Miles.ink

Miles.ink is built on Eleventy. To see the site, we have to generate it. Eleventy builds static sites from all sorts of magic parts. There's data, posts, layouts and CSS to do styling.

To generate the site:

    npm run build

## Serving Miles.ink

Eleventy has a built-in server that can watch your files for updates and refresh the page for you. Cool? Def.

To serve the site:

    npm start

## Deploying Miles.ink

Miles.ink uses a Node script to deploy itself. For obvious reasons, the `deploy.js` file is not committed with the project. I could commit it and use environment variables to keep the secret stuff secret, and maybe I'll do that in the future.

To deploy the site:

    npm run deploy
