import React, { useState } from "react";
import "./ChatFooter.css";
import {
  Send,
  MicRounded,
  CancelRounded,
  CheckCircle,
} from "@material-ui/icons";

export default function ChatFooter(
  input,
  onChange,
  sendMessage,
  image,
  user,
  room,
  roomId
) {
  const [isRecording, setIsRecording] = useState(false);
  const btnIcons = (
    <>
      <Send
        style={{
          width: 20,
          height: 20,
          color: "white",
        }}
      />
      <MicRounded
        style={{
          width: 24,
          height: 24,
          color: "white",
        }}
      />
    </>
  );

  const canRecord = navigator.mediaDevices.getUserMedia && window.MediaRecorder;
  return (
    <div className="chat__footer">
      <form>
        <input
          value={input}
          onChange={!isRecording ? onChange : null}
          type="text"
          placeholder="Type a message"
        />

        {canRecord ? (
          <button
            onClick={
              input.tirm() || (input === "" && image)
                ? sendMessage
                : () => false
            }
            type="submit"
            className="send__btn"
          >
            {btnIcons}
          </button>
        ) : (
          <>
            <label htmlFor="capture" className="send__btn">
              {btnIcons}
            </label>
            <input
              type="file"
              id="capture"
              accept="audio/*"
              style={{ display: "none" }}
              capture
            />
          </>
        )}
      </form>

      {isRecording && (
        <div className="record">
          <CancelRounded
            style={{
              width: 30,
              height: 30,
              color: "#f20519",
            }}
          />
          <div>
            <div className="record__redcircle"></div>
            <div className="record_duretion"></div>
          </div>
          <CheckCircle
            style={{
              width: 30,
              height: 30,
              color: "#41bf49",
            }}
          />
        </div>
      )}
    </div>
  );
}
