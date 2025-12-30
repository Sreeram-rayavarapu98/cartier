// Utility to preload and validate GLB models
export async function preloadModel(modelPath: string): Promise<boolean> {
  try {
    const response = await fetch(modelPath, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error(`Failed to verify model at ${modelPath}:`, error);
    return false;
  }
}

export function validateModelPath(modelPath: string): boolean {
  if (!modelPath) return false;
  if (!modelPath.endsWith('.glb') && !modelPath.endsWith('.gltf')) {
    console.warn('Model path should end with .glb or .gltf:', modelPath);
    return false;
  }
  return true;
}

