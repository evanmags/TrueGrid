# TrueGrid
Sometimes you want a grid and want to take your valuable time painstakignly building one from scratch.
For all the other times there is TrueGrid.

## What is TrueGrid?
TrueGrid is just that, a CSS grid built with *grid* elements, **not** flexbox. This means that declairing heights and widths of elements is ridiculously easy, something that can cause massive nesting of elements in flexbox grids. 

Every grid in the TrueGrid system is by default composed of a 12x12 square that covers 90% of the containing width and 95% of the containing height, with margin to match. While any subGrid will, by default, fill 100% of the available space.

Because all grid elements are positioned so that both start and end for both columns and rows are declaired by default, overlapping elements should never be a problem.

## How to Use
### Basic grids
Getting started is as simple as:
```html
<div class="grid">

</div>
```
That's it. You now have a 12x12 grid to work with. All grid boxes are in fractional units so they will size proportionally to different screen sizes.

**_There are currently NO features for truely responsive design yet. That is still in the works_**

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

### Advanced fetures
##### Custom Grids

Grids can be customized up to 5x5 through classes. these grids will still be based in fr units BUT will allow you to size things proportionally to one another.

Just add `.column-#-#` or `.row-#-#`, append one `-#` for every row or column you want to add. Values can be up from 1-10fr for either row or column.

**_Breaking events will happen with the following:_**
When makign a 5x5 grid do not mix numbers below 6 with numbers 6 or above. becasue of the way the classes were generated these classes are not currently available.
example: `.cloumn-4-9-2-8-1`. This issue should be fixed in the next release.

##### Customizing Further

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
Here we see the initial set up, you can change any of the properties except `display: grid;` and still be save. For a truely customizable grid experience youll want to play with the four classes below:
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