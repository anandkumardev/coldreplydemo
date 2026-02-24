import SectionTitle from '@/components/SectionTitle';

import {Mails, SquareMousePointerIcon, SendHorizontal } from 'lucide-react';

export default function HowItWorksSection() {
    const data = [
        {
            title: 'Paste the Email',
            description: 'Paste the cold email you received in your inbox. No formatting needed.',
            icon: Mails,
        },
        {
            title: 'Choose Your Intent and Tone',
            description: 'Not interested, ask for pricing, book a call, or follow up later. Pick what you actually want to say.',
            icon: SquareMousePointerIcon,
        },
        {
            title: 'Copy and Send',
            description: 'Get a short, polite, human-sounding reply instantly. Copy it and send in seconds.',
            icon: SendHorizontal,
        },
    ];
    return (
        <section   id='howitworks' className='flex flex-col items-center justify-center'>
            <SectionTitle title='How It Works' description='Paste the email. Select your intent. Generate  a smart, human-sounding reply instantly. Thats it.' />

            <div className='mt-14 flex flex-wrap items-center justify-center gap-10'>
                {data.map((item, index) => (
                    <div key={index} className='rounded-[14px] bg-neutral-400/80 p-0.5 pt-4 transition-all duration-300 hover:-translate-y-1'>
                        <div className='relative flex max-w-90 flex-col items-center rounded-xl bg-white p-6 pb-10'>
                            <div className='absolute -top-8 rounded-full bg-neutral-900 p-3'>
                                <item.icon className='size-6 text-white' />
                            </div>
                            <h3 className='mt-8 text-center text-base font-medium'>{item.title}</h3>
                            <p className='mt-6 text-center text-gray-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
