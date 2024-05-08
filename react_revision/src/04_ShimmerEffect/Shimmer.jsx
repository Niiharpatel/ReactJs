import React from 'react';
import { ShimmerContentBlock } from 'react-shimmer-effects';

function Shimmer() {
  return (
    <>
      <div style={{ marginInline: '30px' }}>
        <ShimmerContentBlock
          title
          text
          cta
          thumbnailWidth={300}
          thumbnailHeight={370}
        />
      </div>
    </>
  );
}

export default Shimmer;
