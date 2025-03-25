import React from "react";
import { Button } from "@mui/material";
import { Facebook, WhatsApp, Instagram, Twitter } from "@mui/icons-material";

const shareLinks = (imageUrl) => ({
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`,
  twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(imageUrl)}&text=Regarde ce meme génial !`,
  whatsapp: `https://api.whatsapp.com/send?text=Regarde ce meme génial ! ${encodeURIComponent(imageUrl)}`,
});

const MemeShare = ({ imageUrl }) => {
  const links = shareLinks(imageUrl);

  return (
    <div className="mt-4 text-center">
      <p>Partager sur :</p>
      <div className="flex justify-center gap-4">
        <Button variant="contained" color="primary" onClick={() => window.open(links.facebook, '_blank')}>
          <Facebook />
        </Button>
        <Button variant="contained" color="success" onClick={() => window.open(links.whatsapp, '_blank')}>
          <WhatsApp />
        </Button>
        <Button variant="contained" color="info" onClick={() => window.open(links.twitter, '_blank')}>
          <Twitter />
        </Button>
        <Button variant="contained" color="secondary" onClick={() => alert("Instagram ne supporte pas le partage direct !")}>
          <Instagram />
        </Button>
      </div>
    </div>
  );
};

export default MemeShare;
