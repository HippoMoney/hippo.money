import React, { PropTypes } from 'react';

const SocialIcons = ({ link, svg }) =>
  (<a
    target="_blank"
    rel="noopener noreferrer"
    href={link}
    className="grommetux-anchor grommetux-anchor--animate-icon grommetux-anchor--icon"
  >
    <span className="grommetux-anchor__icon">
      {svg}
    </span>
  </a>);

SocialIcons.propTypes = {
  link: PropTypes.string.isRequired,
  svg: PropTypes.node.isRequired,
};

export default SocialIcons;
