import Link from 'next/link';
import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4 justify-center mb-12 mt-12">
      <Link href="https://res.cloudinary.com/dpbpyzl96/image/upload/v1721608247/arthat/rrss/jhkjetynqx28dtlomn7b.png" target="_blank" rel="noopener noreferrer">
        <img src='https://res.cloudinary.com/dpbpyzl96/image/upload/v1721608247/arthat/rrss/jhkjetynqx28dtlomn7b.png' alt="Instagram" className="h-8 w-8" />
      </Link>
      <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1721608246/arthat/rrss/nydjfmxfodxftbhdmabo.png" alt="Facebook" className="h-8 w-8" />
      </Link>
      <Link href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <img src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1721608247/arthat/rrss/buhmxcd1oaxl3irwddaf.png" alt="TikTok" className="h-8 w-8" />
      </Link>
      <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
        <img src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1721608246/arthat/rrss/xky7oxozyzmizopcybll.png" alt="Pinterest" className="h-8 w-8" />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
