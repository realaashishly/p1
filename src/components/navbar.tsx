import { Menu } from 'lucide-react';
import { ModeToggle } from './theme/toggle';

export default function Navbar() {
    return (
        <div className='flex justify-center items-center h-24 mt-6'>
            {/* <div>
                <Menu className='size-8' />
            </div> */}
            <div className='text-3xl'>Aashishly.</div>
            {/* <div>
                <ModeToggle />
            </div> */}
        </div>
    );
}
