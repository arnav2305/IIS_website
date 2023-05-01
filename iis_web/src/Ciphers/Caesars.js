import React, { useState } from 'react';
import '../Ciphers/common.css'

function Caesars() {
  const [plaintext, setPlaintext] = useState("");
  const [dplaintext, setdPlaintext] = useState("");
  const [encrypttext, setencrypttext] = useState("");
  const [dencrypttext, setdencrypttext] = useState("");
  const [key, setKey] = useState("");

  // Function to encrypt the plaintext using the substitution cipher
  function encrypt(plaintext, key) {
    let encrypttext = "";
    for (let i = 0; i < plaintext.length; i++) {
      let character = plaintext[i];
      // If the character is a letter, encrypt it
      if (/[a-z]/.test(character)) {
        encrypttext += String.fromCharCode(
          ((character.charCodeAt(0) + key - 97) % 26) + 97
        );
      } else if (/[A-Z]/.test(character)) {
        encrypttext += String.fromCharCode(
          ((character.charCodeAt(0) + key - 65) % 26) + 65
        );
      } else {
        encrypttext += character;
      }
    }
    return encrypttext;
  }

  // Function to decrypt the encrypttext using the substitution cipher
  function decrypt(dencrypttext, key) {
    let dplaintext = "";
    for (let i = 0; i < dencrypttext.length; i++) {
      let character = dencrypttext[i];
      // If the character is a letter, decrypt it
      if (/[a-z]/.test(character)) {
        dplaintext += String.fromCharCode(
          ((character.charCodeAt(0) - key - 97 + 26) % 26) + 97
        );
      } else if (/[A-Z]/.test(character)) {
        dplaintext += String.fromCharCode(
          ((character.charCodeAt(0) - key - 65 + 26) % 26) + 65
        );
      } else {
        dplaintext += character;
      }
    }
    return dplaintext;
  }

  // Handle the form submission
  function handleSubmit(event) {
    event.preventDefault();
    let encrypttext = encrypt(plaintext, key);
    setencrypttext(encrypttext);
  }

  // Handle the decryption form submission
  function handleDecryption(event) {
    event.preventDefault();
    let dplaintext = decrypt(dencrypttext, key);
    setdPlaintext(dplaintext);
  }

  return (
    <div>
      <h1>Caesars Cipher</h1>
      <form onSubmit={handleSubmit} className="enc">
        <div id="container">
          <label htmlFor="plaintext" className="subheading">
            Plain text
          </label>
          <label>:</label>
          <input
            className="inputfield"
            type="text"
            id="plaintext"
            value={plaintext}
            onChange={(event) => setPlaintext(event.target.value)}
          />
        </div>
        <div id="container">
          <label htmlFor="key">Key</label>
          <label>:</label>
          <input
            type="number"
            id="key"
            value={key}
            onChange={(event) => setKey(parseInt(event.target.value))}
          />
        </div>
        <div id="btn-div">
        <button type="submit" id="from-btn">Encrypt</button>
        </div>
      </form>

      <div id="output-text"><div>Encrypted message:</div><div id="output-enc">{encrypttext}</div></div>

      <form onSubmit={handleDecryption} className="enc">
        <div id="container">
          <label htmlFor="dencrypttext">Encrypted text</label>
          <label>:</label>
          <input
            type="text"
            id="dencrypttext"
            value={dencrypttext}
            onChange={(event) => setdencrypttext(event.target.value)}
          />
        </div>
        <div id="container">
          <label htmlFor="key">Key</label>
          <label>:</label>
          <input
            type="number"
            id="key"
            value={key}
            onChange={(event) => setKey(parseInt(event.target.value))}
          />
        </div>
        <div id="btn-div">
        <button type="submit" id="from-btn">Decrypt</button>
        </div>
      </form>
      <div id="output-text"><div>Decrypted message:</div><div id="output-enc">{dplaintext}</div></div>
    </div>
  );
}
export default Caesars;
