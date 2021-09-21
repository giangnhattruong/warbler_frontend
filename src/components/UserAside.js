import React from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({profileImgaeUrl, username}) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <img 
                src={profileImgaeUrl || DefaultProfileImg}
                alt={username}
                height="200"
                width="200"
                className="img-thumbnal"
            />
        </div>
    </aside>
)

export default UserAside;