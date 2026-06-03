import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ZeusAI from "./pages/ZeusAI";
import Staking from "./pages/Staking";
import FlashLoans from "./pages/FlashLoans";
import CartaoAurum from "./pages/CartaoAurum";
import Exchange from "./pages/Exchange";
import Plataforma from "./pages/Plataforma";
import Cartoes from "./pages/Cartoes";
import Seguranca from "./pages/Seguranca";
import SobreNos from "./pages/SobreNos";
import Carreiras from "./pages/Carreiras";
import Imprensa from "./pages/Imprensa";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import Docs from "./pages/Docs";
import FAQ from "./pages/FAQ";
import Suporte from "./pages/Suporte";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import Cookies from "./pages/Cookies";
import Aurum from "./pages/Aurum";

const queryClient = new QueryClient();

const routes: Array<[string, React.ComponentType]> = [
  ["/zeus-ai", ZeusAI],
  ["/staking", Staking],
  ["/flash-loans", FlashLoans],
  ["/cartao-aurum", CartaoAurum],
  ["/exchange", Exchange],
  ["/plataforma", Plataforma],
  ["/cartoes", Cartoes],
  ["/seguranca", Seguranca],
  ["/sobre-nos", SobreNos],
  ["/carreiras", Carreiras],
  ["/imprensa", Imprensa],
  ["/contato", Contato],
  ["/blog", Blog],
  ["/docs", Docs],
  ["/faq", FAQ],
  ["/suporte", Suporte],
  ["/termos", Termos],
  ["/privacidade", Privacidade],
  ["/cookies", Cookies],
];

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {routes.flatMap(([path, Comp]) => [
              <Route key={path} path={path} element={<Comp />} />,
              <Route key={path + "/"} path={path + "/"} element={<Comp />} />,
            ])}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
