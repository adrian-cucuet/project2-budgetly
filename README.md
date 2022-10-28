# Project 2 - Budgetly
 
Budgetly is a website that helps the user keep an eye on the budget and be on track with daily tasks. With the budget widget, users can track monthly expenses and make sure the account stays positive by keeping a list of all expenses.
The To Do widget allows users to keep track of tasks they need to complete, mark them as completed, and delete them when they are complete.
 
The decision to create a dark-light mode on the website was based on the user's needs. It is therefore possible to work in an environment that is more relaxing for the user's eyes.
 
![Responsive Mockup](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/responsive.png)

[Budgetly - Live Webpage](https://adrian-cucuet.github.io/project2-budgetly/)

# Table of Contents

1. [Features](#features)
2. [Languages Used](#languages-used)  
2. [User Experience (UX)](#user-experience-ux)
3. [Testing](#testing)
4. [Deployment](#deployment)
5. [Credits](#credits)

## Features
 
### Navigation
 
 - Featured on all pages, the full responsive expandable navigation sidebar includes links to the Budget, To Do List, Info Section, and toggle for dark/light mode. It is identical on each page to allow the user easy access to all sections.
 - On small screens, the navigation is shown at the bottom of the screen. The decision was based on the latest UX research where the users prefer using the thumb for navigation on smartphones.
 
![Side Bar Nav](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/sidebar-nav.png)
 
![Mobile Nav Bar](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/mobile-nav.png)
 
### Budget Widget
 
 - The budget widget includes a section where the user can see live the Income, Expenses (total), and Balance amounts.
 - The Income Enter Section allows the user to input the income amount. Every time a new amount is entered the income is automatically updated.
 - The Expenses Enter Section allows the user to input the expenses name and amount. Every time a new expense is entered, an entry is created in the Latest Expenses section.
 - The Latest Expenses section contains all the expenses submitted by the user and each item has two buttons: Edit and Delete. The Edit button sends the name and amount back to the Expenses Enter Section to be edited and re-submitted. The Delete button will remove that specific item from the list. It is expected that both actions will result in a recalculation of the total expenses as well as the balance.
 
![Budget Section Desktop](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/budget-desktop.png)
![Budget Section Mobile](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/budget-mobile.png)
 
### To Do Widget
 
 - The To Do section allows the user to create a list of tasks to follow throughout the day, week, or month. Every task has two buttons: one for Done and one for Delete. Once the Done button has been clicked, the task will be cut from the list so the user can focus only on the remaining tasks. The task will still be visible in the list but with a lower opacity and would be stroked. A task will be deleted from the list when it is deleted using the Delete button.
 
![ToDo Section Desktop](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/todo-desktop.png)
![Todo Section Mobile](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/todo-mobile.png)
 
### Info section
 
 - A description of how each widget works can be found in the Info section.
 
### Dark/Light Mode
 
 - The toggle for Dark/Light Mode is available on desktop and mobile navigation bars. Depending on the user's preference, it can be turned dark or light.

[Back to top &uarr;](#table-of-contents)

## Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JS](https://www.javascript.com/)

[Back to top &uarr;](#table-of-contents)

## User Experience (UX)

### User stories

As a first-time user:

- Keeping track of my balance and controlling my budget should be easy.
- To organize my to-do list and delete tasks I've completed, I want to create a To Do list.

As a returning user:

- Both of them should be accessible from my mobile phone so I can control my budget and tasks wherever I am.
- Keep a daily task list of things I need to accomplish and check it throughout the day.

### Wireframes
 
For the wireframes, I used [Figma](https://www.figma.com/). For the mobile, I decided to use a flex display and no wireframes were needed.

[Side Bar Navigation](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/Desktop-Sidebar-Expanded.png)
[Budget Section Desktop](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/Desktop-BudgetCalculatorPage.png)
[To Do Section Desktop](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/Desktop-ToDoList.png)

### Color Scheme

For the color scheme, I picked simple colors, using the 60-30-10 rule. There is consistency in colors throughout the website, making it a relaxing experience for users.

![Color Scheme](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/Colors.png)

### Features Left to Implement
 
- A user register/login feature.
- Creating a storage system for the data that will be retrieved after the login process.
- Include a calendar in the To Do list to select task dates (Bill payments, deadlines, etc).

[Back to top &uarr;](#table-of-contents)
 
## Testing
 
Testing has been done on different browsers (Chrome, Safari, Firefox) and the website was performing well on all three.
 
The mobile responsiveness testing has been done using iOS, and Android. The website kept the same layout on all three with no issues.
 
### Validator Testing
 
- HTML: No errors were returned when passing through [W3C validator](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/html.png)
- CSS: No errors were found when passing through [(Jigsaw) validator](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/CSS.png)
- JS: No errors were found when passing through [Esprima](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/JS.png)
 
- The results for the Lighthouse are:
 [Lighthouse Score](https://github.com/adrian-cucuet/project2-budgetly/blob/main/assets/images/scorel.png)
 - For the score at accessibility are things I couldn't change as they are a paramount part of the code.
 
### Unfixed Bugs

- The Budget section is not centered properly after returning from other sections. I have tried to find a fix but couldn't find one in time for project submission.
- The Dark mode on refresh goes back to light mode. I am looking for a solution in javascript.
- On refresh, the data is lost. One solution would be local storage but that is limited. Another one would be to link the data to a database.
- The accessibility score couldn't be fixed by adding alt data and a placeholder.


[Back to top &uarr;](#table-of-contents)
 
## Deployment
 
The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a  detailed ribbon display to indicate the successful deployment.
 
The live link can be found here - [Budgetly](https://adrian-cucuet.github.io/project2-budgetly/)
 
[Back to top &uarr;](#table-of-contents)

## Credits
 
- For the sidebar, I followed a tutorial from www.codinglabweb.com
- For the Budget javascript I followed a tutorial from www.codingartistweb.com
- For the To Do javascript I followed a tutorial from www.developedbyed.com
- [Favicon](https://favicon.io/favicon-generator/) was used for creating icons for the website.
 
[Back to top &uarr;](#table-of-contents)

### Other General Project Advice
 
- Whenever I encounter difficulties, I went and checked for solutions on [W3Schools](https://www.w3schools.com/) and [Stackeflow](https://stackoverflow.com/)

- The logo was created by [Kier De Dios](https://kierdedios.com/), he also helped with the color scheme and UX.

[Back to top &uarr;](#table-of-contents)