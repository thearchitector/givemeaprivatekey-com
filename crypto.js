importScripts("vendor/keypair.js");

function fix(str) {
  return str.replace(/\r/g, "") + "\n";
}

const keypair = forge.rsa.generateKeyPair({ bits: 2048 });
const privateKey = fix(forge.pki.privateKeyToPem(keypair.privateKey, 72));
const publicKey = fix(forge.pki.publicKeyToRSAPublicKeyPem(keypair.publicKey, 72));

postMessage({
  public: publicKey,
  private: privateKey,
});
