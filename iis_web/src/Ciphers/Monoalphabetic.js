import React, { useState } from "react";
import "../Ciphers/common.css";

function MonoalphabeticCipher() {
  const [plaintext, setPlaintext] = useState("");
  const [dplaintext, setdPlaintext] = useState("");
  const [encrypttext, setencrypttext] = useState("");
  const [dencrypttext, setdencrypttext] = useState("");
  const [substitution, setSubstitution] = useState("");

  // Function to create a substitution map from the user input
  function createSubstitutionMap(substitution) {
    const substitutionMap = new Map();
    const pairs = substitution.split(",");
    for (const pair of pairs) {
      const [key, value] = pair.split(":");
      substitutionMap.set(key, value);
    }
    return substitutionMap;
  }

  // Function to encrypt the plaintext using the substitution cipher
  function encrypt(plaintext, substitution) {
    const substitutionMap = createSubstitutionMap(substitution);
    let encrypttext = "";
    for (let i = 0; i < plaintext.length; i++) {
      let character = plaintext[i];
      // If the character is in the substitution map, encrypt it
      if (substitutionMap.has(character)) {
        encrypttext += substitutionMap.get(character);
      } else {
        encrypttext += character;
      }
    }
    return encrypttext;
  }

  // Function to decrypt the encrypttext using the substitution cipher
  function decrypt(dencrypttext, substitution) {
    const substitutionMap = createSubstitutionMap(substitution);
    const reverseMap = new Map([...substitutionMap].map(([a, b]) => [b, a]));
    let dplaintext = "";
    for (let i = 0; i < dencrypttext.length; i++) {
      let character = dencrypttext[i];
      // If the character is in the reverse substitution map, decrypt it
      if (reverseMap.has(character)) {
        dplaintext += reverseMap.get(character);
      } else {
        dplaintext += character;
      }
    }
    return dplaintext;
  }

  // Handle the form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (substitution.length < plaintext.length) {
      alert("Please enter substitution values for all 26 letters.");
      return;
    }
    let encrypttext = encrypt(plaintext, substitution);
    setencrypttext(encrypttext);
  }

  // Handle the decryption form submission
  function handleDecryption(event) {
    event.preventDefault();
    if (substitution.length < dencrypttext.length) {
      alert("Please enter substitution values for all 26 letters.");
      return;
    }
    let dplaintext = decrypt(dencrypttext, substitution);
    setdPlaintext(dplaintext);
  }

  return (
    <div>
    <h1>Monoalphabetic Cipher</h1>
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

export default MonoalphabeticCipher;
