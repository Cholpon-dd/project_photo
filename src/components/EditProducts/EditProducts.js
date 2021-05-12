import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { productsContext } from "../../contexts/ProductsContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px",
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
      width: "60vw",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function EditModal() {
  const { cardToEdit,  saveEditedCard, setOpenModal, openModal } = useContext(
    productsContext
  );
  const [editCard, setEditCard] = useState(cardToEdit);
  const [check, setCheck] = useState(false);
  const classes = useStyles();
  const history = useHistory()
  const [openSpinner, setOpenSpinner] = React.useState(true);
  useEffect(() => {
    setEditCard(cardToEdit);
    console.log(cardToEdit);
  }, [cardToEdit]);
  const handleCloseSpinner = () => {
    setOpenSpinner(false);
  };

//   useEffect(() => {
//    (params.id);
//   }, []);

  const handleValues = (e) => {
    let editedCard = {
      ...editCard,
      [e.target.name]: e.target.value,
    };
    setEditCard(editedCard);
  };

  const handleEdit = () => {
    saveEditedCard(editCard,history )
    setOpenModal(false)
  }


  return (
    <>
    {editCard && (
        <Dialog open={openModal} onClose={() => setOpenModal(false)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Редактирование</DialogTitle>
            <DialogContent>
                {/* <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText> */}
                      <TextField
                      autoFocus
                      margin="dense"
                      name="title"
                      defaultValue={editCard.title}
                      onChange={handleValues}
                      label="Title"
                      fullWidth
                  />
                   <TextField
                      autoFocus
                      margin="dense"
                      name="price"
                      defaultValue={editCard.price}
                      onChange={handleValues}
                      label="Price"
                      fullWidth
                  />
                   <TextField
                      autoFocus
                      margin="dense"
                      name="category"
                      defaultValue={editCard.category}
                      onChange={handleValues}
                      label="Category"
                      fullWidth
                  />
                   <TextField
                      autoFocus
                      margin="dense"
                      name="description"
                      defaultValue={editCard.description}
                      onChange={handleValues}
                      label="Description"
                      fullWidth
                  />
                  <TextField
                      autoFocus
                      margin="dense"
                      name="image"
                      defaultValue={editCard.image}
                      onChange={handleValues}
                      label="Image"
                      fullWidth
                  />

                  
              
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenModal(false)} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleEdit} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )}
    
    </>
  );
}



// {open &&
//     !check ? (
//             <div>
//               <Backdrop
//                 className={classes.backdrop}
//                 open={openSpinner}
//                 onClick={handleCloseSpinner}
//               >
//                 <CircularProgress color="inherit" />
//               </Backdrop>
//             </div>
//           ) : (
//             <form className={classes.root} noValidate autoComplete="off">
//               <TextField
//                 name="title"
//                 value={editCard.title}
//                 onChange={handleValues}
//               />
//               <br />
//               <TextField
//                 name="price"
//                 value={editCard.price}
//                 onChange={handleValues}
//               />
//               <br />
//               <TextField
//                name="category"
//                 value={editCard.category}
//                 onChange={handleValues}
//               />
//               <br />
//               <TextField
//                 name="description"
//                 value={editCard.description}
//                 onChange={handleValues}
//               />
//               <br />
//               <TextField
//                name="image"
//                value={editCard.image}
//                onChange={handleValues}
//               />
             
//               <Link to="/modal">
//                 {" "}
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   className={classes.button}
//                   onClick={saveEditedCard(editCard)}
//                 >
//                   Save
//                 </Button>
//               </Link>
//             </form>
//           )
//         }