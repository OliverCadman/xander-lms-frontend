export const loadKlipseScript = (callback) => {
  const existingScript = document.getElementById('klipse-script');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src =
      "http://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js";


    script.id = 'klipse-script';
    document.head.appendChild(script);
    
    script.onload = () => {
      if (callback) return callback();
    }
  }
  
      if (existingScript && callback) callback();

      return true;
}

export const unloadKlipseScript = () => {
  const existingScript = document.getElementById('klipse-script');

  if (existingScript) {
    document.head.removeChild(existingScript);
    return;
  } else {
    return;
  }
}
