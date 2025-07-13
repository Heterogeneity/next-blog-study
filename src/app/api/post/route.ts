import {db} from "@/db";

export async function GET() {
    return new Response('hello world', {status: 200});

}

export async function POST(req: Request) {
    const {slug, title, category} = await req.json()
    try {
        const existingPost = await db.blog.findUnique({
            where: {slug: slug}
        })
        if (existingPost) {
            await db.blog.update({
                where: {slug: slug},
                data: {
                    view_count: {increment: 1}
                }
            })
        } else {
            await db.blog.create({
                data: {
                    slug: slug,
                    title: title,
                    category: category
                }
            })
        }
    } catch (err) {
        console.log(err)
        return new Response("失败", {status: 500})
    }
    return new Response("成功", {status: 200})
}