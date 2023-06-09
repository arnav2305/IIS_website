import React, { useState } from "react";
import "../Ciphers/common.css";

function Vigenerecipher() {
  const [plaintext, setPlaintext] = useState("");
  const [dplaintext, setdPlaintext] = useState("");
  const [encrypttext, setencrypttext] = useState("");
  const [dencrypttext, setdencrypttext] = useState("");
  const [substitution, setSubstitution] = useState("");

  function isLetter (str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i)
  }
   
  function isUpperCase (character) {
    if (character === character.toUpperCase()) {
      return true
    }
    if (character === character.toLowerCase()) {
      return false
    }
  }

  function encrypt (message, key) {
    let result = ''
   
    for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i)
      if (isLetter(c)) {
        if (isUpperCase(c)) {
          result += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65) // A: 65
        } else {
          result += String.fromCharCode((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97) // a: 97
        }
      } else {
        result += c
      }
      j = ++j % key.length
    }
    return result
  }
   
  function decrypt (message, key) {
    let result = ''
   
    for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i)
      if (isLetter(c)) {
        if (isUpperCase(c)) {
          result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
        } else {
          result += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
        }
      } else {
        result += c
      }
      j = ++j % key.length
    }
    return result
  }

  function handleSubmit(event){
    event.preventDefault();
    const encrypted = encrypt(plaintext, substitution)
    setencrypttext(encrypted)
  }

  function handleDecryption(event){
    event.preventDefault();
    const decrypted = decrypt(encrypttext, substitution)
    setdPlaintext(decrypted)
  }


  return (
    <div>
    <h1>Vigenere Cipher</h1>
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
            type="text"
            id="substitution"
            className="inputfield"
            value={substitution}
            onChange={(event) => setSubstitution(event.target.value)}
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
            type="text"
            id="substitution"
            className="inputfield"
            value={substitution}
            onChange={(event) => setSubstitution(event.target.value)}
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

export default Vigenerecipher;