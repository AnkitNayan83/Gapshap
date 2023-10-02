import Banner from "@/components/Banner";
import PopularCategories from "@/components/PopularCategories";
import TrendingPosts from "@/components/TrendingPosts";
import Featured from "@/components/featured";

export default function Home() {
    return (
        <main className="scroll-smooth">
            <Featured />
            <PopularCategories />
            <TrendingPosts />
            <Banner />
        </main>
    );
}
