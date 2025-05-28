import Deals from '@/components/Deals/Deals';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

const Home = (): React.ReactElement => {
    return (
        <main>
            <SidebarProvider className="flex flex-col gap-4">
                <Header />
                <Hero />
                <Deals />
            </SidebarProvider>
        </main>
    );
};

export default Home;
