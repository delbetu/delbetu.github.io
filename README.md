# delbetu.github.io
[ Personal site ](https://delbetu.github.io)

## Running site locally
```bash
$ bundle install
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

## Reference for this site
- https://koppl.in/indigo/
- Index page has default layout --> It shows the about content, a picture and social links
- The page layout includes a header and a footer
- The post layout includes header footer title date and author

```
Pages
   |--> Home
   |--> Pages
   |--> Projects
   |--> About
```

## Help

[Link to a page]({{ site.baseurl }}{% link index.html %})

Jenkins uses [Liquid](https://shopify.github.io/liquid/basics/introduction/)

[Styling Markdown](https://digitaldrummerj.me/styling-jekyll-markdown/)
