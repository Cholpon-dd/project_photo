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
          <FormLabel component="legend">Категории</FormLabel>
          <RadioGroup 
            value={memory}
            onChange={handleChangeMemory}
            aria-label="memory"
            name="memory1" 
          >
            <FormControlLabel style={{fontSize: '40px'}} value="Фото-книга" control={<Radio />}  label={<Typography className='formControl'>Фото-книга</Typography>} />
            <FormControlLabel value="Брелок" control={<Radio />} label={<Typography className='formControl'>Брелок</Typography>} />
            <FormControlLabel value="Календарь" control={<Radio />} label={<Typography className='formControl'>Календарь</Typography>} />
            <FormControlLabel value="Открытки" control={<Radio />} label={<Typography className='formControl'>Открытки</Typography>} />
            {/* <FormControlLabel value="1024" control={<Radio />} label="1024" /> */}
            <FormControlLabel value="all" control={<Radio />} label={<Typography className='formControl'>Все</Typography>} />
          </RadioGroup>
        </FormControl>
        <Grid>
        {/* <Slider
           value={sliderValue}
           min={500}
           max={10000}
           onChange={handleSliderValue}
           valueLabelDisplay="auto"
           aria-labelledby="range-slider"
 
/> */}
        </Grid>
      </Paper>
     
    </Grid>
  );
};

export default Sidebar;
