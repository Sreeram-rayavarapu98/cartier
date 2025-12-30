# Product Viewer Features Documentation

## 🎯 Overview

The Product Viewer is a unified, responsive 3D product visualization system that provides a premium experience on both desktop and mobile devices. It features scroll-based animations, smooth state transitions, and optimized performance.

## 🖥️ Desktop Experience

### Layout
- **Wide layout** with strong negative space
- Content is center-aligned
- Product viewer positioned on left/center
- Product details on the right
- Navigation feels light, premium, and minimal

### Navigation
- **Fixed/sticky navigation bar**
- Transparent initially, becomes solid on scroll
- Smooth fade-in menus on hover
- No sharp dropdowns
- Responsive and elegant cursor interactions

### 3D Product Viewer
- **Large and dominant** product viewer
- Auto-centered model with high-quality lighting
- Neutral background (gradient from neutral-50 to neutral-100)
- **Interaction:**
  - Mouse drag rotates model (smooth inertia)
  - Scroll wheel zoom (limited range)
  - No visible axes or debug UI

### Product State Transitions
- Supports multiple design states (closed → open → expanded)
- **Smooth animated transitions** (no page reload, no hard model swap)
- Animation types:
  - **Open/Close**: Parts rotate outward
  - **Expand/Collapse**: Subtle scale transformation
  - **Transform**: Parts move to new positions
- Camera position remains consistent during transitions
- State buttons appear in bottom-right corner

### Scroll-Based Effects
- Scrolling triggers product animation
- Product can remain sticky during animation range
- After animation completes, normal page scroll resumes
- Smooth spring-based animations

### Micro-Interactions
- **Buttons**: Soft hover glow, fade animations
- **Text**: Appears with slight delay, smooth opacity transitions
- **Icons**: Minimal movement, no bouncing or scaling

## 📱 Mobile Experience

### Layout Philosophy
- **Content-first** approach
- Vertical scrolling is primary navigation
- No complex menus visible by default
- UI is simplified but premium

### Navigation
- **Hamburger menu** with fullscreen overlay
- Smooth slide-in animation
- Close gesture feels natural
- No cluttered submenu stacking

### 3D Product Viewer
- **Full-width viewer** at top of page
- Takes full viewport height (100vh)
- **Interaction:**
  - Touch drag for rotation (360°)
  - Pinch to zoom
  - **Double tap to reset view**
  - Smooth inertia when user releases drag
- No heavy UI overlays
- Minimal state indicators (dots at bottom)

### Product State Change
- Triggered by scroll or small discreet UI buttons
- **Animation:**
  - Smooth and slow
  - Elegant transitions
  - No sudden snapping or popping
  - Maintains camera position

### Scroll-Driven Animation (Key Feature)
- **On scroll:**
  - Product animates gradually
  - Parts open/reveal/transform
  - Product viewer remains sticky for short scroll duration
- **Once animation ends:**
  - Viewer unpins
  - Content scroll continues normally

### Performance Optimization
- Optimized for mid-range devices
- Low-poly or optimized GLB models
- Lazy loading of models
- Fallback static image if WebGL fails
- No lag during touch interaction
- Device pixel ratio capped at 2

## 🔄 Shared Features (Desktop + Mobile)

### Animation Principles
- **Ease-in-out transitions** (no sharp or linear motion)
- Motion feels handcrafted
- Spring-based physics for natural feel
- Duration: 2000ms for state transitions

### Product Focus
- Product is always the hero
- UI never distracts from product
- Minimal labels and icons
- Subtle shadows and soft lighting

### State Consistency
- Same camera angle across states
- Same lighting setup
- Same scale
- Only product parts move during transitions

## 🧩 Component Architecture

### Core Components

1. **`ProductViewer`** (`app/components/ProductViewer.tsx`)
   - Main component that handles both desktop and mobile layouts
   - Manages scroll-based state transitions
   - Handles model loading and error states
   - Responsive design with `isMobile` prop

2. **`ProductStateAnimator`** (`app/components/ProductStateAnimator.tsx`)
   - Handles smooth state transitions
   - Supports multiple animation types (open, expand, transform)
   - Uses Three.js MathUtils for smooth interpolation

3. **`ScrollInteractionController`** (`app/components/ScrollInteractionController.tsx`)
   - Manages scroll-based interactions
   - Maps scroll progress to state indices
   - Provides smooth spring animations

4. **`Button`** (`app/components/Button.tsx`)
   - Premium button component with micro-interactions
   - Soft hover glow effects
   - Smooth scale animations
   - Multiple variants (primary, secondary, outline)

### Usage Example

```tsx
import ProductViewer from '../components/ProductViewer';

const designStates = [
  {
    name: 'Closed',
    modelPath: '/models/product-closed.glb',
    animation: { type: 'open', duration: 2000 },
  },
  {
    name: 'Open',
    modelPath: '/models/product-open.glb',
    animation: { type: 'expand', duration: 2000 },
  },
];

<ProductViewer 
  modelPath="/models/product.glb"
  designStates={designStates}
  isMobile={window.innerWidth < 1024}
/>
```

## ⚙️ Technical Stack

- **Framework**: React (Next.js 16)
- **3D Rendering**: React Three Fiber + Three.js
- **Animations**: Framer Motion
- **Performance**: 
  - Device pixel ratio capped at 2
  - Lazy loading
  - Optimized GLB models
  - Shadow material with low opacity

## 🎨 Visual Effects

- **Subtle shadows** under the model (shadowMaterial opacity: 0.2)
- **Soft lighting** baked into the model
- **No harsh reflections**
- **Premium motion** (no fast or bouncy animations)
- **Gradient backgrounds** (neutral-50 to neutral-100)

## 🏁 Final UX Expectation

- **Desktop**: Feels luxurious and cinematic
- **Mobile**: Feels intimate and tactile
- **Interactions**: Feel effortless
- **User Focus**: Exploring the product, not controls
- **Performance**: Smooth on mid-range devices
- **Accessibility**: Touch-friendly, keyboard navigable

## 📝 Implementation Notes

1. **Model Loading**: Models are auto-scaled and centered
2. **State Management**: Scroll progress drives state changes
3. **Touch Interactions**: Double-tap resets view on mobile
4. **Responsive**: Automatically detects mobile vs desktop
5. **Error Handling**: Graceful fallbacks for WebGL failures
6. **Performance**: DPR capped, lazy loading, optimized rendering

## 🔧 Customization

### Adding New States

```tsx
const designStates = [
  { name: 'State 1', modelPath: '/models/state1.glb', animation: { type: 'open', duration: 2000 } },
  { name: 'State 2', modelPath: '/models/state2.glb', animation: { type: 'expand', duration: 2000 } },
];
```

### Custom Animation Types

Modify `ProductStateAnimator.tsx` to add new animation types:
- `open`: Parts rotate outward
- `expand`: Scale transformation
- `transform`: Position changes

### Adjusting Scroll Range

```tsx
<ScrollInteractionController
  scrollRange={[0, 0.5]} // Animation happens in first 50% of scroll
  totalStates={3}
/>
```

