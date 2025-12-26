import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SobreNos from "./pages/SobreNos";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Cartoes from "./pages/Cartoes";
import Exchange from "./pages/Exchange";
import Plataforma from "./pages/Plataforma";
import Seguranca from "./pages/Seguranca";
import Blog from "./pages/Blog";
import Documentacao from "./pages/Documentacao";
import FAQ from "./pages/FAQ";
import Suporte from "./pages/Suporte";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PoliticaCookies from "./pages/PoliticaCookies";
import TermosDeUso from "./pages/TermosDeUso";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cartoes" element={<Cartoes />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/plataforma" element={<Plataforma />} />
            <Route path="/seguranca" element={<Seguranca />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/documentacao" element={<Documentacao />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
