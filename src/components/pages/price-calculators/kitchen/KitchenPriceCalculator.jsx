import React from "react";
import KitchenHeroSection from "./KitchenHeroSection";
import KitchenHero from "./KitchenHero";
import KitchenLayoutSelector from "./KitchenLayoutSelector";
import KitchenHowItWorks from "./KitchenHowItWorks";

export default function KitchenPriceCalculator() {
    return (
        <>
            <KitchenHeroSection />
            <KitchenHero />
            <KitchenLayoutSelector />
            <KitchenHowItWorks />
        </>
    );
}
