'use client'

import { getPostsBySearch } from '@/services/post';
import React, { FormEventHandler, useState } from 'react';

type Props = {
    onSearch: (value: any[]) => void;
}

export const PostSearch = ({onSearch}: Props) => {
    const [search, setSearch] = useState('');
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const posts = await getPostsBySearch(search);
        onSearch(posts);
    }
  return (
    <form action="" onSubmit={handleSubmit} className='flex flex-nowrap h-10 w-full'>
        <input className='w-[200px] h-8 bg-blue-300 box-border' type="text" placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button  className='w-[60px] h-8 bg-blue-600 border-sky-100' type='submit'>Search</button>
    </form>
  )
}
