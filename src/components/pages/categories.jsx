
import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import axios from 'axios';




const Categories = () => {
  const navigate = useNavigate()

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const[brand, setBrand] = useState("All");
  const[rating, setRating] = useState('All')
 

  useEffect(() => {
     window.scrollTo(0, 0);
   
   
    fetchData();
  }, []); 
 
//   const fetchData = async () => {
//   try {
//     const response = await axios.get('https://react-multi-page-24bfe-default-rtdb.asia-southeast1.firebasedatabase.app/initialProducts.json');

//     const rawData = response.data;
   
//     const mainKey = Object.keys(rawData)[0]; 
//     const productsArray = rawData[mainKey]; 

//     setData(productsArray); 
//     setItems(productsArray); 
//     setError(null);
//   } catch (err) {
//     setError(err.message);
//   } finally {
//     setLoading(false);
//   }
// };
   
const fetchData = async () => {
  try {
    const response = await axios.get('https://react-multi-page-24bfe-default-rtdb.asia-southeast1.firebasedatabase.app/initialProducts1.json');
    const rawData = response.data;

   
    if (rawData) {
      // Object.entries converts the object into an array of [key, value] pairs
      const formattedArray = Object.entries(rawData).map(([key, value]) => ({
        fbId: key,      // The Firebase unique key
        ...value        // Spread the actual product data (name, MRP, etc.)
      }));

      setData(formattedArray);
      setItems(formattedArray)
    }
  } catch (err) {
    console.error("Fetch Error:", err);
  } finally {
    setLoading(false);
  }
};
   const filterItems = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setItems(data);
    } else {
      const filtered = data.filter((item) => item.category === cat);
      setItems(filtered);
    }
  };
   const filterBrand = (bran) => {
    setBrand(bran);
    if (bran === "All") {
      setItems(data);
    } else {
      const filtered = data.filter((item) => item.name === bran);
      setItems(filtered);
    }
  };
   const filterRating = (rat) => {
    setRating(rat);
    if (rat === "All") {
      setItems(data);
    } else {
      const filtered = data.filter((item) => item.rating === Number(rat));
      setItems(filtered);
    }
  };
 

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(data)


  return (
    <Box sx={{ mt: 10 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md:3 }} sx={{ pl:{xs:0,md:5} ,mt:{md:8,xs:1},px:{xs:3} }}>
        <Box display={'flex'} sx={{border:'1px solid silver',p:1.5,borderRadius:1,justifyContent:'space-between'}}>
          <Box>
          <Typography sx={{typography:{xs:'p',md:'h6'}, fontWeight:{xs:600},mt:{xs:1} }}> Filters</Typography>
          </Box>
          <Box sx={{mt:{xs:1,md:2}}}>
          <Typography variant='p' sx={{color:'#737373', float:'right',fontWeight:'600'}}>ClearAll</Typography>
          </Box>
        </Box>
        <Box sx={{border:'1px solid silver',p:1.5,borderRadius:1}}>
          <Box>
          <Typography sx={{Typography:{xs:'body1',md:'h6'},fontWeight:{xs:600}}}> Department</Typography>
          </Box>
          <Box sx={{mt:1}}>
          <Typography variant='p' sx={{color:'#737373',pl:1,fontWeight:'600'}}>{activeCategory === "All" ? "Our Collection" : `${activeCategory}'s Collection`}
         </Typography>
          </Box>
        </Box>
          <Accordion sx={{}}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="p" sx={{fontSize:'15px',}}>Category</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="categories"
                  value={activeCategory} 
                  onChange={(e) => filterItems(e.target.value)}
                >
                  {['All', 'Women', 'Men', 'Kid', 'Footware', 'Watch', 'Electronic'].map((cat) => (
                    <FormControlLabel
                      key={cat}
                      value={cat}
                      control={<Radio size="small" />} 
                      label={cat}
                      sx={{
                        textTransform: 'capitalize',
                        '& .MuiFormControlLabel-label': { fontSize: '0.9rem' } 
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{}}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="p" sx={{fontSize:'15px',}}>Brand</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="fieldset">
                <RadioGroup
                   aria-label="brand"
                  value={brand} 
                  onChange={(e) => filterBrand(e.target.value)}
                >
                  {["All" ,"Timex",'Little Bansi',"Campus",'PSPeaches',"Royal Enfield"].map((bran) => (
                    <FormControlLabel
                      key={bran}
                      value={bran}
                      control={<Radio size="small" />} 
                      label={bran}
                      sx={{
                        textTransform: 'capitalize',
                        '& .MuiFormControlLabel-label': { fontSize: '0.9rem' } 
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{}}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="p" sx={{fontSize:'15px',}}>Ratings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl component="fieldset">
                <RadioGroup
                   aria-label="rat"
                  value={rating} 
                  onChange={(e) => filterRating(e.target.value)}
                >
                  {['All',4,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9].map((rat) => (
                    <FormControlLabel
                      key={rat}
                      value={rat}
                      control={<Radio size="small" />} 
                      label={rat}
                      sx={{
                        textTransform: 'capitalize',
                        '& .MuiFormControlLabel-label': { fontSize: '0.9rem' }
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid size={{ xs: 12, md:9 }}>
          <Box>
            <Typography  sx={{ textAlign: 'center', mb: 1,fontSize:'32px',fontWeight:'600', textTransform: 'capitalize',typography:{xs:'h6',md:'h4'} }}>
              {activeCategory === "All" ? "Our Collection" : `${activeCategory}'s Collection`}
            </Typography>
            <Box>
              <Typography></Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', }} >
              {items.map((item) => (
                <Card key={item.id} sx={{
                  margin: '20px',
                  width: 200,
                  height: 430,
                  fontFamily: 'monospace',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': { boxShadow: 6 },
                  borderRadius:2
                }}
                  // onClick={() => navigate(`/product/${item.id}`)}
                  onClick={() => navigate(`/product/${item.fbId}`)}>
                  <CardMedia
                    sx={{ height: 280, objectFit: 'fill'}}
                    image={item.src}
                  />
                  <CardContent sx={{ height: '100px',}} >
                    <Typography gutterBottom variant="p" component="div" sx={{ height: '10px',fontSize:'20px', mb: 2,fontWeight:'800' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ height: '60px' }}>
                      {/* {item.discription} */}
                      {item.description}
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: '600', height: '10px', color: 'black',mb:2 }}>
                      {item.MRP}/-  <span style={{ marginLeft: '10px', fontSize: '13px', color: 'green' }}> {item.off}Off</span>
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: "11px",height: '10px',color:'crimson'}}>
                      {item.status}
                    </Typography>
                  </CardContent>
                </Card>

              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  )
}

export default Categories
