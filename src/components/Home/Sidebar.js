import React, { useContext,useState } from "react";
import { Grid, makeStyles, Paper, Slider, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { productsContext } from "../../contexts/ProductsContext";
import './Sidebar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));
const Sidebar = ({ history }) => {
  const classes = useStyles();
  const { getProducts } = useContext(productsContext);
  const [sliderValue, setSliderValue]=useState(getSlider())
  const [memory, setMemory]=useState(getMemory())

  getMemory()
  function getMemory(){
    const search = new URLSearchParams(history.location.search);
    return search.get("category");
  }
  
  function getSlider(){
    const search = new URLSearchParams(history.location.search);
    return search.get("price_lte");
  }
  function handleSliderValue(e,value){
    const search = new URLSearchParams(history.location.search);
    search.set("price_lte", value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
    setSliderValue(value)
  }
  const handleChangeMemory = (e) => {
    if (e.target.value === "all") {
      history.push(`${history.location.pathname.replace("category")}`);
      getProducts(history);
      setMemory(e.target.value)
      return;
    }

    const search = new URLSearchParams(history.location.search);
    search.set("category", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
    setMemory(e.target.value)
  };
 
  return (
    <Grid item md={3} >
      <Paper style={{width:"200px", marginTop:"20px", marginLeft:"10px", paddingTop:"10px",textAlign:"center"}}>
        <FormControl component="fieldset" className="text">
          <FormLabel component="legend">??????????????????</FormLabel>
          <RadioGroup 
            value={memory}
            onChange={handleChangeMemory}
            aria-label="memory"
            name="memory1" 
          >
            <FormControlLabel style={{fontSize: '40px'}} value="????????-??????????" control={<Radio />}  label={<Typography className='formControl'>????????-??????????</Typography>} />
            <FormControlLabel value="????????????" control={<Radio />} label={<Typography className='formControl'>????????????</Typography>} />
            <FormControlLabel value="??????????????????" control={<Radio />} label={<Typography className='formControl'>??????????????????</Typography>} />
            <FormControlLabel value="????????????????" control={<Radio />} label={<Typography className='formControl'>????????????????</Typography>} />
            <FormControlLabel value="all" control={<Radio />} label={<Typography className='formControl'>??????</Typography>} />
          </RadioGroup>
        </FormControl>
        <Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
