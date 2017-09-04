import React from 'react';
import Particles from 'react-particles-js';

import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import styled from 'styled-components';

const MainCard = styled(Box)`
  position: absolute;
  top: 10vh;
  background: rgba(175, 175, 175, 0.48);
`;

const ParticlesHome = () => (
  <div>
    <Particles
      height="100vh"
      params={{
        particles: {
          number: {
            value: 35,
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
      }}
    />
    <MainCard justify="center" align="center" pad="medium">
      <Card
        label="Hippo Money"
        heading="Blockchain Solutions"
        description="Dapps, smart contracts, blockchain consultations and ICO reviews"
        headingStrong={false}
      />
    </MainCard>
  </div>
);

export default ParticlesHome;
