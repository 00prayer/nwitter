import { dbService, storageService } from "fbase";
import { useState } from "react";

const Nweet = ({ nweetObj, isOwner}) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onChange = (event) => {
        const { target: {value}} = event;

        setNewNweet(value);
    };

    const onDeleteClick = async () => {
        if(window.confirm("삭제하시겠습니까?")){
            await dbService.doc(`nweets/${nweetObj.id}`).delete();            

            if(nweetObj.attachmentUrl !== "")
            {
                console.log("attachmentUrl : ", nweetObj.attachmentUrl);
                await storageService.refFromURL(nweetObj.attachmentUrl).delete();
            }
        }
    };

    const toggleEditing = () => setEditing((prev) => !prev);

    const onSubmit = async (event) => {
        event.preventDefault();

        await dbService.doc(`nweets/${nweetObj.id}`).update({text: newNweet});
        setEditing(false);
    };

    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} value={newNweet} required />
                        <input type="submit" value="Update Nweet" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ):(
                <>
                    <h4>{nweetObj.text}</h4>
                    {nweetObj.attachmentUrl && (
                        <img alt={nweetObj.text} src={nweetObj.attachmentUrl} width="50px" height="50px" />
                    )}
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick} >Delete Nweet</button>
                            <button onClick={toggleEditing} >Edit Nweet</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Nweet;
