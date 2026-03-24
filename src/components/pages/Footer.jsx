import React from 'react';
import { Box, Grid, Typography, Container, Divider, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: "Tata MarketPlace",
    links: ['About Us', 'Careers', 'Terms of Use', 'Privacy Policy', 'Affiliates', 'Sitemap', 'Blog']
  },
  {
    title: "Customer Service",
    links: ['Shopping', 'Offers & Promotions', 'Payments', 'Cancellation', 'Returns & Refunds', 'Returns Policy', 'Electronics Return Policy', 'Contact Us', 'Reviews Guidelines', 'Home & Furniture Return Policy', 'Replacement Policy']
  },
  {
    title: "My Tata CLiQ",
    links: ['My Account', 'My Orders', 'My Shopping Bag', 'My Wishlist']
  },
  {
    title: "Top Brands",
    links: ["US POLO", "LIBAS", "LEVIS", "ASICS", "RARE RABBIT", 'VERO MODA']
  }
];

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'white', color: 'black', mt: 5, pt: 4, pb: 2, overflowX: 'hidden' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center' }}>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636643/navbar_hqoeoh.webp" alt="" />
        </Box>

       
        <Grid container spacing={{ xs: 4, md: 6, lg: 8 }} justifyContent="center">

          {/* 1. CONTACT SECTION */}
          <Grid item xs={12} lg={4} sx={{
            textAlign: 'center',
            borderRight: { lg: '1px solid black' },
            px: { xs: 2, lg: 1 },
            mb: { xs: 4, lg: 0 }
          }}>
            <Typography sx={{ fontWeight: 600, fontSize: '18px', mb: 2 }}>
              CONNECT WITH US
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Email: tatacliq@gmail.com</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Phone: +91 9000900099</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>Address: Near HITECH CITY, Hyderabad</Typography>

            <Box sx={{ my: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNzEyIDMuOTdhNTkuNCA1OS40IDAgMCAxIDEwLjU3NiAwbDEuNTE4LjEzNkEzLjI4IDMuMjggMCAwIDEgMjEuNzYgNi45YTM1LjMgMzUuMyAwIDAgMSAwIDEwLjJhMy4yOCAzLjI4IDAgMCAxLTIuOTU0IDIuNzkzbC0xLjUxOC4xMzZhNTkuNCA1OS40IDAgMCAxLTEwLjU3NiAwbC0xLjUxOC0uMTM2QTMuMjggMy4yOCAwIDAgMSAyLjI0IDE3LjFhMzUuMyAzNS4zIDAgMCAxIDAtMTAuMmEzLjI4IDMuMjggMCAwIDEgMi45NTQtMi43OTR6bS0uODU2IDIuODdhLjc1Ljc1IDAgMCAwLTEuMTA2LjY2VjE3YS43NS43NSAwIDAgMCAxLjUgMFY4Ljc1Nmw1LjM5NCAyLjkwNGMuMjIyLjEyLjQ5LjEyLjcxMiAwbDUuMzk0LTIuOTA0VjE3YS43NS43NSAwIDAgMCAxLjUgMFY3LjVhLjc1Ljc1IDAgMCAwLTEuMTA2LS42NkwxMiAxMC4xNDh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt="" style={{ height: '25px' }} />
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMi40NiA2Yy0uNzcuMzUtMS42LjU4LTIuNDYuNjljLjg4LS41MyAxLjU2LTEuMzcgMS44OC0yLjM4Yy0uODMuNS0xLjc1Ljg1LTIuNzIgMS4wNUMxOC4zNyA0LjUgMTcuMjYgNCAxNiA0Yy0yLjM1IDAtNC4yNyAxLjkyLTQuMjcgNC4yOWMwIC4zNC4wNC42Ny4xMS45OEM4LjI4IDkuMDkgNS4xMSA3LjM4IDMgNC43OWMtLjM3LjYzLS41OCAxLjM3LS41OCAyLjE1YzAgMS40OS43NSAyLjgxIDEuOTEgMy41NmMtLjcxIDAtMS4zNy0uMi0xLjk1LS41di4wM2MwIDIuMDggMS40OCAzLjgyIDMuNDQgNC4yMWE0LjIgNC4yIDAgMCAxLTEuOTMuMDdhNC4yOCA0LjI4IDAgMCAwIDQgMi45OGE4LjUyIDguNTIgMCAwIDEtNS4zMyAxLjg0cS0uNTEgMC0xLjAyLS4wNkMzLjQ0IDIwLjI5IDUuNyAyMSA4LjEyIDIxQzE2IDIxIDIwLjMzIDE0LjQ2IDIwLjMzIDguNzljMC0uMTkgMC0uMzctLjAxLS41NmMuODQtLjYgMS41Ni0xLjM2IDIuMTQtMi4yMyIvPjwvc3ZnPg==" alt="" style={{ height: '25px' }} />
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik03LjggMmg4LjRDMTkuNCAyIDIyIDQuNiAyMiA3Ljh2OC40YTUuOCA1LjggMCAwIDEtNS44IDUuOEg3LjhDNC42IDIyIDIgMTkuNCAyIDE2LjJWNy44QTUuOCA1LjggMCAwIDEgNy44IDJtLS4yIDJBMy42IDMuNiAwIDAgMCA0IDcuNnY4LjhDNCAxOC4zOSA1LjYxIDIwIDcuNiAyMGg4LjhhMy42IDMuNiAwIDAgMCAzLjYtMy42VjcuNkMyMCA1LjYxIDE4LjM5IDQgMTYuNCA0em05LjY1IDEuNWExLjI1IDEuMjUgMCAwIDEgMS4yNSAxLjI1QTEuMjUgMS4yNSAwIDAgMSAxNy4yNSA4QTEuMjUgMS4yNSAwIDAgMSAxNiA2Ljc1YTEuMjUgMS4yNSAwIDAgMSAxLjI1LTEuMjVNMTIgN2E1IDUgMCAwIDEgNSA1YTUgNSAwIDAgMS01IDVhNSA1IDAgMCAxLTUtNWE1IDUgMCAwIDEgNS01bTAgMmEzIDMgMCAwIDAtMyAzYTMgMyAwIDAgMCAzIDNhMyAzIDAgMCAwIDMtM2EzIDMgMCAwIDAtMy0zIi8+PC9zdmc+" alt="" style={{ height: '25px' }} />
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Im0xMCAxNWw1LjE5LTNMMTAgOXptMTEuNTYtNy44M2MuMTMuNDcuMjIgMS4xLjI4IDEuOWMuMDcuOC4xIDEuNDkuMSAyLjA5TDIyIDEyYzAgMi4xOS0uMTYgMy44LS40NCA0LjgzYy0uMjUuOS0uODMgMS40OC0xLjczIDEuNzNjLS40Ny4xMy0xLjMzLjIyLTIuNjUuMjhjLTEuMy4wNy0yLjQ5LjEtMy41OS4xTDEyIDE5Yy00LjE5IDAtNi44LS4xNi03LjgzLS40NGMtLjktLjI1LTEuNDgtLjgzLTEuNzMtMS43M2MtLjEzLS40Ny0uMjItMS4xLS4yOC0xLjljLS4wNy0uOC0uMS0xLjQ5LS4xLTIuMDlMMiAxMmMwLTIuMTkuMTYtMy44LjQ0LTQuODNjLjI1LS45LjgzLTEuNDggMS43My0xLjczYy40Ny0uMTMgMS4zMy0uMjIgMi42NS0uMjhjMS4zLS4wNyAyLjQ5LS4xIDMuNTktLjFMMTIgNWM0LjE5IDAgNi44LjE2IDcuODMuNDRjLjkuMjUgMS40OC44MyAxLjczIDEuNzMiLz48L3N2Zz4=" alt="" style={{ height: '25px' }} />
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMiAxMmMwLTUuNTItNC40OC0xMC0xMC0xMFMyIDYuNDggMiAxMmMwIDQuODQgMy40NCA4Ljg3IDggOS44VjE1SDh2LTNoMlY5LjVDMTAgNy41NyAxMS41NyA2IDEzLjUgNkgxNnYzaC0yYy0uNTUgMC0xIC40NS0xIDF2MmgzdjNoLTN2Ni45NWM1LjA1LS41IDktNC43NiA5LTkuOTUiLz48L3N2Zz4=" alt="" style={{ height: '25px' }} />
            </Box>

            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
              <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636629/logo_jhyao4.png" alt="logo" style={{ height: '60px' }} />
            </Stack>
          </Grid>
          {footerSections.map((section) => (
            <Grid
              item
              xs={12}   
              sm={6}   
              md={3} 
              lg={2}
              key={section.title}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: '18px', mb: 2, width: '100%' }}>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Typography
                  key={link}
                  component={Link}
                  to="#"
                  sx={{
                    display: 'block',
                    color: 'black',
                    textDecoration: 'none',
                    fontSize: '14px',
                    mb: 1,
                    width: '100%', 
                    '&:hover': { color: 'red' }
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mt: 6, mb: 2, borderColor: '#eee' }} />
        <Typography sx={{ textAlign: 'center', color: 'red', fontSize: '0.8rem' }}>
          © Copyright 2026 . All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;