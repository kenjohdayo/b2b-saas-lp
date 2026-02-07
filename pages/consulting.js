import Head from 'next/head';

export default function Consulting() {
  return (
    <>
      <Head>
        <title>Consulting Services</title>
      </Head>
      <main className="min-h-screen bg-white">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Consulting Services</h1>
          <p className="mb-6 text-lg">We provide expert guidance to help your business thrive.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Strategy</h2>
              <p>Develop a winning strategy to achieve your goals.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Technology</h2>
              <p>Leverage cutting-edge tech to streamline operations.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Support</h2>
              <p>Get ongoing support from our experienced consultants.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
