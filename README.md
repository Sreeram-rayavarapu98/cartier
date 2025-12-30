# Luxury Furniture Website

A sophisticated, Cartier-inspired furniture e-commerce website with immersive 3D product visualization.

## Features

- **Luxury Design**: Elegant, minimalist aesthetic inspired by Cartier's website
- **3D Model Integration**: Interactive 3D product viewers using React Three Fiber
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Responsive Design**: Beautiful on all devices
- **Product Showcase**: Grid-based product listings with hover effects
- **Individual Product Pages**: Detailed product views with 3D model integration

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 3D Models Integration

### Supported Formats

The website supports GLB/GLTF 3D model formats, which are optimized for web use.

### Adding Your 3D Models

1. **Place your models** in the `public/models/` directory:
   ```
   public/
     models/
       sofa.glb
       chair.glb
       table.glb
   ```

2. **Switch to the model loader** in `app/products/[id]/page.tsx`:
   ```typescript
   // Change this import:
   import ModelViewer from '../../components/ModelViewer';
   
   // To this:
   import ModelViewerWithLoader from '../../components/ModelViewerWithLoader';
   
   // And update the component usage:
   <ModelViewerWithLoader modelPath={product.modelPath} />
   ```

3. **Update product data** in `app/products/[id]/page.tsx`:
   ```typescript
   modelPath: '/models/your-model.glb'
   ```

4. **Preload models** (optional, for better performance):
   Add this to your page or component:
   ```typescript
   import { useGLTF } from '@react-three/drei';
   useGLTF.preload('/models/your-model.glb');
   ```

### 3D Model Requirements

- **Format**: GLB (recommended) or GLTF
- **File Size**: Keep under 5MB for optimal loading
- **Optimization**: 
  - Use compressed textures
  - Reduce polygon count where possible
  - Use tools like [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) for optimization

### Generating 3D Models

If you need to create 3D models, consider:

1. **Professional 3D Software**:
   - Blender (free, open-source)
   - 3ds Max
   - Maya
   - Cinema 4D

2. **Photogrammetry**: 
   - Capture real furniture using photogrammetry apps
   - Convert to GLB format

3. **3D Modeling Services**:
   - Hire professional 3D artists
   - Use services like Tulfa, Sketchfab, or TurboSquid

4. **AI Tools** (emerging):
   - Some AI tools can generate 3D models from images
   - Research current AI 3D generation tools

### Current Implementation

The ModelViewer component currently shows a placeholder geometry. Once you add your GLB files to `public/models/`, update the `modelPath` in the product data, and the models will automatically load and be interactive.

## Project Structure

```
app/
  components/
    Navigation.tsx      # Main navigation bar
    Hero.tsx           # Homepage hero section
    ProductCard.tsx    # Product card component
    ModelViewer.tsx    # 3D model viewer component
  products/
    page.tsx           # Products listing page
    [id]/
      page.tsx         # Individual product page with 3D viewer
  page.tsx             # Homepage
  layout.tsx           # Root layout
  globals.css          # Global styles
```

## Technologies Used

- **Next.js 16**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React Three Fiber**: 3D rendering
- **@react-three/drei**: 3D helpers and utilities
- **Framer Motion**: Animations
- **Three.js**: 3D graphics library

## Customization

### Colors & Typography

Edit `app/globals.css` to customize:
- Color scheme
- Font families (currently using Playfair Display for headings, Inter for body)

### Product Data

Update product information in:
- `app/page.tsx` (featured products)
- `app/products/page.tsx` (all products)
- `app/products/[id]/page.tsx` (individual product details)

### Styling

The design follows Cartier's aesthetic:
- Minimalist layouts
- Elegant typography
- Ample white space
- Subtle animations
- Luxury color palette (neutrals, gold accents)

## Build

```bash
npm run build
```

## License

Private project - All rights reserved
