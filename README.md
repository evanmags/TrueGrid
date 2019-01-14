# TrueGrid.css
Sometimes you want a grid and want to take your valuable time painstakignly building one from scratch.
For all the other times there is TrueGrid.

```html
<link rel="stylesheet" type="text/css" href="css/TrueGrid.min.css"/>
<script type="text/js" src="js/TrueGrid.min.js"></script>
``` 

## What is TrueGrid?
TrueGrid is just that, a CSS grid built with *grid* elements, **not** flexbox. This means that declairing heights and widths of elements is ridiculously easy, something that can cause massive nesting of elements in flexbox grids. 

Every grid in the TrueGrid system is by default composed of a 12x12 square that covers 90% of the containing width and 95% of the containing height, with margin to match. While any subGrid will, by default, fill 100% of the available space.

Because all grid elements are positioned so that both start and end for both columns and rows are declaired by default, overlapping elements should never be a problem.

## How to Use
### Basic grids
Getting started is as simple as:
```html
<head>
    <link rel="stylesheet" type="text/css" href="css/TrueGrid.min.css"/>
</head>
<body>
    <div class="grid">

    </div>
</body>
```
That's it. You now have a 12x12 grid to work with. All grid boxes are in fractional units so they will size proportionally to different screen sizes.

To add a box just add another div and give it `class='box'` like so,
```html
<div class="grid">
    <div class="box"></div>
</div>
```
You now have a box positioned at column one, row one. 

To change the position of the box, just add `-#c-#r` to the end of your`.box` class.
```html
<div class="grid">
    <div class="box-5-7"></div>
</div>
```
This box would be in column 5, row 7.
I've added a few color classes to the code so that you can easily visualize spacing, try any of these `.red`, `.green`, `.blue`, `.orange`, `.black`
I've also added a circle class just for fun `.circle`

So now you can see your box and it takes up one square, what about sizing? That is just as simple.

With `.wide-#` and `.tall-#` classes you can easily expand a box to take up the entire grid.
```html
<div class="grid">
    <div class="box-1-1 tall-2">1</div>
    <div class="box-2-1 wide-2">2</div>
    <div class="box-4-1 wide-2 tall-2">3</div>
</div>
```
Notice that you can add either or both tall and wide classes to a box to make it as large as you would like.

**_Responsive classes are here!_**

All responsive classes are just as you would rind in bootstrap.
Just add `-sm`, `-md`,`-lg`, or `-xl` to your class to make any element appear differently at different viewport widths. This applies to all `.box`, `.tall`, and `.wide` classes.
For example if you wanted an element to be 12 unites wide on small screens but 6 units on large screens it would look like this:
```html
<div class="grid">
    <div class="box-1-1 wide-12 wide-6-lg">1</div>
</div>
```

And if you wanted that same element to move as screens got larger:
```html
<div class="grid">
    <div class="box-1-1 box-4-1-lg wide-12 wide-6-lg">1</div>
</div>
```

### Advanced fetures
#### Custom Grids

**_NEW CUSTOM GRID BUILDING:_**
No longer limited to 5 rows or coloumns. And no longer using classes!

To customize row or column widths or heights link the `TrueGrid.js` file at teh end of your webpage like so:
```html
<script type="text/js" src="minified/js/TrueGrid.min.js"></script>
``` 
Then in your grid element add a the row or column attribute and what ever widths or heights you would like, up to 12 rows or columns.
These attributes can be used the same as any `grid-template-column` or `grid-template-row` property in css.
```html
<div class="grid" columns='100px 5% 3fr repeat(4, 500px)' rows='repeat(12, 100px)'>

</div>
```
For access to more `.box-#c-#r` classes just pop open the `/full/scss/boxes.scss` file and change the loops to adjust for the number of rows or columns you would have.
```scss
@for $a from 1 through 24 {
  @for $b from 1 through 24 {
    .box-#{$a}-#{$b} {
      grid-column-start: #{$a};
      grid-row-start: #{$b};
    }
  }
}
```
This loop would create classes for 24 rows and columns.

#### Customizing Further

To truely customize your TrueGrid experience you will have to open the source file. Luckily there is only one thing to change! In the `TrueGrid.css` file within the `/full` directory the first class is `.grid` (your main grid class).
```css
.grid {
  display: grid;
  width: 90vw;
  height: 90vh;
  margin: 5vh auto;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 5px;
  grid-column-gap: 5px;
}
```
Here we see the initial set up, you can change any of the properties except `display: grid;` and still be safe. For a truely customizable grid experience youll want to play with the four classes below:
```css
.grid {
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 5px;
  grid-column-gap: 5px;
}
```
For more documentation on these particular properties see: [MDN | grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid).

Thanks for checking out my project! For a simple demo on a 3x3 grid check out this [codepen](https://codepen.io/emags112/full/PXyqvv).

(c)Copyright 2019 - Evan Magnussen
