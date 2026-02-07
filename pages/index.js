import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>B2B SaaS Landing Page</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our B2B SaaS</h1>
        <p className="mb-6 text-lg text-center">Streamline your business with our powerful tools.</p>
        <Link href="/consulting" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Learn About Consulting
        </Link>
      </main>
    </>
  );
}
