import Head from 'next/head'

export default function SEO({title, description}) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name='description' content={description} />}
    </Head>
  )
}