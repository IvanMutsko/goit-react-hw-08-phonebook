import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      // light
      50: '#a4c3b2', //header-footer
      100: '#6b9080', //button
      200: '#cce3de', //hover
      300: '#eaf4f4', //active
      400: '#6b9080', //random
      // dark
      500: '#403d39', //header-footer
      600: '#8E8679', //button
      700: '#252422', //hover
      800: '#eb5e28', //active
      900: '#eb5e28', //random
    },
  },
  components: {
    Button: {
      variants: {
        brand: props => ({
          bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.100',
          boxShadow: 'md',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.200',
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
          bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.100',
          boxShadow: 'md',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.200',
          },

          _activeLink: {
            bg: props.colorMode === 'dark' ? 'brand.800' : 'brand.300',
            fontWeight: 700,
          },
        }),
      },
    },
  },
});

export default theme;
