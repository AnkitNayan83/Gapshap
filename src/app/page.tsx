import About from "@/components/About";
import Banner from "@/components/Banner";
import PopularCategories from "@/components/PopularCategories";
import Featured from "@/components/featured";

export default function Home() {
    return (
        <main>
            <Featured />
            <PopularCategories />
            <Banner />
            <About />
        </main>
    );
}
