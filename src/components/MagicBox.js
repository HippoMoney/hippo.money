import React, { Component } from 'react';
import './Cube.css';

class MagicBox extends Component {
  componentDidMount() {
    const block = document.querySelector('.block');
    const coin = document.querySelector('.coin');
    const oneup = document.querySelector('.oneup');
    const audio = document.querySelector('audio#coin');
    const scoreBoard = document.querySelector('.score');
    let score = 0;
    function playSound() {
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
      coin.classList.add('active');
      block.classList.add('bounce');
    }
    function removeBounce(e) {
      if (e.animationName !== 'blockbounce') return;
      this.classList.remove('bounce');
    }
    function removeActive(e) {
      if (e.animationName !== 'coinmove') return;
      this.classList.remove('active');
    }
    function removeOneUpActive(e) {
      if (e.animationName !== 'oneupmove') return;
      this.classList.remove('oneup-active');
    }
    function hit(e) {
      if (!e.isTrusted) return;
      score++;
      scoreBoard.textContent = score;
    }
    function playSoundOneUp() {
      if (score === 100) {
        const audioOneUp = document.querySelector('audio#oneup');
        audio.pause();
        audioOneUp.currentTime = 0;
        audioOneUp.play();
        coin.classList.remove('active');
        block.classList.add('bounce');
        oneup.classList.add('oneup-active');
        score = 0;
        scoreBoard.textContent = 0;
      }
    }
    block.addEventListener('webkitAnimationEnd', removeBounce);
    block.addEventListener('animationend', removeBounce);
    coin.addEventListener('webkitAnimationEnd', removeActive);
    coin.addEventListener('animationend', removeActive);
    oneup.addEventListener('webkitAnimationEnd', removeOneUpActive);
    oneup.addEventListener('animationend', removeOneUpActive);
    block.addEventListener('click', hit);
    block.addEventListener('click', playSound);
    block.addEventListener('click', playSoundOneUp);
  }
  render() {
    return (
      <div id="large-footer" className="large-footer">
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
      </div>
    );
  }
}

export default MagicBox;
