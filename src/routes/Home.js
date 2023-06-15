import { dbService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({userObj}) => {    
    const [nweets, setNweets] = useState([]);

    // const getNweets = async () => {
    //     const dbNweets = await dbService.collection("nweets").get();

    //     dbNweets.forEach((db) => {
    //         const nweetObject = { ...db.data(), id: db.id };
            
    //         setNweets((prevData) => {                                
    //             return [nweetObject, ...prevData];
    //         })
    //     });
    // };

    useEffect(() => {
        // getNweets();

        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((db) => ({                
                id: db.id,
                ...db.data()
            }));

            setNweets(newArray);
        });

    }, []);

    return (
        <>
            <NweetFactory userObj={userObj} />
            <div>
                {nweets.map((nweet) => (
                    <Nweet 
                        key={nweet.id} 
                        nweetObj={nweet} 
                        isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
