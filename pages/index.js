import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ul>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          aliquid dignissimos, optio perspiciatis pariatur vero molestiae
          voluptas quae atque aspernatur quisquam doloribus deleniti ipsum
          commodi minima sit. Quaerat, repellat est?
        </p>
        <Link href="/posts/first-post">First Post</Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
