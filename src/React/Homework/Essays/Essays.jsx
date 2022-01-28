import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
    <EssaysStyled>
        <h2>Essays</h2>
        <Essay q='S2. What is the difference between Git, Github and Heroku?'>
            <ul>
                <li>Git: GIT is a Version Control System, meaning that it allows you to track any changes in your project and acts as a historical backup in case you need to go back and revert to older copies. It’s almost like the ‘Save As’ function for your project by creating new versions every time you commit a new change.</li>
                <li>GitHub: is a GIT Repository and acts like a remote server. GITHUB is where you take your project or app that you’ve created on your local system using GIT and you upload it to GITHUB. By uploading to GITHUB you give your team the opportunity to pull or clone the project onto their local computer and make changes without disturbing the current one. Once changes are made, your team can push their changes back onto GITHUB and merge the changes into the main project.</li>
                <li>Heroku: Heroku is a service that deploys your backend and frontend of your project. Heroku lets you deploy a live working site to be able to test whether it works or not. Before Heroku, developers and designers had to set up and maintain their own servers to test out and deploy their projects.</li>
            </ul>
        </Essay>
        <Essay q='S3. Explain the difference between HTML, CSS and JS?'>
            <ul>
                <li>HTML: HTML stands for HyperText Markup Language, it is used to create structure sections, paragraphs and links. HTML is the most widely used language to develop web pages. It acts as the building blocks of a website, but it looks very bland, that’s where CSS comes in.</li>
                <li>CSS: CSS stands for Cascading Style Sheet, it is a style sheet language that is used to shape the HTML elements that will be displayed in a web page. CSS gives all of the personality and style to a web page, with only HTML your web page is going to look very bland and boring and no one is going to want to stay on your page. With CSS you program which kind of colors and fonts you want your page to display.</li>
                <li>JS: JavaScript is the scripting language that gives your web page all of its functionality. JavaScript allows you to change the HTML and CSS elements on your website after it has been deployed. JavaScript is also useful for integrating your web page onto different browsers.</li>
            </ul>
        </Essay>
        <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
            <ul>
            <li>SPA stands for Single Page App, and MPA is Multi-Page App. An SPA is a simpler page compared to the MPA. A Single Page App only loads data necessary for the user. While scrolling users can see all of the main content in their browser. Example sites of SPA are Twitter, Gmail and Pinterest. SPA’s tend to be a little more responsive and flexible and therefore have a better overall performance because they are not reloading the app over and over. SPA’s also are better with data caching the reason being that after the first request is sent to the server all of the necessary local data is is stored in the cache which make is possible to work offline i.e. Google Docs. The development speed of single page apps is also a lot faster because there are fewer elements to test. And finally the ease of debugging because most SPA’s are developed from popular frameworks like React.</li>
            <li>The difference in an MPA is that it is an application with a large number of pages refreshed every time the data changes in them. Some popular sites that utilize MPA are shopping sites like Amazon and Ebay. MPA’s are used by companies like the before-mentioned because of their ease of scaling, meaning that you are able to create as many new pages for each product as the user would like. Another plus side of an MPA is SEO optimization because the app has multiple pages and they can be optimized for a specific demographic to get free traffic from Google.</li>
            </ul>
        </Essay>
        <Essay q='S5. What is the difference between Web Designer, Front End Developer and Back End Developer?'>
            <ul>
            </ul>
        </Essay>
    </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;