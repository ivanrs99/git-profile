import React from 'react'
import './UserInfo.css'

const UserInfo = ({ userData }) => {

    return (
        <div >
            <div className="mt-5 mb-5 d-flex justify-content-center">
                <img src={userData.avatar_url} className="avatarImg" alt="avatar"></img>
            </div>
            <h1 className="mb-5 d-flex justify-content-center"><a href={userData.html_url}>@{userData.login}</a></h1>
            
            <div className="row d-flex justify-content-center">
                <div className="items mr-5">
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
                <div className="col-md-4 chart">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>                
            </div>            
        </div>
    );
}

export default UserInfo;