const canonicalUrl = 'https://www.shubham-kumar.info/';
const metaImage = 'https://www.shubham-kumar.info/images/shubham.jpeg';
const metaDescription =
  'Seasoned Software Engineer especially in Frontend side, with a passion for creating pixel-perfect web experiences';

const defaultSEOConfig = {
  defaultTitle: 'Shubham - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Shubham - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'shubham-kumar.info og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'shubham-kumar.info og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'shubham-kumar.info og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'shubham-kumar.info',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
