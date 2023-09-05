import { useState } from "react";

const CustomImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [img, setImg] = useState(src);

  return (
    <img
      src={img}
      onError={() =>
        setImg(
          "https://canape.cdnflexcatering.com/themes/frontend/default/images/img-placeholder.png"
        )
      }
      className={className}
      alt={alt}
      loading="lazy"
    ></img>
  );
};

export default CustomImage;
