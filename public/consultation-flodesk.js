(() => {
  const handled = new WeakSet();

  window.initConsultationForm = () => {
    const root = document.querySelector("[data-consultation-flodesk]");
    if (!root || handled.has(root)) return;

    if (!window.fd) {
      window.FlodeskObject = "fd";
      window.fd = function () {
        (window.fd.q ||= []).push(arguments);
      };

      const version = Math.floor(Date.now() / 120000) * 60;
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://assets.flodesk.com/universal.mjs?v=" + version;
      document.head.append(script);
    }

    handled.add(root);
    window.fd("form:handle", {
      formId: root.dataset.consultationFlodesk,
      rootEl: "[data-consultation-flodesk]",
    });
  };

  window.initConsultationForm();
})();
