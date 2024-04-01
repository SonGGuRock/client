import SettingLayout from './setting-layout';
import { SettingMenuActivation } from './setting-menu-activation';
import { SettingMenuButton } from './setting-menu-button';
import { SettingMenuLabel } from './setting-menu-label';
import { SettingMenuLink } from './setting-menu-link';

const SettingMenu = Object.assign(SettingLayout, {
  Label: SettingMenuLabel,
  Link: SettingMenuLink,
  Activation: SettingMenuActivation,
  Button: SettingMenuButton,
});

export default SettingMenu;
