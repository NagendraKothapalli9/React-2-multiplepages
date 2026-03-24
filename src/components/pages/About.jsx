import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Footer from './Footer'
import Marquee from "react-fast-marquee";
import { useNavigate } from 'react-router-dom';



const About = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ m: 8 }}>
        <Typography variant='h5' sx={{ textAlign: 'center', mb: 4 }}>Our Branding Patners</Typography>
        <Marquee gradient={false} speed={130}>
          
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636673/s1_mky72n.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand' />
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636678/s2_vva1pj.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636679/s3_adb5cp.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636679/s4_wr4wov.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636686/s5_pn2od9.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636686/s6_ru0zkh.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636687/s7_roedfg.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636688/s8_vgc1e6.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636691/s9_upmfmj.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636692/s10_qaq2jn.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636693/s11_vygrnc.webp" style={{ width: '150px', margin: '0 10px' }} alt='brand'/>
        </Marquee>
      </Box>
      <Box sx={{ m: 8 }}>
        <Typography variant='h5' sx={{ textAlign: 'center', mb: 4 }}>Our Products</Typography>
        <Marquee gradient={false} speed={50}>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636696/sd1_phvdo6.avif" alt='brand' style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')} />
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636696/sd2_lshjst.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')}alt='brand' />
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636697/sd3_xruagn.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636700/sd4_gg8cvk.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636700/sd5_esv5iu.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636701/sd6_wv13o9.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')}alt='brand' />
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636701/sd7_zd2ift.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636705/sd8_qtnmbg.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636706/sd9_wuymay.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636709/sd10_zhmpxy.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')}alt='brand' />
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636709/sd11_yszrdr.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')} alt='brand'/>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636710/sd12_iqqv2o.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')}alt='brand' />
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636711/sd13_tmrecv.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')}alt='brand' />
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636714/sd14_jjln9p.avif" style={{ height: '150px', margin: '0 10px' }} onClick={() => navigate('/categories')} alt='brand'/>
        </Marquee>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: "wrap", m: 7, justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '120px',
            width: '300px',
            backgroundColor: '#E7DEAF',
            borderRadius: '8px',
            gap: 1
          }}
        >
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636591/contact_pza6pc.webp" alt="Contact" height="50px" />
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Contact Us
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '120px',
            width: '300px',
            backgroundColor: '#E7DEAF',
            borderRadius: '8px',
            gap: 1
          }}
        >
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636573/about_us_pi4h9z.png" alt="Contact" height="50px" />
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            About Us
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '120px',
            width: '300px',
            backgroundColor: '#E7DEAF',
            borderRadius: '8px',
            gap: 1
          }}
        >
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636591/contact_pza6pc.webp" alt="Contact" height="50px" />
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Customer Care
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mx: { lg: 8, sm: 2 }, backgroundColor: 'white', px: 4 }}>
        <Typography variant='h6'>Contact Us</Typography>
        <Typography variant='p' sx={{ px: 3, fontSize: '15px' }}>Have a question, feedback, or need assistance with your Tata CLiQ FASHION transaction? We're here to help!
        </Typography>
        <Typography variant='h6' sx={{ mt: 2 }}> Guidance at your fingertips</Typography>
        <Typography variant='p' sx={{ px: 3, fontSize: '15px' }}>Getting help is easy. Visit CLiQ Care to explore FAQs on common topics. Sign in to get guided steps and solutions tailored to your recent orders, making your shopping experience even smoother.
        </Typography>
        <Typography variant='h6' sx={{ mt: 2 }}>Need immediate assistance?
        </Typography>
        <Typography variant='p' sx={{ px: 3, fontSize: '15px' }}>For urgent queries or to speak with us directly, call 022-68078282. We’re available every day from 9:00 a.m. to 7:00 p.m.
        </Typography>
        <Typography variant='h6' sx={{ mt: 2 }} >Want to write to us? You can reach us by post at:
        </Typography>
        <Typography variant='p' sx={{ px: 3, fontSize: '15px' }}>Address: 4th Floor, Empire Plaza 2, Chandan Nagar, LBS Marg, Vikhroli (W), Mumbai – 400083.
        </Typography>
      </Box>
      <Footer />
    </Box>
  )
}

export default About
