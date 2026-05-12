import Sidebar from './Sidebar';
export default function AppShell({children}:{children:React.ReactNode}){return <div className='min-h-screen p-4 md:p-8'><div className='mx-auto max-w-7xl grid gap-4 md:grid-cols-[260px_1fr]'><Sidebar/><main className='glass rounded-2xl p-4 md:p-6'>{children}</main></div></div>}
