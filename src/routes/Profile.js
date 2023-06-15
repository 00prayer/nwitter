import { authService, dbService } from "fbase"; 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ userObj, refreshUser }) => {
    const navigate = useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

    const onLogOutClick = () => {
        authService.signOut();
        navigate("/");
    };

    const onChange = (event) => {
        const { target:{ value }} = event;
        setNewDisplayName(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        if(userObj.displayName !== newDisplayName)
        {
            await userObj.updateProfile({ displayName: newDisplayName });                        
            refreshUser();
        }
    };

    // const getMyNweets = async () => {
    //     const nweets = await dbService.collection("nweets")
    //                         .where("creatorId", "==", userObj.uid)
    //                         .orderBy("createdAt", "asc")
    //                         .get();
    // };

    // useEffect(() => {
    //     getMyNweets();
    // }, []);

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} placeholder="Display name" value={newDisplayName} />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>LogOut</button>
        </>

    );
};

export default Profile;
