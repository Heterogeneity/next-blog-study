"use server"
import {z} from "zod"
import {State} from "@/utils/types";
import {db} from "@/db";
import {revalidatePath} from "next/cache";



const FormSchema = z.object({
    id: z.number(),
    email: z.string().min(1, {message: "已订阅"}),
    isSubscribed: z.boolean()
})

const CreateSubscriber = FormSchema.omit({id: true, isSubscribed: true});

export async function createSubscriber(prevState: State, formData: FormData) {
    const validateField = CreateSubscriber.safeParse({
        email: formData.get("email"),
    })
    if (!validateField.success) {
        return {
            errors: validateField.error.flatten().fieldErrors,
            message: "已订阅！"
        }
    }
    const {email} = validateField.data
    try {
        await db.subscriber.create({
            data: {
                email: email
            }
        })
        revalidatePath('/')
        return {message: '感谢订阅！'}
    } catch (err:any) {
           if(err.code==='P2002'){
               return {message:"错误：已订阅！"}
           }
       return {message:'数据库错误！'}
    }
}