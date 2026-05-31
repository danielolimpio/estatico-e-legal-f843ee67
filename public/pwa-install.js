(function () {
  'use strict';

  // --- Guard: never run inside Lovable preview iframes ---
  var inIframe = (function () {
    try { return window.self !== window.top; } catch (e) { return true; }
  })();
  var host = window.location.hostname || '';
  var isPreviewHost =
    host.indexOf('id-preview--') !== -1 ||
    host.indexOf('lovableproject.com') !== -1 ||
    host.indexOf('lovable.app') !== -1;

  if (inIframe || isPreviewHost) {
    // Clean up any previously registered SW in preview contexts to avoid stale shells.
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (regs) {
        regs.forEach(function (r) { r.unregister(); });
      }).catch(function () {});
    }
    return;
  }

  // --- Register the minimal SW (required for Chrome install prompt) ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {});
    });
  }

  // --- Detect environment ---
  var ua = navigator.userAgent || '';
  var isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  var isStandalone =
    window.matchMedia && window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  if (isStandalone) return; // already installed

  var deferredPrompt = null;
  var triggered = false;

  // Capture the native install prompt (Android/Chrome + Desktop Chrome/Edge)
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
  });

  // iOS Safari has no beforeinstallprompt. Use the browser's native Share sheet
  // hint: alert() is a native UI element (not a custom modal/dialog).
  function showIOSNativeHint() {
    // Only Safari supports A2HS on iOS.
    var isSafari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(ua);
    if (!isSafari) return;
    // Native browser alert — fulfills "interfaces nativas do navegador".
    window.alert(
      'Para instalar o Aurum Foundation na sua Tela de Início:\n\n' +
      '1. Toque no botão Compartilhar do Safari\n' +
      '2. Selecione "Adicionar à Tela de Início"'
    );
  }

  function fireNativePrompt() {
    if (triggered) return;
    if (deferredPrompt) {
      triggered = true;
      try {
        deferredPrompt.prompt(); // native Chrome/Edge install UI
        deferredPrompt.userChoice.finally(function () {
          deferredPrompt = null;
        });
      } catch (err) {
        triggered = false;
      }
    } else if (isIOS) {
      triggered = true;
      showIOSNativeHint();
    }
  }

  // User-gesture requirement: fire on the FIRST user click anywhere.
  function onFirstClick() {
    fireNativePrompt();
    document.removeEventListener('click', onFirstClick, true);
    document.removeEventListener('touchend', onFirstClick, true);
  }
  document.addEventListener('click', onFirstClick, true);
  document.addEventListener('touchend', onFirstClick, true);

  // If install completes, stop trying.
  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    triggered = true;
  });
})();
