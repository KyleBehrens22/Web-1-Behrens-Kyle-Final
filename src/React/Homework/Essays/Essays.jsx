import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
    <EssaysStyled>
        <h2>Essays</h2>
        <Essay q='S2. What is the difference between Git, Github and Heroku?'>
            <ul>
                <li><b>Git:</b> GIT is a Version Control System, meaning that it allows you to track any changes in your project and acts as a historical backup in case you need to go back and revert to older copies. It’s almost like the ‘Save As’ function for your project by creating new versions every time you commit a new change.</li>
                <li><b>GitHub:</b> is a GIT Repository and acts like a remote server. GITHUB is where you take your project or app that you’ve created on your local system using GIT and you upload it to GITHUB. By uploading to GITHUB you give your team the opportunity to pull or clone the project onto their local computer and make changes without disturbing the current one. Once changes are made, your team can push their changes back onto GITHUB and merge the changes into the main project.</li>
                <li><b>Heroku:</b> Heroku is a service that deploys your backend and frontend of your project. Heroku lets you deploy a live working site to be able to test whether it works or not. Before Heroku, developers and designers had to set up and maintain their own servers to test out and deploy their projects.</li>
            </ul>
        </Essay>
        <Essay q='S3. Explain the difference between HTML, CSS and JS?'>
            <ul>
                <li><b>HTML:</b> HTML stands for HyperText Markup Language, it is used to create structure sections, paragraphs and links. HTML is the most widely used language to develop web pages. It acts as the building blocks of a website, but it looks very bland, that’s where CSS comes in.</li>
                <li><b>CSS:</b> CSS stands for Cascading Style Sheet, it is a style sheet language that is used to shape the HTML elements that will be displayed in a web page. CSS gives all of the personality and style to a web page, with only HTML your web page is going to look very bland and boring and no one is going to want to stay on your page. With CSS you program which kind of colors and fonts you want your page to display.</li>
                <li><b>JavaScript</b> JavaScript is the scripting language that gives your web page all of its functionality. JavaScript allows you to change the HTML and CSS elements on your website after it has been deployed. JavaScript is also useful for integrating your web page onto different browsers.</li>
            </ul>
        </Essay>
        <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
            <ul>
            <li><b>SPA:</b> SPA stands for Single Page App, and MPA is Multi-Page App. An SPA is a simpler page compared to the MPA. A Single Page App only loads data necessary for the user. While scrolling users can see all of the main content in their browser. Example sites of SPA are Twitter, Gmail and Pinterest. SPA’s tend to be a little more responsive and flexible and therefore have a better overall performance because they are not reloading the app over and over. SPA’s also are better with data caching the reason being that after the first request is sent to the server all of the necessary local data is is stored in the cache which make is possible to work offline i.e. Google Docs. The development speed of single page apps is also a lot faster because there are fewer elements to test. And finally the ease of debugging because most SPA’s are developed from popular frameworks like React.</li>
            <li><b>Multi-page Site:</b> The difference in an Multi-page Website is that it is an application with a large number of pages refreshed every time the data changes in them. Some popular sites that utilize MPA are shopping sites like Amazon and Ebay. MPA’s are used by companies like the before-mentioned because of their ease of scaling, meaning that you are able to create as many new pages for each product as the user would like. Another plus side of an MPA is SEO optimization because the app has multiple pages and they can be optimized for a specific demographic to get free traffic from Google.</li>
            </ul>
        </Essay>
        <Essay q='S5. What is the difference between Web Designer, Front End Developer and Back End Developer?'>
            <ul>
            <li><b>Front End Developer:</b> Front end developers implement visual components on a website as well as interactive features like navigation, buttons, pretty much anything the user is going to interact with. HTML, JavaScript, and CSS are often used to make a smooth operating website that functions the way it was designed.</li>
            <li><b>Back End Developer:</b> Back end developers make web pages and apps work through back end languages and frameworks such as Java or Ruby on Rails. They are in charge of how the site runs on the server side of things. Back end developers write code to help a database and an application communicate with one another. Back end developers are the heavy lifters behind the scene, they don’t make anything look better but without their code the app would fail.</li>
            <li><b>Web Designer:</b> Web Designers are more visual and they decide the layout of an app or website i.e. what the menus should look like as well as the fonts and colors. Whatever they make the Front End and Back End Developer have to follow. Web Designers typically have UI and user experience knowledge to make the site as easy as possible for users to navigate.</li>
            </ul>
        </Essay>
            <Essay q='S6. Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'>
            <ul>
            <li><b>Site Relative:</b> The address of the link is relative to the overall site. Site-relative links always begin with “/“. The slash means that the address is related to the web server’s notion of the site root. These are also used to link other websites that are located on the same domain. Instead of having the full path laid out you can just have the path from the working directory. It makes it easier to navigate vs using absolute paths.</li> 
            <li><b>Document Relative:</b> Relates to any link that is not a site-relative link. These links are relative to the document that contains them. Document-relative links are preferred when working on smaller apps or web sites. They can also be tested on the creators computer that does not host a web server.</li>
            <li><b>Absolute Paths</b> Is the entire url including the http:// or https:// and the root of the address. It is a path that describes the location of files or folders no matter the current working directory. It is the complete location of a file or directory. Absolute path’s can link other websites that are not locked on the same domain. </li>
            </ul>
        </Essay>
            <Essay q='S7. What is the difference between jpg, gif, png and SVG images?'>
            <ul>
            <li><b>JPG:</b> Joint Photographic Experts group, formerly know as JPEG but shortened when they decided to make extensions 3 letters. JPGs use lossy compassion and can be compressed 10:1 without a noticeable change in image quality. JPGs are the most common image file formats for digital cameras. Preferred format for photos while PNGs are best for screenshots or logos. They struggle with sharp edges and curves.</li>
            <li><b>GIF:</b> Graphics Interchange Format, they have a palette of up to 256 colors and also supports animations. They use a special type of compression called LZW that reduces file size without degrading the quality. They are useful for shape edged-line art with a limited number of colors, great for logos. They are commonly used for small low res animations.</li>
            <li><b>PNG:</b> Portable Networks Graphics is a format that supports transparent unlike .JPGs. PNGs also contain an ability to use more color palettes. If you use a PNG-24 it has an unlimited color palette. PNGs are very commonly used for logos to place over things because of its ability to hold an alpha layer and there is less artifacting compared to GIFs and JPGs.  </li>
            <li><b>SVG</b> Scalable Vector Graphic is a lossless format that is able to scale up and down with no loss in quality. SVGs also support transparency which is great for placing logos over photos on your app. Other than photos this is probably the best option when applying graphics to your web page.	</li>
            </ul>
        </Essay>
            <Essay q='S8. Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and DevOps.'>
            <ul>
            <li><b>Project Manager:</b> Determines which tasks will be carried out during the progression of a project. They also are responsible for implementing communication with the development team as well as the client. </li>
            <li><b>Business Analyst:</b> They get together with the product owners or stakeholder and determine which features and processes can be implemented to get them their desired outcome. They are also translators between product owners and the development team, they should be well versed in both languages.</li>
            <li><b>Scrum Master:</b> They are there to make the the whole team efficient, they give all of the instructions. Scrum master intervenes if the framework is violated. They are the person first contacted by a team member if a problem arises.</li>
            <li><b>UX Designer:</b> Responsible for making a website or app usable, enjoyable and accessible. They need to have a good understanding of the brand and the user who will be interfacing with app. They make the app look as good as possible and efficient for the user to stay on the page and to return.</li>
            <li><b>Web Developer/Engineer:</b> Developers design and build websites, they are responsible for what the webpage looks like and all of the technical aspects that make the site work properly. They use different web languages to develop the front-end or back-end or both sides of the webpage. </li>
            <li><b>Quality Assurance Tester:</b> They work together with the development team to test websites and find bugs in the app. When they find these bugs its their job to work them out and find new solutions whether that be changing something in the code or finding a more efficient software.</li>
            <li><b>DevOps:</b> They work with the web development team to build test and deploy software quickly. They implement strategies to help companies deliver applications as quickly as possible. The faster they can improve their speed the better they can serve their product owners and customers.</li>
            </ul>
            </Essay>
            <Essay q='S9. What is considered the right size for an image or video asset?'>
            <p>If your images are too big and unoptimized it is going to create issues for the user. If a web-page takes longer than 5 seconds to load you have a 90% probability that a user will leave the site. For full-width images the best settings are 2400x1600px and .jpegs. Full-width images should also be wide shots for when you are viewing on different devices because most-likely they will be cropped. Inside Content images it is recommended to use 1500x1000px optimized .jpegs. For video, your video should be a common aspect ratio i.e. 1920x1080, 1080x1080 or something smaller keeping the same ration like 1280x720 or 540x540. You should also use a compressed version of video for utilization on web pages, like .mp4. If you use something uncompressed like a ProRes 422 it will lead to longer load times and laggy playback. </p> 
            </Essay>
            <Essay q='S10. What does it mean for a company to be Agile? What are the pros and cons of being agile?'>
            <p> For a company to be agile it means to be able to adjust and respond to consumer or market changes at the drop of a hat. It means that a company can adapt to any changes in the market place to continue to stay relevant and up to date with trends. A pro to being agile is being fast enough to have the competitive edge when it comes to being first in the market place. Being agile is a collaborative effort which includes positions such as Scrum Managers, UX designers and Development teams. 
                Some cons of being agile include a difficulty in being able to determine future costs of development and implementation. Documentation starts to get buried due to the rush to push out a project, so over time there is less and less documentation to go back and review. There is also the issue of not having a finite end to a project, due to minimal planning at the beginning of a project functionality can take a hit because of that. </p> 
            </Essay>
            <Essay q='S11. What are testing environments? What is the difference between Local, Dev, QA and Production?'>
            <ul>
            <li><b>Test Environment:</b> A Test Environment is a server that is set up to allow you to run test cases that you have defined, it is more than just a server it involves hardware and a network configuration. It allows you to create identical environments every time you need to test your product. A test environment allows you to run on different operating systems to see how your application functions across the board. </li>
            <li><b>Local Testing:</b> Local testing environments mean running your app on your local system. These are tests that you can run in a controlled environment without ruining your already running application. Testing your application on a local server is the first step in the debugging process before you move onto the other stages of deploying. </li>
            <li><b>Dev Testing:</b> In Dev Testing is when your code is automatically tested so that problems can be discovered and taken care of as quick as possible. Dev Testing helps reduce the the effect of software errors and speeds up the delivery and discovery of bugs before customers can use.</li>
            <li><b>QA Testing:</b> QA stands for Quality Assurance Testing, it's the process of testing a website in order to discover defects and bugs. There are typically 3 parts to QA Testing; Requirement testing, Design Evaluation and Functionality Testing. In requirement testing the tester takes into account the list of requirements the client has approved. Design testing tests the appearance of the website, making sure it fits the clients approved designs and functions appropriately in multi-faceted devices such as desktops, tablets and mobile phones. Functionality testing evaluated the UI/UX and makes sure that each link and button functions as designed, this testing occurs over all kinds of different browsers and platforms.</li>
            <li><b>Production Testing:</b> Production Testing of TiP is a set of tests in a live environment. It helps to focus on limited areas of functionalities. TiP should be done by the QA team. Testing in production does not mean deploying the application to the real-world. Another use for this environment is to conduct A/B testing where you van gauge which version of a site users prefer. </li>
            </ul>
            </Essay>
            <Essay q='S12. Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?'>
                <p> CSS images can be visible but they have accessibility issues. HTML image tags are used for accessibility and SEO purposes, otherwise a CSS image is better for performance, speed and manipulation. HTML image tags should be considered if the the image is supposed to be part of the content, if not it should be coded using CSS. When you use HTML tags you can also use alt tags in the case of using something like a ‘warning’ that way no matter the connection the user can always receive the message. </p>
            </Essay>
            <Essay q='S13. What is the difference between IDs, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)'>
                <ul>
                <li><b>IDs:</b> Are unique, each element can have only one ID, and each page can have only one element with that ID. If you use the same ID on more than one element your code will fail. IDs also have special browser capabilities such as the “hash” element. Anything with the ID after the # in the URL will take you directly to that part of the page. ID selectors map to instances </li>
                <li><b>CLASSES:</b> Are not unique, classes can be used on multiple elements and you can use multiple classes on the same element. Styling information that needs to applies to multiple objects should be done using classes. It is recommended to use classes in your HTML attributes for CSS styling because they are safer.</li>
                <li><b>TAGS:</b> Map to classes. When deciding which to use, you need to decide whether the style you're creating applies to that one thing, all things like it, or anything that wants it. They are used to speicifially identify which section of the app to apply attributes to.  </li>
                <li><b>Specificity:</b> If there are two conflicting rules that point to the same element. The page should point to the item with greater precedence. You can give every ID selector a value of 100 every class selector a value of 10 and every HTML selcetor a value of 1. Whichever has the highest specificity value will win and its style will be applied to the element  </li>
                </ul>
            </Essay>
            <Essay q="S14. What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?">
                <li><b>CSS Preprocessor:</b> CSS Preprocessor: Puts together code that is written using a unique compiler. They then use that to create a CSS file and it can be referenced by the main HTML document. Preprocessors are a unique advanced stylesheet language that developers can leverage to create leaner, faster apps with more features and not spending as much time as you would using regular CSS.</li>
                <li><b>Types of CSS Preprocessors:</b> LESS and SASS they are well supported and have Cleary defined syntax and are already used by millions of websites. Stylus is another example of a CSS preprocessor. All preprocessors do similar things but with their own syntax and each of them have unique advanced features as well.</li>
                <li><b>Styled-components in React:</b> They allow us to write CSS within JavaScript in a modular reusable way. Instead of having one global CSS file for a React project you can leverage styled-components for enhancing your experience as a developer.</li>
                <li><b>How do Styled-Components violate separation of concern?</b> Many components have render methods that end up containing different style objects that create clutter and split the CSS into two places, making the code harder to parse. Styled Components help keep the concerns of styling and element architecture separated and make components more readable. The separation of Concern is the practice of separating a program into distinct sections using styled components seems to lump CSS together with JS. Instead of relying on 2 separate style objects, using a react styled components makes it easier to inject values that only exist in JS and CSS while allowing CSS to handle different UI states.</li>
            </Essay>
            <Essay q='S15. Final Project Eassay Subject:'>
                <p> For my project I want to create a website for a pizzeria that I have always wanted to start. I chose a pizzeria because I think it’s something you can have a lot of fun with as far as designing a website goes. Websites bring in a lot more customers because of the convenience in today’s digital world, now instead of ordering over the phone you can just google your favorite pizza place and browse the menu and schedule deliveries or pickup.</p>
                <p> I chose this subject because I have always had a dream of opening my own restaurant. It is not in my immediate plans to open one but if I can get good enough at web design, I would love to help out small businesses with their web presence to help them compete against the big chains who have almost unlimited resources.</p>
            </Essay>
            <Essay q='S16. What is the difference between Web Hosts, Domains, and FTP?'>
                <p> Answer goes here </p>
            </Essay>
        </EssaysStyled>
        
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;  