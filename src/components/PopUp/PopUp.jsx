import React from "react";
import {
  Close,
  Icons,
  PopUpBackground,
  PopUpBody,
  PopUpBtnClose,
  PopUpContainer,
  PopUpTitle,
} from "./PopUpStyle";

const PopUp = ({ closeModal }) => {
  return (
    <PopUpBackground>
      <PopUpContainer>
        <PopUpBtnClose onClick={() => closeModal(false)}>
          <Close src="https://img.icons8.com/windows/32/fafafa/delete-sign.png" />
        </PopUpBtnClose>
        <PopUpTitle>Hi, I am Matias</PopUpTitle>
        <PopUpBody>
          <a
            style={{
              color: "#fafafa",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
            href="https://www.linkedin.com/in/matiassiocordich/"
            target="__blank"
          >
            <Icons src="https://img.icons8.com/wired/50/fafafa/linkedin--v1.png" />
            Linkedin
          </a>
          <a
            style={{
              color: "#fafafa",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
            href="https://portfoliov2-kohl.vercel.app/"
            target="__blank"
          >
            <Icons src="https://img.icons8.com/wired/50/fafafa/briefcase.png" />
            Portfolio
          </a>
          <a
            style={{
              color: "#fafafa",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
            href="https://github.com/MatiasCordich/chat-app"
            target="__blank"
          >
            <Icons src="https://img.icons8.com/wired/50/fafafa/github.png" />
            Repository
          </a>
        </PopUpBody>
      </PopUpContainer>
    </PopUpBackground>
  );
};

export default PopUp;
