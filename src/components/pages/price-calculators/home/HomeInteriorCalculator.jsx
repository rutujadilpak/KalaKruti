import React from "react";
import Hero from "./Hero";
import PriceCalculatorIntro from "./PriceCalculatorIntro";
import EstimateSteps from "./EstimateSteps";
import EstimateCarousel from "./EstimateCarousel";
import CalculatorHowItWorks from "./CalculatorHowItWorks";
import HomeInteriorEstimatorFAQs from "./HomeInteriorEstimatorFAQs";

export default function HomeInteriorCalculator() {
    return (
        <div style={{ overflowX: "hidden", width: "100%" }}>
            <Hero />
            <PriceCalculatorIntro />
            <EstimateSteps />
            <EstimateCarousel />
            <CalculatorHowItWorks />
            <HomeInteriorEstimatorFAQs />
        </div>
    );
}
