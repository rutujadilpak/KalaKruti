import React from "react";
import Hero from "./Hero";
import PriceCalculatorIntro from "./PriceCalculatorIntro";
import EstimateSteps from "./EstimateSteps";
import EstimateCarousel from "./EstimateCarousel";
import CalculatorHowItWorks from "./CalculatorHowItWorks";
import HomeInteriorEstimatorFAQs from "./HomeInteriorEstimatorFAQs";

export default function HomeInteriorCalculator() {
    return (
        <>
            <Hero />
            <PriceCalculatorIntro />
            <EstimateSteps />
            <EstimateCarousel />
            <CalculatorHowItWorks />
            <HomeInteriorEstimatorFAQs />
        </>
    );
}
