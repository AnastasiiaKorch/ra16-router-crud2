import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
    const history = useNavigate();
    const handleClick = () => {
        history(`/posts/${post.id}`);
    }

    const dateFormat = new Date(post.created);

    return (
        <div className="Post" onClick={handleClick}>
            <div className="Post__date">Pub date: {dateFormat.toLocaleDateString()}</div>
            <div className="Post__content">{post.content}</div>
        </div>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        created: PropTypes.number,
        content: PropTypes.string,
    }).isRequired,
}