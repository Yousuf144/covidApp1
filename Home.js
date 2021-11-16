import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState,useEffect} from "react"
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Axios from "axios"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppRouter from './config/routes';
import { Route, useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";

function Home() {
 
    const [age, setAge] = useState('');
    const [apidata,setapidata] = useState([])
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    useEffect(() => {
      Axios.get("https://api.covidtracking.com/v1/states/current.json").then((res)=>{
        console.log(res.data)
        setapidata(res.data)
      })
    }, []);

    const navigate = useNavigate();
    const move = () => {
        
        navigate(`detail/${age}`, {age});
      };


    return (
        <div >
         
    
        <Grid container sx={{padding:"2%"}}>
          <Grid md={3} lg={3} xs={12}>
            </Grid>
        <Grid md={6}  lg={6} xs={12} >
        <Box >
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">Select State</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
            {apidata.map((e)=>{
              return <MenuItem value={e.state}>{e.state}</MenuItem>
            })}
              
            </Select>
          </FormControl>
        </Box>
            </Grid>
            
          </Grid>
    {/* end select  */}
    
          {
            apidata.filter((ele)=> ele.state == age).map((val,index)=>{
              return <Card>
                <CardContent>
              <Grid container>
                <Grid md={1} lg={1} xs={6}>
                  <Typography color="red">
    State Name
                  </Typography >
                  <Typography >
    {val.state}
                  </Typography >
                </Grid>
          <Grid md={1} lg={1} xs={6}>
          <Typography color="red">
    Date
                  </Typography >
                  <Typography >
    {val.date}
                  </Typography >
                </Grid>
                <Grid md={1} lg={1} xs={6}>
                <Typography color="red">
                Hospitalized
                  </Typography >
                  <Typography >
    {val.hospitalized}
                  </Typography >
    </Grid>
    <Grid md={1} lg={1} xs={6}>
    <Typography color="red" >
    Positive
                  </Typography >
                  <Typography >
    {val.positive}
                  </Typography >
    </Grid>
    <Grid md={1} lg={1} xs={6}>
    <Typography color="red">
    total
                  </Typography >
                  <Typography >
    {val.total}
                  </Typography >
    </Grid>
    <Grid md={1} lg={1} xs={6}>
    <Typography color="red" >
    Total Viral
                  </Typography >
                  <Typography >
    {val.totalTestsViral}
                  </Typography >
    </Grid>
    <Grid md={1} lg={1} xs={6}>
    <Typography color="red">
    CheckTime
                  </Typography >
                  <Typography >
    {val.checkTimeEt}
                  </Typography >
    </Grid>
    <Grid md={1} lg={1} xs={6}>
    <Typography color="red" >
    LastUpdate
                  </Typography >
                  <Typography >
    {val.lastUpdateEt}
                  </Typography >
    </Grid>
    <Grid md={1} lg={1} xs={6}>
    <Typography color="red">
    PosNeg
                  </Typography >
                  <Typography >
    {val.posNeg}
                  </Typography >
    </Grid>
    <Grid md={1} lg={1} xs={6}>
    <Typography color="red">
    Death
                  </Typography >
                  <Typography >
    {val.date}
                  </Typography >
    </Grid>
    <Grid md={2} lg={2} xs={12}>
    <Typography color="red" textAlign="center">
    Action
                  </Typography >
                
                  <Button variant="contained" fullWidth={true} onClick={move}>More Detail</Button>
                  
    </Grid>
    
    
    
              </Grid>
              </CardContent>
              </Card>
            })
    
    
    
          }
           
     
        </div>
      );
    }
    
    export default Home;
    