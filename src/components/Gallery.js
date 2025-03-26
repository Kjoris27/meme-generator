import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Gallery = ({ images }) => {
  return (
    <div className="mt-8">
      <h2 className="text-center text-lg font-bold">Your Downloaded Images</h2>
      <ImageList sx={{ width: "100%", height: 450 }} cols={3} rowHeight={164}>
        {images.map((img, index) => (
          <ImageListItem key={index}>
            <img
              src={`${img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={`Downloaded meme ${index + 1}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Gallery;