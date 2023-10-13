import { useRef } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import Breakfast from "../HotelSite/Food/breakfast.jpg"
import Lunch from "../HotelSite/Food/lunch.jpg"
import Dinner from "../HotelSite/Food/dinner.jpg"
import Spoon from "../HotelSite/Menu/plate.png"
import Emblem from "../HotelSite/Menu/emblemGold.svg"
import Wine from "../HotelSite/Menu/wineGlass.svg"

import Bird from "../HotelSite/Menu/birds.svg"
import Coffee from "../HotelSite/Menu/coffee.svg"
import Peak from "../HotelSite/Menu/peaks.svg"

import PalmTree from "../HotelSite/Menu/palmTrees.svg"
import PalmTrees from "../HotelSite/Menu/palmTree.svg"
import Sun from "../HotelSite/Menu/sun.svg"
import CloudRight from "../HotelSite/Menu/cloudRightgold.svg"
import CloudLeft from "../HotelSite/Menu/cloudLeftgold.svg"
import Water from "../HotelSite/Menu/water.svg"
import Arrow from "../HotelSite/Menu/arrow.svg"
import ArrowGold from "../HotelSite/Menu/arrowDark.svg"
import ArrowGray from "../HotelSite/Menu/arrowGray.svg"

import BorderUpperRightWhite from "../HotelSite/Menu/border/borderUpperWhite.svg"
import BorderUpperLeftWhite from "../HotelSite/Menu/border/borderUpperLeftWhite.svg"
import BorderLowerRightWhite from "../HotelSite/Menu/border/borderLowerRightWhite.svg"
import BorderUpperGold from "../HotelSite/Menu/border/borderUpperGold.svg"
import BorderLowerWhite from "../HotelSite/Menu/border/borderLowerWhite.svg"
import BorderLowerGold from "../HotelSite/Menu/border/borderLowerGold.svg"
import BorderCenterWhite from "../HotelSite/Menu/border/borderCenterWhite.svg"

//Bubbles

//==SOLID==//
import BubblesSolidGroup from "../HotelSite/Menu/bubbles/solid/bubbleSolidGroup.svg"
import BubblesSolidSmall from "../HotelSite/Menu/bubbles/solid/bubbleSolidSmall.svg"
import BubblesSolidMedium from "../HotelSite/Menu/bubbles/solid/bubbleSolidMedium.svg"
import BubblesSolidLarge from "../HotelSite/Menu/bubbles/solid/bubbleSolidLarge.svg"
import BubblesSolidXL from "../HotelSite/Menu/bubbles/solid/bubbleSolidXL.svg"

//==PLAIN==//
import BubblesPlainGroup from "../HotelSite/Menu/bubbles/plain/bubblePlainGroup.svg"
import BubblesPlainDarkLarge from "../HotelSite/Menu/bubbles/plain/bubblePlainDarkLarge.svg"
import BubblesPlainDarkSmall from "../HotelSite/Menu/bubbles/plain/bubblePlainDarkSmall.svg"
import BubblesPlainLightMedium from "../HotelSite/Menu/bubbles/plain/bubblePlainLightMedium.svg"
import BubblesPlainSmallMedium from "../HotelSite/Menu/bubbles/plain/bubblePlainSmallMedium.svg"
import BubblesPlainWhiteMedium from "../HotelSite/Menu/bubbles/plain/bubblePlainWhiteMedium.svg"

//==CLEAR==//
import BubblesClearGroup from "../HotelSite/Menu/bubbles/clear/bubbleClearGroup.svg"
import BubblesClearLarge from "../HotelSite/Menu/bubbles/clear/bubbleClearLarge.svg"
import BubblesClearMedium from "../HotelSite/Menu/bubbles/clear/bubbleClearMedium.svg"
import BubblesClearSmallfrom from "../HotelSite/Menu/bubbles/clear/bubbleClearSmall.svg"

//==ORNAMENT==//
import OrnamentLowerLeft from "../HotelSite/Menu/ornament/ornamentLowerLeft.svg"
import OrnamentLowerRight from "../HotelSite/Menu/ornament/ornamentLowerRight.svg"
import OrnamentUpperLeft from "../HotelSite/Menu/ornament/ornamentUpperLeft.svg"
import OrnamentUpperRight from "../HotelSite/Menu/ornament/ornamentUpperRight.svg"
import OrnamentCenter from "../HotelSite/Menu/ornament/ornamentCenter.svg"
import OrnamentLine from "../HotelSite/Menu/ornament/ornamentLine.svg"

//==Sunset==//
import GrayCircle from "../HotelSite/Menu/sunset/darkCircle.svg"
import GraySand from "../HotelSite/Menu/sunset/darkSand.svg"
import SunSetTree from "../HotelSite/Menu/sunset/palmTreeGroup.svg"
import CircleFrame from "../HotelSite/Menu/sunset/circleFrameWide.svg"

export default function Dinning() {

  {/*--------------------------*/}  
  {/*       Image Sticky       */}
  {/*--------------------------*/}

  // const breakfastStart = 1;
  // const breakfastEnd = 2;
  // const lunchStart = 3.3;
  // const lunchEnd = 4.5;
  // const dinnerStart = 5.8;
  // const dinnerEnd = 7;

  const breakfastStart = 2;
  const breakfastEnd = 3;
  const lunchStart = 4.3;
  const lunchEnd = 5.5;
  const dinnerStart = 6.8;
  const dinnerEnd = 8;


  {/*--------------------------*/}  
  {/*       Offset Images      */}
  {/*--------------------------*/}

  // const breakfastImageOffset = 1;
  // const lunchImageOffset = 3;
  // const dinnerImageOffset = 5;
  const breakfastImageOffset = 2;
  const lunchImageOffset = 4;
  const dinnerImageOffset = 6;


  {/*--------------------------*/}  
  {/*      Offset MenuBar      */}
  {/*--------------------------*/}

  // const breakfastMenuBarOffset = 1.25;
  // const lunchMenuBarOffset = 3.55;
  // const dinnerMenuBarOffset = 6.05;
  const breakfastMenuBarOffset = 2.3;
  const lunchMenuBarOffset = 4.55;
  const dinnerMenuBarOffset = 7.05;

  {/*--------------------------*/}  
  {/*        Blur boxes        */}
  {/*--------------------------*/}
  // const firstBlurBox = 2.95;
  // const secondBlurBox = 2.8;
  // const thirdBlurBox = 5.15;
  // const fourthBlurBox = 5.0

  const firstBlurBox = 3.95;
  const secondBlurBox = 3.8;
  const thirdBlurBox = 6.15;
  const fourthBlurBox = 6.0

  {/*--------------------------*/}  
  {/*    Speed Blur boxes      */}
  {/*--------------------------*/}
  
  const slowBlurBoxSpeed = .9;
  const fastBlurBoxSpeed = 2.9;
  const ornamentSpeedPieces = .2;
  
  const parallax = useRef()

  return (

  <Parallax className="dinningPage parallax-dinningPage" pages={10} ref={parallax}>

    <ParallaxLayer
      offset={0.3}
      speed={-.5}
      horizontal={false }
        style={{
        backgroundImage:`url(${Sun})`,
        backgroundSize:'20%',
        backgroundPosition:'center',
        top:'-500px',
        color:'white',
        display:'flex',
        zIndex:'-100',
        justifyContent:'center',
        alignContent:'center'}}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={0.3}
      speed={0.3}
      horizontal={false }
        style={{
        backgroundImage:`url(${Bird})`,
        backgroundSize:'20%',
        backgroundPosition:'center',
        top:'-170px',
        left:'200px',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignContent:'center'}}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={0.5}
      speed={0.7}
      horizontal={false }
        style={{
        backgroundImage:`url(${CloudRight})`,
        backgroundSize:'30%',
        backgroundPosition:'center',
        top:'-170px',
        left:'500px',
        color:'white',
        display:'flex',
        zIndex:'-1',
        justifyContent:'center',
        alignContent:'center'}}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={0.3}
      speed={0.5}
      horizontal={false }
        style={{
        backgroundImage:`url(${CloudLeft})`,
        backgroundSize:'45%',
        backgroundPosition:'center',
        top:'-170px',
        left:'-580px',
        color:'white',
        display:'flex',
        zIndex:'-2',
        justifyContent:'center',
        alignContent:'center'}}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1}
      speed={1.8}
      horizontal={false }
        style={{
        backgroundImage:`url(${Water})`,
        backgroundSize:'100%',
        backgroundPosition:'center',
        top:'-1010px',
        left:'0px',
        color:'white',
        display:'flex',
        zIndex:'-3',
        justifyContent:'center',
        alignContent:'center'}}>
    </ParallaxLayer>

    <ParallaxLayer
      factor={1.75}
      offset={.9}
      speed={1.5}
        style={{ 
        backgroundImage:`url(${PalmTrees})`,
        backgroundSize:'contain',
        backgroundPosition:'center'}}>
    </ParallaxLayer>

    <ParallaxLayer
      factor={1}
      offset={1}
      speed={1.7}
        style={{ 
        backgroundSize:'contain',
        backgroundPosition:'center',
        position:'relative',
        top:'-730px'}}>
        <div class="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill-gold"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill-gold"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
        </div>
    </ParallaxLayer>

    <ParallaxLayer
      factor={0}
      offset={.5}
      speed={3}
        style={{ 
        backgroundSize:'contain',
        backgroundPosition:'center',
        position:'relative',
        top:'-1500px',
        left:'-350px'}}>
        <div class="tilt1">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>
    </ParallaxLayer>
    
  
  {/*---------------------------*/}
  {/*        Landing Page       */}
  {/*---------------------------*/}
  
    <ParallaxLayer
      factor={0}
      offset={.5}
      speed={3}
        style={{ 
        backgroundSize:'contain',
        backgroundPosition:'center',
        position:'relative',
        top:'-1150px',
        left:'600px'
        }}>
        <div id='test'>
          <p>Sea</p>
        </div>
    </ParallaxLayer>

    <ParallaxLayer
      factor={0}
      offset={.5}
      speed={-5}
        style={{ 
        backgroundSize:'contain',
        backgroundPosition:'center',
        position:'relative',
        top:'-500px',
        left:'350px'
        }}>
        <div class="tilt2">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>
    </ParallaxLayer>

    <ParallaxLayer
      factor={0}
      offset={.5}
      speed={-5}
        style={{ 
        backgroundSize:'contain',
        backgroundPosition:'center',
        position:'relative',
        top:'-950px',
        left:'900px'
        }}>
        <div id='test1'>
          <p>Hotel</p>
        </div>
    </ParallaxLayer>


  {/*---------------------------*/}
  {/*         Daily Menu        */}
  {/*---------------------------*/}

    <ParallaxLayer
      offset={1.4}
      factor={.4}
      speed={1.3}
      style={{
        display:'grid',
        placeItems:'center',
        color:'red',
        fontSize:'5rem',
        width:'100%',
        height:'15%',
        top:'-400px',
        margin:'0 auto auto auto',
        paddingBottom:'150px',
        zIndex:'-100',
        }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1.4}
      factor={.4}
      speed={1.3}
      style={{
        display:'grid',
        placeItems:'center',
        color:'aqua',
        fontSize:'5rem',
        width:'100%',
        height:'15%',
        top:'-400px',
        margin:'0 auto auto auto',
        paddingBottom:'150px',
        zIndex:'60',}}>
      <h2>Daily Menu</h2>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1}
      speed={3}
      style={{
        textAlign:'center',
        color:'red',
        fontSize:'7rem',
        width:'100%',
        height:'5%',
        top:'100px',
        zIndex:'-90',
        margin:'0 auto 0 auto',
        backgroundColor:'rgb(217 217 217/ 0.5)',
        backdropFilter:'blur(30px)',
        display:'grid',
        placeItems:'center'}}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1}
      speed={4}
      style={{
        textAlign:'center',
        color:'red',
        fontSize:'7rem',
        width:'100%',
        height:'3%',
        top:'200px',
        zIndex:'-80',
        margin:'0 auto 0 auto',
        backgroundColor:'rgb(217 217 217/ 0.5)',
        backdropFilter:'blur(15px)',
        display:'grid',
        placeItems:'center'}}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={1}
      speed={4.8}
      style={{
        textAlign:'center',
        color:'red',
        fontSize:'7rem',
        width:'100%',
        height:'3%',
        top:'150px',
        zIndex:'-70',
        margin:'0 auto 0 auto',
        backgroundColor:'rgb(217 217 217/ 0.5)',
        backdropFilter:'blur(2px)',
        display:'grid',
        placeItems:'center'}}>
    </ParallaxLayer>


  {/*---------------------------*/}
  {/*   Breakfast Menu exit     */}
  {/*---------------------------*/}

    <ParallaxLayer
      offset={1.9}
      speed={3}
      style={{
        textAlign:'center',
        color:'red',
        fontSize:'7rem',
        width:'100%',
        height:'15%',
        top:'300px',
        zIndex:'80',
        margin:'0 auto 0 auto',
        backgroundColor:'#5E5A58',
        backdropFilter:'blur(30px)',
        display:'grid',
        placeItems:'center'}}>

        <ParallaxLayer
          onClick={() => parallax.current.scrollTo(6.45)}
          style={{
            position:'relative',
            backgroundImage:`url(${Wine})`,
            backgroundSize:'30%',
            backgroundPosition:'bottom center',
            height:'100%',
          }}>
        </ParallaxLayer>

    </ParallaxLayer>


    {/* Breakfast Banner */}

    <ParallaxLayer
          speed={1.0}
          style={{
            position:'relative',
            background:'#5E5A58',
            height:'14%',
            top:'2000px',
            zIndex:'50',
            color:'red',
            fontSize:'10rem',
            display:'flex',
            justifyContent:'flex-end',
            flexDirection:'column',
            alignContent:'center',
            textAlign:'center',
            paddingBottom:'300px'
          }}>
          <p>Breakfast</p>
</ParallaxLayer>
           <ParallaxLayer
           offset={2.4}
           speed={.1}
            style={{
              backgroundImage:`url(${Arrow})`,
              top:'-60px',
              height:'2%',
              left:'35.8%',
              width:'1200px',
              zIndex:'10'
            }}>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.4}
            speed={.3}
            style={{
              backgroundImage:`url(${ArrowGold})`,
              top:'-20px',
              height:'2%',
              left:'35.8%',
              width:'1200px',
              zIndex:'30',
              scale:'2'
            }}>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.4 }
            speed={.5}
            style={{
              backgroundImage:`url(${ArrowGray})`,
              top:'-10px',
              height:'2%',
              left:'35.8%',
              width:'1200px',
              zIndex:'40',
              scale:'2.5'
            }}>
          </ParallaxLayer>

    


  {/*---------------------------*/}
  {/* Breakfast Ornament Banner */}
  {/*---------------------------*/}

    <ParallaxLayer
      offset={1.9}
      speed={3}
      style={{
        textAlign:'center',
        color:'red',
        fontSize:'7rem',
        width:'100%',
        height:'15%',
        top:'800px',
        zIndex:'60',
        margin:'0 auto 0 auto',
        backgroundColor:'rgb(217 217 217/ 0.5)',
        backdropFilter:'blur(30px)',
        // backgroundColor:'purple',
        display:'grid',
        placeItems:'center'}}>

        <ParallaxLayer
          style={{
            // background:'green',
            height:'1200px',
            width:'100%',
            top:'1300px',
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gridTemplateRows:'1fr 1fr 1fr',
            columnGap:'500px',
          }}
          >

  {/*-------------------------------*/}
  {/* Breakfast Ornament Banner Left*/}
  {/*-------------------------------*/}

          <ParallaxLayer
          speed={.3}
          style={{
            backgroundImage:`url(${OrnamentUpperLeft})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'1/1/2/2',
            height:'60%',
            margin:'auto',
            top:'700px'}
            }>
          </ParallaxLayer>

          <ParallaxLayer
          speed={.25}
          style={{
            backgroundImage:`url(${OrnamentLine})`,
            backgroundSize:'100% 300%',
            backgroundPosition:'center',
            gridArea:'2/1/3/2',
            height:'70%',
            margin:'auto 150px auto auto',
            top:'500px'}
            }>
          </ParallaxLayer>

          <ParallaxLayer
          speed={ornamentSpeedPieces}
          style={{
            backgroundImage:`url(${OrnamentLowerLeft})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'3/1/4/2',
            height:'60%',
            margin:'auto',
            top:'200px'}
            }>
          </ParallaxLayer>



  {/*--------------------------------*/}
  {/* Breakfast Ornament Banner Right*/}
  {/*--------------------------------*/}

          <ParallaxLayer
          speed={.3}
          style={{
            backgroundImage:`url(${OrnamentUpperRight})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'1/2/2/3',
            height:'60%',
            margin:'auto',
            top:'700px'}
            }>
          </ParallaxLayer>

          <ParallaxLayer
          speed={.25}
          style={{
            backgroundImage:`url(${OrnamentLine})`,
            backgroundSize:'100% 300%',
            backgroundPosition:'left',
            gridArea:'2/2/3/3',
            height:'70%',
            margin:'auto auto auto 150px',
            top:'500px'}
            }>
          </ParallaxLayer>

          <ParallaxLayer
          speed={ornamentSpeedPieces}
          style={{
            backgroundImage:`url(${OrnamentLowerRight})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'3/2/4/3',
            height:'60%',
            margin:'auto',
            top:'200px'}
            }>
          </ParallaxLayer>

        </ParallaxLayer>

  {/*---------------------------*/}
  {/*   Breakfast Banner Exit   */}
  {/*---------------------------*/}

        <ParallaxLayer
          speed={1}
          style={{
            background:'#CEA86A',
            height:'90%',
            top:'1500px',
          }}>
          
        </ParallaxLayer>

        <ParallaxLayer
          speed={2.1}
          style={{
            background:'rgb(217 217 217 / 0.9)',
            // opacity:'.5',
            height:'60%',
            top:'5800px',
          }}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={3}
          style={{
            background:'rgb(206 168 106 / 0.5)',
            backdropFilter:'blur(10px)',
            // opacity:'.3',
            height:'50%',
            top:'7450px',
          }}>
        </ParallaxLayer>
    </ParallaxLayer>


  {/*---------------------------*/}
  {/*        Click Scroll       */}
  {/*---------------------------*/}

    <ParallaxLayer
      offset={1.97}
      speed={5}
      style={{
        textAlign:'center',
        color:'yellow',
        fontSize:'7rem',
        width:'100%',
        height:'14%',
        top:'700px',
        zIndex:'80',
        margin:'0 auto 0 auto',
        backgroundColor:'#454544',
        backdropFilter:'blur(15px)',
        display:'grid',
        placeItems:'center'}}>

        <ParallaxLayer
          onClick={() => parallax.current.scrollTo(3.75)}
          style={{  
            backgroundImage:`url(${Emblem})`,
            backgroundSize:'20%',
            backgroundPosition:'bottom center',
            height:'95%',
          }}>
        </ParallaxLayer>

    </ParallaxLayer>

    <ParallaxLayer
      offset={1.95}
      speed={3.5}
      style={{
        textAlign:'center',
        color:'white',
        fontSize:'7rem',
        width:'100%',
        height:'6%',
        top:'400px',
        zIndex:'90',
        margin:'0 auto 0 auto',
        backgroundColor:'#3E3E3E',
        backdropFilter:'blur(20px)',
        display:'grid',
        placeItems:'center'}}>
        <ParallaxLayer
          onClick={() => parallax.current.scrollTo(1.78)}
          style={{
            backgroundImage:`url(${Coffee})`,
            backgroundSize:'20%',
            backgroundPosition:'center',
            height:'100%',
          }}>
        </ParallaxLayer>
    </ParallaxLayer>


  {/*---------------------------*/}
  {/*        Lunch Banner       */}
  {/*---------------------------*/}

    <ParallaxLayer
          offset={firstBlurBox}
          // offset={3.97}
          speed={0.9}
          style={{
            position:'relative',
            background:'#5E5A58',
            background:'rgb(62 62 62 /0.5)',
            height:'5%',
            top:'-1700px',
            zIndex:'50',
            color:'white',
            fontSize:'10rem',
            textAlign:'center',
            paddingBottom:'0px',
            paddingTop:'175px',
          }}>
          <p>Lunch</p>
        
    </ParallaxLayer>
    
           <ParallaxLayer
            offset={4.7}
            speed={.1}
             style={{
               backgroundImage:`url(${Arrow})`,
               top:'-100px',
               height:'2%',
               left:'2%',
               width:'1200px',
               zIndex:'7'
             }}>
            </ParallaxLayer>

          <ParallaxLayer
            offset={4.7}
            speed={.3}
            style={{
              backgroundImage:`url(${ArrowGold})`,
              top:'-50px',
              height:'2%',
              left:'2%',
              width:'1200px',
              zIndex:'8',
              scale:'2'
            }}>
          </ParallaxLayer>

          <ParallaxLayer
            offset={4.7}
            speed={1.3}
            style={{
              backgroundImage:`url(${ArrowGray})`,
              top:'250px',
              height:'2%',
              left:'2%',
              width:'1200px',
              zIndex:'9',
              scale:'2.5'
            }}>
          </ParallaxLayer>



  {/*---------------------------*/}
  {/*    Lunch Ornament Banner  */}
  {/*---------------------------*/}

    <ParallaxLayer
      offset={firstBlurBox}
      speed={3}
      style={{
        textAlign:'center',
        // background:'green',
        fontSize:'7rem',
        width:'100%',
        height:'15%',
        top:'2280px',
        zIndex:'60',
        margin:'0 auto 0 auto',
        display:'grid',
        placeItems:'center'}}>


        <ParallaxLayer
          style={{
            height:'1200px',
            width:'100%',
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gridTemplateRows:'1fr 1fr 1fr',
            columnGap:'500px',
          
          }}
          >

  {/*---------------------------*/}
  {/*    Lunch Ornament Left    */}
  {/*---------------------------*/}

          <ParallaxLayer
          speed={.3}
          style={{
            backgroundImage:`url(${OrnamentUpperLeft})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'1/1/2/2',
            height:'60%',
            margin:'auto',
            top:'950px'
            }
            }>
          </ParallaxLayer>


          <ParallaxLayer
          speed={ornamentSpeedPieces}
          style={{
            backgroundImage:`url(${OrnamentLowerLeft})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'3/1/4/2',
            height:'60%',
            margin:'auto',
            top:'0px'}
            }>
          </ParallaxLayer>


  {/*---------------------------*/}
  {/*   Lunch Ornament Right    */}
  {/*---------------------------*/}

          <ParallaxLayer
          speed={.3}
          style={{
            backgroundImage:`url(${OrnamentUpperRight})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'1/2/2/3',
            height:'60%',
            margin:'auto',
            top:'950px'}
            }>
          </ParallaxLayer>

          <ParallaxLayer
          speed={ornamentSpeedPieces}
          style={{
            backgroundImage:`url(${OrnamentLowerRight})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'3/2/4/3',
            height:'60%',
            margin:'auto',
            top:'0px'}
            }>
          </ParallaxLayer>

        </ParallaxLayer>
      </ParallaxLayer>



  {/*---------------------------*/}
  {/*       Bubble Slides       */}
  {/*---------------------------*/}


  <ParallaxLayer
      offset={1.4}
      speed={.4}
      style={{
        height:'20%',
        width:'100%',
        zIndex:'50',
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        gridTemplateRows:'1fr 1fr 1fr'}}
      >

        <ParallaxLayer
          speed={.4}
          style={{
          backgroundImage:`url(${BubblesClearGroup})`,
          backgroundSize:'contain',
          backgroundPosition:'center',
          gridArea:'1/1/2/2',
          top:'400px',
          left:'-200px',
          height:'100%',
          width:'100%',}}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={.8}
          style={{
          backgroundImage:`url(${BubblesClearGroup})`,
          backgroundSize:'contain',
          backgroundPosition:'center',
          gridArea:'1/2/2/3',
          top:'600px',
          height:'100%',
          width:'100%',
          left:'200px',}}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={.8}
          style={{
          backgroundImage:`url(${BubblesPlainGroup})`,
          backgroundSize:'contain',
          backgroundPosition:'center',
          gridArea:'2/2/3/3',
          top:'300px',
          height:'100%',
          width:'100%',
          }}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1}
          style={{
          backgroundImage:`url(${BubblesSolidGroup})`,
          backgroundSize:'80%',
          backgroundPosition:'center',
          gridArea:'2/1/3/2',
          left:'200px',
          top:'500px',
          height:'100%',
          width:'100%',}}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1.4}
          style={{
          backgroundImage:`url(${BubblesPlainLightMedium})`,
          backgroundSize:'10%',
          backgroundPosition:'center',
          gridArea:'2/1/3/2',
          left:'300px',
          top:'600px',
          height:'100%',
          width:'100%',}}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1.8}
          style={{
          backgroundImage:`url(${BubblesPlainWhiteMedium})`,
          backgroundSize:'10%',
          backgroundPosition:'center',
          gridArea:'2/1/3/2',
          left:'0px ',
          top:'900px',
          height:'100%',
          width:'100%',}}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1.5}
          style={{
          backgroundImage:`url(${BubblesSolidMedium})`,
          backgroundSize:'10%',
          backgroundPosition:'center',
          gridArea:'2/1/3/2',
          left:'-200px ',
          top:'800px',
          height:'100%',
          width:'100%',}}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1.6}
          style={{
          backgroundImage:`url(${BubblesPlainWhiteMedium})`,
          backgroundSize:'10%',
          backgroundPosition:'center',
          gridArea:'2/2/3/3',
          left:'-400px ',
          top:'900px',
          height:'100%',
          width:'100%',}}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1.6}
          style={{
          backgroundImage:`url(${BubblesPlainDarkSmall})`,
          backgroundSize:'5%',
          backgroundPosition:'center',
          gridArea:'2/2/3/3',
          left:'200px',
          top:'600px',
       }}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1.45}
          style={{
          backgroundImage:`url(${BubblesClearLarge})`,
          backgroundSize:'15%',
          backgroundPosition:'center',
          gridArea:'2/2/3/3',
          left:'-200px',
          top:'400px',
           }}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1.7}
          style={{
          backgroundImage:`url(${BubblesClearLarge})`,
          backgroundSize:'8%',
          backgroundPosition:'center',
          gridArea:'2/2/3/3',
          left:'-500px',
          top:'600px',
           }}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1.3}
          style={{
          backgroundImage:`url(${BubblesClearLarge})`,
          backgroundSize:'6%',
          backgroundPosition:'center',
          gridArea:'2/2/3/3',
          left:'-750px',
          top:'400px',
           }}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1.3}
          style={{
          backgroundImage:`url(${BubblesClearLarge})`,
          backgroundSize:'12%',
          backgroundPosition:'center',
          gridArea:'2/2/3/3',
          left:'-750px',
          top:'100px',
           }}>
        </ParallaxLayer>
    </ParallaxLayer>
  


  {/*---------------------------*/}
  {/*   Breakfast Slide Image   */}
  {/*---------------------------*/}

  <ParallaxLayer
      speed={.4}
      style={{
        backgroundImage:`url(${BorderCenterWhite})`,
        backgroundSize:'contain',
        backgroundPosition:'center',
        top:'1000px',
        padding:'10px 0 0 30px',
        left:'70%',
        height:'550px',
        width:'500px',
        zIndex:'-5'}}
      offset={2}>

        <ParallaxLayer
          speed={.3}
          style={{
          position:'relative',
          backgroundImage:`url(${Coffee})`,
          backgroundSize:'contain',
          top:'895px',
          left:'140px',
          height:'300px',
          width:'300px',}}>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={.4}
          style={{
            top:'-1610px',
            backgroundImage:`url(${BorderUpperGold})`,
            backgroundPosition:'top center',
            height:'200px',
            width:'400px',
            left:'249.5px',
            }}>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.1}
          speed={.2}
          style={{
            top:'-1590px',
            backgroundImage:`url(${BorderLowerRightWhite})`,
            backgroundPosition:'bottom center',
            height:'200px',
            width:'400px',
            left:'249px',
            }}>
        </ParallaxLayer>
    </ParallaxLayer>

  {/*---------------------------*/}
  {/*     Lunch Slide Image     */}
  {/*---------------------------*/}

  
  <ParallaxLayer
      speed={.4}
      style={{
        backgroundImage:`url(${BorderCenterWhite})`,
        backgroundSize:'contain',
        backgroundPosition:'center',
        top:'1000px',
        padding:'10px 0 0 30px',
        left:'4%',
        height:'550px',
        width:'500px',
        zIndex:'-5'}}
      offset={lunchStart}>

        <ParallaxLayer
          speed={.3}
          style={{
          position:'relative',
          backgroundImage:`url(${Emblem})`,
          backgroundSize:'contain',
          top:'1525px',
          left:'50px',
          height:'300px',
          width:'300px',}}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={.4}
          style={{
            top:'1900px',
            backgroundImage:`url(${BorderUpperLeftWhite})`,
            backgroundPosition:'top center',
            height:'200px',
            width:'400px',
            left:'-165px',
            }}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={.2}
          style={{
            top:'1275px',
            backgroundImage:`url(${BorderLowerGold})`,
            backgroundPosition:'bottom center',
            height:'200px',
            width:'400px',
            left:'-165px',
            }}>
        </ParallaxLayer>
    </ParallaxLayer>

  {/*---------------------------*/}
  {/*    Dinner Slide Image     */}
  {/*---------------------------*/}

  
  <ParallaxLayer
      speed={.4}
      style={{
        backgroundImage:`url(${BorderCenterWhite})`,
        backgroundSize:'contain',
        backgroundPosition:'center',
        top:'1200px',
        padding:'10px 0 0 30px',
        left:'70%',
        height:'550px',
        width:'500px',
        zIndex:'-5'}}
      offset={dinnerStart}>

        <ParallaxLayer
          speed={.3}
          style={{
          position:'relative',
          backgroundImage:`url(${Emblem})`,
          backgroundSize:'contain',
          top:'2250px',
          left:'150px',
          height:'300px',
          width:'300px',}}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={.4}
          style={{
            top:'2885px',
            backgroundImage:`url(${BorderUpperGold})`,
            backgroundPosition:'top center',
            height:'200px',
            width:'400px',
            left:'249.5px',
            }}>
        </ParallaxLayer>

        <ParallaxLayer
          speed={.2}
          style={{
            top:'1725px',
            backgroundImage:`url(${BorderLowerRightWhite})`,
            backgroundPosition:'bottom center',
            height:'200px',
            width:'400px',
            left:'249.5px',
            }}>
        </ParallaxLayer>
    </ParallaxLayer>



  {/*--------------------------*/}  
  {/*   Breakfast Menu Image   */}
  {/*--------------------------*/}

    <ParallaxLayer
      offset={breakfastImageOffset}
      sticky={{
        start:`${breakfastStart}`,
        end:`${breakfastEnd}`}}
        style={{
        position:'relative',
        backgroundImage:`url(${Breakfast})`,
        backgroundSize:'contain',
        backgroundPosition:'left',
        marginLeft:'23.5%',
        display:'grid',
        zIndex:'-1',
        gridTemplateRows:'400px auto 400px',
        gridTemplateColumns:'638px'}}>
        <div id="hotelName">
          <h1>Sea Hotel</h1>
          <h2>Breakfast</h2>
        </div>
        <div className="schedule">
          <h3>Breakfast starts at</h3>
          <h2>7:00 AM to 9:00 AM</h2>
        </div>
    </ParallaxLayer>
  


  {/*--------------------------*/}  
  {/*    Breakfast Menu Bar    */}
  {/*--------------------------*/}

    <ParallaxLayer
      offset={breakfastMenuBarOffset}
      factor={1.5}
      speed={0}
      style={{
        width:'54%',
        display:'grid',
        margin:'0 auto 0 23.8%',
        gridTemplateColumns:'633px 270px 1fr',
        gridTemplateRows:'50px 300px 50px 1fr 50px 1fr',
        padding:'10px 0px 0px 0px',
        rowGap:'30px',
        }}>

        <div className='noColorMenuBar'></div>

  {/*--------------------------*/}  
  {/*    Breakfast Starter     */}
  {/*--------------------------*/}

      <div className='starter'>
        <h1>Starter</h1>
      </div>
 
  {/*--------------------------*/}  
  {/* Breakfast Starter Items  */}
  {/*--------------------------*/}

      <div className='starterItems'>
        <div>
        <h2>Pandesal</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>French Toast</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
      </div>

  {/*--------------------------*/}  
  {/* Breakfast Starter Price  */}
  {/*--------------------------*/}  

      <div className='starterPrice'>
        <div>
          <p>P 5.00</p>
        </div>
        <div>
          <p>P 10.00</p>
        </div>
        <div>
          <p>P 20.00</p>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*       Breakfast Main     */}
  {/*--------------------------*/}

      <div className='main'>
        <h1>Main</h1>
      </div>
  
  {/*--------------------------*/}  
  {/*   Breakfast Main Items   */}
  {/*--------------------------*/}

      <div className='mainItems'>
        <div>
        <h2>Pandesal</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>French Toast</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash 1</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash 2</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*   Breakfast Main Price   */}
  {/*--------------------------*/}

      <div className='mainPrice'>
        <div>
          <p>P 5.00</p>
        </div>
        <div>
          <p>P 10.00</p>
        </div>
        <div>
          <p>P 20.00</p>
        </div>
        <div>
          <p>P 30.00</p>
        </div>
        <div>
          <p>P 40.00</p>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*    Breakfast Beverages   */}
  {/*--------------------------*/}

      <div className='beverages'>
        <h1>Beverages</h1>
      </div>

  {/*---------------------------*/}  
  {/* Breakfast Beverages Items */}
  {/*---------------------------*/}

      <div className='beveragesItems'>
        <div>
        <h2>Coffee</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Cappucino</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Americano</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Mocha</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Macchiato</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
      </div>

  {/*---------------------------*/}  
  {/* Breakfast Beverages Price */}
  {/*---------------------------*/}

      <div className='beveragesPrice'>
        <div>
          <p>P 5.00</p>
        </div>
        <div>
          <p>P 10.00</p>
        </div>
        <div>
          <p>P 20.00</p>
        </div>
        <div>
          <p>P 30.00</p>
        </div>
        <div>
          <p>P 40.00</p>
        </div>
      </div>
    </ParallaxLayer>
  
  {/*---------------------------*/}
  {/*       First Blur Box      */}
  {/*---------------------------*/}

  {/*---------------------------*/}
  {/*    Lunch Shade Blur Box   */}
  {/*---------------------------*/}

  <ParallaxLayer
      offset={3.97}
      speed={slowBlurBoxSpeed}
      style={{
        display:'grid',
        placeItems:'center',
        // border:'5px solid red',
        color:'red',
        fontSize:'5rem',
        height:'15%',
        zIndex:'5',
        // margin:'0 auto 0 23.5%',
        backgroundColor:'rgb(217 217 217/ 0.5)',
        backdropFilter:'blur(10px)',
        // background:'teal',
        }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={3.97}
      speed={1.3}
      style={{
        display:'grid',
        placeItems:'center',
        color:'red',
        fontSize:'5rem',
        height:'15%',
        zIndex:'16',
        top:'550px',
        // margin:'0 auto 0 23.5%',
        backgroundColor:'rgb(217 217 217/ 0.8)',
        backdropFilter:'blur(10px)'
        // background:'rgb(94, 90, 88)',
        // background:'white'
        }}>

    </ParallaxLayer>

  {/*---------------------------*/}
  {/*  Lunch Second Blur Box    */}
  {/*---------------------------*/}

    <ParallaxLayer
      // offset={secondBlurBox}
      offset={4}
      // speed={fastBlurBoxSpeed}
      speed={3}
      style={{
        textAlign:'center',
        color:'red',
        fontSize:'7rem',
        height:'15%',
        top:'-100px',
        backgroundColor:'rgb(94 90 88 / 1)',
        backdropFilter:'blur(5px)',
        // background:'orange',
        // opacity:'0.3',
        zIndex:'10',
        display:'grid',
        placeItems:'center'}}>
    </ParallaxLayer>

  {/*---------------------------*/}  
  {/*      Lunch Menu Image     */}
  {/*---------------------------*/}

    <ParallaxLayer
      offset={lunchImageOffset}
      sticky={{
        start:`${lunchStart}`,
        end:`${lunchEnd}`}}
        style={{
        backgroundImage:`url(${Lunch})`,
        backgroundSize:'contain',
        backgroundPosition:'left',
        marginLeft:'43.5%',
        display:'grid',
        zIndex:'-10',
        gridTemplateRows:'400px auto 400px',
        gridTemplateColumns:'638px'}}>
        <div id="hotelName">
          <h1>Sea Hotel</h1>
          <h2>Lunch</h2>
        </div>
        <div className="schedule">
          <h3>Lunch starts at</h3>
          <h2>11:00 AM to 2:00 PM</h2>
        </div>
    </ParallaxLayer>

    

  {/*--------------------------*/}  
  {/*      Lunch Menu Bar      */}
  {/*--------------------------*/}

    <ParallaxLayer
      offset={lunchMenuBarOffset}
      factor={1.5}
      speed={0}
      style={{
        width:'54%',
        height:'17%',
        display:'grid',
        margin:'0 auto 0 23.5%',
        gridTemplateColumns:'0fr 280px 75px 560px',
        gridTemplateRows:'50px 300px 50px 1fr 50px 1fr',
        // border:'5px solid orange',
        // backgroundColor:'#454544',
        padding:'10px 0px 0px 20px',
        rowGap:'30px'}}>

      <div className='noColorMenuBarLunch'></div>
        
  {/*--------------------------*/}  
  {/*       Lunch Starter      */}
  {/*--------------------------*/}

      <div className='starter'>
        <h1>Starter</h1>
      </div>
 
  {/*--------------------------*/}  
  {/*   Lunch Starter Items    */}
  {/*--------------------------*/}

      <div className='starterItems'>
        <div>
        <h2>Pandesal</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>French Toast</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*   Lunch Starter Price    */}
  {/*--------------------------*/}  

      <div className='starterPrice'>
        <div>
          <p>P 5.00</p>
        </div>
        <div>
          <p>P 10.00</p>
        </div>
        <div>
          <p>P 20.00</p>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*        Lunch Main        */}
  {/*--------------------------*/}

      <div className='main'>
        <h1>Main</h1>
      </div>
  
  {/*--------------------------*/}  
  {/*     Lunch Main Items     */}
  {/*--------------------------*/}

      <div className='mainItems'>
        <div>
        <h2>Pandesal</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>French Toast</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash 1</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash 2</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*    Lunch Main Price      */}
  {/*--------------------------*/}

      <div className='mainPrice'>
        <div>
          <p>P 5.00</p>
        </div>
        <div>
          <p>P 10.00</p>
        </div>
        <div>
          <p>P 20.00</p>
        </div>
        <div>
          <p>P 30.00</p>
        </div>
        <div>
          <p>P 40.00</p>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*      Lunch Beverages     */}
  {/*--------------------------*/}

      <div className='beverages'>
        <h1>Beverages</h1>
      </div>

  {/*---------------------------*/}  
  {/*   Lunch Beverages Items   */}
  {/*---------------------------*/}

      <div className='beveragesItems'>
        <div>
        <h2>Coffee</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Cappucino</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Americano</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Mocha</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Macchiato</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
      </div>

  {/*---------------------------*/}  
  {/*   Lunch Beverages Price   */}
  {/*---------------------------*/}

      <div className='beveragesPrice'>
        <div>
          <p>P 5.00</p>
        </div>
        <div>
          <p>P 10.00</p>
        </div>
        <div>
          <p>P 20.00</p>
        </div>
        <div>
          <p>P 30.00</p>
        </div>
        <div>
          <p>P 40.00</p>
        </div>
      </div>
    </ParallaxLayer>


  {/*---------------------------*/}
  {/*       Dinner Blur Box     */}
  {/*---------------------------*/}

  {/* <ParallaxLayer
      offset={thirdBlurBox}
      speed={slowBlurBoxSpeed}
      style={{
        display:'grid',
        placeItems:'center',
        color:'red',
        fontSize:'5rem',
        height:'22%',
        backgroundColor:'rgb(217 217 217/ 0.5)',
        backdropFilter:'blur(10px)'}}>
      <h2>Dinner Menu</h2>
    </ParallaxLayer> */}

  {/*---------------------------*/}
  {/*      Dinner Blur Box      */}
  {/*---------------------------*/}

    {/* <ParallaxLayer
      offset={fourthBlurBox}
      speed={fastBlurBoxSpeed}
      style={{
        textAlign:'center',
        color:'red',
        fontSize:'7rem',
        height:'15%',
        backgroundColor:'rgb(217 217 217/ 0.5)',
        backdropFilter:'blur(2px)',
        display:'grid',
        placeItems:'center'}}>
    </ParallaxLayer> */}


  {/*---------------------------*/}
  {/*        Dinner Banner      */}
  {/*---------------------------*/}

  <ParallaxLayer
          offset={5}
          speed={0.9}
          style={{
            position:'relative',
            background:'#5E5A58',
            background:'rgb(62 62 62 /0.9)',
            height:'5%',
            top:'50px',
            zIndex:'50',
            color:'white',
            fontSize:'10rem',
            textAlign:'center',
            paddingBottom:'0px',
            paddingTop:'165px',
          }}>
          <p>Dinner</p>
  </ParallaxLayer>

           <ParallaxLayer
            offset={7}
            speed={.1}
             style={{
               backgroundImage:`url(${Arrow})`,
               top:'60px',
               height:'2%',
               left:'35.8%',
               width:'1200px',
               zIndex:'7'
             }}>
            </ParallaxLayer>

          <ParallaxLayer
            offset={7}
            speed={.5}
            style={{
              backgroundImage:`url(${ArrowGold})`,
              top:'20px',
              height:'2%',
              left:'35.8%',
              width:'1200px',
              zIndex:'8',
              scale:'2'
            }}>
          </ParallaxLayer>

          <ParallaxLayer
            offset={7}
            speed={.9}
            style={{
              backgroundImage:`url(${ArrowGray})`,
              top:'-55px',
              height:'2%',
              left:'35.8%',
              width:'1200px',
              zIndex:'9',
              scale:'2.5'
            }}>
          </ParallaxLayer>
    

    <ParallaxLayer
      offset={6.9}
      speed={2.6}
      style={{
        textAlign:'center',
        // background:'green',
        fontSize:'7rem',
        width:'100%',
        height:'15%',
        top:'1700px',
        zIndex:'60',
        margin:'0 auto 0 auto',
        display:'grid',
        placeItems:'center'}}>


        <ParallaxLayer
          style={{
            height:'1200px',
            width:'100%',
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gridTemplateRows:'1fr 1fr 1fr',
            columnGap:'500px',
          
          }}
          >

  {/*---------------------------*/}
  {/*    Dinner Ornament Left    */}
  {/*---------------------------*/}

          <ParallaxLayer
          speed={.3}
          style={{
            backgroundImage:`url(${OrnamentUpperLeft})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'1/1/2/2',
            height:'60%',
            margin:'auto',
            top:'950px'}
            }>
          </ParallaxLayer>


          <ParallaxLayer
          speed={ornamentSpeedPieces}
          style={{
            backgroundImage:`url(${OrnamentLowerLeft})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'3/1/4/2',
            height:'60%',
            margin:'auto',
            top:'0px'}
            }>
          </ParallaxLayer>


  {/*---------------------------*/}
  {/*   Dinner Ornament Right    */}
  {/*---------------------------*/}

          <ParallaxLayer
          speed={.3}
          style={{
            backgroundImage:`url(${OrnamentUpperRight})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'1/2/2/3',
            height:'60%',
            margin:'auto',
            top:'950px'}
            }>
          </ParallaxLayer>

          <ParallaxLayer
          speed={ornamentSpeedPieces}
          style={{
            backgroundImage:`url(${OrnamentLowerRight})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            gridArea:'3/2/4/3',
            height:'60%',
            margin:'auto',
            top:'0px'}
            }>
          </ParallaxLayer>

        </ParallaxLayer>
      </ParallaxLayer>






    <ParallaxLayer
          offset={4.9}
          speed={1.5}
          style={{
            position:'relative',
            background:'blue',
            top:'1550px',
            background:'rgb(217 217 217/0.5)',
            height:'11%',
            zIndex:'40',
            color:'white',
            fontSize:'10rem',
            textAlign:'center',
            paddingBottom:'0px',
            paddingTop:'175px',
            // opacity:'.3'
          }}>
          {/* <p>First Box</p> */}

    </ParallaxLayer>

    <ParallaxLayer
          offset={4.7}
          speed={1.55}
          style={{
            position:'relative',
            background:'orange',
            // top:'1200px',
            background:'rgb(69 69 68 / .9)',
            backdropFilter:'blur(5px)',
            height:'18.5%',
            zIndex:'30',
            color:'white',
            fontSize:'10rem',
            textAlign:'center',
            paddingBottom:'0px',
            paddingTop:'175px',
            // opacity:'.8'
          }}>
          {/* <p>Second Box</p> */}
    </ParallaxLayer>

    <ParallaxLayer
          offset={4.7}
          speed={2}
          style={{
            position:'relative',
            // background:'black',
            top:'-100px',
            background:'rgb(94 90 88 / 1)',
            height:'17%',
            zIndex:'20',
            color:'white',
            fontSize:'10rem',
            textAlign:'center',
            paddingBottom:'0px',
            paddingTop:'175px',
            // opacity:'.8'
          }}>
          {/* <p>Third Box</p> */}
    </ParallaxLayer>


  {/*---------------------------*/}  
  {/*     Dinner Menu Image     */}
  {/*---------------------------*/}

    <ParallaxLayer
      offset={dinnerImageOffset}
      sticky={{
        start:`${dinnerStart}`,
        end:`${dinnerEnd}`}}
        style={{
        backgroundImage:`url(${Dinner})`,
        backgroundSize:'contain',
        backgroundPosition:'left',
        marginLeft:'23.5%',
        display:'grid',
        zIndex:'-10',
        gridTemplateRows:'400px auto 400px',
        gridTemplateColumns:'638px'}}>
        <div id="hotelName">
          <h1>Sea Hotel</h1>
          <h2>Dinner</h2>
        </div>
        <div className="schedule">
          <h3>Dinner starts at</h3>
          <h2>6:00 PM to 9:00 PM</h2>
        </div>
    </ParallaxLayer>

  {/*--------------------------*/}  
  {/*     Dinner Menu Bar      */}
  {/*--------------------------*/}

  <ParallaxLayer
      offset={dinnerMenuBarOffset}
      factor={1.5}
      speed={0}
      style={{
        width:'55%',
        height:'17%',
        display:'grid',
        margin:'0 auto 0 22.9%',
        gridTemplateColumns:'633px 270px 1fr',
        gridTemplateRows:'50px 300px 50px 1fr 50px 1fr',
        // border:'5px solid orange',
        // backgroundColor:'#454544',
        padding:'10px 0px 0px 20px',
        rowGap:'30px',}}>

      <div className='noColorMenuBar'></div>
    

  {/*--------------------------*/}  
  {/*    Dinner Starter     */}
  {/*--------------------------*/}

  <div className='starter'>
        <h1>Starter</h1>
      </div>
 
  {/*--------------------------*/}  
  {/* Dinner Starter Items  */}
  {/*--------------------------*/}

      <div className='starterItems'>
        <div>
        <h2>Pandesal</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>French Toast</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*   Dinner Starter Price   */}
  {/*--------------------------*/}  

      <div className='starterPrice'>
        <div>
          <p>P 5.00</p>
        </div>
        <div>
          <p>P 10.00</p>
        </div>
        <div>
          <p>P 20.00</p>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*       Dinner Main     */}
  {/*--------------------------*/}

      <div className='main'>
        <h1>Main</h1>
      </div>
  
  {/*--------------------------*/}  
  {/*   Dinner Main Items   */}
  {/*--------------------------*/}

      <div className='mainItems'>
        <div>
        <h2>Pandesal</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>French Toast</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash 1</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Hash 2</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*   Dinner Main Price   */}
  {/*--------------------------*/}

      <div className='mainPrice'>
        <div>
          <p>P 5.00</p>
        </div>
        <div>
          <p>P 10.00</p>
        </div>
        <div>
          <p>P 20.00</p>
        </div>
        <div>
          <p>P 30.00</p>
        </div>
        <div>
          <p>P 40.00</p>
        </div>
      </div>

  {/*--------------------------*/}  
  {/*    Dinner Beverages   */}
  {/*--------------------------*/}

      <div className='beverages'>
        <h1>Beverages</h1>
      </div>

  {/*---------------------------*/}  
  {/* Dinner Beverages Items */}
  {/*---------------------------*/}

      <div className='beveragesItems'>
        <div>
        <h2>Coffee</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Cappucino</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Americano</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Mocha</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
        <div>
        <h2>Macchiato</h2>
        <br></br>
        <h5>Description details</h5>
        </div>
      </div>

  {/*---------------------------*/}  
  {/*   Dinner Beverages Price  */}
  {/*---------------------------*/}

      <div className='beveragesPrice'>
        <div>
          <p>P 5.00</p>
        </div>
        <div>
          <p>P 10.00</p>
        </div>
        <div>
          <p>P 20.00</p>
        </div>
        <div>
          <p>P 30.00</p>
        </div>
        <div>
          <p>P 40.00</p>
        </div>
      </div>
    </ParallaxLayer>
    
  {/*---------------------------*/}
  {/*        Sunset Banner      */}
  {/*---------------------------*/}

    <ParallaxLayer
      offset={9}
      speed={1.5}
      style={{
        top:'-200px',
        background:'#D9D9D9',
        height:'1200px',
        width:'100%',
      }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={9}
      speed={1.5}
      style={{
        top:'-200px',
        // background:'gray',
        height:'1200px',
        width:'100%',
        zIndex:'100',
        display:'grid',
        margin:'0 auto 0 auto',
        gridTemplateColumns:'1fr 100px 1fr',
        gridTemplateRows:'500px 100px 500px',
        columnGap:'100px',
        rowGap:'50px'
      }}>
      </ParallaxLayer>

  {/*---------------------------*/}
  {/*    Closing Ornament Left  */}
  {/*---------------------------*/}

          <ParallaxLayer
          offset={9}
          speed={1.5}
          style={{
            backgroundImage:`url(${OrnamentUpperLeft})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            height:'5%',
            width:'600px',
            zIndex:'200'
            }}>
          </ParallaxLayer>

          <ParallaxLayer
          offset={9}
          speed={1.5}
          style={{
            backgroundImage:`url(${OrnamentLowerLeft})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            height:'5%',
            width:'600px',
            zIndex:'200',
            top:'500px',
            }}>
          </ParallaxLayer>


  {/*---------------------------*/}
  {/*   Closing Ornament Right  */}
  {/*---------------------------*/}

          <ParallaxLayer
          offset={9}
          speed={1.5}
          style={{
            backgroundImage:`url(${OrnamentUpperRight})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            
            height:'5%',
            width:'600px',
            zIndex:'200',
            left:'auto',
            right:'0'
          }}>
          </ParallaxLayer>

          <ParallaxLayer
          offset={9}
          speed={1.5}
          style={{
            backgroundImage:`url(${OrnamentLowerRight})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            height:'5%',
            width:'600px',
            zIndex:'200',
            top:'500px',
            left:'auto',
            right:'0'
            }}>
          </ParallaxLayer>



    <ParallaxLayer
      offset={9.1}
      speed={1}
      style={{
        backgroundImage:`url(${GrayCircle})`,
        backgroundSize:'75%',
        backgroundPosition:'top center',
        height:'7.4%',
        width:'950px  ',
        zIndex:'1',
        top:'100px',
        margin:'0 auto 0 auto'
      }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={9.1}
      speed={1}
      style={{
        top:'-900px',
        backgroundImage:`url(${CircleFrame})`,
        backgroundPosition:'top center',
        height:'100%',
        width:'100%',
        scale:'.8',
        zIndex:'3',
        // margin:'0 auto 0 auto'
      }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={9.1}
      speed={2.2}
      style={{
        top:'200px',
        backgroundImage:`url(${SunSetTree})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        scale:'.6',
        height:'7%',
        width:'36%',
        zIndex:'2',
        margin:'0 auto 0 auto',
      }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={9.1}
      speed={2.5}
      style={{
        backgroundImage:`url(${Sun})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        scale:'.3',
        top:'-40px',
        left:'130px',
        height:'7%',
        width:'36%',
        zIndex:'1',
        margin:'0 auto 0 auto',
      }}>
    </ParallaxLayer>
    
    <ParallaxLayer
      offset={9}
      speed={1.3}
      style={{
        top:'800px',
        backgroundImage:`url(${GraySand})`,
        backgroundSize:'contain',
        backgroundPosition:'center',
        height:'200px',
        zIndex:'60',
        scale:'.6'
      }}>
    </ParallaxLayer>

    <ParallaxLayer
      offset={9}
      speed={1.2}
      style={{
        top:'900px',
        background:'#D9D9D9',
        height:'200px',
        width:'100%',
        zIndex:'50',
      }}>
    </ParallaxLayer>




  </Parallax>

  )
}



