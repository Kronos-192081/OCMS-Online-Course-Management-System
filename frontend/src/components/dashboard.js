import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const DashBoard = () => {
    const [name, setName] = useState('');
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch("http://localhost:5000/api/users/current", {
            headers: { "Authorization": token }
            })
            .then(res => {
                if(res.ok)
                {
                    res.json().then((msg) => {
                    setName(msg.name);
                    });
                }
                else history.push('/login');
        })
    })

    return (
      <div>
        <h1>Welcome {name} !!!</h1>
      </div>
  );
}

export default DashBoard;