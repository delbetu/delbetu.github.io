# delbetu.github.io
[ Personal site ](https://delbetu.github.io)

## Running site locally
```bash
$ gem install jekyll
$ jekyll serve
```
Now browse to http://localhost:4000

## Writing pages
https://jekyllrb.com/docs/pages/

- Jekyll-generated site is under `_site` directory.
- The simplest way of adding a page is just to add an HTML file in the root.
- Images, javascript and styles goes under assets folder
- In order get Markdown converted to HTML, files need to start with `Front matters`

```
---
layout: default
title: Page title
---
```

