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
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
