import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Box from '@mui/material/Box';

import { useNavigate } from 'react-router-dom';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Marquee from "react-fast-marquee";
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from './Footer';
import CustomSlider from './CustomSlider';


const Home = () => {
  const shopDrop = [
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636696/sd1_phvdo6.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636696/sd2_lshjst.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636697/sd3_xruagn.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636700/sd4_gg8cvk.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636700/sd5_esv5iu.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636701/sd6_wv13o9.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636701/sd7_zd2ift.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636705/sd8_qtnmbg.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636706/sd9_wuymay.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636709/sd10_zhmpxy.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636709/sd11_yszrdr.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636710/sd12_iqqv2o.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636711/sd13_tmrecv.avif" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636714/sd14_jjln9p.avif" },

  ];

  const brandSpotlight = [
    { name: "MIN. 30% + 20% OFF*", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636575/bs1_mapnia.avif" },
    { name: "30% - 60% OFF", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636576/bs2_bveuvh.avif" },
    { name: "MIN. 30% OFF", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636577/bs3_kai0tk.avif" },
    { name: "UP TO 40% OFF", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636578/bs4_fmbqbb.avif" },
    { name: "MIN. 30% OFF", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636578/bs5_ajztfw.avif" },
    { name: "MIN. 50% + 10% OFF*", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636579/bs6_jyeh50.avif" },
    { name: "UNDER ₹999", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636581/bs7_j8magi.avif" },
    { name: "UP TO 60% OFF", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636583/bs9_ltlua7.avif" },
    { name: "MIN. 40% OFF", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636583/bs8_sdfvkg.avif" },
  ]
  const navigate = useNavigate()

  const onPoint = [
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636644/op1_hd0dpw.avif", path: "/categories" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636644/op2_aimwbi.avif", path: "/categories" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636645/op3_toa3au.avif", path: "/categories" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636651/op4_jtpkgs.avif", path: "/categories" },
    { name: "", src: "https://res.cloudinary.com/dam89m7fe/image/upload/v1773636657/op5_mfgpdn.avif", path: "/categories" },
  ]
  // const [items, setItems] = useState(shopDrop);
  // const [items2, setItems2] = useState(brandSpotlight);
  // const [items3, setItems3] = useState(onPoint);
  const items = shopDrop;
  const items2 = brandSpotlight;
  const items3 = onPoint;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{ height: '500px', width: '100%', mt: 14 }} >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
       
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-navigation-size": "20px",
          "--swiper-navigation-color": "red", 

        }}

      >
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636585/c1_ppvtuq.webp" alt="Slide 1" style={{ width: '100%', objectFit: 'cover' }} onClick={() => navigate('/categories')} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636585/c2_fkspor.webp" alt="Slide 2" style={{ width: '100%', objectFit: 'cover' }} onClick={() => navigate('/categories')} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636586/c3_c41x7h.webp" alt="Slide 3" style={{ width: '100%', objectFit: 'cover' }} onClick={() => navigate('/categories')} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636588/c4_yah2vs.webp" alt="Slide 3" style={{ width: '100%', objectFit: 'cover' }} onClick={() => navigate('/categories')} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636590/c5_ufpwul.webp" alt="Slide 3" style={{ width: '100%', objectFit: 'cover' }} onClick={() => navigate('/categories')} />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636590/c6_yb8bk7.webp" alt="Slide 3" style={{ width: '100%', objectFit: 'cover' }} onClick={() => navigate('/categories')} />
        </SwiperSlide>

      </Swiper>
      <Box >
        <Typography variant={isDesktop ? 'h4' : 'h6'} sx={{ textAlign: 'center',  my:{md:4,xs:1}}}>Shop Drop</Typography>
        <Box sx={{ textAlign: 'center',display:{xs:'none',md:'block'} }}>
          {items.map((item) => (
            <img
              src={item.src}
              alt={item.name}
              height={'180px'}
              width={'160px'}
              style={{ margin: '10px' }}
              onClick={() => navigate('/categories')}
            />
          ))}
        </Box>
        <Box sx={{display:{md:'none'}}}>
         <CustomSlider items={shopDrop} settings={{}}/>

        </Box>
      </Box>
      <Box>
        <Typography variant={isDesktop ? 'h4' : 'h6'} sx={{ textAlign: 'center', my:{md:4,xs:1}}}>Bank Offers</Typography>
        <Box sx={{ mx: { lg: 8, sm: 2 } }}>
          <Marquee gradient={false} speed={100}>
            <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636573/b1_begxdo.avif" height={'80px'} alt='pic' />
            <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636573/b2_koubgg.avif" height={'80px'} alt='pic' />
            <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636573/b3_en6rtc.avif" height={'80px'} alt='pic'/>
            <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636573/b4_yz2eju.avif" height={'80px'} alt='pic'/>
            <img src="https://res.cloudinary.com/dam89m7fe/image/upload/v1773636573/b5_r2mmaj.avif" height={'80px'} alt='pic'/>
            {/* Add more images */}
          </Marquee>

        </Box>
      </Box>
      <Box >
        <Typography variant={isDesktop ? 'h4' : 'h6'} sx={{ textAlign: 'center', mt: 4 }}>Brand Spotlight</Typography>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {items2.map((item) => (
            <div>
              <img
                src={item.src}
                alt={item.name}
                height={'230px'}
                width={'230px'}
                style={{ marginTop: '30px', marginBottom: '10px' }}
                onClick={() => navigate('/categories')}
              />
              <Typography  sx={{ textAlign: 'center', typography:{xs:'body1',md:'h6'} }}>{item.name}</Typography>
            </div>
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography variant={isDesktop ? 'h4' : 'h6'} sx={{ textAlign: 'center',  my:{md:4,xs:1}}}>On Point: Westside</Typography>
        <Box sx={{ textAlign: 'center' }}>
          {items3.map((item) => (
            <img src={item.src} alt="" height={'200px'}
              onClick={() => navigate('/categories')} />
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;