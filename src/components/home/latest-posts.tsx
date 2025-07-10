import {formatDate, getBlogPosts} from "@/app/blog/utils";
import Link from "next/link";

export default function LatestPosts() {
    let latestPosts = getBlogPosts()
    return (
        <div>
            {
                latestPosts.sort((a, b) => {
                    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                        return -1;
                    }
                    return 1;
                }).map((post) => (
                    <article className='max-h-96 text-wrap max-w-2xl my-7 rounded-2xl px-5 py-2 bg-white dark:bg-gray-800 transition-all ease-in-out hover:translate-y-1 hover:scale-105' key={post.slug}>
                        <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
                        <div className='flex flex-row items-center justify-between'>
                            <h3 className='font-bold py-2 leading-5 hover:text-blue-500'>{post.metadata.title}</h3>
                            <p className='text-sm text-muted-foreground'>{formatDate(post.metadata.publishedAt)}</p>
                        </div>
                        <p className="leading-8 my-5">{post.metadata.summary}</p>
                        </Link>
                    </article>))
            }
        </div>
    )
}