import React, { useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import useRoom from "../../hooks/useRoom";
import ChatMessages from "./ChatMessages";
import ChatFooter from "./ChatFooter";
import MediaPreview from "../MediaPreview/MediaPreview";
import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { AddPhotoAlternate, ArrowBack, MoreVert } from "@material-ui/icons";

export default function Chat({ user, page }) {
  const [image, setImage] = useState(null);
  const [src, setSrc] = useState("");

  const { roomId } = useParams();
  const room = useRoom(roomId, user.uid);
  const history = useHistory();

  const showPreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSrc(reader.result);
      };
    }
  };

  const closePreview = () => {
    setSrc('')
    setImage(null)
  }

  return (
    <div className="chat">
      <div style={{ height: page.height }} className="chat__background" />

      <div className="chat__header">
        {page.isMobile && (
          <IconButton onClick={history.goBack}>
            <ArrowBack />
          </IconButton>
        )}
        <div className="avatar__container">
          <Avatar src={room?.photoURL} />
        </div>

        <div className="chat__header--info">
          <h3 style={{ width: page.isMobile && page.width - 165 }}>
            {room?.name}
          </h3>
        </div>
        <div className="chat__header--right">
          <input
            type="file"
            id="image"
            style={{ display: "none" }}
            accept="image/*"
            onChange={showPreview}
          />
          <IconButton>
            <label htmlFor="image" style={{ cursor: "pointer", height: 24 }}>
              <AddPhotoAlternate />
            </label>
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          <Menu id="menu" keepMounted open={false}>
            <MenuItem>Delete Room</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="chat__body--container">
        <div className="chat__body" style={{ height: page.height - 68 }}>
          <ChatMessages />
        </div>
      </div>

      <MediaPreview src={src}closePreview={closePreview} />

      <ChatFooter />
    </div>
  );
}
