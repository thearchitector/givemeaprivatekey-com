"use strict";
(function () {
  const r = new ClipboardJS(".button--clipboard");

  r.on("success", function (e) {
    e.clearSelection();
    e.trigger.classList.add("tooltip--clipboard");

    setTimeout(function () {
      e.trigger.classList.remove("tooltip--clipboard");
      e.trigger.blur();
    }, 500);
  });

  const pki = forge.pki;
  pki.rsa.generateKeyPair({ bits: 2048, workers: -1 }, function (_, keypair) {
    const publicPEM = pki.publicKeyToPem(keypair.publicKey);
    const privatePEM = pki.privateKeyToPem(keypair.privateKey);

    document.getElementById("privateKey").innerHTML = privatePEM;
    document.getElementById("publicKey").innerHTML = publicPEM;

    for (let button of document.getElementsByClassName("button--clipboard")) {
      button.classList.remove("invisible");
    }
  });
})();
