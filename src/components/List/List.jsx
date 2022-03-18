import React,{useState , useEffect, createRef} from "react";
import { CircularProgress,Grid ,Box, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import { MyLocationOutlined } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import {success, warning} from "@mui/material/colors";
import { IconButton } from "@material-ui/core";
import useStyles from './styles';
const List = ({data,childClicked}) => {
    const classes = useStyles(); 
    console.log({childClicked});
    const [elRefs, setElRefs] = useState([]);
    useEffect(() => {
        const refs = Array(data.length).fill().map((_ , i) => elRefs[i] || createRef());
        setElRefs(refs);
    },[data] );

    


    
    return (
        <div className={classes.container}>
            <Typography variant="h4">Customers</Typography>
          <Box display="flex" justifyContent="space-around" margin={"30px"}>
            <IconButton aria-label="MyLocation" color="primary">
              <MyLocationOutlined/>
          </IconButton>
          

          </Box>
          

          <Grid container spacing={3} className={classes.list}>
            {data?.map((name, i) => (
              <Grid   item key ={i} xs={12}>
                <PlaceDetails customers={name} selected={Number(childClicked) === i} refProp={elRefs[i]} 
                  
                  />

                </Grid>
            ))}
          </Grid>
          </div>
    );
}

export default List;