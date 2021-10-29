import DefaultNavbar from '../components/DefaultNavbar';
import Header from '../components/landing/Header';
import WorkingSection from '../components/landing/WorkingSection';

export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <WorkingSection />
                {/* <TeamSection />
                <ContactSection /> */}
            </main>
            {/* <DefaultFooter /> */}
        </>
    );
}
