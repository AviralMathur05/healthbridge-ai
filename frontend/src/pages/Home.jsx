import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/dashboard/Hero";
import HealthScore from "../components/dashboard/HealthScore";
import FeatureGrid from "../components/dashboard/FeatureGrid";

export default function Home() {

    return (

        <MainLayout>

            <Hero />

            <div className="mt-8">

                <HealthScore />

            </div>

            <div className="mt-8">

                <FeatureGrid />

            </div>

        </MainLayout>

    );

}