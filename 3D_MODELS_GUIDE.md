# 3D Models Integration Guide

## Quick Start

The website is ready to display your 3D furniture models! Here's how to add them:

### Step 1: Prepare Your Models

1. **Export as GLB format** (recommended) or GLTF
   - GLB is a binary format, smaller file size
   - GLTF is JSON-based, easier to debug

2. **Optimize your models**:
   - Keep file size under 5MB per model
   - Use compressed textures (JPEG/WebP)
   - Reduce polygon count where possible
   - Tools: [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline), [Blender](https://www.blender.org/)

### Step 2: Add Models to Project

1. Place your `.glb` files in `public/models/`:
   ```
   public/models/
     ├── sofa.glb
     ├── chair.glb
     ├── table.glb
     └── ...
   ```

### Step 3: Enable Model Loading

1. Open `app/products/[id]/page.tsx`

2. Replace the ModelViewer import:
   ```typescript
   // Change from:
   import ModelViewer from '../../components/ModelViewer';
   
   // To:
   import ModelViewerWithLoader from '../../components/ModelViewerWithLoader';
   ```

3. Update the component usage:
   ```typescript
   // Change from:
   <ModelViewer modelPath={product.modelPath} />
   
   // To:
   <ModelViewerWithLoader modelPath={product.modelPath} />
   ```

4. Make sure your product data has the correct model paths:
   ```typescript
   modelPath: '/models/sofa.glb'  // Must match your file name
   ```

### Step 4: Test

1. Navigate to a product page (e.g., `/products/1`)
2. Your 3D model should load and be interactive
3. Users can:
   - Drag to rotate
   - Scroll to zoom
   - Pan to move

## Model Requirements

### File Format
- ✅ GLB (recommended)
- ✅ GLTF
- ❌ OBJ, FBX, 3DS (convert to GLB first)

### File Size
- Target: < 5MB per model
- Maximum: 10MB (may cause slow loading)

### Optimization Tips

1. **Geometry**:
   - Use LOD (Level of Detail) for complex models
   - Remove hidden/internal faces
   - Decimate geometry where possible

2. **Textures**:
   - Use JPEG or WebP (not PNG)
   - Maximum 2048x2048 resolution
   - Use texture compression

3. **Materials**:
   - Use PBR (Physically Based Rendering) materials
   - Optimize material count

## Tools for Creating/Converting Models

### Free Tools
- **Blender**: Full-featured 3D software, can export to GLB
- **gltf-pipeline**: Command-line tool for optimization
- **Online Converters**: Various online tools to convert OBJ/FBX to GLB

### Professional Services
- **Tulfa**: 3D product modeling services
- **Sketchfab**: 3D model marketplace and tools
- **TurboSquid**: Professional 3D models

### Photogrammetry
- Capture real furniture with photogrammetry
- Convert to 3D models
- Tools: RealityCapture, Agisoft Metashape

## Troubleshooting

### Model Not Loading
1. Check file path is correct (case-sensitive)
2. Verify file is in `public/models/` directory
3. Check browser console for errors
4. Ensure file format is GLB/GLTF

### Model Too Large
1. Use gltf-pipeline to compress:
   ```bash
   npx gltf-pipeline -i input.glb -o output.glb -d
   ```
2. Reduce texture sizes
3. Simplify geometry

### Model Looks Wrong
1. Check material/texture paths in GLTF
2. Verify scale (may need to adjust in component)
3. Check lighting setup

### Performance Issues
1. Optimize model file size
2. Use lower LOD versions
3. Preload models (see README.md)

## Current Status

The website currently shows **placeholder geometry** (a golden box) for all products. This is intentional - once you add your GLB files and switch to `ModelViewerWithLoader`, your actual models will display.

## Example Workflow

1. Create/obtain 3D model of your furniture
2. Export as GLB format
3. Optimize using gltf-pipeline
4. Place in `public/models/`
5. Update product data with correct path
6. Switch to ModelViewerWithLoader component
7. Test and enjoy!

## Need Help?

If you need assistance with:
- Creating 3D models
- Converting formats
- Optimizing models
- Integration issues

Feel free to ask, and I can help you with the specific steps!

