import React, { useContext } from "react"; //////this
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from '@material-ui/icons/Create';
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { productsContext } from "../../contexts/ProductsContext";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link, useHistory } from "react-router-dom";
import ImageSearchIcon from '@material-ui/icons/ImageSearch'
import './ProductCard.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    backgroundSize: "contain",
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function ProductCard(props) {
  const history = useHistory()

  const handleDetail = () => {
    history.push(`/detail/${props.item.id}`)
  }
  
  const classes = useStyles();
  const {addProductToCart,checkProductInCart, deleteCard, editCard,saveEditedCard, 
    addFavourite,
    changeFavouriteCount,
    checkProductInFavourite,
    deleteFavourite}=useContext(productsContext)

  return (
    <Card className={classes.root} >
      <CardHeader 
        title={
          <Typography align="center" variant="h5">
            {props.item.title}
          </Typography>
        }
        subheader={<Typography align="center">{props.item.author}</Typography>}
      />
      <CardMedia style={{paddingRight:"20px"}}
        className={classes.media}
        image={props.item.image}
        title="Paella dish"
      />
      <CardContent   >
        <Typography variant="body2" color="textSecondary" component="p">
          {props.item.description}
        </Typography>
      </CardContent>
      <Typography variant="h6" align="center">{props.item.price} сом</Typography>
      {/* <FavoriteIcon disableSpacing> */}
        <IconButton aria-label="share"
        onClick={()=>addProductToCart(props.item)}
        color={checkProductInCart(props.item.id)? "secondary":"primary"}
        >
          <ShoppingCartIcon />
        </IconButton>
        <IconButton>
           <CreateIcon 
            onClick={(e)=> editCard(props.item.id, props.history)}
              />
           </IconButton>
        <IconButton style={{}}>
                           <DeleteIcon
                           onClick={(e) => {
                               deleteCard(props.item.id, props.history);
                           }}
                       />
                       </IconButton> 

           <IconButton>
           <FavoriteIcon 
           onClick={()=>addFavourite(props.item)}
           color={checkProductInFavourite(props.item.id)? "secondary":"primary"}
             />
           </IconButton> 
           <IconButton>
           <ImageSearchIcon onClick={handleDetail}
          // <button className="btn-detail" onClick={handleDetail}>Detail</button> 
          /> 
          </IconButton>         
      
    </Card>
  );
};
