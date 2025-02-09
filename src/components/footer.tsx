import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className=' text-white py-6'>
            <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center'>
                <div className='flex space-x-4 mb-4 md:mb-0'>
                    <Link href={'https://twitter.com/aashishly'}>
                        <Twitter className='text-white hover:text-gray-400 transition-colors' />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/aashishly/'}>
                        <Linkedin className='text-white hover:text-gray-400 transition-colors' />
                    </Link>
                </div>
                <div className='text-sm text-gray-400 text-center md:text-left'>
                    © {new Date().getFullYear()} Copyright GLOBAL SERVICES /{' '}
                    <a
                        href='mailto:aashishsingh.aec@gmail.com'
                        className='hover:text-white'
                    >
                        aashishsingh.aec@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
