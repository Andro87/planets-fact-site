Hi Andro, Great job on this challenge, This is actually on of my most favourite challenges on this platform. There are three main issues with this solution :

-   Your page's layout will break on wide screens.
-   Your project is not structured properly.
-   You took a wrong approach ( I explain why in depth )

Now I'm going explain each issue.

**1. Page's Layout :**
I started with this one since it's the most easiest to fix. You have written a scss class called `main_container` inside `./styles/Home.module.scss` and used it in various places.

```css
.main_container {
    width: 100%;
}
```

Now, You've applied this class to the elements which are block level by default and taking 100% width is their default behavior, There is no need to apply this class to them.

But what happens if the user is browsing our website in an ultrawide monitor ? Do we want our container to fill the whole screen ? The answer depends on the project itself, but for this project the answer is clearly no, because we don't have much content on the screen so it's better to control the container's width, so you can easily update `main_container` :

```css
.main_container {
    width: 100%;
    max-width: 80rem;
    margin: auto;
}
```

With the above's approach, our container fill 100% of the available space but when it hits width of 80rem, it will stop growing and we will have a better looking layout on a widescreen.
