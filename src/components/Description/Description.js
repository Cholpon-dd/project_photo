import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./Description.css";
import { productsContext } from "../../contexts/ProductsContext";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Comments from '../Comments/Comments'

const AllDescription = (props) => {
    const [editStatus, setEditStatus] = useState(false);
    const [editedTopic, setEditedTopic] = useState({});
    const {
        productDetails,
        getProductDetails,
        saveTopic,
        addProductToCart,
    } = useContext(productsContext);

    const [value, setValue] = React.useState(2);

    useEffect(() => {
        getProductDetails(props.match.params.id);
    }, []);

    const handleValue = (e) => {
        let newTopic = {
            ...editedTopic,
            [e.target.name]: e.target.value,
        };
        setEditedTopic(newTopic);
    };
    useEffect(() => {
        getProductDetails(props.match.params.id);
    }, [editStatus]);
    const handleSave = () => {
        setEditStatus(false);
        saveTopic(props.match.params.id, editedTopic);
    };

    return (
        <div>
            {productDetails ? (
                <div className="table">
                    {editStatus ? (
                        <div className="edit-textareas">
                            <textarea
                                name="image"
                                onChange={handleValue}
                                className="edit-details_items"
                            >
                                {productDetails.image}
                            </textarea>
                            <textarea
                                name="title"
                                onChange={handleValue}
                                className="edit-details_items"
                            >
                                {productDetails.title}
                            </textarea>
                            <textarea
                                name="category"
                                onChange={handleValue}
                                className="edit-details_items"
                                placeholder="category"
                            >
                                {productDetails.category}
                            </textarea>
                            <textarea
                                name="overview"
                                onChange={handleValue}
                                className="edit-details_items"
                            >
                                {productDetails.overview}
                            </textarea>
                            <textarea
                                name="description"
                                onChange={handleValue}
                                className="edit-details_items"
                            >
                                {productDetails.description}
                            </textarea>
                            <button onClick={handleSave}>
                                ??????????????????
                            </button>
                        </div>
                    ) : (
                        <div className="table__cart">
                            <div className="table__cart_img">
                                <img
                                    src={productDetails.image}
                                    className="demo-trigger"
                                    data-zoom={productDetails.image}
                                />
                                <div className="btn">
                                    <Button
                                        style={{
                                            fontSize: "20px",
                                            border: "2px solid black",
                                        }}
                                    >
                                        <a href="#aiperi">Full Description</a>
                                    </Button>
                                    <div className="admin">
                                        {" "}
                                    </div>
                                </div>
                            </div>
                            <div className="table__cart_desc   detail">
                                <Box
                                    component="fieldset"
                                    mb={3}
                                    borderColor="transparent"
                                    style={{ textAlign: "center" }}
                                >
                                    <Typography
                                        component="legend"
                                        style={{ fontSize: "13px" }}
                                    >
                                        Customer Reviews
                                    </Typography>
                                    <Rating
                                        size="large"
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                                <div className="table__cart_title">
                                    <h4 className="table__cart_title">
                                        {productDetails.title}
                                    </h4>
                                </div>
                                <span></span>
                                <span></span>
                                <div className="table__cart_quick">
                                    <strong>Quick Overview: </strong>
                                </div>
                                <div className="table__cart_quick_subtitle">
                                    {productDetails.overview}
                                </div>
                                <div id="aiperi ">
                                    <p className="table__text_p">
                                        {" "}
                                        {productDetails.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="buttons-description">
                    </div>
                </div>
            ) : (
                "details"
            )}
            <Comments/>
        </div>
    );
};

export default AllDescription;
