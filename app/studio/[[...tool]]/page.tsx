'use client';

import React from 'react';

export default function StudioPage() {
  try {
    const { NextStudio } = require('next-sanity/studio');
    const config = require('@/sanity.config').default;
    return <NextStudio config={config} />;
  } catch (err) {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center', background: '#04164B', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyCenter: 'center' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '12px' }}>Sanity Studio Installation Required</h1>
        <p style={{ color: '#94A3B8', maxWidth: '500px', lineHeight: 1.6, margin: '0 auto 24px' }}>
          Sanity packages need to be installed to run the Studio locally. Please run the following command in your terminal:
        </p>
        <code style={{ background: 'rgba(255,255,255,0.1)', padding: '12px 20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#159447' }}>
          npm install sanity next-sanity @sanity/image-url @sanity/vision @portabletext/react
        </code>
      </div>
    );
  }
}
