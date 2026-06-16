import Governancecardsection from "./components/governancecard";
import HeroSection from "./components/hero";
import MetricsSection from "./components/metricsection";
import SolutionsPortfolio from "./components/solutioncard";
import WhyChooseUs from "./components/whychoose";
import ScaleSection from "./components/scaleselection";
import ContactTransformationSection from "./components/contactsection";
export default function (){
    return(
        <>
            <HeroSection/>
            <MetricsSection/>
            <Governancecardsection/>
            <SolutionsPortfolio/>
            <WhyChooseUs/>
            <ScaleSection/>
            <ContactTransformationSection/>
            
        </>
    )
}