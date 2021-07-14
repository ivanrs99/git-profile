import React from 'react'
import './styles/UserInfo.css'
import Chart from './Chart'

const UserInfo = ({ userData, lang }) => {
    return (
        <div >
            <div className="mt-5 mb-5 d-flex justify-content-center">
                <img src={userData.avatar_url} className="avatarImg" alt="avatar"></img>
            </div>
            <h1 className="mb-5 d-flex justify-content-center">
                <a href={userData.html_url} target="_blank" rel="noreferrer">@{userData.login}</a></h1>
            
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 items mr-5">
                    <div className="item">
                        <span className="number">{userData.public_repos}</span>
                        <span className="number-label">Repositories</span>
                    </div>
                    <div className="item">
                        <span className="number">{userData.followers}</span>
                        <span className="number-label">Followers</span>
                    </div>
                    <div className="item">
                        <span className="number">{userData.following}</span>
                        <span className="number-label">Following</span>
                    </div>
                </div>
                <div className="col-md-9 chart">
                    <Chart lang={lang}/>
                </div>                
            </div>            
        </div>
    );
}

export default UserInfo;