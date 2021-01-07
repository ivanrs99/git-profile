import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import UserInfo from './UserInfo'

const User = () => {
    const location = useLocation();
    const username = location.state.id;
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState({ active: false, type: 200 });

    const getUserData = () => {
        fetch(`https://api.github.com/users/${username}`)
          .then(response => {
            if (response.status === 404) {
              return setError({ active: true, type: 404 });
            }
            if (response.status === 403) {
              return setError({ active: true, type: 403 });
            }
            return response.json();
          })
          .then(json => {console.log(json);setUserData(json)})
          .catch(error => {
            setError({ active: true, type: 400 });
            console.error('Error:', error);
            });
    };

    useEffect(() => {
        getUserData();
    },[]);

    return (
        <div className="mx-auto">
            {error && error.active ? (<div>Error</div>) : (
                <>
                    {userData && <UserInfo userData={userData}/>}
                </>
            )}            
        </div>
    );
}

export default User;