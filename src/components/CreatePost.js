import React from 'react';

export const CreatePost = () => {
    const handleOnChange = (e) => {
        console.log(e.target.value);
    };
    const handleOnClick = (e) => {
        e.preventDefault();
        console.log("Post Button clicked")
    }
    return <div className='flex flex-col border-solid border-2 rounded-lg border-borderGrey-500 bg-[#26292D] p-3 max-w-3xl gap-3'>
        <span className='text-primaryTextColor font-medium text-base'>
            Create Post
        </span>
        <div className="text-base rounded-lg bg-[#191920] flex gap-3 p-3.5">
            <div className='rounded-full p-4 bg-[#26292D] h-[48px] w-[48px] flex justify-center items-center'>💬</div>
            <input className='bg-[#191920] w-full' type='text' name='content' placeholder='How are you feeling today?' onChange={e => handleOnChange(e)} />
        </div>
        <button className='w-[111px] h-[43px] rounded text-white bg-[#4A96FF] hover:bg-blue-500 self-end' onClick={(e) => handleOnClick(e)}>Post</button>
    </div>
}