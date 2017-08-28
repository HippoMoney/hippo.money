import React from 'react';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import styled from 'styled-components';

const MainCard = styled(Box)`
position: absolute;
top: 10vh;
background: rgba(175, 175, 175, 0.48);
`;

const ParticlesHome = () =>
  (<div id="particles-js">
    <MainCard justify="center" align="center" pad="medium">
      <Card
        label="Hippo Money"
        heading="Blockchain Solutions"
        description="Dapps, smart contracts, blockchain consultations and ICO reviews"
        headingStrong={false}
      />
    </MainCard>
  </div>);

export default ParticlesHome;
