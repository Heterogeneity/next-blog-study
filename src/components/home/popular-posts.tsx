import {popularPosts} from "@/lib/placeholder-data";
import {Icons} from "@/components/ui/icons";


export default function PopularPosts() {
    return(
        <ul className='mt-4'>
            {popularPosts.map(popularPost=>(
                <li
                    key={popularPost.title}
                    className='flex items-center gap-2 group cursor-pointer p-4 rounded-xl text-sm my-2 hover:text-blue-500'
                >
                   <Icons.arrowRight
                    className='h-6 w-6 group-hover:translate-x-1 transition-all'
                   />
                    <p>{popularPost.title}</p>
                </li>
            ))}
        </ul>
    )
}