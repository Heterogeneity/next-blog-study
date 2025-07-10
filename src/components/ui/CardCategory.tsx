import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {formatDate} from "@/app/blog/utils";

export default function CardCategory({title, summary, date}: {
    title: string,
    summary: string,
    date: string,
}) {
    return (
        <>
            <Card className='w-[350px] h-[290px] shadow-lg'>
                <CardHeader>
                    <CardTitle className='text-2xl'>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{summary}</p>
                </CardContent>
                <CardFooter>
                    <p className='text-sm'>{formatDate(date)}</p>
                </CardFooter>
            </Card>
        </>
    );
}