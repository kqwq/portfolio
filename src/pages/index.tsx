// Redirect to /portfolio

import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Portfolio = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/portfolio');
  }, []);

  return <div />;
};


export default Portfolio;