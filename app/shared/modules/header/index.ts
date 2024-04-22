import Back from '../../atoms/Back';
import Title from '../../atoms/Title';
import Button from '../../atoms/button/Button';
import CloseButton from '../../atoms/close-button';
import Layout from './Layout';
import MeatBall from './MeatBall';

const Header = Object.assign(Layout, {
  Back,
  Title,
  MeatBall,
  Button,
  Close: CloseButton,
});

export default Header;
