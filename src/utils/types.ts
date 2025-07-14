export interface reportView {
    slug: string | undefined
    title: string | undefined
    category: string | undefined
}

export type responseData = {
    category: string
    title: string
    slug: string
}[];

export type State = {
    errors?: {
        email?: string[]
    }
    message?: string | null
}