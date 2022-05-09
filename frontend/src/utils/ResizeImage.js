import Resizer from 'react-image-file-resizer';

export const resizeImage = (image) =>
   new Promise((resolve) => {
      Resizer.imageFileResizer(
         image,
         300,
         300,
         'JPEG',
         100,
         0,
         (uri) => {
            resolve(uri);
         },
         'base64',
         300,
         300
      );
   });