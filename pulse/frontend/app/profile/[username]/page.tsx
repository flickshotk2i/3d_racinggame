import AppShell from '@/components/layout/AppShell';
export default function Profile({params}:{params:{username:string}}){return <AppShell><div className='h-32 rounded-2xl bg-gradient-to-r from-violet-700 to-cyan-500'/><h2 className='text-2xl mt-4 font-bold'>@{params.username}</h2><p className='text-zinc-400'>Bio, followers, pinned posts, verification badge, themes.</p></AppShell>}
