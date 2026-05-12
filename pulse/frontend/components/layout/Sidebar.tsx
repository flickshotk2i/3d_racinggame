'use client';
import Link from 'next/link';
const links=[['/feed','Home'],['/explore','Explore'],['/messages','Messages'],['/notifications','Notifications'],['/settings','Settings'],['/admin','Admin']];
export default function Sidebar(){return <aside className='glass rounded-2xl p-4 w-full md:w-64'><h1 className='text-xl font-bold text-violet-400'>Pulse</h1><div className='mt-4 space-y-2'>{links.map(([href,label])=><Link key={href} href={href} className='block rounded-xl px-3 py-2 hover:bg-white/10'>{label}</Link>)}</div></aside>}
