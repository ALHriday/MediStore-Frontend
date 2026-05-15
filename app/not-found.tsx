import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='min-h-screen bg-slate-300 text-2xl font-bold flex flex-col justify-center items-center gap-3'>
            <h2>😢Ooops!!!</h2>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Button><Link href="/">Return Home</Link></Button>
        </div>
    )
}