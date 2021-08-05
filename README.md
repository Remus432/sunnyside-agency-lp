# Frontend Mentor - Sunnyside agency landing page

![Design preview for the Sunnyside agency landing page coding challenge](./design/desktop-preview.jpg)

---

## Welcome! 👋

Today's challenge consists in building a responsive landing page for a fictional agency called **"Sunnyside"**

## Process

Started the project by laying out all the necessary boilerplate code and creating an HTML structure that can make it easier to implement all the features of the assigned design.

For the layout, I used a mixture of flex and grid, so I could create a responsive design.

Javascript was used mainly for microinteractions, but also for incorporating the hamburger menu for the mobile view.

---

## Challenges

### Responsive Images
This project contains images for both desktop and mobile versions, so I had to figure out a way to change the images that were used with the `<img />` tag.

I discovered an attribute, `srcset` that allows just that. This way, one doesn't have to worry about Javascript / CSS, as you can use HTML to let the browser when to replace the current image with one that's better suited for the current device view.

It's a "best-practice" because your project will load the appropiate image, thus saving memory and data and improving the overall performance.

> More on this topic can be found here [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

### Microinteractions
Thogh projects like this have simpler layout and a lesser amount of content / pages, I've realized one shouldn't overlook the importane of microinteractions in the overall process of UX.

It's these subtles additions to the UI that truly offer your project a complete, polished feel and look. 

But I've also noticed how easily I can get caught up in these little details and lose track of time and sight of the big picture. It's essential to know how to balance out all the elements of a composition not only for the user's sake, but also for your sake as well.

### Media Queries
When I first delved in the topic of **responsive design** and **media queries**, I felt overwhelmed and confused. The layouts kept breaking apart and I had to write 10x more code than necessary.

Projects like these are a great way of learning how to properly implement media queries - they're not as difficult as they seem at first.

One of the best tips I learned when it comes to building responsive designs is taking a mobile-first approach. Once you've successfully managed to organize in a neat manner all the UI elements for smaller devices, it'll be much easier to finish it for larger devices since it's a matter of mostly changing the flow of the layout and scaling down / up a few things.

## Things To Improve Upon

* The **"Services"** section isn't perfectly aligned. 
* Spacing issues - they're not "UI breaking", but still could be better
* Reusability - parts of the code can be cleaned and reused again in a more effective manner

## Join the challenge 💪
You can join this and many other challenges on Frontend Mentor

## My work 💻
You can find more challenges that I've completed [here](https://www.frontendmentor.io/profile/Remus432)