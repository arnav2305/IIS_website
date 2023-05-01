import React, { useState } from "react";
import "../Ciphers/common.css";
import { KEYUTIL, RSAKey } from 'jsrsasign';

function Rsa() {
  const [plaintext, setPlaintext] = useState("");
  const [dplaintext, setdPlaintext] = useState("");
  const [encrypttext, setencrypttext] = useState("");
  const [dencrypttext, setdencrypttext] = useState("");
  const [pv, setpv] = useState("");
  const [qv, setqv] = useState("");
  const [ev, setev] = useState("");
  

    function handleSubmit(event){
        event.preventDefault();


        function generateRSAKeyPair() {
            const p = pv;
            const q = qv;
            const n = p * q;
            const phi = (p - 1) * (q - 1);
            let e = ev; // Public key exponent
            while (gcd(e, phi) !== 1) {
              e++;
            }
            const d = modInv(e, phi); // Private key exponent
            return { publicKey: [e, n], privateKey: [d, n] };
          }
          
          // Greatest common divisor
          function gcd(a, b) {
            if (b === 0) {
              return a;
            } else {
              return gcd(b, a % b);
            }
          }
          
          // Modular inverse
          function modInv(a, m) {
            let [x, y] = extendedEuclid(a, m);
            if (x < 0) {
              x += m;
            }
            return x;
          }
          
          // Extended Euclidean algorithm
          function extendedEuclid(a, b) {
            if (b === 0) {
              return [1, 0];
            } else {
              let [x, y] = extendedEuclid(b, a % b);
              return [y, x - Math.floor(a / b) * y];
            }
          }
          
          // Encrypt a message with an RSA public key
          function encryptRSA(message, publicKey) {
            let [e, n] = publicKey;
            let encrypted = '';
            for (let i = 0; i < message.length; i++) {
              let charCode = message.charCodeAt(i);
              let encryptedCharCode = modExp(charCode, e, n);
              encrypted += String.fromCharCode(encryptedCharCode);
            }
            return encrypted;
          }
          
          // Modular exponentiation
          function modExp(base, exponent, modulus) {
            if (modulus === 1) {
              return 0;
            }
            let result = 1;
            base = base % modulus;
            while (exponent > 0) {
              if (exponent % 2 === 1) {
                result = (result * base) % modulus;
              }
              exponent = Math.floor(exponent / 2);
              base = (base * base) % modulus;
            }
            return result;
          }
          
          // Example usage
          let keyPair = generateRSAKeyPair();
          let publicKey = keyPair.publicKey;
          let encryptedMessage = encryptRSA(plaintext, publicKey);
        setencrypttext(encryptedMessage)
    }

    function handleDecryption(event){
        event.preventDefault();
        function generateRSAKeyPair() {
            const p = 17;
            const q = 19;
            const n = p * q;
            const phi = (p - 1) * (q - 1);
            let e = 6; // Public key exponent
            while (gcd(e, phi) !== 1) {
              e++;
            }
            const d = modInv(e, phi); // Private key exponent
            return { publicKey: [e, n], privateKey: [d, n] };
          }
          
          // Greatest common divisor
          function gcd(a, b) {
            if (b === 0) {
              return a;
            } else {
              return gcd(b, a % b);
            }
          }
          
          // Modular inverse
          function modInv(a, m) {
            let [x, y] = extendedEuclid(a, m);
            if (x < 0) {
              x += m;
            }
            return x;
          }
          
          // Extended Euclidean algorithm
          function extendedEuclid(a, b) {
            if (b === 0) {
              return [1, 0];
            } else {
              let [x, y] = extendedEuclid(b, a % b);
              return [y, x - Math.floor(a / b) * y];
            }
          }
          
          // Decrypt a message with an RSA private key
          function decryptRSA(message, privateKey) {
            let [d, n] = privateKey;
            let decrypted = '';
            for (let i = 0; i < message.length; i++) {
              let charCode = message.charCodeAt(i);
              let decryptedCharCode = modExp(charCode, d, n);
              decrypted += String.fromCharCode(decryptedCharCode);
            }
            return decrypted;
          }
          
          // Modular exponentiation
          function modExp(base, exponent, modulus) {
            if (modulus === 1) {
              return 0;
            }
            let result = 1;
            base = base % modulus;
            while (exponent > 0) {
              if (exponent % 2 === 1) {
                result = (result * base) % modulus;
              }
              exponent = Math.floor(exponent / 2);
              base = (base * base) % modulus;
            }
            return result;
          }
          
          // Example usage
          let keyPair = generateRSAKeyPair();
          let privateKey = keyPair.privateKey;
        let decryptedMessage = decryptRSA(encrypttext, privateKey);
        setdPlaintext(decryptedMessage)
    }
 
  return (
    <div>
    <h1>RSA</h1>
    <form onSubmit={handleSubmit} className="enc">
    <div id="container">
        <label htmlFor="pv" className="subheading">
          Enter p
        </label>
        <label>:</label>
        <input
          className="inputfield"
          type="text"
          id="pv"
          value={pv}
          onChange={(event) => setpv(event.target.value)}
        />
      </div>
      <div id="container">
        <label htmlFor="qv" className="subheading">
          Enter q
        </label>
        <label>:</label>
        <input
          className="inputfield"
          type="text"
          id="qv"
          value={qv}
          onChange={(event) => setqv(event.target.value)}
        />
      </div>
      <div id="container">
        <label htmlFor="ev" className="subheading">
          Enter e
        </label>
        <label>:</label>
        <input
          className="inputfield"
          type="text"
          id="ev"
          value={ev}
          onChange={(event) => setev(event.target.value)}
        />
      </div>
    </form>
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
      <div id="btn-div">
      <button type="submit" id="from-btn">Decrypt</button>
      </div>
    </form>
    <div id="output-text"><div>Decrypted message:</div><div id="output-enc">{dplaintext}</div></div>
  </div>
);
}

export default Rsa;
