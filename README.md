# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview
An interactive customer rating component with a responsive layout, optimized for Desktop, Tablet and Mobile screen viewing. It also has an error notification that is triggered when an attempt to submit a feedback is made without selecting a number rating.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/Interactive%20rating%20component%20-%20desktop%20view.png)
![](./images/Interactive%20rating%20component%20-%20desktop%20view%202.png)
![](./images/Interactive%20rating%20component%20-%20desktop%20view%20with%20error%20message.png)
![](./images/Interactive%20rating%20component%20-%20thank%20you%20state%20-%20desktop%20view.png)
![](./images/Interactive%20rating%20component%20-%20mobile%20view.png)

### Links

- Solution URL: [View solution on Frontend Mentor](https://www.frontendmentor.io/solutions/interactive-rating-component-aI4-qWxKYU)
- Live Site URL: [View live site here](https://terrysama.github.io/Interactive-rating-component/)

## My process

- Implemented a top - down approach for creating the HTML structure fused with Bootstrap class semantics
- Completed the rating selection card state before moving on to the "Thank you" card state
- Made use of custom CSS properties where deemed necessary
- Used JavaScript and jQuery for the DOM manipulation; 
  - To grab the value of the selected number rating and display it in the "Thank you" card state
  - To display a dynamic error message upon submitting an empty rating

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- Javascript
- jQuery library

### What I learned

Created an error message that fades in and is deleted from the DOM upon fading out

```js
if (rating.length < 1) {
  const err = $('.error-block');
  err.append(
    '<div class="invalid-tip fade-in-out">' + 
    'Please choose a rating from 1 - 5. </div>'
  );
  event.preventDefault();
  $('.invalid-tip').each(function() {
    setTimeout(() => {
      $(this).remove();
    }, 4000);
  });
}
```

### Continued development

- Form validation with custom error messages

## Author

- GitHub - [Nnamdi Terry Nwolisa](https://github.com/terrysama)
- Frontend Mentor - [@terrysama](https://www.frontendmentor.io/profile/terrysama)
