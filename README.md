# Fledgling: Glasgow Edition
## David J. Buchanan's Interactive Frontend Development Milestone Project Submission

Allow Fledgling to introduce you to the cities of the world by guiding you around the neighbourhoods and available accommodation. Aimed at young Millennials embarking on their first adventure outwith the parental home it is a 'must-have' guide to both students and young proffesionals when relocating to a new home city.
On this site you can discover the Scottish city of Glasgow; get maps and descriptions of the neighbourhoods; sign up for a bespoke accommodation service; and stay 'up-to-date' with Fledgling's updates using the newsletter facility. 

Note: The website provides a portal through which a fictional relocation service advertises its services. All descriptions therein are representative of Glasgow City.  

## UX

The website was designed for the purpose of the Code Institute's Interactive Frontend Development Milestone Project Submission. The brief required a front-end web application consisting of one or more HTML pages with significant interactive functionality. The inclusion of information, links, imagery and functionality were designed to acheive this goal.
The target users are listed below:

<ul>
<li>Type (1) User is a student/young proffesional wishing to learn about Glasgow's neighbourhoods for the purposes of relocating.
</li>

<li>Type (2) User is a student/young proffesional wishing to enlist the services of an accommodation finder.
</li>  

<li>Type (3) User is a student/young proffesional wishing to keep up-to-date about Glasgow's accommodation news via a newsletter</li>
</ul>

### Mockups 

Generated on Lucidchart and can be accessed at https://www.lucidchart.com/invitations/accept/5cf6c53f-7c71-430a-b734-6b20243cf038

Mockups for 3 different viewport sizes were rendered: desktop, landscape mobile and portrait mobile.
![](assets/mockup.jpeg)


## Existing Features

<ul>
<li>
Feature 1 - the fixed navbar  
Allows users to move within the page. This was designed to scroll and adapt in colour (after first vieport window) to engage them user. The navbar looks identical on all viewport sizes 
with the exception of narrow viewports where a dropdown menu was employed.
</li>

<li>
Feature 2 - the footer
Enables user to access newsletter feature by adding their email address and submitting it via the 'submit' bnutton. This feature is sacrificed on narrow viewports 
otherwise looks identical on all pages. The feature is not enabled and the submission of email address data is not recorded. 
</li>

<li>
Feature 3 - the footer
Allows users to access the social links belonging to Fledgling. Clicking on the social media icon opens a new page that links to the respective site.
</li>

<li>
Feature 4 - the callout
A fullscreen background image with a callout inviting the user to click on the 'discover' button thus introducing them to a description of Glasgow.
</li>

<li>
Feature 5 - the neighbourhoods accordion
An interactive accordion, i.e list of cards, performs a dual role of allowing the users to read about areas in Glasgow whilst a map (sitting alongside the description) updates to focus on the specific area of interest. 
</li>

<li>
Feature 6 - the accommodation form 
A form exhibiting a range of interactive functionalities including a checkbox function and dropdown menu function for the eliciatation of relevant information with emailJS functionality. Thus allowing the site's owner to receive an automated email detailing the users requirements.
</li>
</ul>

### Future Features

<ul>
<li>
Feature 7 - the modal  
Allows users to have confirmation that the submission of the accommodation form and/or newsletter request (see footer) has been sent successfully by the display of a popup message confirming success.
</li>

<li>
Feature 8 - content 
About section includes links to other sites to inform the user to a greater extent about Glasgow e.g. events, local customs, crime statistics (using a crime API). Additional sections, i.e. containers, would include a local services (using Yelp's API) section; a transport section; and an employment/education section.
</li>

<li>
Feature 9 - Map 
Map functionality includes a 'heat map' to indicate accommodation costs.
</li>

<li>
Feature 10 - Translate API
Introduce a facility for non-english speaking users to translate the website content into alternate languages. 
</li>

<li>
Feature 11 - Navbar
Navbar background color changes on downward scroll from the callout-container to the about-container. However this requires a navtrans-container to allow a seamless color change to occur. Better JavaScript code is sought for this in future. 
</li>
</ul>

## Technologies Used

Language types, frameworks and libraries used:

HTML https://www.w3.org/html/

CSS https://www.w3.org/Style/CSS/Overview.en.html

Java Script https://www.javascript.com/

Jquery https://jquery.com/

Bootstrap https://getbootstrap.com/

Fontawesome https://fontawesome.com/

EmailJS API https://www.emailjs.com/ 

Google Maps API https://developers.google.com/maps/documentation


## Testing

The HTML and CSS code was validated on https://validator.w3.org/ and https://jigsaw.w3.org/css-validator/

User testing was performed manually on Google Chrome inspect tools, using the following scenarios:

### Callout link:
Try to click on the callout link 'Discover!', navigate to the about section - WORKS


### Accommodation form:
Go to the accommodation section via navbar link or by scrolling - WORKS

Try to submit the empty form (with the exception of the default option of the dropdown field being occupied) and verify that an error message about the required fields appears - WORKS

Try to submit form with no name and verify that an error message about the required fields appears - WORKS

Try to submit form with no email and verify that an error message about the required fields appears - WORKS

Try to submit the form with an invalid email address, i.e. missing '@', and verify that a relevant error message appears - WORKS

Try to submit the form with 1, 2, 3, 4, 5 or all 6 checkboxes checked - WORKS

Try to submit the form with 0 checkboxes checked - WORKS (however this assumes that this field is not compulsory)

Try to submit the form with all inputs valid and verify that a success message appears. - FAIL (see Feature 7 above)

### Neighbourhoods accordion and interactive map:
Go to the neighbourhoods section via navbar link or by scrolling - WORKS

Try to open and close each card individually and view text and map update simultaneously - WORKS

Try to open a card whilst another card is open. Have the former open and the latter auto-close - WORKS

Try to interact with the Google map and have it respond as expected- WORKS

### Mailing list form:
Go to the footer section by scrolling - WORKS (Note: Chrome tools doesn't show the footer unless zoom set to less than 100%)

Try to submit the empty form and verify that an error message about the required fields appears - WORKS

Try to submit the form with an invalid email address, i.e. missing '@', and verify that a relevant error message appears- WORKS

Try to submit the form with all inputs valid and verify that a success message appears.- FAIL (see Feature 7 above)

### Social media links:
Go to the footer section by scrolling - WORKS (Note: Chrome tools doesn't show the footer unless zoom set to less than 100%)

Try to click on the link, have a new page open and be directed to the site in question - WORKS

### Navigation bar (large screen or larger):

Try to click on the links and be directed to the site in question - WORKS 

### Navigation bar (medium screen or smaller):

Try to click on the links and be directed to the site in question - WORKS

### Responsive Design
The site was tested on the following screen sizes (landscape and portrait (where appropriate))
<ul>
<li>
Apple iPad pro
</li>
<li>
Apple iPad
</li>
<li>
Apple iPhone 5/SE/6/7/8/X/6 plus/7 plus/8 plus
Note: when tested on actual iPhone 6 the  background-attachment: fixed was not compatible with iOS browsers. 
On Chrome and Safari in iOS, the background photos appeared zoomed-in and blurry. To fix this, the .background-attachment: scroll 
property value was added in a media query.
</li>
<li>
Samsung Galaxy S5
</li>
<li>
Pixel 2/2 XL
</li>
<li>
Laptop
</li>
<li>
Desktop
</li>
</ul>



## Deployment

The code was written on Gitpod by first initiating a repository on Github. A single branch was used from which all code and images were deposited. 
The subsequent deployment was on Github Pages and can be found at https://davidjbuchanan.github.io/MS2-Fledgling/

## Credits

### Layout
The themes and layout were inspired by the Lonely Planet website
https://www.lonelyplanet.com/scotland/glasgow

Footer and Navbar based upon Matt Rudge's Rosie Odekirk resume page
https://github.com/Code-Institute-Solutions/resume-miniproject-bootstrap4/tree/master/17-adding-contact-form

### Text 
All content is taken from the Lonely Planet website and from Google:
https://www.lonelyplanet.com/scotland/glasgow
https://www.google.com/search?q=finnieston&rlz=1C1CHBF_en-GBGB883GB883&oq=finnieston&aqs=chrome..69i57j0l7.5271j1j7&sourceid=chrome&ie=UTF-8


### Media
The photos used in this site were obtained from stock supply sources:
Shutterstock https://www.shutterstock.com/home

### Code
The scrollable navbar changing backgound color on scroll from first to second container:
System 22 I.T. Solutions 'Bootstrap 4 Change Navbar Background Color On Scroll' @ https://www.youtube.com/watch?v=AM-GT_0Uu5w

The accommodation form's checkboxes were enlarged and styled using procured code:
WebDevBooster and D. Rosado @ https://stackoverflow.com/questions/48293920/change-bootstrap-4-checkbox-size/48300261    

The accordion styling with toggling +/-:
https://getbootstrap.com/docs/4.4/components/collapse/#collapseshow George Martsoukos @ https://webdesign.tutsplus.com/tutorials/how-to-customize-bootstraps-4-accordion-component--cms-32510 

The accommodation form's email API Java Script:
Boiler plate code from emailJS

The map API Java Script:
Boiler plate code from Google

Responsive design on iOS by employing use of .background-attachment: scroll class:
Code Institute @ https://github.com/hschafer2017/HSCHAFER-Portfolio/blob/master/README.md



