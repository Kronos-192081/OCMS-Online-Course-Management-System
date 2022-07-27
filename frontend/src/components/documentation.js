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
        <h3 className = "container center"><b>Documentation</b><a href = "#" target ="_blank">&nbsp;(Link to pdf)</a></h3>
        <br />
        <h6 style ={{fontSize: "17px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo tempus sodales. Suspendisse potenti. Donec sit amet eros imperdiet nisi interdum mollis nec a mi. Etiam ligula lacus, elementum eget leo sed, finibus bibendum tellus. Praesent id velit id lacus viverra tincidunt eget vel arcu. In ut odio nec nunc feugiat convallis vitae eu diam. Sed pulvinar laoreet dolor, ut condimentum nisi pulvinar at. Pellentesque volutpat risus odio, sit amet viverra dolor dapibus id. In molestie leo diam, eget ornare urna ultricies efficitur. Quisque facilisis, libero sit amet accumsan egestas, augue quam suscipit est, et elementum mi dolor id leo. Nullam lorem eros, egestas ac mauris ac, congue convallis arcu. Proin tortor nunc, ullamcorper in ligula eget, vulputate gravida orci.
        Nunc hendrerit nulla in lacus tincidunt scelerisque. Vestibulum malesuada lorem vitae nisl euismod, ac porttitor sapien suscipit. Maecenas non velit at augue rhoncus pretium id nec neque. Pellentesque viverra nunc sit amet sodales euismod. Nullam tristique nulla quis magna suscipit, ut iaculis orci viverra. Nunc nulla massa, auctor non ultrices et, efficitur a magna. Duis eleifend congue mauris, feugiat pharetra diam semper id. Pellentesque luctus mollis tempor. Aliquam in molestie sapien. In venenatis lectus nec est mattis faucibus. Proin aliquet nibh sed eros vulputate pulvinar. Sed lacinia cursus nulla non pretium.
        Mauris non dui dui. Donec ultrices tincidunt mi at euismod. Pellentesque commodo hendrerit ante a elementum. Nullam volutpat imperdiet elit, vitae fermentum nisl cursus sit amet. Pellentesque sit amet urna pulvinar, facilisis sem id, fringilla urna. Sed tempor commodo nulla eget tincidunt. Phasellus euismod erat sit amet felis consequat suscipit. Morbi eu sapien sed lectus luctus scelerisque at vel dolor. Praesent sit amet cursus nunc. Nullam consectetur non est vel feugiat.
        Donec tincidunt metus ut libero vehicula, id vulputate leo eleifend. Proin sodales sapien libero, a ultrices ipsum blandit id. In bibendum egestas rutrum. Cras quis nisl consectetur, lacinia sapien eget, malesuada nulla. Curabitur ut mattis justo, tempor finibus nibh. Phasellus at sem commodo, condimentum turpis at, dapibus ante. Aenean vehicula bibendum enim quis sodales. Mauris in maximus ante. Nullam nisi dui, faucibus non elit nec, imperdiet bibendum dui. Ut placerat posuere fringilla. Nunc eleifend faucibus metus ac laoreet. Pellentesque sollicitudin dictum ipsum eu maximus. Vivamus vitae turpis ac felis volutpat lacinia nec sit amet tellus. Phasellus condimentum molestie purus, vitae aliquam magna mollis ut. Vestibulum eleifend vitae ex ac dignissim. Pellentesque vel vehicula quam.
        Donec mollis risus quis dui ultricies vestibulum. Vivamus vitae sodales mauris, non sodales ex. Aliquam id eleifend quam. Praesent fringilla finibus leo vitae iaculis. Praesent vestibulum lorem fermentum, lacinia eros eget, congue neque. Donec mi nulla, dictum eu eleifend vestibulum, gravida a diam. Fusce hendrerit eros sed augue consectetur hendrerit. Nam sodales mi ut massa rhoncus rhoncus. Integer sollicitudin justo vitae imperdiet vehicula. Aliquam erat volutpat. Vestibulum eget velit dictum, finibus tortor vel, finibus enim. Aenean ex velit, malesuada vel blandit vitae, gravida vitae enim. Aliquam a ipsum pellentesque, dictum tellus non, mollis ligula. Suspendisse at massa eu nulla bibendum aliquam.
        </h6>
      </div>
  </div>
</div>
    );
}

export default Documentation;
