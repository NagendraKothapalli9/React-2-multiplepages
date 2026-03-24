import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';

const ProductDetails = () => {
  const { Id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()


  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('https://react-multi-page-24bfe-default-rtdb.asia-southeast1.firebasedatabase.app/initialProducts.json');
  //     const rawData = response.data;
  //     const mainKey = Object.keys(rawData)[0]; 
  //     setData(rawData[mainKey]); 
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Data load ayyaka item ni vethukovali
  // const item = data.find(temp => temp.id === Number(Id));

const fetchData = async () => {
  try {
    const response = await axios.get('https://react-multi-page-24bfe-default-rtdb.asia-southeast1.firebasedatabase.app/initialProducts1.json');
    const rawData = response.data;

    if (rawData) {
      // Object.entries converts the object into an array of [key, value] pairs
      const details = Object.entries(rawData).map(([key, value]) => ({
        fbId: key,      // The Firebase unique key
        ...value        // Spread the actual product data (name, MRP, etc.)
      }));

      setData(details);
    }
  } catch (err) {
    console.error("Fetch Error:", err);
  } finally {
    setLoading(false);
  }
};


  const item = data.find(product => product.fbId === Id);


  if (loading) return <p>Loading...</p>;
  if (!item) return <p>Product not found!</p>;

  return (
    <div>
      <Grid container key={item.id} sx={{  mb: 2, borderRadius: '8px', overflow: 'hidden', mt: 10,mx:{lg:5}}}>
        {/* Image Section */}
        <Grid item xs={12} sm={3} md={6} sx={{ display: 'flex', justifyContent: 'center', px:2}}>
          <img src={item.src} alt={item.name} style={{ objectFit: 'contain' }} height={'500px'} width={'100%'} />
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} sm={6} md={6} sx={{ml:{md:14}}}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" fontSize={'20px'}>{item.name}</Typography>
            <Typography variant="body2" component="span" sx={{ color: 'text.secondary',fontSize:'17px' }}>{item.discription}</Typography>

            <Box sx={{ mt: 1 }}>
              <Typography variant="h6" component="span" sx={{ color: 'black', fontWeight: 'bold' }}>{item.MRP}</Typography>
              <Typography variant="p" component="span" sx={{ color: 'black',ml:2 }}>MRP:<span style={{textDecoration: 'line-through' }}> ₹3000/-</span></Typography>
              <Typography variant="p" component="span" sx={{ color: 'green', ml:1 }}>{item.off} Off</Typography><br />
              <Typography variant="p" component="span" sx={{ color: 'text.secondary',fontSize:'12px' }}>Inclusive of all taxes</Typography><br />
            </Box>
             <Box sx={{mt:2,mb:5}}>
              <Typography variant='p'sx={{color:'red',fontSize:'14px'}}>Hurry Up Limited Time Deal Shop for Rs 2499 and get Extra 10% Off on US Polo Women</Typography>
              <Box sx={{display:'flex',mt:1}}>
               <Box sx={{backgroundColor:'green',px:'8px',display:'flex'}}>    
                <Typography sx={{fontWeight:500,color:'white'}}> {item.rating}</Typography>                 
                 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS44MjUgMjFsMS42MjUtNy4wMjVMMiA5LjI1bDcuMi0uNjI1TDEyIDJsMi44IDYuNjI1bDcuMi42MjVsLTUuNDUgNC43MjVMMTguMTc1IDIxTDEyIDE3LjI3NXoiLz48L3N2Zz4=" alt="" style={{ height: '17px' ,marginTop:'3px'}} />
               </Box>
                <Typography sx={{ml:2,fontSize:'15px'}}>  7 Ratings& 1 Review</Typography>                 
               </Box>
             </Box>
          <Divider />
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Box display={'flex'}>
          <Box>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636702/sale_rpr93s.gif" alt="" height={'30px'} style={{marginTop:'10px'}} />
          </Box>
          <Box>
           <Typography sx={{fontSize:'14px',my:2,pl:1}}> Get this for only <span style={{color:'green',fontWeight:600}}> ₹1200</span>   </Typography>
          </Box>
          </Box>
          <Box sx={{mt:2}}>
            <Typography sx={{float:'right',color:'crimson',fontWeight:'bold'}}>View Offers</Typography>
          </Box>
          </Box>
          

          <Divider />
          <Box sx={{mt:3}}>
            <Typography sx={{fontWeight:700}}>Select Size <span style={{float:'right',color:'crimson',fontWeight:'bold'}}>Size Guide</span> </Typography>
            <Box sx={{mt:2,mb:2}} >
               <Button variant='contained' size='small' sx={{backgroundColor:'black',fontWeight:'bold',my:1}}>XS</Button>
               <Button variant='contained' size='small' sx={{backgroundColor:'black',ml:1,fontWeight:'bold',my:1}}>S</Button>
               <Button variant='contained' size='small' sx={{backgroundColor:'black',ml:1,fontWeight:'bold',my:1}}>M</Button>
               <Button variant='contained' size='small' sx={{backgroundColor:'black',ml:1,fontWeight:'bold',my:1}}>L</Button>
               <Button variant='contained' size='small' sx={{backgroundColor:'black',ml:1,fontWeight:'bold',my:1}}>XL</Button>
               <Button variant='contained' size='small' sx={{backgroundColor:'black',ml:1,fontWeight:'bold',my:1}}>XXL</Button>
               <Button variant='contained' size='small' sx={{backgroundColor:'black',ml:1,fontWeight:'bold',my:1}}>XXXL</Button>
            </Box>
            <Typography variant='p'>Size out of stock? <span style={{color:'red'}}> View Similar</span></Typography>
            <Box sx={{my:3}}>
              <Typography variant='p'>Please check size chart table to know the exact size to be ordered. Cotton, Machine Wash</Typography>
            </Box>
          </Box>
           <Divider/>
            <Box sx={{ mt: 2 }}>
             <Typography variant='h6'>Available Offers</Typography>
             <Box display={'flex'} mt={2}>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iI2E2NWYzZSIgZD0iTTMuMTYgMzMuNDd2NjUuMjdjMCAxLjExLjkgMi4wMiAyLjAyIDIuMDJoMTE1Ljk2YzEuMTEgMCAyLjAyLS45IDIuMDItMi4wMlYzMy40N2MwLTEuMTEtLjktMi4wMi0yLjAyLTIuMDJINS4xOGMtMS4xMiAwLTIuMDIuOTEtMi4wMiAyLjAybTgzLjAxIDYyLjgxYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzgtLjU3LjctLjk0Ljk0bTAtMTYuODNjLTUuNTcgMy41Ny0xMS40OS0yLjM0LTcuOTEtNy45MWMuMjQtLjM4LjU2LS43Ljk0LS45NGM1LjU3LTMuNTcgMTEuNDkgMi4zNCA3LjkxIDcuOTFjLS4yNS4zNy0uNTcuNy0uOTQuOTRtMC0xNy44M2MtNS41NyAzLjU3LTExLjQ5LTIuMzQtNy45MS03LjkxYy4yNC0uMzguNTYtLjcuOTQtLjk0YzUuNTctMy41NyAxMS40OSAyLjM0IDcuOTEgNy45MWMtLjI1LjM3LS41Ny43LS45NC45NG0wLTE2LjgzYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzctLjU3LjctLjk0Ljk0Ii8+PHBhdGggZmlsbD0iI2ZmZDU0ZiIgZD0iTTMuMTYgMzAuNDd2NjUuMjdjMCAxLjExLjkgMi4wMiAyLjAyIDIuMDJoMTE1Ljk2YzEuMTEgMCAyLjAyLS45IDIuMDItMi4wMlYzMC40N2MwLTEuMTEtLjktMi4wMi0yLjAyLTIuMDJINS4xOGMtMS4xMiAwLTIuMDIuOTEtMi4wMiAyLjAybTgzLjAxIDYyLjgxYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzgtLjU3LjctLjk0Ljk0bTAtMTYuODNjLTUuNTcgMy41Ny0xMS40OS0yLjM0LTcuOTEtNy45MWMuMjQtLjM4LjU2LS43Ljk0LS45NGM1LjU3LTMuNTcgMTEuNDkgMi4zNCA3LjkxIDcuOTFjLS4yNS4zNy0uNTcuNy0uOTQuOTRtMC0xNy44M2MtNS41NyAzLjU3LTExLjQ5LTIuMzQtNy45MS03LjkxYy4yNC0uMzguNTYtLjcuOTQtLjk0YzUuNTctMy41NyAxMS40OSAyLjM0IDcuOTEgNy45MWMtLjI1LjM3LS41Ny43LS45NC45NG0wLTE2LjgzYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzctLjU3LjctLjk0Ljk0Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGUzNDJlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI4IiBkPSJNMTUuMDYgNTEuMDNoMzIuNTZNMTUuMDYgNjYuNTFoMjMuMDdtMTUuOTYgMGg0Ljg0IiBvcGFjaXR5PSIwLjgiLz48cGF0aCBmaWxsPSIjNmQ0YzQxIiBkPSJNMTMuNTYgODAuNDZoM3Y5LjNoLTN6bTI1LjE1IDBoM3Y5LjNoLTN6bTUuNDQgMGgzdjkuM2gtM3ptLTI0LjY4IDBoNnY5LjNoLTZ6bTMwLjE5IDBoN3Y5LjNoLTd6bS0yMS41MiAwaDh2OS4zaC04eiIgb3BhY2l0eT0iMC41Ii8+PHBhdGggZmlsbD0iI2UyYTYxMCIgZD0iTTEyMi4wNCAyOC40NUg0LjI3Yy0uNjIgMC0xLjExLjUtMS4xMSAxLjExdjkuOTZoNzQuNDVjLS43Mi0xLjY3LS42NC0zLjc3Ljc2LTUuODJjLjE5LS4yOC40NC0uNTMuNzItLjcyYzQuNDItMi45MyA5LjEuMTcgOS4xIDQuMzZjMCAuNzctLjE2IDEuNTEtLjQ1IDIuMTdoMzUuNDF2LTkuOTZjLjAxLS42LS40OS0xLjEtMS4xMS0xLjEiLz48cGF0aCBmaWxsPSIjNmQ0YzQxIiBkPSJNOTcuODEgNDguNjhoMTguMjN2MTYuNjlIOTcuODF6IiBvcGFjaXR5PSIwLjUiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM0ZTM0MmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik05OC45OCA3NC4xNGg5LjA3bS05LjA3IDYuMzJoMTQuMjgiIG9wYWNpdHk9IjAuOCIvPjwvc3ZnPg==" alt=""  height={'30px'}/>
              <Typography variant='p' sx={{pt:1,pl:2}}>Flat 10% OFF. Applying this coupon makes eligible products </Typography>
             </Box>
             <Box>
              <Typography variant='p' sx={{fontSize:'12px',ml:6,mb:2}}>Offer Price <span style={{color:'green',fontWeight:"bold"}}>₹1350</span> </Typography><br/>
             <Box mt={1}>
              <Typography variant='p'sx={{ml:6,fontSize:'18px'}}>Use Code: NORETURN | Min Purchase: ₹1400 
              </Typography>
              </Box>
             </Box>
              <Box display={'flex'} mt={2}>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjNzYwNTA1IiBkPSJNMjEuOTI2IDIuMDk2QzE5LjI3OS0xLjY0OCAxMi42OTgtLjI0MyA3LjIxNCA1LjI0MkMxLjczIDEwLjcxNy0uNTczIDE4LjIwNCAyLjA3NCAyMS45NDhDMi45NDcgMjMuMTg2IDQuMjU4IDIzLjg1IDUuODEzIDI0YzEuMDUxLjAwOCAxLjkxMy0xLjE4NSAyLjYxNS0yLjc3N2MuNzI2LTEuNjY4IDEuMTctMy4yMTggMS41MTQtNC42NmMuNTA4LTIuMjkzLjU0NC0zLjkzNC4yOS00LjI3OGMtLjQzNS0uNTgtMS40MzItLjQzNS0yLjU1Ni4yMTdjLS41NDQuMy0xLjI2LjEtLjQwOC0uOTMzYy44NjEtMS4wNDMgNC4yNi0zLjU2MyA1LjQ5My0zLjk1M2MxLjM0Mi0uMzkgMi44NzQuMTM2IDIuMzU3IDEuNjIzYy0uMzcgMS4wODUtNS4wNDcgMTMuNDg2LTEuNTk2IDEyLjI3MmEyMi4zIDIyLjMgMCAwIDAgMy4yNjQtMi43MDljNS40ODQtNS40NzUgNy43ODctMTIuOTYyIDUuMTQtMTYuNzA2bS01LjM2NiAzLjIxYy0xLjA5NyAxLjA5Ni0yLjUyIDEuNDg2LTMuMTM3Ljg1MWMtLjY2Mi0uNjM0LS4yNzItMi4wNTguODI1LTMuMTczYzEuMTA2LTEuMTE1IDIuNTMtMS40NTkgMy4xNDUtLjgzNGMuNjM1LjY0NC4yNDUgMi4wNS0uODM0IDMuMTU1Ii8+PC9zdmc+" alt=""  height={'30px'}/>
              <Typography variant='p' sx={{pt:1,pl:2}}>15% Discount on ICICI Bank Credit Cards EMI </Typography>
             </Box>
             <Box>
              <Typography variant='p' sx={{fontSize:'12px',ml:6,mb:2}}>Offer Price <span style={{color:'green',fontWeight:"bold"}}>₹1275</span> </Typography><br/>
             <Box mt={1}>
              <Typography variant='p'sx={{ml:6,fontSize:'18px'}}>Use Code: TCFICICIEMI  | Min Purchase: ₹5000
              </Typography>
              </Box>
             </Box>
              <Box display={'flex'} mt={2}>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iI2E2NWYzZSIgZD0iTTMuMTYgMzMuNDd2NjUuMjdjMCAxLjExLjkgMi4wMiAyLjAyIDIuMDJoMTE1Ljk2YzEuMTEgMCAyLjAyLS45IDIuMDItMi4wMlYzMy40N2MwLTEuMTEtLjktMi4wMi0yLjAyLTIuMDJINS4xOGMtMS4xMiAwLTIuMDIuOTEtMi4wMiAyLjAybTgzLjAxIDYyLjgxYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzgtLjU3LjctLjk0Ljk0bTAtMTYuODNjLTUuNTcgMy41Ny0xMS40OS0yLjM0LTcuOTEtNy45MWMuMjQtLjM4LjU2LS43Ljk0LS45NGM1LjU3LTMuNTcgMTEuNDkgMi4zNCA3LjkxIDcuOTFjLS4yNS4zNy0uNTcuNy0uOTQuOTRtMC0xNy44M2MtNS41NyAzLjU3LTExLjQ5LTIuMzQtNy45MS03LjkxYy4yNC0uMzguNTYtLjcuOTQtLjk0YzUuNTctMy41NyAxMS40OSAyLjM0IDcuOTEgNy45MWMtLjI1LjM3LS41Ny43LS45NC45NG0wLTE2LjgzYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzctLjU3LjctLjk0Ljk0Ii8+PHBhdGggZmlsbD0iI2ZmZDU0ZiIgZD0iTTMuMTYgMzAuNDd2NjUuMjdjMCAxLjExLjkgMi4wMiAyLjAyIDIuMDJoMTE1Ljk2YzEuMTEgMCAyLjAyLS45IDIuMDItMi4wMlYzMC40N2MwLTEuMTEtLjktMi4wMi0yLjAyLTIuMDJINS4xOGMtMS4xMiAwLTIuMDIuOTEtMi4wMiAyLjAybTgzLjAxIDYyLjgxYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzgtLjU3LjctLjk0Ljk0bTAtMTYuODNjLTUuNTcgMy41Ny0xMS40OS0yLjM0LTcuOTEtNy45MWMuMjQtLjM4LjU2LS43Ljk0LS45NGM1LjU3LTMuNTcgMTEuNDkgMi4zNCA3LjkxIDcuOTFjLS4yNS4zNy0uNTcuNy0uOTQuOTRtMC0xNy44M2MtNS41NyAzLjU3LTExLjQ5LTIuMzQtNy45MS03LjkxYy4yNC0uMzguNTYtLjcuOTQtLjk0YzUuNTctMy41NyAxMS40OSAyLjM0IDcuOTEgNy45MWMtLjI1LjM3LS41Ny43LS45NC45NG0wLTE2LjgzYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzctLjU3LjctLjk0Ljk0Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGUzNDJlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI4IiBkPSJNMTUuMDYgNTEuMDNoMzIuNTZNMTUuMDYgNjYuNTFoMjMuMDdtMTUuOTYgMGg0Ljg0IiBvcGFjaXR5PSIwLjgiLz48cGF0aCBmaWxsPSIjNmQ0YzQxIiBkPSJNMTMuNTYgODAuNDZoM3Y5LjNoLTN6bTI1LjE1IDBoM3Y5LjNoLTN6bTUuNDQgMGgzdjkuM2gtM3ptLTI0LjY4IDBoNnY5LjNoLTZ6bTMwLjE5IDBoN3Y5LjNoLTd6bS0yMS41MiAwaDh2OS4zaC04eiIgb3BhY2l0eT0iMC41Ii8+PHBhdGggZmlsbD0iI2UyYTYxMCIgZD0iTTEyMi4wNCAyOC40NUg0LjI3Yy0uNjIgMC0xLjExLjUtMS4xMSAxLjExdjkuOTZoNzQuNDVjLS43Mi0xLjY3LS42NC0zLjc3Ljc2LTUuODJjLjE5LS4yOC40NC0uNTMuNzItLjcyYzQuNDItMi45MyA5LjEuMTcgOS4xIDQuMzZjMCAuNzctLjE2IDEuNTEtLjQ1IDIuMTdoMzUuNDF2LTkuOTZjLjAxLS42LS40OS0xLjEtMS4xMS0xLjEiLz48cGF0aCBmaWxsPSIjNmQ0YzQxIiBkPSJNOTcuODEgNDguNjhoMTguMjN2MTYuNjlIOTcuODF6IiBvcGFjaXR5PSIwLjUiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM0ZTM0MmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik05OC45OCA3NC4xNGg5LjA3bS05LjA3IDYuMzJoMTQuMjgiIG9wYWNpdHk9IjAuOCIvPjwvc3ZnPg==" alt=""  height={'30px'}/>
              <Typography variant='p' sx={{pt:1,pl:2}}>Get 7% off on 2300</Typography>
             </Box>
             <Box>
              <Typography variant='p' sx={{fontSize:'12px',ml:6,mb:2}}>Offer Price <span style={{color:'green',fontWeight:"bold"}}>₹1395</span> </Typography><br/>
             <Box mt={1}>
              <Typography variant='p'sx={{ml:6,fontSize:'18px'}}>Use Code: FASHOFFER | Min Purchase: ₹2300
              </Typography>
              </Box>
             </Box>
              <Box display={'flex'} mt={2}>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iI2E2NWYzZSIgZD0iTTMuMTYgMzMuNDd2NjUuMjdjMCAxLjExLjkgMi4wMiAyLjAyIDIuMDJoMTE1Ljk2YzEuMTEgMCAyLjAyLS45IDIuMDItMi4wMlYzMy40N2MwLTEuMTEtLjktMi4wMi0yLjAyLTIuMDJINS4xOGMtMS4xMiAwLTIuMDIuOTEtMi4wMiAyLjAybTgzLjAxIDYyLjgxYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzgtLjU3LjctLjk0Ljk0bTAtMTYuODNjLTUuNTcgMy41Ny0xMS40OS0yLjM0LTcuOTEtNy45MWMuMjQtLjM4LjU2LS43Ljk0LS45NGM1LjU3LTMuNTcgMTEuNDkgMi4zNCA3LjkxIDcuOTFjLS4yNS4zNy0uNTcuNy0uOTQuOTRtMC0xNy44M2MtNS41NyAzLjU3LTExLjQ5LTIuMzQtNy45MS03LjkxYy4yNC0uMzguNTYtLjcuOTQtLjk0YzUuNTctMy41NyAxMS40OSAyLjM0IDcuOTEgNy45MWMtLjI1LjM3LS41Ny43LS45NC45NG0wLTE2LjgzYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzctLjU3LjctLjk0Ljk0Ii8+PHBhdGggZmlsbD0iI2ZmZDU0ZiIgZD0iTTMuMTYgMzAuNDd2NjUuMjdjMCAxLjExLjkgMi4wMiAyLjAyIDIuMDJoMTE1Ljk2YzEuMTEgMCAyLjAyLS45IDIuMDItMi4wMlYzMC40N2MwLTEuMTEtLjktMi4wMi0yLjAyLTIuMDJINS4xOGMtMS4xMiAwLTIuMDIuOTEtMi4wMiAyLjAybTgzLjAxIDYyLjgxYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzgtLjU3LjctLjk0Ljk0bTAtMTYuODNjLTUuNTcgMy41Ny0xMS40OS0yLjM0LTcuOTEtNy45MWMuMjQtLjM4LjU2LS43Ljk0LS45NGM1LjU3LTMuNTcgMTEuNDkgMi4zNCA3LjkxIDcuOTFjLS4yNS4zNy0uNTcuNy0uOTQuOTRtMC0xNy44M2MtNS41NyAzLjU3LTExLjQ5LTIuMzQtNy45MS03LjkxYy4yNC0uMzguNTYtLjcuOTQtLjk0YzUuNTctMy41NyAxMS40OSAyLjM0IDcuOTEgNy45MWMtLjI1LjM3LS41Ny43LS45NC45NG0wLTE2LjgzYy01LjU3IDMuNTctMTEuNDktMi4zNC03LjkxLTcuOTFjLjI0LS4zOC41Ni0uNy45NC0uOTRjNS41Ny0zLjU3IDExLjQ5IDIuMzQgNy45MSA3LjkxYy0uMjUuMzctLjU3LjctLjk0Ljk0Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGUzNDJlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI4IiBkPSJNMTUuMDYgNTEuMDNoMzIuNTZNMTUuMDYgNjYuNTFoMjMuMDdtMTUuOTYgMGg0Ljg0IiBvcGFjaXR5PSIwLjgiLz48cGF0aCBmaWxsPSIjNmQ0YzQxIiBkPSJNMTMuNTYgODAuNDZoM3Y5LjNoLTN6bTI1LjE1IDBoM3Y5LjNoLTN6bTUuNDQgMGgzdjkuM2gtM3ptLTI0LjY4IDBoNnY5LjNoLTZ6bTMwLjE5IDBoN3Y5LjNoLTd6bS0yMS41MiAwaDh2OS4zaC04eiIgb3BhY2l0eT0iMC41Ii8+PHBhdGggZmlsbD0iI2UyYTYxMCIgZD0iTTEyMi4wNCAyOC40NUg0LjI3Yy0uNjIgMC0xLjExLjUtMS4xMSAxLjExdjkuOTZoNzQuNDVjLS43Mi0xLjY3LS42NC0zLjc3Ljc2LTUuODJjLjE5LS4yOC40NC0uNTMuNzItLjcyYzQuNDItMi45MyA5LjEuMTcgOS4xIDQuMzZjMCAuNzctLjE2IDEuNTEtLjQ1IDIuMTdoMzUuNDF2LTkuOTZjLjAxLS42LS40OS0xLjEtMS4xMS0xLjEiLz48cGF0aCBmaWxsPSIjNmQ0YzQxIiBkPSJNOTcuODEgNDguNjhoMTguMjN2MTYuNjlIOTcuODF6IiBvcGFjaXR5PSIwLjUiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM0ZTM0MmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik05OC45OCA3NC4xNGg5LjA3bS05LjA3IDYuMzJoMTQuMjgiIG9wYWNpdHk9IjAuOCIvPjwvc3ZnPg==" alt=""  height={'30px'}/>
              <Typography variant='p' sx={{pt:1,pl:2}}>Flat Rs.400 Off</Typography>
             </Box>
             <Box>
              <Typography variant='p' sx={{fontSize:'12px',ml:6,mb:2}}>Offer Price <span style={{color:'green',fontWeight:"bold"}}>₹1200</span> </Typography><br/>
             <Box mt={1}>
              <Typography variant='p'sx={{ml:6,fontSize:'18px'}}>Use Code: NEW400 | Min Purchase: ₹1999
              </Typography>
              </Box>
              <Box my={4}>
                <Typography variant='p' sx={{color:'crimson',fontWeight:'bolder',fontSize:'18px'}}> See 4 More Offers </Typography>
              </Box>
             </Box>
              <Divider/>
                <Box mt={2}>
                  <Typography variant='h6'> Ship To</Typography>
                  <Box sx={{border:'1px solid silver',p:1,mt:2}}>
                    <Typography variant='p' sx={{ml:2}}>110001,Delhi</Typography>
                    <Typography variant='p' sx={{float:'right',fontSize:'18px',color:'crimson'}}>Change PinCode</Typography>
                  </Box>
                </Box>
              <Box>
                <Box display={'flex'} mt={4}>
                  <Box>
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMzAuNDcgMTIuMTloLTEuNTJ2LTEuNTNoLTEuNTJWOS4xNEgyNS45djMuMDVoLTEuNTJ2MS41MmgtMS41MlY5LjE0aDMuMDRWNy42MmgtNy42MlY2LjA5aC0xLjUydjEwLjY3SDEuNTJWNi4wOUgwdjE2Ljc2aDEuNTJ2LTQuNTdoMTUuMjR2NC41N2gtNi4xdi0xLjUySDkuMTR2NC41N2gxLjUydi0xLjUyaDkuMTV2MS41MmgxLjUydi00LjU3aC0xLjUydjEuNTJoLTEuNTNWOS4xNGgzLjA1djYuMWgxLjUzdjEuNTJoNy42MXY2LjA5SDMydi05LjE0aC0xLjUzeiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0yNy40MyAyMS4zM0gyNS45djQuNTdoMS41M3YtMS41MmgzLjA0di0xLjUzaC0zLjA0em0tNi4xIDQuNTdoNC41N3YxLjUzaC00LjU3Wm0xLjUzLTMuMDVoMS41MnYxLjUzaC0xLjUyWm0tMS41My0zLjA0aDQuNTd2MS41MmgtNC41N1ptLTE2Ljc2IDBoNC41N3YxLjUySDQuNTdabTAgNi4wOWg0LjU3djEuNTNINC41N1ptMS41Mi0zLjA1aDEuNTN2MS41M0g2LjA5Wk0zLjA1IDEyLjE5aDEyLjE5djEuNTJIMy4wNVptMC0zLjA1aDEyLjE5djEuNTJIMy4wNVptMS41MiAxMi4xOUgzLjA1djEuNTJIMS41MnYxLjUzaDEuNTN2MS41MmgxLjUyek0xLjUyIDQuNTdoMTUuMjR2MS41MkgxLjUyWiIvPjwvc3ZnPg==" alt="" />
                  </Box>
                  <Box mt={1} pl={2}>
                  <Typography variant='p'>Delivery by <span style={{fontWeight:700}}> 16th Mar</span></Typography>
                  </Box>
                </Box>
                <Box display={'flex'} mt={2}>
                  <Box>
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjMuNjIgMy4wNThjLjUxLTIuMi0zLjcwOS0zLjUxOS01LjgzOC0yLjkwOWMtMS42Ni41Mi0yLjE2IDEuNzYtMS43IDIuNzk5YTIuODEgMi44MSAwIDAgMCAxLjA2IDMuMDQ5YTUuMTEgNS4xMSAwIDAgMCA1LjU3OC0uMDdhMS45MyAxLjkzIDAgMCAxLS45MyAxLjE4Yy0uNDAyLjMxMy0uODYuNTQ3LTEuMzUuNjg5YS4zMDIuMzAyIDAgMSAwIC4wOC42YTMuNSAzLjUgMCAwIDAgMi4zNS0uNjdhMi4zMSAyLjMxIDAgMCAwIC41OS0yLjU4YTIuMzYgMi4zNiAwIDAgMCAuMTYtMi4wODhtLTUuNDk4LTEuODdhNS43IDUuNyAwIDAgMSAzLjIwOC4wN2MyLjM0LjY5IDIgMi4wOS4yMiAyLjQ5Yy0zLjE0OC43Mi02LjEwNy0xLjYyLTMuNDI4LTIuNTZtMS45OTkgNC40NTlhNS4yIDUuMiAwIDAgMS0yLjQtLjQ5YTEuNjEgMS42MSAwIDAgMS0uOTE5LTEuMzJhNS43IDUuNyAwIDAgMCA2LjE5OC4xNmMtLjE3IDEuMjUtMS42MSAxLjYyLTIuOTIgMS42NXptLTEzLjM4NS4xOGMuODcgMi4yNTkgNC45OTggMi41NTkgNi44MTguODZhMi40MiAyLjQyIDAgMCAwIC42LTIuNjljLjUxLTIuMTk5LTMuNzEtMy41MTgtNS44NDgtMi45MDhjLTEuNjUuNTItMi4xNSAxLjc1OS0xLjY5IDIuNzk4YTMuNzcgMy43NyAwIDAgMCAuMTIgMS45NG02LjIwOC4xN2MtMS4yNSAxLTQuOTM4Ljg3LTUuNTQ4LS43NWEzIDMgMCAwIDEtLjEtLjQ0YTUuNyA1LjcgMCAwIDAgNi4yNTcuMTNhMS41MyAxLjUzIDAgMCAxLS42MSAxLjA2bS0xLjA4LTMuNzY5YzIuMzUuNjkgMiAyLjA5LjIyIDIuNWE1LjQgNS40IDAgMCAxLTMuNjM4LS40N2MtMi4yNC0xLjM1LjMyLTIuOTQgMy40MTgtMi4wM00xLjcxOCAxMi4xOTRjLjA4IDAgMi44LS44NyAyLjg4LS45YS4zMy4zMyAwIDAgMCAwIC41Yy4yNi4yOC0uMzMgMS0uNDkgMS4xOWMtLjMuNDg5LS42Ny45My0xLjEgMS4zMWMtLjMyLjIxLS4zMy0uMTItLjQ0LS4xOHMtLjQyLS42NC0uNTktLjdzLS41Mi4yLS4zLjUzcy40NC41OS43LjkyOWMxLjc2IDMuMzQ5IDEuOTEgMy43ODggMi40IDQuMjU4YTEuMiAxLjIgMCAwIDAgLjk5OS4zN2MxLjUzLS4wOSAxMy44NjQtNC4xNDggMTUuNzQzLTQuOTk4YTEgMSAwIDAgMCAuNTktLjZjLjE1LS45My00Ljc2OC02LjEzNy02LjI5Ny02LjMyN2MtMS0uMTItMTEuNDk2IDIuOTE5LTE0LjExNSAzLjk5OGEuMzUuMzUgMCAwIDAgLjAyLjYybTE2LjM5NCAyLjM1YTguOCA4LjggMCAwIDEgMS43NjktMi4xMWMuMzMyLjMzNS42MTQuNzE1Ljg0IDEuMTNjLS43Mi4zLTEuODcuNzEtMi42MS45OG0tOC4xMDctNC43MDljLjA5IDAgNS4yMjgtMS4zMiA1LjY2OC0xLjI2Yy43Ni4xMSAyLjk5OCAyLjU3IDMuNTU4IDMuMTVjLTEuNTMuNzA5LTIuMTU5IDIuMzY4LTEuODc5IDMuMDc4Yy0uODkuMzItNy44MTcgMi43MzktOS4zOTYgMy4yNjljLS40Ny0yLjIyLTQuMTE5LTIuMTctMy43MTktMS4yN2EuMjcuMjcgMCAwIDAgLjExLjE1cy42My4wNi44Ny4xN2MuNzUzLjIyOCAxLjQ0LjYzNyAyIDEuMTlhNi4zIDYuMyAwIDAgMS0xLjcxLjM4Yy0uNC0uMS0uNzItLjc5LTIuMzgtMy43MmMyLjA3LS4zOTkgMy0yLjk5OCAxLjg4LTMuNzA4Yy0uMDktLjExLS45NC4xMSA0Ljk5OC0xLjQyOSIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik05LjQzNSAxMy4zMjRjLjQzLjYzIDEuMjUuNSAyIC4zOWMxLjIwOS0uMTkgMS4yNzkuMzQuMjQuNjlhMi45IDIuOSAwIDAgMS0xIC4xNmEuMzQyLjM0MiAwIDEgMC0uMDcuNjc5Yy40NjcuMDczLjk0NC4wNDYgMS40LS4wOGMwIC4zMy44MDkuOTEgMS4wODkuNzRzMC0xLjA2IDAtMS4xNHYtLjA3Yy45Mi0uNzYuMjctMS45MS0uNzItMi4xM2ExMS42IDExLjYgMCAwIDAtMiAuMTFjLS4yNy0uMzA5LS44NjktLjgwOSAxLjMxLS42MzlhLjMwMy4zMDMgMCAxIDAgLjA5LS42YTYgNiAwIDAgMC0xLjE3LS4xNmMtLjIxLS41NS0uOTk5LS45Mi0xLjI0OS0uNzhzMCAuOS4xNCAxLjEyYTEuNCAxLjQgMCAwIDAtLjM2LjYzYy0uMTMuMzUuMTEuNzUuMyAxLjA4bTMuNzg5LTMuMjU5YTQuMjYgNC4yNiAwIDAgMCAzLjk5OCAxLjEzYS4zNC4zNCAwIDEgMCAwLS42OGExNC42IDE0LjYgMCAwIDEtMy42ODgtMS4yYy0uMzMtLjItMS4wMS4zMy0uMzEuNzUiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMy4xODggMTkuNjYxYy40MzcuNjUyLjk3IDEuMjM1IDEuNTggMS43M2MxLjk5NyAxLjEwOSAxNC45OTItNC4xIDE3LjE0Mi00LjkzYS4zNS4zNSAwIDAgMC0uMjQtLjY1Yy0xIC4zNy0xNS40NzMgNS4xNjktMTYuNDQzIDQuNjg5Yy0uNS0uMzk3LS45NS0uODU0LTEuMzQtMS4zNmMtMS4wNi0xLjM0LTIuMTI5LTMuODk4LTIuNjM4LTMuODM4YS4zLjMgMCAwIDAtLjI4LjM4YTQ1IDQ1IDAgMCAwIDIuMjE5IDMuOTc4Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTIyIDE4LjA2MmMtMS4xMS40LTE2LjIyMyA1LjM2Ny0xNy4zNDMgNC44NzhhOCA4IDAgMCAxLTEuNDEtMS4zNUMyLjE4OSAyMC4zMyAxLjMgMTguNDkxLjc5IDE3LjkyMmMtLjIzLS4yNi0uNjUtLjEyLS41Ny4yNWMwIC4xOC40NS42Mi43IDEuMTFjLjEzLjIzLjIzLjQ3OS4zNC43MTlhMTMuMSAxMy4xIDAgMCAwIDIuMjc5IDMuMjM5YTEuNzMgMS43MyAwIDAgMCAxLjY5OS43NGMzLjk5OC0uMjMgMTMuMzA1LTMuODQgMTYuOTkzLTUuMjY5YS4zNS4zNSAwIDAgMC0uMjMtLjY1Ii8+PC9zdmc+" alt="" />
                  </Box>
                  <Box mt={1} pl={2}>
                  <Typography variant='p' style={{fontWeight:700}}>Cash on Delivery | <span style={{color:'green'}}>  Available    </span></Typography>
                  </Box>
                </Box>
                <Box display={'flex'} mt={2}>
                  <Box>
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNNyA0LjVxMCAuMjU3LS4wNS41SDEwYTEgMSAwIDAgMSAxIDF2MmgtMWEyIDIgMCAwIDAtMS41LjY3N0M4LjE4OSA5LjAzIDggOS40OTMgOCAxMHYxSDZhMSAxIDAgMCAxLTEtMVY2Ljk1YTIuNSAyLjUgMCAwIDEtMSAwVjEwYTIgMiAwIDAgMCAyIDJoMnYyYTEuOTkgMS45OSAwIDAgMCAxLjE1OCAxLjgxNWE1LjUgNS41IDAgMCAxLS4xNDctMS42NjZBMSAxIDAgMCAxIDkgMTR2LTRhMSAxIDAgMCAxIDEtMWg0cS4wNzUgMCAuMTQ5LjAxMWE1LjYgNS42IDAgMCAxIDEuNjY2LjE0N0EyLjAxIDIuMDEgMCAwIDAgMTQgOGgtMlY2YTIgMiAwIDAgMC0yLTJINi45NXEuMDUuMjQzLjA1LjVtLTEgMGExLjUgMS41IDAgMSAxLTMgMGExLjUgMS41IDAgMCAxIDMgMG0xMSAwYTEuNSAxLjUgMCAxIDEtMyAwYTEuNSAxLjUgMCAwIDEgMyAwbS0xMSAxMWExLjUgMS41IDAgMSAxLTMgMGExLjUgMS41IDAgMCAxIDMgMG04LjUgMy41YTQuNSA0LjUgMCAxIDAgMC05YTQuNSA0LjUgMCAwIDAgMCA5bS0uODk2LTYuMzk2bC0uODk3Ljg5NmgxLjU0M0EyLjc1IDIuNzUgMCAwIDEgMTcgMTYuMjV2LjI1YS41LjUgMCAwIDEtMSAwdi0uMjVhMS43NSAxLjc1IDAgMCAwLTEuNzUtMS43NWgtMS41NDNsLjg5Ny44OTZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtMS43NTItMS43NTNhLjUuNSAwIDAgMSAuMDAyLS43MDVsMS43NS0xLjc1YS41LjUgMCAwIDEgLjcwOC43MDgiLz48L3N2Zz4=" alt="" />
                  </Box>
                  <Box mt={1} pl={2}>
                  <Typography variant='p' style={{fontWeight:700}}>7 Days Return and Replacement available |<span style={{color:'crimson'}}> Know More</span> </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{border:'1px solid silver' ,my:4,p:1}}>
                <Typography variant='p' sx={{fontWeight:'600',ml:2}}>Sold By 1 Arvind Life Style Brands Ltd</Typography>
              </Box>
              <Divider/>  
            </Box>
          </CardContent>
          <CardActions>
            <Box display={'flex'} flexWrap={'wrap'} gap={5}>
              <Box sx={{border:'1px solid silver',p:1}}>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTYuNjEgMjFxLS45OTQgMC0xLjY4Ny0uNjk1cS0uNjkyLS42OTYtLjY5Mi0xLjY5cTAtLjE1LjEzMi0uNzU3bC03LjE5Ny00LjI3M3EtLjMyNC4zNzQtLjc5My41ODd0LTEuMDA3LjIxM3EtLjk4NiAwLTEuNjc2LS43MDJUMyAxMnQuNjktMS42ODN0MS42NzYtLjcwMnEuNTM3IDAgMS4wMDcuMjEzdC43OTMuNTg4bDcuMTk4LTQuMjU1cS0uMDctLjE5NC0uMTAxLS4zODVxLS4wMzItLjE5Mi0uMDMyLS4zOTJxMC0uOTkzLjY5Ny0xLjY4OVExNS42MjUgMyAxNi42MiAzdDEuNjg4LjY5N1QxOSA1LjM4OXQtLjY5NSAxLjY4OHQtMS42OS42OTJxLS41NDIgMC0xLS4yMjJ0LS43OC0uNTk3bC03LjE5OSA0LjI3M3EuMDcuMTk0LjEwMS4zODZxLjAzMi4xOTEuMDMyLjM5MXQtLjAzMi4zOTF0LS4xLjM4Nmw3LjE5OCA0LjI3M3EuMzIzLS4zNzUuNzgtLjU5N3EuNDU4LS4yMjIgMS0uMjIycS45OTQgMCAxLjY5LjY5NnEuNjk1LjY5OC42OTUgMS42OTN0LS42OTcgMS42ODh0LTEuNjkyLjY5Mm0uMDA0LTFxLjU4OSAwIC45ODctLjM5OHQuMzk4LS45ODZ0LS4zOTgtLjk4N3QtLjk4Ni0uMzk4dC0uOTg3LjM5OHQtLjM5OC45ODZ0LjM5OC45ODd0Ljk4Ny4zOThtLTExLjI1LTYuNjE2cS41OTYgMCAxLS40MDJxLjQwMy0uNDAzLjQwMy0uOTgydC0uNDAzLS45ODJ0LTEtLjQwM3EtLjU4MSAwLS45NzMuNDAzUTQgMTEuNDIxIDQgMTJ0LjM5My45ODJ0Ljk3My40MDNNMTcuNTk3IDYuMzdRMTggNS45NzMgMTggNS4zODRxMC0uNTg4LS4zOTgtLjk4NlQxNi42MTYgNHQtLjk4Ny4zOTh0LS4zOTguOTg3dC40MDMuOTg2dC45ODIuMzk4dC45ODEtLjM5OG0tLjk4MS0uOTg3Ii8+PC9zdmc+" alt="" height={'30px'} />
              </Box>
              <Box  sx={{border:'1px solid silver',p:1}}>
               <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI0IiBkPSJNMTUgOEM4LjkyNSA4IDQgMTIuOTI1IDQgMTljMCAxMSAxMyAyMSAyMCAyMy4zMjZDMzEgNDAgNDQgMzAgNDQgMTljMC02LjA3NS00LjkyNS0xMS0xMS0xMWMtMy43MiAwLTcuMDEgMS44NDctOSA0LjY3NEExMC45OSAxMC45OSAwIDAgMCAxNSA4Ii8+PC9zdmc+" alt="" height={'30px'} />
              </Box>
              <Button variant='contained' sx={{border:'1px solid crimson' , backgroundColor:'transparent',color:'crimson',fontWeight:'700'}} size='large'>Buy Now</Button>
              <Button variant='contained' sx={{ backgroundColor:'crimson',color:'white',fontWeight:'700'}} size='large' onClick={() => navigate(`/cart`)}>Add To Bag</Button>
            </Box>
          </CardActions>
         </Grid>

      </Grid>

      <Footer/>
    </div>
  )
}

export default ProductDetails
