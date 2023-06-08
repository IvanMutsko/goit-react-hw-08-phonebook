import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#EBF8FF', //1
      100: '#BEE3F8', //1
      200: '#90CDF4',
      300: '#63B3ED',
      400: '#4299E1', //1
      500: '#3182CE', //1
      600: '#2B6CB0',
      700: '#2C5282',
      800: '#F67309', //active
      900: '#1A365D', //1
    },
  },
  components: {
    Button: {
      variants: {
        brand: props => ({
          bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.100',
          boxShadow: 'md',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.50',
          },
        }),
      },
    },
    Link: {
      variants: {
        brand: props => ({
          py: '2',
          px: '2',
          borderRadius: '6px',
          bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.100',
          boxShadow: 'md',

          _activeLink: { color: 'brand.800', fontWeight: 700 },
        }),
      },
    },
  },
});

export default theme;
