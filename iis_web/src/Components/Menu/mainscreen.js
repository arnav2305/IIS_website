import React, { useState } from "react";
import "../Menu/mainscreen.css";
import { Popover } from "antd";
import Substitution from "../../Ciphers/Substitution";
import Caesars from "../../Ciphers/Caesars";
import MonoalphabeticCipher from "../../Ciphers/Monoalphabetic";
import PlayfairCipher from "../../Ciphers/Playfair";
import HillCipher from "../../Ciphers/Hill";
import Vigenerecipher from "../../Ciphers/Vigenere";
import DesExample from "../../Ciphers/Des";
import Vernamcipher from "../../Ciphers/vernam";
import DiffieHellman from "../../Ciphers/Diff";
import Rsa from "../../Ciphers/Rsa";


function MainScreen() {
  const [showscreen, setShowScreen] = useState(0);

  return (
    <>
      <div className="side-menu">
        <div className="menu-title">Algorithms</div>
        <div className="divider"></div>
        <div
          className="menu-btn-2"
          id="btn"
          onClick={() => {
            setShowScreen(1);
          }}
          style={showscreen === 1 ? { background: "#2196f3" } : {}}
        >
          Caesars Cipher
        </div>
        <div
          className="menu-btn-3"
          id="btn"
          onClick={() => {
            setShowScreen(2);
          }}
          style={showscreen === 2 ? { background: "#2196f3" } : {}}
        >
          RSA
        </div>
        <div
          className="menu-btn-4"
          id="btn"
          onClick={() => {
            setShowScreen(3);
          }}
          style={showscreen === 3 ? { background: "#2196f3" } : {}}
        >
          Playfair Cipher
        </div>
        <div
          className="menu-btn-5"
          id="btn"
          onClick={() => {
            setShowScreen(4);
          }}
          style={showscreen === 4 ? { background: "#2196f3" } : {}}
        >
          Hill Cipher
        </div>
        <div
          className="menu-btn-6"
          id="btn"
          onClick={() => {
            setShowScreen(5);
          }}
          style={showscreen === 5 ? { background: "#2196f3" } : {}}
        >
          Vigenere Cipher
        </div>
        <div
          className="menu-btn-7"
          id="btn"
          onClick={() => {
            setShowScreen(6);
          }}
          style={showscreen === 6 ? { background: "#2196f3" } : {}}
        >
          Vernam Cipher
        </div>
        <div
          className="menu-btn-8"
          id="btn"
          onClick={() => {
            setShowScreen(7);
          }}
          style={showscreen === 7 ? { background: "#2196f3" } : {}}
        >
          Diffie-hellman
        </div>
        <div
          className="menu-btn-9"
          id="btn"
          onClick={() => {
            setShowScreen(8);
          }}
          style={showscreen === 8 ? { background: "#2196f3" } : {}}
        >
          DES
        </div>
        <div className="BY">
          By - Arnav Pandey
        </div>
      </div>
      <div className="main-box">
        {showscreen === 0 && (
          <div className="def-screen">Cryptographic Algorithms</div>
        )}

        {showscreen === 1 && <Caesars />}
        {showscreen === 2 && <Rsa />}
        {showscreen === 3 && <PlayfairCipher />}
        {showscreen === 4 && <HillCipher />}
        {showscreen === 5 && <Vigenerecipher />}
        {showscreen === 6 && <Vernamcipher />}
        {showscreen === 7 && <DiffieHellman />}
        {showscreen === 8 && <DesExample />}

      </div>
    </>
  );
}

export default MainScreen;
