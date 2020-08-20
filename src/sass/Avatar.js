import styled from 'styled-components';

import image from '../assets/images/avatars/nicholas.jpg';

const Avatar = styled.div`
  position: relative;

  margin: -125px auto 0;

  width: 250px;
  height: 250px;

  border-radius: 50%;

  background-image: url(${image});
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
`;

export default Avatar;
