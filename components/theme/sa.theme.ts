import { roboto } from '@theme-ui/presets';
import { Theme } from '@theme-ui/css';
import { mediumEmerald, mediumLightBlue } from './colors';

export const saTheme: Theme = {
    ...roboto,
    colors: {
        primary: mediumEmerald,
        secondary: mediumLightBlue,
        accent: '#fff',
    },
    buttons: {
        primary: {
            bg: mediumEmerald,
        },
    },
    styles: {
        ...roboto.styles,
        root: {
            ...roboto.styles.root,
            color: 'white',
        },
    },
};
