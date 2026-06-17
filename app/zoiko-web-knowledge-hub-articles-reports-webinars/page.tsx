import ContactTransformationSection from "../services-solutions/components/contactsection";
import ExecutiveBriefings from "./components/briefingcard";
import IndustryAndDevHub from "./components/industry";
import KnowledgeHub from "./components/webknowledge";

export default function(){
    return (
        <>
            <KnowledgeHub/>
            <IndustryAndDevHub/>
            <ExecutiveBriefings/>
            <ContactTransformationSection/>
        </>
    )
}