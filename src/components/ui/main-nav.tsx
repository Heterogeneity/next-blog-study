"use client"

import * as React from "react"
import Link from "next/link"

import {cn} from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Icons} from "@/components/ui/icons";
import {ModeToggle} from "@/components/ui/mode-toggle";
import {POSTS} from "@/lib/constants";



export function MainNav({className}:{className?:string}) {
    return (
        <div className={cn('flex flex-col items-center justify-between md:flex-row md:items-center pt-8',className)}>
            <Link href={'/'}>
                <div className='flex items-center justify-between w-32'>
                    <Icons.logo/>
                    <p>Heterogeneity</p>
                </div>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>文章列表</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white dark:bg-black">
                                {POSTS.map((post) => (
                                    <ListItem
                                        key={post.title}
                                        title={post.title}
                                        href={post.href}
                                    >
                                        {post.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                关于
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className='flex items-center justify-between w-20'>
                <ModeToggle/>
                <Link href='/rss'>
                    <Icons.rss className='h-6 w-6'/>
                </Link>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
            <a
                    ref={ref}
                    className={cn(
                        "block bg-gray-100 dark:bg-gray-800 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
