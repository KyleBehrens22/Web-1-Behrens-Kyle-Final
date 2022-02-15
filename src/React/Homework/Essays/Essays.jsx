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
            <p> Answer goes here Thursday</p> 
            </Essay>
            
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;