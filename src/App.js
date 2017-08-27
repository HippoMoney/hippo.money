import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import particlesJS from 'particles.js';
import initAnimations from './animations';
import './App.css';
import './Cube.css';
import linkedin from './linkedin.svg';
import twitter from './twitter.svg';
import telegram from './telegram.svg';
import github from './github.svg';

const MainTitle = styled.h1`
  color: #f9f1e9;
  text-align: center;
`;

const FooterForm = styled.div`
  width: 40%;
  height: 250px;
  background: rgba(56, 62, 70, 0.51);
  margin: 0 auto;
  margin-top: 10%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.h2`
  text-align: center;
  color: #eee;
  font-weight: 200;
`;

// const Input = styled.input`
//   border: none;
//   padding: 10px;
//   font-size: 1.2em;
//   width: 80%;
//   margin: 10px;
// `;

// const Button = styled.button`
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   outline: none;
// `;

// const Form = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const Icons = styled.div``;
const Icon = styled.img`
  width: 40px;
  margin: 10px;
`;

const Email = styled.div`margin-top: 40px;`;
const EmailLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Portlolio = styled.div`
  position: absolute;
  top: 110vh;
  right: 40%;
`;

class App extends Component {
  componentDidMount() {
    initAnimations();
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 300,
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
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas" />
          <div className="title-text">
            <MainTitle>Hippo Money</MainTitle>
            <ol className="main-list">
              <li>Разработуем блокчейн проекты на различных платформах (Ethereum, Bitshares)</li>
              <li>Пишем умные контракты</li>
              <li>Консультируем и обучаем блокчейну</li>
              <li>Находим слабые места в ICO и Blockchain проектах</li>
            </ol>
          </div>
        </div>
        <div className="large-container">
          <div id="particles-js" />
          <Portlolio>
            <h2>Наши проекты</h2>
          </Portlolio>
        </div>
        {/* <div className="footer">
          <div className="social">
            <Icon src={telegram} />
          </div>
          <div className="social">
            <Icon src={github} />
          </div>
          <div className="social">
            <Icon src={twitter} />
          </div>
          <div className="social">
            <Icon src={linkedin} />
          </div>
    </div> */}
        {/* <div id="large-footer" className="large-footer">
          <FooterForm>
            <FooterTitle>Наши контакты</FooterTitle>
            <Icons>
              <Icon src={telegram} />
              <Icon src={github} />
              <Icon src={twitter} />
              <Icon src={linkedin} />
            </Icons>
            <Email>
              <EmailLink href="mailto:info@hippo.money">info@hippo.money</EmailLink>
            </Email>
          </FooterForm>
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
