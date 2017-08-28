import React from 'react';
import Headline from 'grommet/components/Headline';
import Hero from 'grommet/components/Hero';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Actions from 'grommet/components/icons/base/Actions';
import Back from 'grommet/components/icons/base/LinkPrevious';

const Tokens = () =>
  (<div>
    <Header colorIndex="neutral-1" splash={false} size="medium">
      <Title pad="medium">
        <Anchor primary icon={<Back />} label="Home" path={{ path: '/', index: true }} />
      </Title>
      <Box flex justify="end" direction="row" responsive={false}>
        <Search
          responsive={false}
          inline
          fill
          size="medium"
          placeHolder="Search"
          dropAlign={{ right: 'right' }}
        />
        <Menu icon={<Actions />} dropAlign={{ right: 'right' }}>
          <Anchor href="#" className="active">
            First
          </Anchor>
          <Anchor href="#">Second</Anchor>
          <Anchor href="#">Third</Anchor>
        </Menu>
      </Box>
    </Header>
    <Hero>
      <Box direction="row" justify="center" align="center">
        <Box basis="1/2" align="end" pad="medium" />
        <Box basis="1/2" align="start" pad="medium">
          <Headline margin="none">Work in progress</Headline>
        </Box>
      </Box>
    </Hero>
  </div>);

export default Tokens;
