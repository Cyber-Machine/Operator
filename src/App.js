import React, {useEffect, useState} from 'react';
import {CssBaseline, Grid} from '@material-ui/core';


import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import datas from './data.json'


const App = () =>{
    const [places, setPlaces] = useState([]);
    const [childClicked, setChildClicked] =useState(null);
    const data = datas.Customers;
    const [coordinates, setCoordinates] = useState({});
    const [filteredCustomers, setFilteredCustomers] = useState([]);

    
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude}}) => {
            setCoordinates({lat:latitude ,lng:longitude})
        })
    },[]);



    return (
        <>
           <CssBaseline />
           <Header/>
           <Grid container spacing={0} style= {{ width: '100%' }}>
               <Grid item xs={12} md={4}>
                   <List
                        data = {data}
                        childClicked={childClicked}
                        
                   />
               </Grid>
               <Grid item xs={12} md={8}>
                   <Map 
                   setCoordinates = {setCoordinates}
                   coordinates = {coordinates}
                   setChildClicked ={setChildClicked}
                   data = {data}
                   />
               </Grid>
           </Grid>
           <Footer/>
        </>
    );
}

export default App;