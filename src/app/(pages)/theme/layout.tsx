import { type Metadata } from 'next';

import Navbar from '@/components/core/layout/nav';

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export const metadata: Metadata = {
  title: 'aris.sh | theme',
  description: 'creative brain studio.'
};
