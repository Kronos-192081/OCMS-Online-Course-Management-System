import { useEffect, useState } from "react";

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch("http://localhost:5000/api/users/current", {
        headers: { "Authorization": token }
        })
        .then(res => {
            if(res.ok)
            {
                res.json().then((msg) => {
                    fetch("http://localhost:5000/api/profile", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(msg)
                    })
                    .then(resn => {
                        if(resn.ok) return resn.json();
                    })
                    .then(data => {
                        setProfile(data);
                    })
                });
                
            }
        })
    }, [])


    return (
        <div>
            { (profile!=null) && <div><h1>Profile found</h1></div>}
            { (profile==null) && <div><h1>No Profile Found</h1></div>}
        </div>
    );
}

export default Profile;