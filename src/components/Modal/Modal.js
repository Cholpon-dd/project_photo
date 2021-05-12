import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from "@material-ui/core/IconButton";
import {Link} from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import "../Modal/Modal.css"
import "../Cart/Cart"


const Modal = props=>{
    return (
        <div className={`modal_wrapper ${props.isOpened ? 'open':'close'}`} 
        styles={{...props.style}}>
            <div className='modal_body'>
                <div className="modal_close" onClick={props.onModalClose}><IconButton><CloseIcon/></IconButton></div>
          
        <div className="order_list" style={{maxWidth:"600px"}}>
        <h5 className="page-heading">Secure checkout</h5>
            <IconButton style={{color:"#ea9d9b"}}><CheckCircleIcon/></IconButton> 
            <span className="customer">Customer</span>
             <h5>Checking out as a Guest? You'll be able to save your details to create an account with us later.
            </h5>
            <input placeholder="Email Address" className="order_input" />
            <React.Fragment>        
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField style={{borderBottom:"2px solid tomato"}}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField style={{borderBottom:"2px solid tomato"}}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField style={{borderBottom:"2px solid tomato"}}
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField style={{borderBottom:"2px solid tomato"}}
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <TextField style={{borderBottom:"2px solid tomato"}}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField  id="state" name="state" label="State/Province/Region" fullWidth style={{borderBottom:"2px solid tomato"}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField style={{borderBottom:"2px solid tomato"}}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField style={{borderBottom:"2px solid tomato"}}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> 
      </Grid> 
    </React.Fragment>
        <Grid item xs={12}>    
          <FormControlLabel 
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />  
          <h5 className="modal_total">Total price: {props.totalPrice} $</h5>
          <Link to='/payment'><button className="order-next">NEXT</button>
          </Link>  
        </Grid>
             </div>
             </div>
             </div>
        
    )
}

export default Modal