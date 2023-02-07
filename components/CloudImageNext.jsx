// Import the Cloudinary classes.
import { fill } from '@cloudinary/url-gen/actions/resize';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
const CloudImageNext = () => {
  const myImage = new CloudinaryImage('sample', {
    cloudName: 'dmtrw1wd0',
  }).resize(fill().width(100).height(150));

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export default CloudImageNext;
