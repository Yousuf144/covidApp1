import { useParams } from "react-router";
 import Demo from "./Chart";
import Axios from "axios"
import {useState,useEffect} from "react"
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


 function Detail(){
    const perams = useParams();
    const [apidata,setapidata] = useState([])
    useEffect(() => {
        Axios.get("https://api.covidtracking.com/v1/states/current.json").then((res)=>{
        //   console.log(res.data)
          setapidata(res.data)
        })
      }, []);


    return (

        <div>
{
    apidata.filter((ele)=> ele.state == perams.state).map((val,index)=>{
        return <Card>
        <CardContent>
      <Grid container>
        <Grid md={12} lg={12} xs={12}>
            <Typography variant="h4" textAlign="center">
                {val.state} State Corana Details
            </Typography>
</Grid>
        <Grid md={2} lg={2} xs={6}>
          <Typography color="red">
State Name
          </Typography >
          <Typography >
{val.state}
          </Typography >
        </Grid>
  <Grid md={2} lg={2} xs={6}>
  <Typography color="red">
Date
          </Typography >
          <Typography >
{val.date}
          </Typography >
        </Grid>
        <Grid md={2} lg={2} xs={6}>
        <Typography color="red">
        Hospitalized
          </Typography >
          <Typography >
{val.hospitalized}
          </Typography >
</Grid>
<Grid md={2} lg={2} xs={6}>
<Typography color="red" >
Positive
          </Typography >
          <Typography >
{val.positive}
          </Typography >
</Grid>
<Grid md={2} lg={2} xs={6}>
<Typography color="red">
total
          </Typography >
          <Typography >
{val.total}
          </Typography >
</Grid>
<Grid md={2} lg={2} xs={6}>
<Typography color="red" >
Total Viral
          </Typography >
          <Typography >
{val.totalTestsViral}
          </Typography >
</Grid>
<Grid md={2} lg={2} xs={6}>
<Typography color="red">
CheckTime
          </Typography >
          <Typography >
{val.checkTimeEt}
          </Typography >
</Grid>
<Grid md={2} lg={2} xs={6}>
<Typography color="red" >
LastUpdate
          </Typography >
          <Typography >
{val.lastUpdateEt}
          </Typography >
</Grid>
<Grid md={2} lg={2} xs={6}>
<Typography color="red">
PosNeg
          </Typography >
          <Typography >
{val.posNeg}
          </Typography >
</Grid>
<Grid md={2} lg={2} xs={6}>
<Typography color="red">
Death
          </Typography >
          <Typography >
{val.death}
          </Typography >
</Grid>




      </Grid>
      </CardContent>
      </Card>
        })
}
         <Demo />
      
        </div>
    )
     
 }


 export default Detail;