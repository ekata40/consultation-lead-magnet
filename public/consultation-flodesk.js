(() => {
  const handled = new WeakSet();

  window.initConsultationForm = () => {
    const root = document.querySelector("[data-consultation-flodesk]");
    if (!root || handled.has(root)) return;

    const form = root.querySelector('[data-ff-el="form"]');
    const thankYouUrl = new URL("/thank-you", window.location.origin).href;

    // Flodesk can return a redirect to the configured domain. Use this site's
    // thank-you page when Flodesk marks the submission as successful.
    const successObserver = new MutationObserver(() => {
      if (root.dataset.ffStage === "success" || form.classList.contains("fd-has-success")) {
        successObserver.disconnect();
        window.location.assign(thankYouUrl);
      }
    });
    successObserver.observe(root, { attributes: true, attributeFilter: ["data-ff-stage"] });
    successObserver.observe(form, { attributes: true, attributeFilter: ["class"] });

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
      rootEl: root,
    });
  };

  window.initConsultationForm();
})();
