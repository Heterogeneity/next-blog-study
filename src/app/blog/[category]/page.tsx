import {getBlogPosts} from "@/app/blog/utils";
import {notFound} from "next/navigation";
import Link from "next/link";
import CardCategory from "@/components/ui/CardCategory";
import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";

export async function generateStaticParams(){
    let posts = getBlogPosts()
    return posts.map(post=>({
        category:post.metadata.category
    }))
}

export default function Page({params}: { params: { category: string } }) {
    let posts = getBlogPosts().filter((post) => post.metadata.category === params.category);
    if (!posts.length) {
        notFound()
    }
    return (
        <>
            <Header>
                <Container>
                    <h1 className='title font-semibold text-3xl tracking-wider mt-4 uppercase'>{posts[0]?.metadata.category}</h1>
                </Container>
            </Header>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                    {posts.sort((a, b) => {
                        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                            return -1;
                        }
                        return 1;
                    }).map(post => (
                        <Link href={`/blog/${post.metadata.category}/${post.slug}`} key={post.slug}>
                            <CardCategory title={post.metadata.title} date={post.metadata.publishedAt}
                                          summary={post.metadata.summary}/>
                        </Link>
                    ))}
                </div>
            </Container>
        </>
    )
}