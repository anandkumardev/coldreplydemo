import SectionTitle from '@/components/SectionTitle';

import {CheckIcon} from 'lucide-react';

export default function WhyNotChatgpt() {

    return (
        <section id='whynotchatgpt' className='flex flex-col items-center justify-center px-4 md:px-16 lg:px-24'>
            <SectionTitle title='Why Not ChatGPT?' description='Because ColdReply is built specifically for cold email replies.  No prompting. No tweaking. Just instant, ready-to-send responses.' />

            {/* comparsion cards  */}

            <div className='mt-14 flex flex-wrap items-center justify-center gap-10'>

                {/* chatGPT card */}
                <div className="border rounded-xl p-10 hover:shadow-sm  border-slate-200 pr-25">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">ChatGPT</h3>
                    <ul className='space-y-4 text-gray-600'>
                        <li className='flex items-center gap-2'>
                        <div className='rounded-full bg-gray-600 p-1'>
                            <CheckIcon className='size-3 text-white' strokeWidth={2} />
                        </div>
                        <span>Need Prompts</span>
                        </li>

                        <li className='flex items-center gap-2'>
                        <div className='rounded-full bg-gray-600 p-1'>
                            <CheckIcon className='size-3 text-white' strokeWidth={2} />
                        </div>
                        <span>Generic responses</span>
                        </li>

                        <li className='flex items-center gap-2'>
                        <div className='rounded-full bg-gray-600 p-1'>
                            <CheckIcon className='size-3 text-white' strokeWidth={2} />
                        </div>
                        <span>Often too long</span>
                        </li>

                        <li className='flex items-center gap-2'>
                        <div className='rounded-full bg-gray-600 p-1'>
                            <CheckIcon className='size-3 text-white' strokeWidth={2} />
                        </div>
                        <span>Manual tweaking required</span>
                        </li>
                    </ul>
                </div>

                {/* ColdReply card */}
                <div className='rounded-xl border border-slate-200 p-10 pr-25 hover:shadow-md bg-white'>
                   <h3 className="text-2xl font-semibold mb-6 text-gray-900">ColdReply</h3>
                   <ul className='space-y-4 text-gray-700'>
                    <li className='flex items-center gap-2'>
                        <div className='rounded-full bg-green-600 p-1'>
                            <CheckIcon className='size-3 text-white' strokeWidth={2} />
                        </div>
                        <span>No prompts</span>
                    </li>

                    <li className='flex items-center gap-2'>
                        <div className='rounded-full bg-green-600 p-1'>
                            <CheckIcon className='size-3 text-white' strokeWidth={2} />
                        </div>
                        <span>Intent-based replies</span>
                    </li>

                    <li className='flex items-center gap-2'>
                        <div className='rounded-full bg-green-600 p-1'>
                            <CheckIcon className='size-3 text-white' strokeWidth={2} />
                        </div>
                        <span>Short & Ready to send</span>
                    </li>

                    <li className='flex items-center gap-2'>
                        <div className='rounded-full bg-green-600 p-1'>
                            <CheckIcon className='size-3 text-white' strokeWidth={2} />
                        </div>
                        <span>One-Click clean response</span>
                    </li>
                   </ul>
                </div>

            </div>

        </section>
    );
}
