// import {categories} from "@/lib/placeholder-data";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {POSTS} from "@/lib/constants";
export default function TopCategories(){
    return (
        <div className='grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 my-7'>
            {POSTS.map(post=>(
                <Button key={post.title} variant={'secondary'} asChild className='bg-white dark:bg-gray-800 hover:scale-110 transition-all hover:text-blue-500'>
                    <Link href={`/blog/${post.title}`}>
                        {post.title}
                    </Link>
                </Button>
            ))}
        </div>
    )
}