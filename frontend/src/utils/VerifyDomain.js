export const currentDomain = () => {
   if (process.env.NODE_ENV === 'production') {
      return process.env.REACT_APP_DOMAIN;
   } else if (process.env.NODE_ENV === 'development') {
      return process.env.REACT_APP_LOCALHOST;
   }
};