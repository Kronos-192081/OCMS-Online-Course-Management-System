
const Profile_Display = ({profiles}) => {
    return(
        <div className = "centered_text">
            <h3 className = "center" style={{fontWeight: "bold", color:"red"}}>My Profile</h3>
            <br />
            <h4> <b> Name : &nbsp; &nbsp;</b>{profiles.name} </h4>
            <h4> <b>Educational Background :</b> {profiles.education} </h4>
            <h4> <b> Teaching Experience : </b> {profiles.teaching} </h4>
            <h4> <b> Subjects Offered : </b> {profiles.subjects} </h4>
            <h4> <b> Address :</b> {profiles.address} </h4>
            <h4> <b>Contact :</b> {profiles.contact} </h4>
        </div>
    );
}

export default Profile_Display;