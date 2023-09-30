import React from 'react'
import { SendOutlined } from "@ant-design/icons"

const PostReview = () => {
  let postReview = {
    names: ["TeamLead", "ProjectManager", "HumanResources"],
    times: ["5 hours ago", "10 hours ago", "10 mins ago"],
    reviewContents: ["As a fresher knowledge looks good.We can go ahead with onboarding process.",
      "As a fresher knowledge looks good.We can hire the candidate. ",
      "Yeah, whatever"]
  }
  return (
    <div className='flex flex-col h-[257px] rounded-md bg-white shadow-xl overflow-y-scroll'>
      <div className='p-4 text-left '>
        <div className='w-[90%] text-[24px]
             text-[#B7B4B4] border-b flex relative
             border-[#B7B4B4] p-2 text-left ' >
          <h1 className='text-left'>Post Review</h1>
          <SendOutlined className='absolute right-0 bottom-3' />
        </div>
        <div>
          <div className='mt-3 mb-2 '>

            <div className='flex flex-row items-center'>
              <h6 className='font-bold text-[16px] mr-4 '>@TeamLead</h6> <span className='text-[14px]'>5 hours ago</span>
            </div>
            <div>
              <p>As a fresher knowledge looks good. We can go ahead with onboarding process.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='mt-3 mb-2'>

            <div className='flex flex-row items-center'>
              <h6 className='font-bold text-[16px] mr-4 '>@ProjectManager</h6> <span className='text-[14px]'>10 hours ago</span>
            </div>
            <div>
              <p>As a fresher knowledge looks good.We can hire the candidate.</p>
            </div>

          </div>
        </div>
        <div>
          <div className='mt-3 mb-2 '>

            <div className='flex flex-row items-center'>
              <h6 className='font-bold text-[16px] mr-4 '>@TeamLead</h6> <span className='text-[14px]'>5 hours ago</span>
            </div>
            <div>
              <p>As a fresher knowledge looks good. We can go ahead with onboarding process.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PostReview