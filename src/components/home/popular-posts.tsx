'use client'
import {popularPosts} from "@/lib/placeholder-data";
import {Icons} from "@/components/ui/icons";
import useSWR from "swr";
import {fetcher, fetchUrl} from "@/lib/utils";
import {reportView} from "@/utils/types";
import Link from "next/link";
import PopularPostSkeleton from '@/components/skeleton/popular_posts_skeleton'

export default function PopularPosts() {
    console.log(process.env.NODE_ENV,fetchUrl);
    const {data, error, isLoading} = useSWR(fetchUrl, fetcher)
    if (error) return <div>加载失败</div>
    if (isLoading) return <PopularPostSkeleton/>
    return (
        <ul className='mt-4'>
            {data?.map((post: reportView) => (
                <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
                    <li
                        key={post.title}
                        className='flex items-center gap-2 group cursor-pointer p-4 rounded-xl text-sm my-2 hover:text-blue-500'
                    >
                        <Icons.arrowRight
                            className='h-6 w-6 group-hover:translate-x-1 transition-all'
                        />
                        <p>{post.title}</p>
                    </li>
                </Link>

            ))}
        </ul>
    )
}