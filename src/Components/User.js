import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import UserInfo from './UserInfo'
import GhPolyglot from 'gh-polyglot'

const User = () => {
    const location = useLocation();
    const username = location.state.id;
    const [userData, setUserData] = useState(null);
    const [lang, setLang] = useState(null);
    const [repo, setRepo] = useState(null);
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
          .then(json => {console.log(json); setUserData(json)})
          .catch(error => {
            setError({ active: true, type: 400 });
            console.error('Error:', error);
            });
    };

    const getLang = () => {
      const userLang = new GhPolyglot(`${username}`);
      userLang.userStats((err, stats) => {
        if(err){
          console.error('Error:', err);
          setError({ active: true, type: 400 });
        }
        console.log(stats)
        setLang(stats);
      });
    };

    const getRepo = () => {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => {
          if (response.status === 404) {
            return setError({ active: true, type: 404 });
          }
          if (response.status === 403) {
            return setError({ active: true, type: 403 });
          }
          return response.json();
        })
        .then(json => setRepo(json))
        .catch(error => {
          setError({ active: true, type: 200 });
          console.error('Error:', error);
        });
    }

    useEffect(() => {
        getUserData();
        getLang();
        getRepo();
    },[]);

    return (
        <div className="mx-auto">
            {error && error.active ? (<div>Error</div>) : (
                <>
                    {userData && lang && <UserInfo userData={userData} lang={lang}/>}
                </>
            )}            
        </div>
    );
}

export default User;