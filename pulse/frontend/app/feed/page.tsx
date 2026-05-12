import AppShell from '@/components/layout/AppShell';
import PostCard from '@/components/feed/PostCard';
import { posts } from '@/lib/dummy';
export default function Feed(){return <AppShell><h2 className='text-2xl font-bold'>Home Feed</h2><div className='mt-4 space-y-3'>{posts.map(p=><PostCard key={p.id} post={p}/>)}</div></AppShell>}
