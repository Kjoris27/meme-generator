'use client';

import React, { useState, useEffect } from 'react';
import { 
  ImageList, 
  ImageListItem, 
  ImageListItemBar, 
  IconButton, 
  Dialog, 
  DialogContent 
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import DownloadIcon from "@mui/icons-material/Download";

const Gallery = ({ images }) => {
  const [isClient, setIsClient] = useState(false);
  const [openImage, setOpenImage] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageOpen = (img) => {
    setOpenImage(img);
  };

  const handleImageClose = () => {
    setOpenImage(null);
  };

  const handleDownload = (img) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('a');
      link.href = img;
      link.download = `meme_${new Date().getTime()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!isClient) {
    return null;
  }

  if (!images || images.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        <p>Pas encore de mèmes générés.. Commencez par en créer!</p>
      </div>
    );
  }

  return (
    <div className="mt-8 px-4">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Ma galerie
      </h2>
      <ImageList 
        variant="masonry" 
        cols={3} 
        gap={12} 
        className="overflow-hidden"
      >
        {images.map((img, index) => (
          <ImageListItem 
            key={index} 
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={`${img}?w=248&fit=crop&auto=format`}
              srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={`Generated meme ${index + 1}`}
              loading="lazy"
              className="w-full h-auto object-cover cursor-pointer"
              onClick={() => handleImageOpen(img)}
            />
            <ImageListItemBar
              position="bottom"
              actionIcon={
                <>
                  <IconButton 
                    sx={{ color: 'white' }} 
                    aria-label="zoom"
                    onClick={() => handleImageOpen(img)}
                  >
                    <ZoomInIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ color: 'white' }} 
                    aria-label="download"
                    onClick={() => handleDownload(img)}
                  >
                    <DownloadIcon />
                  </IconButton>
                </>
              }
              actionPosition="right"
              className="bg-black/50 backdrop-blur-sm"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={!!openImage}
        onClose={handleImageClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent className="p-0">
          <img 
            src={openImage || ''} 
            alt="Enlarged meme" 
            className="w-full h-auto object-contain"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;