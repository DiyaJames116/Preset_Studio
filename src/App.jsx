import { useEffect, useRef, useState } from 'react';
import heic2any from 'heic2any';
import { ImageStage } from './components/ImageStage';
import { EditorPanel } from './components/EditorPanel';
import { PresetGrid } from './components/PresetGrid';
import { UploadPanel } from './components/UploadPanel';
import { defaultAdjustments, presetCategories, presets, processImage } from './utils/presets';

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

export default function App() {
  const [imageSrc, setImageSrc] = useState('');
  const [fileName, setFileName] = useState('');
  const [imageElement, setImageElement] = useState(null);
  const [isConvertingHeic, setIsConvertingHeic] = useState(false);
  const [adjustments, setAdjustments] = useState(defaultAdjustments);
  const [editedUrl, setEditedUrl] = useState('');
  const [thumbnails, setThumbnails] = useState({});
  const [compareMode, setCompareMode] = useState(false);
  const [comparePosition, setComparePosition] = useState(54);
  const [format, setFormat] = useState('png');
  const [activeCategory, setActiveCategory] = useState(presetCategories[0]);
  const objectUrlRef = useRef('');

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
    };
  }, []);

  function isHeicFile(file) {
    return file.type === 'image/heic' || file.type === 'image/heif' || /\.heic$/i.test(file.name);
  }

  async function getWorkingImageUrl(file) {
    if (!isHeicFile(file)) {
      return {
        imageUrl: URL.createObjectURL(file),
        displayName: file.name,
      };
    }

    setIsConvertingHeic(true);

    try {
      const converted = await heic2any({
        blob: file,
        toType: 'image/jpeg',
        quality: 0.9,
      });

      const convertedBlob = Array.isArray(converted) ? converted[0] : converted;
      const convertedName = file.name.replace(/\.heic$/i, '.jpg');

      return {
        imageUrl: URL.createObjectURL(convertedBlob),
        displayName: convertedName,
      };
    } finally {
      setIsConvertingHeic(false);
    }
  }

  useEffect(() => {
    if (!imageElement) return;

    const { dataUrl } = processImage({
      image: imageElement,
      presetId: adjustments.presetId,
      adjustments,
      outputWidth: 1600,
      type: format === 'jpg' ? 'image/jpeg' : 'image/png',
    });

    setEditedUrl(dataUrl);
  }, [adjustments, format, imageElement]);

  useEffect(() => {
    if (!imageElement) return;

    const nextThumbnails = {};
    presets.forEach((preset) => {
      nextThumbnails[preset.id] = processImage({
        image: imageElement,
        presetId: preset.id,
        adjustments: { ...defaultAdjustments, presetId: preset.id },
        outputWidth: 360,
      }).dataUrl;
    });
    setThumbnails(nextThumbnails);
  }, [imageElement]);

  async function handleFileSelect(file) {
    if (!file) return;
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
    }

    try {
      const { imageUrl, displayName } = await getWorkingImageUrl(file);
      objectUrlRef.current = imageUrl;
      setImageSrc(imageUrl);
      setFileName(displayName);

      setEditedUrl('');
      setThumbnails({});
      const loadedImage = await loadImage(imageUrl);
      setImageElement(loadedImage);
    } catch (error) {
      setImageSrc('');
      setFileName('');
      setImageElement(null);
      setEditedUrl('');
      setThumbnails({});
      console.error('Failed to load image', error);
    }
  }

  function handleAdjustmentChange(key, value) {
    setAdjustments((current) => ({ ...current, [key]: value }));
  }

  function handlePresetSelect(presetId) {
    const nextPreset = presets.find((preset) => preset.id === presetId);
    if (nextPreset) {
      setActiveCategory(nextPreset.category);
    }
    setAdjustments((current) => ({ ...current, presetId }));
  }

  function handleDownload() {
    if (!imageElement) return;

    const mimeType = format === 'jpg' ? 'image/jpeg' : 'image/png';
    const extension = format === 'jpg' ? 'jpg' : 'png';
    const { dataUrl } = processImage({
      image: imageElement,
      presetId: adjustments.presetId,
      adjustments,
      type: mimeType,
      quality: 0.94,
    });

    const anchor = document.createElement('a');
    anchor.href = dataUrl;
    anchor.download = `${fileName.replace(/\.[^/.]+$/, '') || 'preset-photo'}-${adjustments.presetId}.${extension}`;
    anchor.click();
  }

  const activePreset = presets.find((preset) => preset.id === adjustments.presetId) || presets[0];

  return (
    <main className="min-h-screen bg-haze px-4 py-6 font-body sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-5 rounded-[32px] border border-white/10 bg-white/[0.04] px-6 py-7 shadow-panel lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.45em] text-white/45">Preset Studio</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Warm orange light, neon makeup glow, and cinematic film looks.
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-mist/75">
            Upload one image, preview multiple aesthetic presets instantly, fine-tune with sliders,
            compare against the original, and export a polished PNG or JPG without any backend or paid API.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-[320px,minmax(0,1fr)]">
          <div className="space-y-6">
            <UploadPanel
              previewUrl={imageSrc}
              onFileSelect={handleFileSelect}
              fileName={fileName}
              isConvertingHeic={isConvertingHeic}
            />
            <EditorPanel
              adjustments={adjustments}
              compareMode={compareMode}
              comparePosition={comparePosition}
              format={format}
              onAdjustmentChange={handleAdjustmentChange}
              onCompareModeChange={setCompareMode}
              onComparePositionChange={setComparePosition}
              onFormatChange={setFormat}
              onDownload={handleDownload}
            />
          </div>

          <div className="space-y-6">
            <ImageStage
              originalUrl={imageSrc}
              editedUrl={editedUrl}
              compareMode={compareMode}
              comparePosition={comparePosition}
              presetName={activePreset.name}
              onComparePositionChange={setComparePosition}
            />
            <PresetGrid
              presets={presets}
              categories={presetCategories}
              thumbnails={thumbnails}
              selectedPresetId={adjustments.presetId}
              activeCategory={activeCategory}
              onCategorySelect={setActiveCategory}
              onSelect={handlePresetSelect}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
