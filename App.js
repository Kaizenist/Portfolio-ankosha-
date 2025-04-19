import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9f5ec',
      padding: '2rem',
      fontFamily: 'sans-serif',
      color: '#333'
    }}>
      <header style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <motion.h1 
          style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ankosha Banerjee
        </motion.h1>
        <motion.p 
          style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m a passionate Illustrator, digital artist, and animator, known for my dedication, creativity, and tireless work ethic. I pour my heart into every piece, crafting visually compelling stories that come to life on screen.
        </motion.p>
        <div style={{ marginTop: '1.5rem' }}>
          <a href="https://linktr.ee/ankoarts?utm_source=linktree_profile_share&ltsid=1289d837-2186-40b1-bff1-b16378321489" target="_blank" rel="noopener noreferrer"
             style={{
               display: 'inline-flex',
               alignItems: 'center',
               padding: '0.5rem 1rem',
               backgroundColor: '#fff',
               border: '1px solid #ccc',
               borderRadius: '8px',
               textDecoration: 'none',
               color: '#333'
             }}>
            Explore My Links <ExternalLink style={{ marginLeft: '0.5rem' }} size={16} />
          </a>
        </div>
      </header>

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {[1, 2, 3, 4].map((id) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.03 }}
            style={{
              backgroundColor: '#fffaf0',
              padding: '1rem',
              borderRadius: '16px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ height: '150px', backgroundColor: '#ddd', borderRadius: '12px', marginBottom: '1rem' }}></div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Project {id}</h2>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              A brief description of the artwork or animation project showcased here.
            </p>
          </motion.div>
        ))}
      </main>

      <footer style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.875rem', color: '#777' }}>
        © {new Date().getFullYear()} Ankosha Banerjee. All rights reserved.
      </footer>
    </div>
  );
}