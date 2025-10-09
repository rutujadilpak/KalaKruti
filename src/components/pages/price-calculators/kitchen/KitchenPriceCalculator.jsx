import React from "react";
import KitchenHeroSection from "./KitchenHeroSection";
import KitchenHero from "./KitchenHero";
import KitchenLayoutSelector from "./KitchenLayoutSelector";
import KitchenHowItWorks from "./KitchenHowItWorks";
import KitchenEstimatorFAQs from "./KitchenEstimatorFAQs";

export default function KitchenPriceCalculator() {
    return (
        <>
            <KitchenHeroSection />
            <KitchenHero />
            <KitchenLayoutSelector />
            <KitchenHowItWorks />
            <KitchenEstimatorFAQs />
        </>
    );
}
