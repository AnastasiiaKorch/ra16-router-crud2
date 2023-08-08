import Post from './Post';
import useJsonFetch from '../hooks/useJsonFetch';
import {useNavigate} from "react-router-dom";

export default function Main() {
    const [posts] = useJsonFetch(process.env.REACT_APP_POSTS_URL);
    const history = useNavigate();
    const handleAdd = () => {
        history('/posts/new');
    }

    return (
        <div className="Main">
            <div className="Main__header">
                <button className="Main__addpost" onClick={handleAdd}>Create post</button>
            </div>
            {posts && posts.map((post) =>
                <Post key={post.id} post={post} />
            )}
        </div>
    );
}