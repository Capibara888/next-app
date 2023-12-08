'use client'
import { usePosts } from '@/store';
import React, { FormEventHandler, useState } from 'react';

export const PostSearch = () => {
    const [search, setSearch] = useState('');
    const getPostsBySearch = usePosts((state) => state.getPostsBySearch)
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        getPostsBySearch(search)
        
    }
  return (
    <form action="" onSubmit={handleSubmit} className='flex flex-nowrap h-10 w-full'>
        <input className='w-[200px] h-8 bg-blue-300 box-border' type="text" placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button  className='w-[60px] h-8 bg-blue-600 border-sky-100' type='submit'>Search</button>
    </form>
  )
}
