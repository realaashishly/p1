import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Aashish Singh - Portfolio',
    description:
        'Welcome to the digital portfolio of Aashish Singh, a visionary software developer and AI artist. Explore innovative web projects, cutting-edge AI art, and interactive designs.',
    keywords: [
        'Aashish Singh',
        'Portfolio',
        'Software Developer',
        'AI Artist',
        'Web Development',
        'Digital Art',
        'Interactive Design',
    ],
    authors: [
        {
            name: 'Aashish Singh',
            url: 'https://aashishsingh.com',
        },
    ],
    openGraph: {
        title: 'Aashish Singh - Portfolio',
        description:
            'Discover innovative projects and creative digital experiences by Aashish Singh. Merging modern web development with artistic AI creations.',
        url: 'https://aashishsingh.com',
        siteName: 'Aashish Singh Portfolio',
        images: [
            {
                url: './profile.png',
                width: 1200,
                height: 630,
                alt: 'Aashish Singh Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            suppressHydrationWarning
        >
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
