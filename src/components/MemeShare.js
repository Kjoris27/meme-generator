'use client';

import React from "react";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";
import { Facebook, Twitter, WhatsApp, LinkedIn } from "@mui/icons-material";

const MemeShare = ({ imageUrl }) => {
  return (
    <div className="mt-4 text-center">
      <p>Partager sur:</p>
      <div className="flex justify-center gap-4">
        <FacebookShareButton url={imageUrl} style={{  color: "#1877F2"}}>
          <Facebook style={{ marginRight: "8px" }} />
        </FacebookShareButton>

        <WhatsappShareButton url={imageUrl} title="Regarde ce meme génial !" style={{ color: "#25D366"  }}>
          <WhatsApp style={{ marginRight: "8px" }} />
        </WhatsappShareButton>

        <TwitterShareButton url={imageUrl} title="Regarde ce meme génial !" style={{  color: "#1DA1F2" }}>
          <Twitter style={{ marginRight: "8px" }} />
        </TwitterShareButton>

        <LinkedinShareButton url={imageUrl} style={{  color: "#0077B5"}}>
          <LinkedIn style={{ marginRight: "8px" }} />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default MemeShare;