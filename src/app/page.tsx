import Banner from "@/components/Banner";
import PopularCategories from "@/components/PopularCategories";
import TrendingPosts from "@/components/TrendingPosts";
import Featured from "@/components/featured";

type Prop = {
    searchParams: { page: string };
};

export default function Home({ searchParams }: Prop) {
    const page = parseInt(searchParams.page) || 1;
    return (
        <main className="scroll-smooth">
            <Featured />
            <PopularCategories />
            <TrendingPosts page={page} />
            <Banner />
        </main>
    );
}
