import React from "react";
import Hero from "./Hero";
import PriceCalculatorIntro from "./PriceCalculatorIntro";
import EstimateSteps from "./EstimateSteps";
import EstimateCarousel from "./EstimateCarousel";
import CalculatorHowItWorks from "./CalculatorHowItWorks";

export default function HomeInteriorCalculator() {
    return (
        <>
            <Hero />
            <PriceCalculatorIntro />
            <EstimateSteps />
            <EstimateCarousel />
            <CalculatorHowItWorks />
        </>
    );
}
