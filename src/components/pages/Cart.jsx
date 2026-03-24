import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button, CardActions, CardContent, Divider } from '@mui/material';
import Footer from './Footer';



const Cart = () => {
  const CART_ITEMS = [
    {
      id: 1,
      name: "Fossil ME3098 Townsman Analog Watch for Men",
      price: 16097,
      originalPrice: 22995,
      discount: 6898,
      image: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636738/ys2_evgkv4.avif",
      deliveryDate: "10th Mar"
    },
    {
      id: 2,
      name: "Fossil NAG2772 Townsman Analog Watch for Men",
      price: 15000,
      originalPrice: 22999,
      discount: 7999,
      image: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636739/ys3_bgkkwp.avif",
      deliveryDate: "10th Mar"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 5 }, mt: 8 }}>
      <Typography variant='h5' sx={{ textAlign: 'center', mb: 4 }}>MY BAG</Typography>

      <Grid container spacing={1}>

        <Grid item xs={12} md={8} sx={{ mx: { lg: 10, xs: 1 } }}>
          {CART_ITEMS.map((item) => (
            <Grid container key={item.id} sx={{ border: '1px solid #e0e0e0', mb: 2, borderRadius: '8px', overflow: 'hidden' }}>

              <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center', p:{md:2}, px:{xs:10} }}>
                <img src={item.image} alt={item.name} style={{ maxHeight: '150px', objectFit: 'contain' }} />
              </Grid>

              <Grid item xs={12} sm={9}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="h6" component="span" sx={{ color: 'red', fontWeight: 'bold' }}>₹{item.price}</Typography>
                    <Typography variant="body2" component="span" sx={{ color: 'text.secondary', mx: 2, textDecoration: 'line-through' }}>₹{item.originalPrice}</Typography>
                    <Typography variant="body2" component="span" sx={{ color: 'green' }}>₹{item.discount} Off</Typography>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" display="block">🚚 Delivery by {item.deliveryDate}</Typography>
                    <Typography variant="caption" display="block">🔄 7 Days Return & Replacement</Typography>
                  </Box>
                </CardContent>

                <Divider />

                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button size="small" color="inherit">Save To Wishlist</Button>
                  <Button size="small" color="error">Remove</Button>
                </CardActions>
              </Grid>
            </Grid>
          ))}
        </Grid>


        <Grid item xs={12} md={4} sx={{ mx: { lg: 10, xs: 1 } }}>
          <Box sx={{ border: '1px solid black', p: 3, borderRadius: '8px', position: 'sticky', top: '100px' }}>
            <Typography variant="h6" gutterBottom>Price Details</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Price ({CART_ITEMS.length} items)</Typography>
              <Typography>₹45,994</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, color: 'green' }}>
              <Typography>Discount</Typography>
              <Typography>-₹14,897</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Total Amount</Typography>
              <Typography variant="h6">₹31,097</Typography>
            </Box>
            <Button variant="contained" fullWidth color="warning" size="large">
              Place Order
            </Button>
          </Box>
        </Grid>

      </Grid>
      <Footer />

    </Box>
  );
};

export default Cart;