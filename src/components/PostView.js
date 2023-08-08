import { useState } from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import Post from './Post';
import Form from './Form';
import {useNavigate, useParams} from "react-router-dom";

export default function PostView() {
    const {id} = useParams()
    const history = useNavigate();
    const [isEdit, setEdit] = useState(false);
    const [posts] = useJsonFetch(process.env.REACT_APP_POSTS_URL, isEdit);

    const handleDelete = () => {
        fetch(`${process.env.REACT_APP_POSTS_URL}/${id}`,
            {
                method: 'DELETE',
            })
            .then(() => {
                history('/');
            });
    }

    const handleEdit = () => {
        setEdit(true);
    }

    const handleSubmit = (text) => {
        const fetchBody = { id: Number(id), content: text };
        fetch(process.env.REACT_APP_POSTS_URL,
            {
                method: 'POST',
                body: JSON.stringify(fetchBody),
            })
            .then(() => {
                setEdit(false);
            });
    }

    const handleClose = () => {
        setEdit(false);
    }

    return (
        <div className="PostView">
            {posts && ((
                !isEdit &&
                <div>
                    <div className="PostView__close" onClick={() => history('/')}>×</div>
                    <Post post={posts.find((post) => post.id === Number(id))} />
                    <div className="PostView__edit" onClick={handleEdit}>Change</div>
                    <div className="PostView__delete" onClick={handleDelete}>Delete</div>
                </div>
            ) || (
                isEdit &&
                <div>
                    <Form
                        post={posts.find((post) => post.id === Number(id))}
                        onSubmit={handleSubmit}
                        onClose={handleClose}
                    />
                </div>
            ))
            }
        </div>
    );
}