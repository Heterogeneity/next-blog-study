import {formatDate, getBlogPosts} from "@/app/blog/utils";
import Container from "@/components/ui/Container";
import Header from "@/components/ui/Header";
import {notFound} from "next/navigation";
import {BreadcrumbWithCustomSeparator} from "@/components/ui/Bread";
import CustomMDX from "@/components/ui/MDX";
import {Fragment} from "react";
import ReportViews from "@/components/ui/ReportViews";
import {reportView} from "@/utils/types";


export async function generateStaticParams() {
    let posts = getBlogPosts()
    return posts.map(post => ({
        slug: post.slug
    }))
}

export default function Page({params}: { params: { category: string, slug: string } }) {
    const post = getBlogPosts().find((post) => post.slug === params.slug)
    let data: reportView = {
        slug: post?.slug,
        title: post?.metadata.title,
        category: post?.metadata.category
    }
    if (!post) {
        return notFound()
    }
    return (
        <Fragment>
            <ReportViews data={data}/>
            <Header>
                <Container>
                    <BreadcrumbWithCustomSeparator category={post.metadata.category} slug={post.slug}/>
                    <h1 className='title font-semibold text-2xl tracking-tight mt-4'>{post.metadata.title}</h1>
                    <div className='flex justify-between items-center mt-2 text-sm'>
                        <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-2'>{formatDate(post.metadata.publishedAt)}</p>
                    </div>
                </Container>
            </Header>
            <Container>
                <article className='prose'>
                    <CustomMDX source={post.content}/>
                </article>
            </Container>
        </Fragment>)
}