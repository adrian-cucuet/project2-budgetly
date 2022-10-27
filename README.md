# Project 2 - Budgetly
 
Budgetly is a website that helps the user keep an eye on the budget and on track with daily tasks. The budget widget allows the user to create and maintain a list of monthly expenses, and in the same making sure it keeps a positive balance.
The To Do widget allows the user to create a list of tasks to follow, and check them once they are done as well as delete them.
 
Having the user in mind, I decided to create the website with a dark - light mode. This way the user can work in an environment that is more relaxing for the eyes.
 
![Responsive Mockup](https://github.com/adrian-cucuet/project1/blob/main/assets/images/all-devices-black.png)

[Mind & Soul - Live Webpage](https://adrian-cucuet.github.io/project1/index.html)

# Table of Contents

1. [Features](#features)
2. [Languages Used](#languages-used)  
2. [User Experience (UX)](#user-experience-ux)
3. [Testing](#testing)
4. [Deployment](#deployment)
5. [Credits](#credits)

## Features
 
### Navigation
 
 - Featured on all pages, the full responsive expandable navigation side bar includes links to the Budget, To Do List, Info Section, and toggle for dark/light mode. It is identical on each page to allow the user easy access to all sections.
 - On small screens, the navigation is shown at the bottom of the screen. The decision was based on the latest UX research where the users prefer using the thumb for navigation on smartphones.
 
![Nav Bar](https://github.com/adrian-cucuet/project1/blob/main/assets/images/navbar-full.png)
 
![Mobile Nav Bar](https://github.com/adrian-cucuet/project1/blob/main/assets/images/mobile-nav-bttm.png)
 
### Budget Widget
 
 - The budget widget includes a section where the user can see live the Income, Expenses (total) and Balance amounts.
 - The Income Enter Section allows the user to input the income amount. Everytime a new amount is entered the income is automatically updated.
 - The Expenses Enter Section allows the user to input the expenses name and amount. Everytime a new expense is entered, an entry is created in the Latest Expenses section.
 - The Latest Expenses section conatains all the expenses submitted by the user and each item has two buttons: Edit and Delete. The Edit button sends the name and amount back to the Expenses Enter Section to be edited and re-submited. The Delete button will remove that specific item from the list. Both actions will recalculate the total expenses and balance amounts.
 
![Budget Section](https://github.com/adrian-cucuet/project1/blob/main/assets/images/hero-home.png)
 
### To Do Widget
 
 - The To Do section allows the user to create a list of tasks to follow throughout the day, week or month. Every task has two buttons: one for Done and one for Delete. The Done button checkes the task and it gets cut from the list to allow the user to focus only on the remaining tasks. The Delete button will delete the task from the list.
 
![To Do Section](https://github.com/adrian-cucuet/project1/blob/main/assets/images/benefits-section.png)
 
### Info section
 
 - The Info section will explain the user how each widget is working. 
 
![Info section](https://github.com/adrian-cucuet/project1/blob/main/assets/images/meditation-section.png)
 
### Dark/Light Mode
 
 - The toggle for Dark/Light Mode is available on both desktop and mobile navigation bars. It allows the user to toggle between a dark or light theme.
 
![Dark/Light Mode](https://github.com/adrian-cucuet/project1/blob/main/assets/images/footer-full.png)

[Back to top &uarr;](#table-of-contents)

## Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JS](https://www.javascript.com/)

[Back to top &uarr;](#table-of-contents)

## User Experience (UX)

### User stories

As a first-time user:

- I want to have an easy way to control my budget and keep track of my balance.
- I want to have a To Do list from where to control what tasks to focus on and delete the tasks I've done.

As a returning user:

- I want to have easy access to both of them from a mobile phone and control my budget and tasks from anywhere.
- I want to keep a daily to do list with things I need to focus on and check them throughout the day.

### Wireframes
 
For the wireframes, I used [Figma](https://www.figma.com/). From left to right we have Side Bar Closed and Expanded; Budget Section Desktop Page; To Do Section Desktop Page; Budget Section Mobile Page; To Do Section Mobile Page.

![Wifeframes](https://github.com/adrian-cucuet/project1/blob/main/assets/images/wireframes.png)

### Color Scheme

For the color scheme, I picked simple colors, using the 60-30-10 rule. The colors are consistent throughout the website, creating a relaxed environment for the user.

![Color Scheme](https://github.com/adrian-cucuet/project1/blob/main/assets/images/colors.png)

### Features Left to Implement
 
- A user register/login feature.
- Implementing a storage system for the data to be stored and pulled after login.
- Adding a calendar for the To Do to pick dates for task (Bill payments, deadlines, etc).

[Back to top &uarr;](#table-of-contents)
 
## Testing
 
Testing has been done on different browsers (Chrome, Safari, Firefox) and the website was performing well on all three.
 
The mobile responsiveness testing has been done using iOS, and Android. The website kept the same layout on all three with no issues.

Due to the Favicon files uploaded, the website has a .webmanifest file that allows the mobile website to be saved on the home screen of the phone and acts like a progressive web app.

 
### Validator Testing
 
- HTML: No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fadrian-cucuet.github.io%2Fproject1%2Findex.html)
- CSS: No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fadrian-cucuet.github.io%2Fproject1%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
 
- The results for the Lighthouse are all above 90:
 ![Lighthouse Score](https://github.com/adrian-cucuet/project1/blob/main/assets/images/lighthouse-perfm.png)
 
### Unfixed Bugs
 
Due to videos embedded in the Mediation pages, the page performance was low. I have tried to find solutions to increase the performance score. One of the solutions was to create a link for the videos and send the user on the YouTube website. As this would drive traffic away from this website I decided to wait until I find a javascript solution to fix the loading time for the pages.

[Back to top &uarr;](#table-of-contents)
 
## Deployment
 
The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a       detailed ribbon display to indicate the successful deployment.
 
The live link can be found here - [Mind & Soul](https://adrian-cucuet.github.io/project1/index.html)
 
[Back to top &uarr;](#table-of-contents)

## Credits
 
- The text for the Home page and all the Meditation pages was taken from [HSE](https://www.hse.ie/eng/)
- The icons used for social media and benefits are from [FontAwesome](https://fontawesome.com/)
- All the illustrations are from [Storyset](https://storyset.com/people)
- The videos are taken from various [YouTube](https://www.youtube.com/) channels as embedded videos.
- [Favicon](https://favicon.io/favicon-generator/) was used for creating icons for the website.
 
[Back to top &uarr;](#table-of-contents)

### Other General Project Advice
 
- Whenever I encounter difficulties, I went and checked for solutions on [W3Schools](https://www.w3schools.com/).

- To make the iframe responsive and keep the ratio I found a solution on [stackoverflow](https://stackoverflow.com/a/60166158/19997434)

[Back to top &uarr;](#table-of-contents)