import {MDXRemote} from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {highlight} from "sugar-high";


function Table({data}: any) {
    let headers = data.headers.map((header: any, index: any) => (
        <th key={index}>{header}</th>
    ))
    let rows = data.rows.map((row: any, index: any) => (
        <td key={index}>{row}</td>
    ))
    return (
        <table>
            <thead>
            <tr>{headers}</tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

function Blockquote(props: any) {
    return <blockquote
        className='bg-blue-200 dark:bg-blue-950 dark:bg-opacity-30 bg-opacity-30 p-4 rounded-md blockquote' {...props}/>
}

function Code({children, ...props}: any) {
    let codeHTML = highlight(children)
    return (<code dangerouslySetInnerHTML={{__html: codeHTML}} {...props}/>)
}

function CustomLink(props: any) {
    let href = props.href
    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        )
    }

    if (href.startsWith('#')) {
        return (
            <a {...props}></a>
        )
    }

    return <a target='_blank' rel='noonpener noreferrer' {...props} />
}

function RoundedImage(props: any) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function slugify(str: string) {
    return str.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')
        .replace(/&/g, '和')
        .replace(/--+/g, '-')
}

function createHeading(level: number) {
    const Heading = ({children}: any) => {
        let slug = slugify(children)
        return React.createElement(
            `h${level}`,
            {id: slug},
            [
                React.createElement('a', {href: `#${slug}`, key: `link-${slug}`, className: 'anchor'},)
            ],
            children
        )
    }
    Heading.displayName = `Heading${level}`
    return Heading
}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
    code: Code,
    blockquote: Blockquote,
    Table
}

export default function CustomMDX(props: any) {
    return (
        <MDXRemote
            {...props}
            components={{...components, ...(props.components || {})}}/>
    )
}