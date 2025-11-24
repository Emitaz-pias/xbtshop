import React from 'react';
import {
  Container,
  Typography,
  Box,
  Link,
} from '@mui/material';

// --- Main Component ---
const Footer = () => {
  const navItems = [
    { title: 'About us', href: '#about-us' },
    { title: 'Working with us', href: '#working-with-us' },
    { title: 'Solutions', href: '#solutions' },
    { title: 'Contacts', href: '#contacts' },
    { title: 'Cookie Policy', href: '#cookie-policy' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        maxWidth: '100vw',
        fontFamily: 'sans-serif',
        backgroundColor: '#102A4C', // Dark blue background from images
        py: 4, // Padding top and bottom
       px:3,
        color: 'white',        
      }}
      
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Column on mobile, row on desktop
            alignItems: 'center',
            justifyContent: 'space-between',
            gap:1, // Spacing between items
          }}
        >
          {/* --- 1. Logo --- */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: '#4FC3F7', // Light blue color for logo
                cursor: 'pointer',
              }}
            >
              1XBET
            </Typography>
          </Box>
          {/* --- 4. SEO keyword links (internal anchors) --- */}
          {/* Keyword links: keep them in DOM for SEO. Toggle visibility via SHOW_KEYWORD_LINKS. */}
          {(() => {
            const SHOW_KEYWORD_LINKS = false; // set true to display links visibly
            const keywords = [
              '1xbetAgent',
              '1xbet e-wallet agent',
              '1xbet agent Bangladesh',
              '1xbet agent india',
              '1xbet agent pakistan',
              '1xbet agent nepal',
              '1xbet agent saudi arab',
              '1xbet officail agent',
              '1xbet agent login',
              '1xbet asian agent programme'
            ];

            const containerProps = SHOW_KEYWORD_LINKS
              ? { sx: { mt: 2, textAlign: 'center', width: '100%' } }
              : { className: 'visually-hidden' };

            return (
              <Box {...containerProps}>
                {SHOW_KEYWORD_LINKS && (
                  <Typography variant="caption" display="block" sx={{ color: '#b0bec5', mb: 0.5 }}>
                    Quick links:
                  </Typography>
                )}
                <Box sx={{ display: SHOW_KEYWORD_LINKS ? 'flex' : 'block', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                  {keywords.map((k) => (
                    <Box
                      key={k}
                      component="a"
                      href="#agent-form-section"
                      title={k}
                      sx={SHOW_KEYWORD_LINKS ? { color: '#b0bec5', textDecoration: 'none', fontSize: 12 } : {}}
                    >
                      {k}
                    </Box>
                  ))}
                </Box>
              </Box>
            );
          })()}

          {/* --- 2. Nav Links --- */}
          <Box
            component="nav"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Column on smallest screens, row on sm+
              flexWrap: 'wrap', // Allow wrapping
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 3 }, // Spacing between links
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                variant="body1"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '500',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: '#b0bec5',
                  },
                }}
              >
                {item.title}
              </Link>
            ))}
          </Box>

          {/* --- 3. Copyright Info --- */}
          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="caption" display="block" sx={{ color: '#b0bec5' }}>
              Copyright © 2007-202X "1xBet". All rights reserved and protected by law.
            </Typography>
            <Typography variant="caption" display="block" sx={{ color: '#b0bec5', mt: 0.5 }}>
              1xBet uses cookies to enhance your website experience.
            </Typography>
            <Typography variant="caption" display="block" sx={{ color: '#b0bec5', mt: 0.5 }}>
              By continuing to use the website, you agree to the use of these cookies.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;