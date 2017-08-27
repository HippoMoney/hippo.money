import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import particlesJS from 'particles.js';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Sidebar from 'grommet/components/Sidebar';
import Split from 'grommet/components/Split';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import SocialShare from 'grommet/components/SocialShare';
import SocialIcon from './components/SociaIcon';
import './App.css';
import './Cube.css';

const MainCard = styled(Box)`
  position: absolute;
  top: 10vh;
  background: rgba(175, 175, 175, 0.48);
`;

class App extends Component {
  componentDidMount() {
    // initAnimations();
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: ['#e40045', '#58636d'],
        },
        shape: {
          type: 'polygon',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 4,
          },
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.4,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#58636d',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'left',
          random: true,
          straight: true,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'grab',
          },
          onclick: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
    // const block = document.querySelector('.block');
    // const coin = document.querySelector('.coin');
    // const oneup = document.querySelector('.oneup');
    // const audio = document.querySelector('audio#coin');
    // const scoreBoard = document.querySelector('.score');
    // let score = 0;

    // function playSound() {
    //   if (!audio) return;
    //   audio.currentTime = 0;
    //   audio.play();
    //   coin.classList.add('active');
    //   block.classList.add('bounce');
    // }

    // function removeBounce(e) {
    //   if (e.animationName !== 'blockbounce') return;
    //   this.classList.remove('bounce');
    // }

    // function removeActive(e) {
    //   if (e.animationName !== 'coinmove') return;
    //   this.classList.remove('active');
    // }

    // function removeOneUpActive(e) {
    //   if (e.animationName !== 'oneupmove') return;
    //   this.classList.remove('oneup-active');
    // }

    // function hit(e) {
    //   if (!e.isTrusted) return;
    //   score++;
    //   scoreBoard.textContent = score;
    // }

    // function playSoundOneUp() {
    //   if (score === 100) {
    //     const audioOneUp = document.querySelector('audio#oneup');
    //     audio.pause();
    //     audioOneUp.currentTime = 0;
    //     audioOneUp.play();
    //     coin.classList.remove('active');
    //     block.classList.add('bounce');
    //     oneup.classList.add('oneup-active');
    //     score = 0;
    //     scoreBoard.textContent = 0;
    //   }
    // }

    // block.addEventListener('webkitAnimationEnd', removeBounce);
    // block.addEventListener('animationend', removeBounce);

    // coin.addEventListener('webkitAnimationEnd', removeActive);
    // coin.addEventListener('animationend', removeActive);
    // oneup.addEventListener('webkitAnimationEnd', removeOneUpActive);
    // oneup.addEventListener('animationend', removeOneUpActive);

    // block.addEventListener('click', hit);
    // block.addEventListener('click', playSound);
    // block.addEventListener('click', playSoundOneUp);
  }

  render() {
    return (
      <div className="App">
        <div className="large-container">
          <Split flex="left" showOnResponsive="both">
            <Box flex="grow" justify="start">
              <div id="particles-js">
                <MainCard justify="center" align="center" pad="medium">
                  <Card
                    label="Hippo Money"
                    heading="Blockchain Solutions"
                    description="Dapps, smart contracts, blockchain consultations and ICO reviews"
                    headingStrong={false}
                  />
                </MainCard>
              </div>
            </Box>
            <Box flex="grow" justify="start">
              <Sidebar colorIndex="neutral-1">
                <Header pad="medium" justify="between">
                  <Title>Menu</Title>
                </Header>
                <Box flex="grow" justify="start">
                  <Menu primary>
                    <Anchor href="#">Tokens and ICOs</Anchor>
                    <Anchor href="#">Consulting</Anchor>
                  </Menu>
                </Box>
                <Footer pad={{ horizontal: 'medium', vertical: 'none' }}>
                  <SocialIcon
                    link="github"
                    svg={
                      <svg
                        version="1.1"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        role="img"
                        className="grommetux-control-icon grommetux-control-icon-social-github grommetux-control-icon--responsive"
                        aria-label="social-github"
                      >
                        <path
                          fill="#333"
                          fillRule="evenodd"
                          d="M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"
                          stroke="none"
                        />
                      </svg>
                    }
                  />
                  <SocialIcon
                    link="test"
                    svg={
                      <svg
                        version="1.1"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        role="img"
                        className="grommetux-control-icon grommetux-control-icon-send grommetux-control-icon--responsive"
                        aria-label="send"
                      >
                        <path
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                          d="M22,3 L2,11 L20.5,19 L22,3 Z M10,20.5 L13,16 M15.5,9.5 L9,14 L9.85884537,20.0119176 C9.93680292,20.5576204 10.0751625,20.5490248 10.1651297,20.009222 L11,15 L15.5,9.5 Z"
                        />
                      </svg>
                    }
                  />
                  <SocialShare
                    link="https://grommet.io"
                    type="email"
                    title="Email"
                    text="Sample text"
                  />
                  <SocialIcon
                    link="test"
                    svg={
                      <svg
                        version="1.1"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                        role="img"
                        className="grommetux-control-icon grommetux-control-icon-social-slack grommetux-control-icon--responsive"
                        aria-label="social-slack"
                      >
                        <path
                          fill="#6ECADC"
                          fillRule="evenodd"
                          d="M10.9829147,13.9325266 L10.0460003,11.1353533 L12.9732746,10.1548615 L13.910189,12.9520348 L10.9829147,13.9325266 Z M22.0848234,8.9814134 C19.8208835,1.4349469 16.5278799,-0.348763364 8.9814134,1.91517659 C1.4349469,4.17911654 -0.348763364,7.4721201 1.91517659,15.0185866 C4.17911654,22.5650531 7.4721201,24.3487634 15.0185866,22.0848234 C22.5650531,19.8208835 24.3487634,16.5278799 22.0848234,8.9814134 L22.0848234,8.9814134 Z M18.2429859,13.8523145 L16.8022969,14.3325442 L17.2825265,15.7732332 C17.4883393,16.3906714 17.1453181,17.0081096 16.5964841,17.2139223 C16.4592757,17.2825265 16.3220672,17.2825265 16.1848587,17.2825265 C15.704629,17.2825265 15.2930036,16.9395053 15.1557951,16.5278799 L14.6755654,15.0871908 L11.725583,16.0476502 L12.2058127,17.4883393 C12.4116254,18.1057774 12.0686042,18.7232156 11.5197703,18.9290283 C11.3825618,18.9976326 11.2453534,18.9976326 11.1081449,18.9976326 C10.6279152,18.9976326 10.2162897,18.6546114 10.0790813,18.2429859 L9.59885157,16.8022969 L8.15816251,17.2825265 C8.02095403,17.3511308 7.88374555,17.3511308 7.74653706,17.3511308 C7.26630738,17.3511308 6.85468193,17.0081096 6.71747345,16.5964841 C6.51166073,15.979046 6.85468193,15.3616078 7.40351586,15.1557951 L8.84420492,14.6755654 L7.88374555,11.7941873 L6.51166073,12.274417 C6.37445225,12.3430212 6.23724376,12.3430212 6.10003528,12.3430212 C5.6198056,12.3430212 5.20818015,12 5.07097167,11.5883746 C4.86515895,10.9709364 5.20818015,10.3534982 5.75701408,10.1476855 L7.19770314,9.66745581 L6.71747345,8.22676675 C6.51166073,7.60932858 6.78607769,6.92328617 7.40351586,6.71747345 C8.02095403,6.51166073 8.6383922,6.85468193 8.84420492,7.40351586 L9.3244346,8.84420492 L12.274417,7.88374555 L11.7941873,6.44305649 C11.5883746,5.82561832 11.9313958,5.20818015 12.4802297,5.00236743 C13.0976679,4.7965547 13.715106,5.13957591 13.9209187,5.68840984 L14.4011484,7.19770314 L15.8418375,6.71747345 C16.4592757,6.51166073 17.0767138,6.85468193 17.2825265,7.40351586 C17.4883393,8.02095403 17.1453181,8.6383922 16.5964841,8.84420492 L15.1557951,9.3244346 L16.1162545,12.1372085 L17.5569435,11.6569788 C18.1743817,11.4511661 18.7918198,11.7941873 18.9976326,12.3430212 C19.1348411,13.0290636 18.8604241,13.6465018 18.2429859,13.8523145 L18.2429859,13.8523145 Z"
                          stroke="none"
                        />
                      </svg>
                    }
                  />
                </Footer>
              </Sidebar>
            </Box>
          </Split>
        </div>
        {/* <div id="large-footer" className="large-footer">
          <div>
            <div>
              Score: <span className="score">0</span>
            </div>
            <div className="cube-container">
              <div className="block">
                <div className="front">
                  <span>?</span>
                </div>
                <div className="back">
                  <span />
                </div>
                <div className="right">
                  <span>?</span>
                </div>
                <div className="left">
                  <span>?</span>
                </div>
                <div className="top">
                  <span />
                </div>
                <div className="bottom">
                  <span />
                </div>
              </div>
              <div className="coin" />
              <div className="oneup">
                <div className="cap">
                  <div className="spot" />
                </div>
                <div className="face">
                  <div className="eye" />
                  <div className="eye right" />
                </div>
              </div>
            </div>

            <audio id="coin" src="http://katherinekato.com/misc/coin.wav" />
            <audio id="oneup" src="http://katherinekato.com/misc/1-up.wav" />
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;