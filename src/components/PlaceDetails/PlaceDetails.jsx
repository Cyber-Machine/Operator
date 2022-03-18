import React, { useState } from "react";
import { Card, Box, Typography, CardMedia, CardContent,CardActions, Chip , useMediaQuery} from "@material-ui/core";
import LocationOnIcon from'@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import { Button } from "@material-ui/core";
import { success } from "@mui/material/colors";

import useStyles from './styles';

const PlaceDetails = ({customers , selected , refProp}) => {
    const classes = useStyles();
    // if(selected) refProp.current.scrollIntoView({ behavior: 'smooth'});
    const isDesktop = useMediaQuery('(min-width::600px)');
    const num = isDesktop?250:200;
    const [buttonText, setButtonText] = useState("Get Directions");
    const changeText = (text) =>setButtonText(text);
   

    return (
        <Card elevation={6}>
            
                <CardContent>
                    <Typography gutterBottom variant="h5">{customers.name}</Typography>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1"><PhoneIcon/></Typography>
                        <Typography gutterBottom variant="subtitle1" >{customers.contact}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1"><LocationOnIcon/></Typography>
                        <Typography gutterBottom variant="subtitle1" >{customers.address}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                    <Button variant="outlined" color="success">{buttonText}</Button>
                    
                    </Box>
                    

                    
                </CardContent>
        </Card>
    );
}

export default PlaceDetails