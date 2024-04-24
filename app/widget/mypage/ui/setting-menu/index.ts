import SettingClassTime from './setting-class-time';
import SettingLayout from './setting-layout';
import { SettingMenuActivation } from './setting-menu-activation';
import { SettingMenuButton } from './setting-menu-button';
import { SettingMenuLabelLayout } from './setting-menu-label-layout';
import { SettingMenuLabel } from './setting-menu-label';
import { SettingMenuLink } from './setting-menu-link';
import { SettingMenuLinkText } from './setting-menu-link-text';
import SettingMenuSubtext from './setting-menu-subtext';
import SettingMenuInput from './setting-menu-input';

const SettingMenu = Object.assign(SettingLayout, {
  Label: SettingMenuLabel,
  Link: SettingMenuLink,
  LinkText: SettingMenuLinkText,
  Activation: SettingMenuActivation,
  Button: SettingMenuButton,
  ClassTime: SettingClassTime,
  LabelLayout: SettingMenuLabelLayout,
  Input: SettingMenuInput,
  Subtext: SettingMenuSubtext,
});

export default SettingMenu;
