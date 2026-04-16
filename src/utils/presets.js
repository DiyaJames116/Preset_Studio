export const presets = [
  {
    id: 'dreamy',
    name: 'Dreamy',
    category: 'Glow / Dream',
    description: 'Soft-focus diffusion with a cinematic milky haze.',
    filter: {
      brightness: 1,
      contrast: 1,
      saturation: 1,
      hue: 0,
      sepia: 0,
      baseBlur: 1.25,
    },
    haze: {
      opacity: 0.09,
      gradientTopOpacity: 0.16,
      gradientBottomOpacity: 0,
    },
    warmHighlights: 0.08,
  },
  {
    id: 'soft-bloom',
    name: 'Soft Bloom',
    category: 'Glow / Dream',
    description: 'Blurry light bleed layered gently over the image.',
    filter: {
      brightness: 1,
      contrast: 1,
      saturation: 1,
      hue: 0,
      sepia: 0,
      baseBlur: 0.2,
    },
    bloom: {
      blur: 10,
      opacity: 0.18,
      mode: 'screen',
      brightnessBoost: 1,
      saturationBoost: 1,
    },
    warmHighlights: 0.1,
  },
  {
    id: 'soft-glow',
    name: 'Soft Glow',
    category: 'Glow / Dream',
    description: 'Creamy portrait softness with warm diffusion.',
    filter: {
      brightness: 1.03,
      contrast: 0.99,
      saturation: 1.01,
      hue: 0,
      sepia: 0,
      baseBlur: 0.6,
    },
    bloom: {
      blur: 7,
      opacity: 0.15,
      mode: 'screen',
      brightnessBoost: 1.04,
      saturationBoost: 1.02,
    },
    haze: {
      opacity: 0.04,
      gradientTopOpacity: 0.08,
      gradientBottomOpacity: 0,
    },
    warmHighlights: 0.12,
  },
  {
    id: 'light-flare',
    name: 'Light Flare',
    category: 'Light Effects',
    description: 'Warm lens flare with cinematic amber diffusion.',
    filter: {
      brightness: 1.04,
      contrast: 1,
      saturation: 1.02,
      hue: -2,
      sepia: 0.05,
      baseBlur: 0,
    },
    flare: {
      x: 0.1,
      y: 0.18,
      radius: 0.75,
      opacity: 0.28,
      color: '255, 222, 180',
    },
    overlay: {
      start: '#fde68a',
      end: '#fb7185',
      opacity: 0.12,
      mode: 'screen',
    },
    warmHighlights: 0.14,
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    category: 'Light Effects',
    description: 'Dreamy amber light that preserves rich orange tones.',
    filter: {
      brightness: 1.07,
      contrast: 1.03,
      saturation: 1.05,
      hue: -4,
      sepia: 0.12,
      baseBlur: 0,
    },
    overlay: {
      start: '#fb923c',
      end: '#f97316',
      opacity: 0.22,
      mode: 'soft-light',
    },
    bloom: {
      blur: 9,
      opacity: 0.15,
      mode: 'screen',
      brightnessBoost: 1.05,
      saturationBoost: 1.02,
    },
    warmHighlights: 0.2,
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    category: 'Light Effects',
    description: 'Honeyed highlights and warm cinematic midtones.',
    filter: {
      brightness: 1.05,
      contrast: 1.01,
      saturation: 1.04,
      hue: -3,
      sepia: 0.08,
      baseBlur: 0,
    },
    overlay: {
      start: '#fbbf24',
      end: '#fdba74',
      opacity: 0.16,
      mode: 'screen',
    },
    pixelStyle: 'golden-hour',
    warmHighlights: 0.22,
  },
  {
    id: 'vintage-fade',
    name: 'Vintage Fade',
    category: 'Retro / Film',
    description: 'Warm faded blacks with soft grain and sunset undertones.',
    filter: {
      brightness: 1.02,
      contrast: 0.92,
      saturation: 0.92,
      hue: -2,
      sepia: 0.14,
      baseBlur: 0,
    },
    overlay: {
      start: '#f59e0b',
      end: '#78350f',
      opacity: 0.12,
      mode: 'soft-light',
    },
    grain: { amount: 26 },
    pixelStyle: 'lifted-blacks',
    warmHighlights: 0.12,
  },
  {
    id: 'film-dust',
    name: 'Film Dust',
    category: 'Retro / Film',
    description: 'Analog dust and grain with softly warm highlights.',
    filter: {
      brightness: 1,
      contrast: 0.98,
      saturation: 0.98,
      hue: 0,
      sepia: 0.04,
      baseBlur: 0,
    },
    grain: { amount: 22 },
    dust: { count: 80, size: 2.2, opacity: 0.16 },
    warmHighlights: 0.08,
  },
  {
    id: 'polaroid',
    name: 'Polaroid',
    category: 'Retro / Film',
    description: 'Warm instant-film softness with creamy blacks.',
    filter: {
      brightness: 1.04,
      contrast: 0.9,
      saturation: 0.95,
      hue: -2,
      sepia: 0.18,
      baseBlur: 0,
    },
    overlay: {
      start: '#fef3c7',
      end: '#fb923c',
      opacity: 0.12,
      mode: 'screen',
    },
    grain: { amount: 18 },
    pixelStyle: 'lifted-blacks',
    warmHighlights: 0.14,
  },
  {
    id: 'euphoria',
    name: 'Euphoria',
    category: 'Color Effects',
    description: 'Neon magenta-violet mood with glowing warm skin tones.',
    filter: {
      brightness: 1.04,
      contrast: 1.16,
      saturation: 1.22,
      hue: 8,
      sepia: 0,
      baseBlur: 0,
    },
    overlay: {
      start: '#ff4fd8',
      end: '#7c3aed',
      opacity: 0.22,
      mode: 'screen',
    },
    bloom: {
      blur: 9,
      opacity: 0.14,
      mode: 'screen',
      brightnessBoost: 1.03,
      saturationBoost: 1.06,
    },
    pixelStyle: 'euphoria',
    warmHighlights: 0.1,
  },
  {
    id: 'neon-glow',
    name: 'Neon Glow',
    category: 'Color Effects',
    description: 'Pink-purple light with glow and preserved highlight detail.',
    filter: {
      brightness: 1.05,
      contrast: 1.12,
      saturation: 1.34,
      hue: 10,
      sepia: 0,
      baseBlur: 0,
    },
    overlay: {
      start: '#f472b6',
      end: '#8b5cf6',
      opacity: 0.25,
      mode: 'screen',
    },
    bloom: {
      blur: 11,
      opacity: 0.16,
      mode: 'screen',
      brightnessBoost: 1.03,
      saturationBoost: 1.08,
    },
    pixelStyle: 'euphoria',
    warmHighlights: 0.08,
  },
  {
    id: 'cool-blue',
    name: 'Cool Blue',
    category: 'Color Effects',
    description: 'Cinematic shadows with cool steel-blue depth.',
    filter: {
      brightness: 0.98,
      contrast: 1.18,
      saturation: 0.94,
      hue: -10,
      sepia: 0,
      baseBlur: 0,
    },
    overlay: {
      start: '#38bdf8',
      end: '#1d4ed8',
      opacity: 0.16,
      mode: 'multiply',
    },
    pixelStyle: 'cool-blue',
  },
  {
    id: 'warm-pop',
    name: 'Warm Pop',
    category: 'Color Effects',
    description: 'Luminous warmth with rich oranges and protected detail.',
    filter: {
      brightness: 1.07,
      contrast: 1.05,
      saturation: 1.16,
      hue: -4,
      sepia: 0.08,
      baseBlur: 0,
    },
    overlay: {
      start: '#fb923c',
      end: '#fde68a',
      opacity: 0.16,
      mode: 'soft-light',
    },
    pixelStyle: 'warm-pop',
    warmHighlights: 0.2,
  },
  {
    id: 'brighten',
    name: 'Brighten',
    category: 'Clean Enhancements',
    description: 'Clean lift in exposure while keeping warmth intact.',
    filter: {
      brightness: 1.1,
      contrast: 1.02,
      saturation: 1,
      hue: 0,
      sepia: 0,
      baseBlur: 0,
    },
    warmHighlights: 0.08,
  },
  {
    id: 'sharpen',
    name: 'Sharpen',
    category: 'Clean Enhancements',
    description: 'Crisper edges and extra micro-contrast.',
    filter: {
      brightness: 1,
      contrast: 1.04,
      saturation: 1,
      hue: 0,
      sepia: 0,
      baseBlur: 0,
    },
    sharpen: { amount: 0.75 },
  },
  {
    id: 'skin-soft',
    name: 'Skin Soft',
    category: 'Clean Enhancements',
    description: 'Very slight highlight softness with warm portrait diffusion.',
    filter: {
      brightness: 1.01,
      contrast: 0.99,
      saturation: 1,
      hue: 0,
      sepia: 0,
      baseBlur: 0,
    },
    skinSoft: { blur: 5, opacity: 0.12 },
    warmHighlights: 0.1,
  },
];

export const presetCategories = [...new Set(presets.map((preset) => preset.category))];

export const defaultAdjustments = {
  presetId: presets[0].id,
  intensity: 82,
  brightness: 0,
  contrast: 0,
  saturation: 0,
  glow: true,
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function mix(base, target, amount) {
  return base + (target - base) * amount;
}

function pseudoRandom(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function getFilterString(preset, adjustments, intensity) {
  const base = preset.filter || {};
  const brightness = mix(1, base.brightness ?? 1, intensity) + adjustments.brightness / 100;
  const contrast = mix(1, base.contrast ?? 1, intensity) + adjustments.contrast / 100;
  const saturation = mix(1, base.saturation ?? 1, intensity) + adjustments.saturation / 100;
  const hue = (base.hue ?? 0) * intensity;
  const sepia = (base.sepia ?? 0) * intensity;
  const blur = mix(0, base.baseBlur || 0, intensity);

  return [
    `brightness(${clamp(brightness, 0.4, 2.2)})`,
    `contrast(${clamp(contrast, 0.3, 2.4)})`,
    `saturate(${clamp(saturation, 0, 2.8)})`,
    `hue-rotate(${hue}deg)`,
    `sepia(${clamp(sepia, 0, 1)})`,
    `blur(${clamp(blur, 0, 4)}px)`,
  ].join(' ');
}

function applyGradientOverlay(ctx, width, height, overlay, intensity) {
  if (!overlay) return;

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, overlay.start);
  gradient.addColorStop(1, overlay.end);
  ctx.save();
  ctx.globalCompositeOperation = overlay.mode || 'screen';
  ctx.globalAlpha = (overlay.opacity || 0) * intensity;
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

function applyHaze(ctx, width, height, haze, intensity) {
  if (!haze) return;

  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = `rgba(255, 255, 255, ${clamp((haze.opacity || 0) * intensity, 0, 0.45)})`;
  ctx.fillRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(
    0,
    `rgba(255, 255, 255, ${clamp((haze.gradientTopOpacity || 0) * intensity, 0, 0.45)})`
  );
  gradient.addColorStop(
    1,
    `rgba(255, 255, 255, ${clamp((haze.gradientBottomOpacity || 0) * intensity, 0, 0.3)})`
  );
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

function applyBloom(ctx, source, width, height, bloom, intensity) {
  if (!bloom) return;

  ctx.save();
  ctx.globalCompositeOperation = bloom.mode || 'screen';
  ctx.globalAlpha = (bloom.opacity || 0) * intensity;
  ctx.filter = [
    `blur(${mix(0, bloom.blur || 0, intensity)}px)`,
    `brightness(${mix(1, bloom.brightnessBoost || 1, intensity)})`,
    `saturate(${mix(1, bloom.saturationBoost || 1, intensity)})`,
  ].join(' ');
  ctx.drawImage(source, 0, 0, width, height);
  ctx.restore();
}

function applyFlare(ctx, width, height, flare, intensity) {
  if (!flare) return;

  const radius = Math.max(width, height) * (flare.radius || 0.5);
  const gradient = ctx.createRadialGradient(
    width * (flare.x || 0.2),
    height * (flare.y || 0.2),
    0,
    width * (flare.x || 0.2),
    height * (flare.y || 0.2),
    radius
  );
  gradient.addColorStop(0, `rgba(${flare.color || '255,255,255'}, ${clamp((flare.opacity || 0) * intensity, 0, 0.45)})`);
  gradient.addColorStop(0.35, `rgba(${flare.color || '255,255,255'}, ${clamp((flare.opacity || 0) * 0.4 * intensity, 0, 0.22)})`);
  gradient.addColorStop(1, 'rgba(255,255,255,0)');

  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

function applyFilmDust(ctx, width, height, dust, intensity) {
  if (!dust) return;

  ctx.save();
  ctx.fillStyle = `rgba(255, 248, 235, ${clamp((dust.opacity || 0.14) * intensity, 0, 0.3)})`;
  for (let index = 0; index < Math.round((dust.count || 40) * intensity); index += 1) {
    const x = pseudoRandom(index * 10.1 + width) * width;
    const y = pseudoRandom(index * 8.7 + height) * height;
    const size = (0.5 + pseudoRandom(index * 4.2) * (dust.size || 2)) * intensity;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function stylizePixels(ctx, width, height, preset, intensity) {
  if (!preset.pixelStyle && !preset.grain && !preset.warmHighlights) return;

  const imageData = ctx.getImageData(0, 0, width, height);
  const { data } = imageData;

  for (let index = 0; index < data.length; index += 4) {
    const red = data[index];
    const green = data[index + 1];
    const blue = data[index + 2];
    const average = (red + green + blue) / 3;
    const normalizedShadow = clamp((128 - average) / 128, 0, 1) * intensity;
    const normalizedHighlight = clamp((average - 128) / 127, 0, 1) * intensity;

    if (preset.pixelStyle === 'euphoria') {
      data[index] = clamp(red + normalizedHighlight * 24 + normalizedShadow * 6, 0, 255);
      data[index + 1] = clamp(green - normalizedShadow * 4, 0, 255);
      data[index + 2] = clamp(blue + normalizedHighlight * 22 + normalizedShadow * 10, 0, 255);
    }

    if (preset.pixelStyle === 'golden-hour') {
      data[index] = clamp(red + 12 * intensity + normalizedHighlight * 10, 0, 255);
      data[index + 1] = clamp(green + 6 * intensity, 0, 255);
      data[index + 2] = clamp(blue - 8 * intensity, 0, 255);
    }

    if (preset.pixelStyle === 'cool-blue') {
      data[index] = clamp(red - normalizedShadow * 10, 0, 255);
      data[index + 1] = clamp(green - normalizedShadow * 4, 0, 255);
      data[index + 2] = clamp(blue + normalizedShadow * 22 + normalizedHighlight * 4, 0, 255);
    }

    if (preset.pixelStyle === 'warm-pop') {
      data[index] = clamp(red + normalizedHighlight * 12 + 8 * intensity, 0, 255);
      data[index + 1] = clamp(green + normalizedHighlight * 5, 0, 255);
      data[index + 2] = clamp(blue - 10 * intensity, 0, 255);
    }

    if (preset.pixelStyle === 'lifted-blacks') {
      const fade = 16 * intensity;
      data[index] = clamp(red + fade, 0, 255);
      data[index + 1] = clamp(green + fade * 0.6, 0, 255);
      data[index + 2] = clamp(blue + fade * 0.35, 0, 255);
    }

    if (preset.warmHighlights) {
      const warmth = preset.warmHighlights * normalizedHighlight * 255;
      data[index] = clamp(data[index] + warmth, 0, 255);
      data[index + 1] = clamp(data[index + 1] + warmth * 0.45, 0, 255);
      data[index + 2] = clamp(data[index + 2] - warmth * 0.18, 0, 255);
    }
  }

  if (preset.grain) {
    for (let index = 0; index < data.length; index += 4) {
      const grain =
        (pseudoRandom(index * 0.5 + width * 0.37 + height * 0.19) - 0.5) *
        (preset.grain.amount || 18) *
        intensity;
      data[index] = clamp(data[index] + grain, 0, 255);
      data[index + 1] = clamp(data[index + 1] + grain, 0, 255);
      data[index + 2] = clamp(data[index + 2] + grain, 0, 255);
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

function applySharpen(ctx, width, height, amount) {
  const source = ctx.getImageData(0, 0, width, height);
  const output = ctx.createImageData(width, height);
  const src = source.data;
  const dst = output.data;
  const kernel = [0, -1, 0, -1, 5, -1, 0, -1, 0];

  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const offset = (y * width + x) * 4;

      for (let channel = 0; channel < 3; channel += 1) {
        let total = 0;
        let kernelIndex = 0;

        for (let ky = -1; ky <= 1; ky += 1) {
          for (let kx = -1; kx <= 1; kx += 1) {
            const sampleOffset = ((y + ky) * width + (x + kx)) * 4 + channel;
            total += src[sampleOffset] * kernel[kernelIndex];
            kernelIndex += 1;
          }
        }

        dst[offset + channel] = clamp(src[offset + channel] + (total - src[offset + channel]) * amount, 0, 255);
      }

      dst[offset + 3] = src[offset + 3];
    }
  }

  ctx.putImageData(output, 0, 0);
}

function applySkinSoft(ctx, source, width, height, config, intensity) {
  if (!config) return;

  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  ctx.globalAlpha = (config.opacity || 0.1) * intensity;
  ctx.filter = `blur(${mix(0, config.blur || 0, intensity)}px) brightness(${1 + intensity * 0.04})`;
  ctx.drawImage(source, 0, 0, width, height);
  ctx.restore();
}

export function processImage({
  image,
  presetId,
  adjustments,
  outputWidth,
  type = 'image/png',
  quality = 0.92,
}) {
  const preset = presets.find((item) => item.id === presetId) || presets[0];
  const intensity = clamp(adjustments.intensity / 100, 0, 1);
  const ratio = image.naturalWidth / image.naturalHeight || 1;

  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (outputWidth && width > outputWidth) {
    width = outputWidth;
    height = Math.round(outputWidth / ratio);
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  ctx.filter = getFilterString(preset, adjustments, intensity);
  ctx.drawImage(image, 0, 0, width, height);
  ctx.filter = 'none';

  const baseSnapshot = document.createElement('canvas');
  baseSnapshot.width = width;
  baseSnapshot.height = height;
  baseSnapshot.getContext('2d').drawImage(canvas, 0, 0, width, height);

  if (preset.skinSoft) {
    applySkinSoft(ctx, baseSnapshot, width, height, preset.skinSoft, intensity);
  }

  if (adjustments.glow && preset.bloom) {
    applyBloom(ctx, baseSnapshot, width, height, preset.bloom, intensity);
  }

  applyGradientOverlay(ctx, width, height, preset.overlay, intensity);
  applyHaze(ctx, width, height, preset.haze, intensity);
  applyFlare(ctx, width, height, preset.flare, intensity);
  stylizePixels(ctx, width, height, preset, intensity);

  if (preset.sharpen) {
    applySharpen(ctx, width, height, preset.sharpen.amount * intensity);
  }

  applyFilmDust(ctx, width, height, preset.dust, intensity);

  return {
    canvas,
    dataUrl: canvas.toDataURL(type, quality),
  };
}
