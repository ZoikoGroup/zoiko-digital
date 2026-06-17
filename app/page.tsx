import ContactTransformationSection from "./services-solutions/components/contactsection";
import CoreSolutions from "./home/components/coresolutions";
import CTASection from "./home/components/ctasection";
import SectorExpertiseSection from "./home/components/expertisesection";
import GlobalPresence from "./home/components/globalpresence";
import HeroZWS from "./home/components/homehero";
import InsightsSection from "./home/components/insightsection";
import TrustedByGlobalLeaders from "./home/components/trustedbyglobal";

export default function(){
    return(
        <>
            <HeroZWS/>
            <GlobalPresence/>
            <CoreSolutions/>
            <SectorExpertiseSection/>
            <TrustedByGlobalLeaders/>
            <InsightsSection/>
            <CTASection/>
            <ContactTransformationSection/>
        </>
    )
}