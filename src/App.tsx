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
            <Route path="/zeus-ai" element={<ZeusAI />} />
            <Route path="/zeus-ai/" element={<ZeusAI />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/staking/" element={<Staking />} />
            <Route path="/flash-loans" element={<FlashLoans />} />
            <Route path="/flash-loans/" element={<FlashLoans />} />
            <Route path="/cartao-aurum" element={<CartaoAurum />} />
            <Route path="/cartao-aurum/" element={<CartaoAurum />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/exchange/" element={<Exchange />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
