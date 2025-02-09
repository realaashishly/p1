import About from '@/components/about';
import Arts from '@/components/arts';
import Card from '@/components/card';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Line from '@/components/line';
import Navbar from '@/components/navbar';
import Project from '@/components/project';
import Skills from '@/components/skills';
import Wrapper from '@/components/wrapper';

export default function Home() {
    return (
        <Wrapper>
            <Navbar />
            <Hero />
            <Line text='ABOUT' />
            <About />
            <Line text='PROJECTS' />
            <Project />
            <Line text='ARTS CREATION' />
            <Arts />
            <Line text='SKILLS' />
            <Skills />
            <Line text='CONTACT' />
            <Contact />
            <Footer />
        </Wrapper>
    );
}
