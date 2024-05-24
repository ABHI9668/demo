import React from 'react';


const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNpIpZpLFnw_c5HJs5D8WJPqdAmA57L5G95oU2isUYQ2xLrTzCU93tiWjhmCKCAAcZEU&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKEPSyKOTWA2K2JxprxFIwFjuc_fTR6bqySWZW-aG27h9R3r2WLslzlU7eOq2MosA1xM&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuviSKS1qFdq0lwDx2BeKt5EvCxuuj2L0cwsPBuNiFE-T8SP9cBVpsUkokVCKQJ-vLLrc&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNpIpZpLFnw_c5HJs5D8WJPqdAmA57L5G95oU2isUYQ2xLrTzCU93tiWjhmCKCAAcZEU&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJ_Iw0WgpVd71Frsmzy8iAemE2hYeK2dviEF4mPHfqASBTA8_LkkUtgO2QGvaBD5s6os&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNpIpZpLFnw_c5HJs5D8WJPqdAmA57L5G95oU2isUYQ2xLrTzCU93tiWjhmCKCAAcZEU&usqp=CAU",
];

const Gallery = () => {
  return (
    <>
      <div className="gallery_text">Popular Places Gallery</div>
      <div className="galleryImagesBox">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Popular place ${index + 1}`} />
        ))}
      </div>
    </>
  );
};

export default Gallery;

