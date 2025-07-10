import LatestPosts from "@/components/home/latest-posts";
import {MainNav} from "@/components/ui/main-nav";
import Container from "@/components/ui/Container";
import TopCategories from "@/components/home/top-categories";
import PopularPosts from "@/components/home/popular-posts";
export default function Home() {
    return (
        <Container>
            <MainNav/>
            <main className='flex flex-col items-start justify-evenly mt-16 md:flex-row'>
                <div>
                    <h1 className='text-3xl font-bold'>近期发布</h1>
                    <LatestPosts/>
                </div>
                <div className='h-screen'>
                    <div>
                    <h1 className='mb-4 font-bold text-2xl'>热门分类</h1>
                        <TopCategories/>
                    </div>
                    <div className='mt-10 sticky top-8'>
                        <h1 className='mb-4 font-bold text-2xl'>热门文章</h1>
                        <PopularPosts/>
                    </div>
                </div>
            </main>
        </Container>
    );
}
