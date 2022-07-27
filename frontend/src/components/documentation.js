import React, { useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { Link, useHistory } from 'react-router-dom';
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import {API_URL} from "../constants";



const Documentation = () => {
  const history = useHistory();
  const notyf = new Notyf();
  
  useEffect(() => {
    const ocms_token = localStorage.getItem('ocms_token');
    fetch(API_URL + "/api/users/current", {
        headers: { "Authorization": ocms_token }
        })
        .then(res => {
            if(!res.ok) 
            {
              history.push('/login');
              notyf.error("Unauthorised");
            }
    })
  }, [])

    return (
        <div className="container-fluid">
  <div className="row">
      <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bgval2 hover-nav1 sidebar collapse ">
      <div className="pt-md-5">
  <ul className="nav flex-column">
    <br /> <br />
      <li className="nav-item navg1">
        <Link className="nav-link active" aria-current="page" to="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span className="ml-2">Dashboard</span>
        </Link>
      </li>
      <li className="nav-item navg1">
        <Link className="nav-link active" to="/profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span className="ml-2">Your Profile</span>
        </Link>
      </li>
      <li className="nav-item navg1">
        <Link className="nav-link active" to="/post_admin">
          <img src="https://www.svgrepo.com/show/325504/playlist-play.svg" alt="logo" width="24" height="24" className="d-inline-block align-text-top" />
          <span className="ml-2">Manage Posts</span>
        </Link>
      </li>
      <li className="nav-item navg1">
        <Link className="nav-link active" to="/announcements_admin">
          <img src="https://www.svgrepo.com/show/234457/megaphone-advertising.svg" alt="logo" width="24" height="24" className="d-inline-block align-text-top" />
          <span className="ml-2">Manage Announcements</span>
        </Link>
      </li>
      <li className="nav-item navg1">
        <Link className="nav-link active" to="/courses_admin">
          <img src="https://www.svgrepo.com/show/60373/books.svg" alt="logo" width="24" height="24" className="d-inline-block align-text-top" />
          <span className="ml-2">Manage Courses</span>
        </Link>
      </li>
      <li className="nav-item navg1">
        <Link className="nav-link active" to="/documentation">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          <span className="ml-2">Documentation</span>
        </Link>
      </li>
    </ul>
</div>
      </nav>
      <div className="col-md-9 ml-sm-auto col-lg-10">
        <br />
        <h3 className = "container center"><b>Documentation</b><a href = "#" target ="_blank">&nbsp;(Link to docs)</a></h3>
        <br />
        <h6 style ={{fontSize: "17px"}}>
        <hr className = "style1"/>
          <h5><b>Getting Started with OCMS</b></h5>
          <hr className = "style1"/>
          This system is built with ReactJS library for frontend and Nodejs (with Express ) in the backend. <br /> <br />
          This app consists of various features which are listed below :- <br />
          <ol>
            <li>It has <b>Post Management System</b> in which the Admin can create, edit or delete a post from the admin dashboard which will be reflected in the Home.</li>
            <li>The next important feature is <b>Announcement Management System</b> which is similar to the Post management system.</li>
            <li>It also has <b>Course Management System</b>. The course management system provides the following features:-
              <ol>
                <li>Add or Edit or Delete a course. </li>
                <li>Add or Edit or Delete a class under the course. </li>
                <li>Add or Edit or Delete a subject under a class. </li>
                <li>Add or Edit or Delete a table which displays the subject coverage (under a subject). </li>
              </ol>
            </li>
            <li>This also contains miscellaneous things such as important links, address embeds, link embeds in posts, About Us page, Terms and Condition page etc.</li>
            <li>It also has a login page which facilitates login to Admin Dashboard.</li>
          </ol>
          <br />
          <hr className = "style1"/>
          <h5><b>Create or Edit Profile</b></h5>
          <hr className = "style1"/>
          This part in the Admin Dashboard facilitates the create or edit of profile.<br /> <br />
          Steps :- 
          <ol>
            <li>Click My Profile.</li>
            If profile is not created it will show profile not found with a button to create the profile.
            <li>Click on "Create" or "Edit" and fill the form</li>
            <li>Click on "Create Profile" or "Edit Profile" and it will be created.</li>
          </ol>
          <br />
          <hr className = "style1"/>
          <h5><b>Manage Posts</b></h5>
          <hr className = "style1"/>
          This section in the Admin Dashboard facilitates the management (Create, Edit or Delete) of Posts. <br />  <br />
          Steps to Create a Post :-
          <ol>
            <li>Click on the "Create Post" Button.</li>
            <li>A form will be opened . Fill the form with relevant details.</li>
            <li>Click on "Create Post" and it will be created.</li>
          </ol>

          Steps to Edit a post :-
          <ol>
            <li>Click on the post to be edited.</li>
            <li>Click on "Edit".</li>
            <li>Fill the necessary details. </li>
            <li>Click "Edit Post" and it will be edited.</li>
          </ol>

          Steps to delete a post :-
          <ol>
            <li>Click on the post to be deleted.</li>
            <li>Click on "Delete".</li>
            <li>Click "Yes" on the popup and it will be deleted. </li>
          </ol>
          <br />

          <hr className = "style1"/>

          <h5><b>Manage Announcements</b></h5>
          <hr className = "style1"/>
          This section in the Admin Dashboard facilitates the management (Create, Edit or Delete) of Announcements. <br />  <br />
          Steps to Create a Announcement :-
          <ol>
            <li>Click on the "Create Announcement" Button.</li>
            <li>A form will be opened . Fill the form with relevant details.</li>
            <li>Click on "Create Announcement" and it will be created.</li>
          </ol>

          Steps to Edit a announcement :-
          <ol>
            <li>Click on the announcement to be edited.</li>
            <li>Click on "Edit".</li>
            <li>Fill the necessary details. </li>
            <li>Click "Edit Announcement" and it will be edited.</li>
          </ol>

          Steps to delete a announcement :-
          <ol>
            <li>Click on the announcement to be deleted.</li>
            <li>Click on "Delete".</li>
            <li>Click "Yes" on the popup and it will be deleted. </li>
          </ol>
          <br />
          <hr className = "style1"/>

          <h5><b>Manage Courses</b></h5>
          <hr className = "style1"/>
          This section in admin dashboard helps in managing courses. <br /> <br />

          Steps for creating, editing and deleting is similar to the above (Posts and Announcements). <br /><br />

          Click on "Click Here" of each course to move to the classes under the course and follow similar steps for creating, editing and deleting a class. <br /> <br />

          Click on "Click here" again to move to subjects under each class and follow similar steps for creating, editing and deleting a subject. <br /> <br />

          Click on "Click here" again to move to Subject coverage under each subject and follow similar steps to create, edit or delete a row in the coverage table. <br /> <br />

          <br />
          <hr className = "style1"/>

          <h5><b>Documentation</b></h5>
          <hr className = "style1"/>
          This section of the admin panel contains a detailed writeup of each feature and miscellaneous items.
          <br />
          <br />
          <hr className = "style1"/>

          <h5><b>Miscellaneous Items (For Styling Purpose)</b></h5>
          <hr className = "style1"/>
          This is a comprehensive list (ignore the " ") to style texts, headings, add images and position them etc. <br /> <br />

          <ol>
            <li>To make a part of a text bold enclose that part of the text in the "&lt;b&gt;(your text here)&lt;/b&gt;" tags.</li>
            <li>To make a part of a text underline enclose that part of the text in the "&lt;u&gt;(your text here)&lt;/u&gt;"tags.</li>
            <li>To make a part of a text italics enclose that part of the text in the "&lt;i&gt;(your text here)&lt;/i&gt;"tags.</li>
            <li>If you want to use multiple things like underline and bold then just enclose under both the tags (first opening tag of both and then closing tag of both). eg:"&lt;b&gt;&lt;u&gt;(your text here)&lt;/u&gt;&lt;/b&gt;" </li>
            <li>If you want to colour a certain part of the text then enclose the text in "&lt;span style = "color: (your colour)"&gt;(your text here)&lt;/span&gt;"</li>
            <li>If you want to increase the text size of a certain part then enclose the text in "&lt;span style = "font-size: (your font size)px"&gt;(your text here)&lt;/span&gt;" (Remember give a font size greater than 20px to see a change).</li>
            <li>If you want to increase as well as change color then use both inside span that is both color and font-size. eg:"&lt;span style = " color: (your color); font-size: (your font size)px"&gt;(your text here)&lt;/span&gt;" </li>
            <li>To center a sub-heading text enclose that in "&lt;div style = "font-size: (your font size)px" class = "center"&gt;(your text here)&lt;/div&gt;" The font-size and color properties are also there incase you want to have them also. If not required remove the style part entirely.</li>
            <li>To give a horizontal line after a paragraph or any text use &lt;hr /&gt; tag</li>
            <li>To give a line space after a paragraph or any text use &lt;br /&gt; tag</li>
            <li>To insert a image in the content of a post or announcement use this tag (for left aligned image): &lt;img src = (proper image link) alt = "image" className = "img-fluid container2" /&gt;</li>
            <li>To insert a image in the content of a post or announcement use this tag (for center aligned image): &lt; div class = "containing1&gt;&lt;img src = (proper image link) alt = "image" className = "img-fluid container2" /&gt;&lt;/div&gt;</li>
          </ol>
        </h6>
      </div>
  </div>
</div>
    );
}

export default Documentation;
