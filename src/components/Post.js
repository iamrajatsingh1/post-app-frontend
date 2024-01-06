import React from 'react';
import { formatTimeRelToCurrDate } from '../utils/date';
import { CommentIcon } from '../icons/Chat_Bubble_Icon';

export const Post = ({ post }) => {
    const postCreationTime = formatTimeRelToCurrDate(post.createdAt);
    return <div className='border-solid border-2 rounded-lg border-borderGrey-500 bg-[#26292D] p-3 max-w-3xl flex flex-col gap-2'>
        <div className='flex gap-3'>
            <img className='rounded-full w-11 h-11' alt='profile-pic' src={post.profileImage} />
            <div className='flex flex-col'>
                <span className='text-primaryTextColor font-medium text-base'>
                    {post.anonymous ? "Anonymous" : post.username}
                </span>
                <span>{postCreationTime}</span>
            </div>
        </div>
        <div className="text-base rounded-lg bg-[#191920] flex gap-3 p-3.5">
            <div className='rounded-full p-4 bg-[#26292D] h-[48px] w-[48px] flex justify-center items-center'>👋</div>
            <span>
                {post.content}
            </span>
            
        </div>
        {post.replies &&
            <div className='flex gap-2 items-center'>
                <CommentIcon className/>
                <div className="text-base">{post.replies.length} comments</div>
            </div>
        }
    </div>
}