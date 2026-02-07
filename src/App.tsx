import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Obras from "./pages/Obras";
import Exposicoes from "./pages/Exposicoes";
import Publicacoes from "./pages/Publicacoes";
import Premios from "./pages/Premios";
import Pesquisas from "./pages/Pesquisas";
import Timeline from "./pages/Timeline";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/exposicoes" element={<Exposicoes />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/premios" element={<Premios />} />
          <Route path="/pesquisas" element={<Pesquisas />} />
          <Route path="/timeline" element={<Timeline />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
