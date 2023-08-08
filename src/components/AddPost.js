import Form from "./Form";
import {useNavigate} from "react-router-dom";

export default function AddPost() {
    const history = useNavigate();
    const handleSubmit = (text) => {
        const fetchBody = { id: 0, content: text };
        fetch(process.env.REACT_APP_POSTS_URL,
            {
                method: 'POST',
                body: JSON.stringify(fetchBody),
            })
            .then(() => {
                history('/');
            });
    }

    const handleClose = () => {
        history('/');
    }

    return (
        <div className="AddPost">
            <Form
                onSubmit={handleSubmit}
                onClose={handleClose}
            />
        </div>
    );
}