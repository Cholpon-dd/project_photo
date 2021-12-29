import React, { useContext, useEffect } from "react";
import CommentsAdd from "./CommentsAdd";
import CommentsList from "./CommentsList";
import { commentContext } from "../../contexts/CommentContext";
import { Comment } from "semantic-ui-react";
import "./Comments.css";
import { authContext } from "../../contexts/AuthContext";
const Comments = () => {
    const { getComment } = useContext(commentContext);
    console.log(getComment, ' getComment')
    const { currentUser } = useContext(authContext);
    useEffect(() => {
        getComment();
    }, []);
    return (
        <div className="comment-main">
            {" "}
            <Comment.Group>
                <CommentsList />           
                    <CommentsAdd />              
            </Comment.Group>
        </div>
    );
};
export default Comments;
