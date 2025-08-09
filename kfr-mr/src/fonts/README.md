# Fonts Directory

This directory contains custom fonts used in the project.

## Required Fonts

### Rakesly Font
- **File**: `Rakesly.woff2`
- **Usage**: Main headings in the breadcrumb component
- **Status**: ⚠️ **NOT ADDED YET** - Currently using Georgia as fallback
- **Source**: You need to add the Rakesly font file here

### Helvetica Neue
- **Usage**: Small text and descriptions in the breadcrumb component
- **Status**: ✅ **AVAILABLE** - This font is already available as a system font

## How to Add Rakesly Font

1. **Get the Rakesly font file** (preferably in .woff2 format)
2. **Place it in this directory** as `Rakesly.woff2`
3. **Uncomment the font import** in `src/app/layout.tsx`:
   ```typescript
   // Uncomment these lines:
   import localFont from "next/font/local";
   
   const rakesly = localFont({
     src: '../fonts/Rakesly.woff2',
     variable: '--font-rakesly',
     display: 'swap',
   });
   ```
4. **Add the font variable** to the body className:
   ```typescript
   className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${spectral.variable} ${inter.variable} ${rakesly.variable} antialiased`}
   ```
5. **Update the Breadcrumb component** to use the font variable:
   ```typescript
   style={{ fontFamily: 'var(--font-rakesly), Georgia, serif' }}
   ```

## Current Fallback

Until the Rakesly font is added, the component will use **Georgia** as a fallback font for the main headings.
