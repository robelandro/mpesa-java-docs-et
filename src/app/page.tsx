import Hero from "@/components/ui/hero";
import { SdkFeatures } from "./features/sdk-features";

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto mb-4 sm:mb-6 lg:mb-8">
            <Hero/>
            <SdkFeatures />
        </div>
    )
}