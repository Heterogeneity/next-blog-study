'use client'
import {Icons} from '@/components/ui/icons';
import {POSTS} from "@/lib/constants";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {createSubscriber} from "@/lib/actions";
import {useFormState} from 'react-dom'
import {Fragment} from "react";

export default function Footer() {
    const initialSate = {message: "", error: {}}
    const [state, dispatch] = useFormState(createSubscriber, initialSate)
    return (
        <Fragment>
            <footer className='bg-gray-100 py-8 dark:bg-gray-800 mt-10'>
                <div className='container mx-auto px-4 md:px-6'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
                        <div className='space-y-4'>
                            <div className='flex items-center space-x-2'>
                                <Icons.logo
                                    className='h-6 w-6'
                                />
                                <span className='text-md font-semibold'>Coding HeteroGeneity</span>
                            </div>
                            <p className='text-gray-500 dark:text-gray-400 text-sm'>这是一个个人的仿制的Next.js博客，2025年制作。</p>
                            <div className='flex space-x-4'>
                                <a href="https://space.bilibili.com/50025593" target='_blank'
                                   rel='https://space.bilibili.com/50025593' aria-label='Youtube'>
                                    <Icons.bili
                                        className='h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                                    />
                                </a>
                                <a href="https://gitee.com/Sebastian2000" target='_blank'
                                   rel='https://gitee.com/Sebastian2000' aria-label='Youtube'>
                                    <Icons.gitte className='h-6 w-6'
                                    />
                                </a>
                                {/*<a href="#" title='heterox@qq.com' aria-label='Youtube'>*/}
                                {/*    <Icons.email*/}
                                {/*        className='h-6 w-6 hover:text-orange-500 text-orange-300'*/}
                                {/*    />*/}
                                {/*</a>*/}
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='text-md font-semibold'>博客</h3>
                            <ul className='space-y-2 text-sm'>
                                {POSTS.map(post => (
                                    <li className='text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600'
                                        key={post.title}>
                                        <Link href={post.href}>
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='text-md font-semibold'>链接</h3>
                            <ul className='space-y-2 text-sm'>
                                <li>
                                    <a href="mailto:heterox@qq.com"
                                       className='text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600'>
                                        联系我
                                    </a>
                                </li>
                                <li>
                                    <Link href='/privacy-policy'
                                          className='text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600'>
                                        隐私政策
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='text-md font-semibold'>新闻订阅</h3>
                            <p className='text-gray-500 dark:text-gray-400 text-sm'>
                                订阅我们的新闻通讯，以便及时了解最新的新闻和动态。
                            </p>
                            <form action={dispatch}>
                                <div className='flex space-x-2'>
                                    <Input defaultValue='' aria-describedby='email-error' name='email' type='email' placeholder='请输入邮箱地址' className='flex-1'/>
                                    <div id='email-error' aria-label='polite' aria-atomic='true' className='px-1'>
                                        {state?.errors?.email && state.errors.email.map(v=>(
                                            <p key={v} className='text-xs text-red-500'>{v}</p>
                                        ))}
                                        {!state?.errors?.email &&(
                                            <p className='text-xs text-green-500'>{state?.message}</p>
                                        )}
                                    </div>
                                    <Button>订阅</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div
                        className='mt-8 border-t border-gray-300 pt-4 text-center text-xs text-gray-700 dark:text-gray-400 dark:border-gray-700'>
                        &copy; 2025 Coding All Rights Reserved
                    </div>
                </div>
            </footer>
        </Fragment>);
}