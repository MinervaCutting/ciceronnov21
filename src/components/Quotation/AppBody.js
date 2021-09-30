import { Paper, makeStyles, Typography, Button } from "@material-ui/core";
import VendorOptionsTab from "../../utils/TabPanel";
import Budget from "../Budget/Budget";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Footer from "../StickyFooter/Footer";
import RestaurantVendor from "../../utils/restaurant_vendors/RestaurantVendor";
import ActivityVendor from "../../utils/activity_vendors/ActivityVendor";
import { canfisher_data } from "../../vendors/can_fisher/data";
import { tragaluz_data } from "../../vendors/tragaluz/data";
import { philippinesclub_data } from "../../vendors/philippines_club/data";
import { verne_data } from "../../vendors/verne/data";



export default function AppBody() {
  const classes = useStyles();
  const budgetRef = useRef();
  const pageStyle = `
  @media all {
    .page-break {
      display: none;
    }
  }
  
  @media print {
    html, body {
      height: initial !important;
      overflow: auto !important;
      -webkit-print-color-adjust: exact;
    }
  }
  
  @media print {
    .page-break {
      margin-top: 1rem;
      display: block;
      page-break-before: auto;
    }
  }
  
  @page {
    size: landscape;
    margin: 20mm;
   
  }
`;



  return (
    <Paper elevation={2} className={classes.bodyContainer}>
      <Typography variant='h4' gutterBottom>
        Group 40 pax  - November 4th, 2021 - Barcelona
      </Typography>
      <Typography variant='h6' gutterBottom>
        <em>Cutting Edge Events - October 1st, 2021</em>
      </Typography>

      <Typography variant='h6' gutterBottom>
        <strong>Request: </strong>
        <ul>
          <li><strong>Date:</strong> Thursday, November 4th</li>
          <li><strong>Time:</strong> 17.00h to 21.00h</li>
          <li><strong>Guests: </strong> 30 pax</li>
          <li><strong>Description: </strong> Mingle Event in a private venue - cool and chill vibes - cocktail dinner including at least 4 drinks per person and music (DJ or Live Music)</li>
        </ul>
      </Typography>
      <Typography variant='h6' gutterBottom>
      In this presentation you will find some options that meet these requirements and that I am sure you will love 🤗, 
      </Typography>
      <Typography variant='h4' gutterBottom id='rest1'>
       Philippines Club
      </Typography>
      <RestaurantVendor data={philippinesclub_data} />
      <Typography variant='h4' gutterBottom id='rest2'>
       Verne
      </Typography>
      <RestaurantVendor data={verne_data} />
      <Typography variant='h4' gutterBottom id='rest3'>
       Mitro BCN
      </Typography>
      <Typography variant='h4' gutterBottom id='rest4'>
       Loft Poblenou
      </Typography>

      
      <Typography variant='h4' gutterBottom id='map'>
      <a href="https://www.google.com/maps/d/edit?mid=1nqiV2-lhkUyQ1UGtdNMfUKsHD77DHLqN&usp=sharing" target ="_blank">🗺️ Overview Map</a>
      </Typography>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    width: "100%",
  },
}));
