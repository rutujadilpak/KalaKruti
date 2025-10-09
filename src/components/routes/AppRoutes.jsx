import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/homepage/HomePage";
import ProjectsList from "../pages/projects/ProjectsList";
import DesignList from "../pages/designs/DesignList";
import DesignDetail from "../pages/designs/DesignDetail";
import DesignCategories from "../pages/designs/DesignCategories";
import DesignCategory from "../pages/designs/DesignCatergory";
import ContactForm from "../pages/enquiries/ContactForm";
import ProjectDetail from "../pages/projects/ProjectDetail";
import FAQ from "../pages/faq/FAQ";
import NotFound from "../pages/notfound/NotFound";
import AboutUsPage from "../pages/about-us/AboutUsPage";
import MagazinePage from "../pages/magazine/MagazinePage";
import HowItWorks from "../pages/second-nav-pages/HowItWorks";
import OfferingPage from "../pages/second-nav-pages/offering-page";
import ModularInteriorsPage from "../pages/second-nav-pages/offerings/ModularInteriors";
import FullHomeInteriorsPage from "../pages/second-nav-pages/FullHomeInteriorsPage";
import LuxuryInteriorPage from "../pages/second-nav-pages/offerings/LuxuryInterior";
import BookOnlineConsultation from "../pages/second-nav-pages/offerings/BookOnlineConsultation";
import LearnMore from "../pages/second-nav-pages/offerings/Learn-more";
import QuoteForm from "../pages/enquiries/QuoteForm";
// Kitchen Components
import KitchenCabinets from "../pages/kitchen-components/KitchenCabinets";
import KitchenHandles from "../pages/kitchen-components/KitchenHandles";
import KitchenFinishes from "../pages/kitchen-components/KitchenFinishes";
// Wardrobe Components
import WardrobeCabinets from "../pages/wardrobe-components/WardrobeCabinets";
import WardrobeHandles from "../pages/wardrobe-components/WardrobeHandles";
import WardrobeFinishes from "../pages/wardrobe-components/WardrobeFinishes";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="projects" element={<ProjectsList />} />
                    <Route path="projects/:id" element={<ProjectDetail />} />
                    <Route path="designs" element={<DesignList />} />
                    <Route path="designs/categories" element={<DesignCategories />} />
                    <Route path="designs/:category" element={<DesignCategory />} />
                    <Route path="designs/:category/:id" element={<DesignDetail />} />
                    <Route path="contact" element={<ContactForm />} />
                    <Route path="faq" element={<FAQ />} />
                    <Route path="aboutus" element={<AboutUsPage />} />
                    <Route path="magazine" element={<MagazinePage />} />
                    <Route path="how-it-works" element={<HowItWorks />} />
                    <Route path="offerings" element={<OfferingPage />} />
                    <Route path="offerings/modular-interiors" element={<ModularInteriorsPage />} />
                    <Route path="designs/full-home-interiors" element={<FullHomeInteriorsPage />} />
                    <Route path="designs/modular-interiors" element={<ModularInteriorsPage />} />
                    <Route path="price-calculators" element={<OfferingPage />} />
                    <Route path="modular-journey" element={<OfferingPage />} />
                    <Route path="kitchen/know-your-kitchen" element={<OfferingPage />} />
                    <Route path="kitchen/price-calculator" element={<OfferingPage />} />
                    <Route path="kitchen/components" element={<OfferingPage />} />
                    <Route path="kitchen/components/cabinets" element={<KitchenCabinets />} />
                    <Route path="kitchen/components/handles" element={<KitchenHandles />} />
                    <Route path="kitchen/components/finishes" element={<KitchenFinishes />} />
                    <Route path="wardrobe/know-your-wardrobe" element={<OfferingPage />} />
                    <Route path="wardrobe/price-calculator" element={<OfferingPage />} />
                    <Route path="wardrobe/components" element={<OfferingPage />} />
                    <Route path="wardrobe/components/cabinets" element={<WardrobeCabinets />} />
                    <Route path="wardrobe/components/handles" element={<WardrobeHandles />} />
                    <Route path="wardrobe/components/finishes" element={<WardrobeFinishes />} />
                    <Route path="designs/luxury-interiors" element={<LuxuryInteriorPage />} />
                    <Route path="offerings/book-online-consultation" element={<BookOnlineConsultation />} />
                    <Route path="offerings/learn-more" element={<LearnMore />} />
                    <Route path="enquiries/quote-form" element={<QuoteForm />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
