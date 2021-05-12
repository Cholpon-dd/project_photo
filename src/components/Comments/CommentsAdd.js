import { TextField } from "@material-ui/core";
import { CommentSharp } from "@material-ui/icons";
import React, { useContext, useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { commentContext } from "../../contexts/CommentContext";
import { authContext, AuthContexts } from "../../contexts/AuthContext"
import "./Comments.css";
const CommentsAdd = () => {
    const { currentUser } = useContext(authContext);
    const { postNewComment, getComment } = useContext(commentContext);
    const [com, setCom] = useState({
        text: "",
        author: "",
    });
    // useEffect(() => {
    //     getComment();
    // }, []);
    const handleValues = (e) => {
        let newComment = {
            ...com,
            [e.target.name]: e.target.value
        };
        setCom(newComment);
    };
    const sendComment = () => {
        postNewComment(com);
        getComment();
        setCom({
            text: "",
        });
    };
    return (
        <div className="form__btn">
            <Form reply>
                <TextField
                    style={{
                        marginTop: "40px",
                        marginBottom: "20px",
                        borderRadius: "5px",
                    }}
                    variant={"outlined"}
                    fullWidth
                    rowsMax={2}
                    name='text'
                    value={com.text}
                    onChange={(e) => handleValues(e)}
                />

                <Button
                    className="comment-button"
                    onClick={sendComment}
                    content="Add Comment"
                    // labelPosition="left"
                    // icon="edit"
                    // primary
                />
            </Form>
        </div>
    );
};

export default CommentsAdd;
