
const Profile_Display = ({profiles}) => {
    return(
        <div className = "centered_text">
            <h3 className = "center" style={{fontWeight: "bold", color:"red"}}>My Profile</h3><br />
            <h4> <b> Name : &nbsp; </b>{profiles.name} </h4>
            <h4> <b>Educational Background :&nbsp; </b> {profiles.education} </h4>
            <h4> <b> Teaching Experience :&nbsp; </b> {profiles.teaching} </h4>
            <h4> <b> Subjects Offered :  &nbsp; </b> {profiles.subjects} </h4>
            <h4> <b> Address :</b> &nbsp; {profiles.address} </h4>
            <h4> <b>Contact :</b> &nbsp; {profiles.contact} </h4>
        </div>
    );
}

export default Profile_Display;