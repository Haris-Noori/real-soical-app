import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts, Users } from "../../dummyData";

export default function Feed() {

    const user = Users.filter(u => u.id === 1);
    
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}  
            </div>
        </div>
    )
}
