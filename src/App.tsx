
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import AirFresheners from "./pages/AirFresheners";
import BatteryCells from "./pages/BatteryCells";
import ShoePolishers from "./pages/ShoePolishers";
import CleaningHousehold from "./pages/CleaningHousehold";
import Insecticides from "./pages/Insecticides";
import ParadiseHandWash from "./pages/ParadiseHandWash";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/air-fresheners" element={<AirFresheners />} />
          <Route path="/battery-cells" element={<BatteryCells />} />
          <Route path="/shoe-polishers" element={<ShoePolishers />} />
          <Route path="/cleaning-household" element={<CleaningHousehold />} />
          <Route path="/insecticides" element={<Insecticides />} />
          <Route path="/paradise-hand-wash" element={<ParadiseHandWash />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
