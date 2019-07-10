# Frontend Cheatsheet

## HTML

### Basic Layout:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- this is a comment -->
    <title>This is the title in the upper tab</title>
    <link rel="stylesheet" href="linktocss.css">
  </head>
  <body>
    <h1>Header 1: some title</h1>
    <!--Here's a pargraph tag. The ids and classes can be used to identify items -->
    <p id="exampleID">
      Wow this is a <a href="somelocation.html">link</a>!
    </p>
    <div class="exampleClass">
    <!-- this is a div and can be used as a general container -->
    <img>
    </div>
  </body>
</html>
```

## CSS

```css
/* This is a comment in css */

/* The following CSS changes everything in the body of the html document
  (in this case, the background color) end properties with a semicolon */
body {
  background-color: #edf1f7;
}

/* The # references something's id s
This changes the text color of items with id pID */
#exampleID {
  color: #121e30;
}

/* The . before a word references something's class */
.exampleClass {

}

/* You can also change multiple things at the same time */
p, div {

}
```
.markdown-preview.markdown-preview {
  background-color: #444;
}
