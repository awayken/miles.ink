# miles.ink

  > The writing homepage for Miles Rausch.

[![Build Status](https://travis-ci.org/awayken/miles.ink.svg?branch=master)](https://travis-ci.org/awayken/miles.ink)

[Miles.ink](http://miles.ink) is the homepage to learn more about Miles Rausch as a writer. It's powered by [Jekyll](http://jekyllrb.com/) and written by me, Miles Rausch.

**WHAT??** Yes, the writer, Miles Rausch, is also [the developer, Miles Rausch](https://github.com/awayken/).

What's Miles.ink made out of?

  * [git](http://git-scm.com/)
  * [GitHub](https://github.com/)
  * [Jekyll](http://jekyllrb.com/)
  * [Travis CI](https://travis-ci.org/)

## Generating Miles.ink

Miles.ink is built on Jekyll. To see the site, we have to generate it. Jekyll builds static sites from all sorts of magic parts. There's data, posts, layouts and Sass to do styling.

To generate the site:

    bundle exec jekyll build

## Serving Miles.ink

Jekyll has a built-in server that can watch your files for updates and refresh the page for you. Cool? Def.

To serve the site:

    bundle exec jekyll serve

## Deploying Miles.ink

Miles.ink uses Glynn to deploy it. For obvious reasons, the `_glynn.yml` file is not committed with the project.

To deploy the site:

    glynn
