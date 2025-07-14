import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import {responseData} from "@/utils/types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const fetchUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000/api/post" : "https://next-nihilism.vercel.app/api/post"

export const fetcher = (...args: Parameters<typeof fetch>): Promise<responseData> =>fetch(...args).then(res => res.json());