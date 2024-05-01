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

  const cryptoWorker = new Worker("crypto.js");
  cryptoWorker.onmessage = (e) => {
    const keypair = e.data;
    cryptoWorker.terminate();

    document.getElementById("privateKey").innerHTML = keypair.private;
    document.getElementById("publicKey").innerHTML = keypair.public;

    for (let button of document.getElementsByClassName("button--clipboard")) {
      button.classList.remove("invisible");
    }
  };
})();
