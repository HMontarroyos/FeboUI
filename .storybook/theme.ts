import { create } from '@storybook/theming/create';
import {Logo} from "../src/assets/images"

export default create({
  base: 'dark',
  brandTitle: 'Febo UI',
  brandUrl: '/',
  brandImage: Logo,
  brandTarget: '_self',
});