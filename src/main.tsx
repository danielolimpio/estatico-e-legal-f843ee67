import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Esconde o conteúdo SEO estático somente após o app React iniciar.
// Se o JS falhar/estiver desabilitado, o conteúdo permanece visível (indexável e acessível).
requestAnimationFrame(() => {
  const seo = document.getElementById("seo-content");
  if (seo) seo.style.display = "none";
});
