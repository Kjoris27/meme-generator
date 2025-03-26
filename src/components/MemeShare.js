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
      <p>Share on:</p>
      <div className="flex justify-center gap-4">
        {/* Facebook Share */}
        <FacebookShareButton url={imageUrl} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "8px 16px", backgroundColor: "#1877F2", color: "white", borderRadius: "4px", cursor: "pointer" }}>
          <Facebook style={{ marginRight: "8px" }} />
          Facebook
        </FacebookShareButton>

        {/* WhatsApp Share */}
        <WhatsappShareButton url={imageUrl} title="Regarde ce meme génial !" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "8px 16px", backgroundColor: "#25D366", color: "white", borderRadius: "4px", cursor: "pointer" }}>
          <WhatsApp style={{ marginRight: "8px" }} />
          WhatsApp
        </WhatsappShareButton>

        {/* Twitter Share */}
        <TwitterShareButton url={imageUrl} title="Regarde ce meme génial !" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "8px 16px", backgroundColor: "#1DA1F2", color: "white", borderRadius: "4px", cursor: "pointer" }}>
          <Twitter style={{ marginRight: "8px" }} />
          Twitter
        </TwitterShareButton>

        {/* LinkedIn Share */}
        <LinkedinShareButton url={imageUrl} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "8px 16px", backgroundColor: "#0077B5", color: "white", borderRadius: "4px", cursor: "pointer" }}>
          <LinkedIn style={{ marginRight: "8px" }} />
          LinkedIn
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default MemeShare;