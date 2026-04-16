const sliderClass =
  'w-full accent-amber-400';

export function EditorPanel({
  adjustments,
  compareMode,
  comparePosition,
  format,
  onAdjustmentChange,
  onCompareModeChange,
  onComparePositionChange,
  onFormatChange,
  onDownload,
}) {
  return (
    <section className="glass-panel rounded-[28px] border border-white/10 p-5 shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Editor</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white">Preset controls</h2>
        </div>
        <button
          type="button"
          onClick={onDownload}
          className="rounded-full bg-gradient-to-r from-ember to-berry px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
        >
          Export Image
        </button>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="flex items-center justify-between text-sm text-white/70">
            <span>Preset intensity</span>
            <span>{adjustments.intensity}</span>
          </span>
          <input
            className={sliderClass}
            type="range"
            min="0"
            max="100"
            value={adjustments.intensity}
            onChange={(event) => onAdjustmentChange('intensity', Number(event.target.value))}
          />
        </label>

        <label className="space-y-2">
          <span className="flex items-center justify-between text-sm text-white/70">
            <span>Brightness</span>
            <span>{adjustments.brightness}</span>
          </span>
          <input
            className={sliderClass}
            type="range"
            min="-40"
            max="40"
            value={adjustments.brightness}
            onChange={(event) => onAdjustmentChange('brightness', Number(event.target.value))}
          />
        </label>

        <label className="space-y-2">
          <span className="flex items-center justify-between text-sm text-white/70">
            <span>Contrast</span>
            <span>{adjustments.contrast}</span>
          </span>
          <input
            className={sliderClass}
            type="range"
            min="-40"
            max="40"
            value={adjustments.contrast}
            onChange={(event) => onAdjustmentChange('contrast', Number(event.target.value))}
          />
        </label>

        <label className="space-y-2">
          <span className="flex items-center justify-between text-sm text-white/70">
            <span>Saturation</span>
            <span>{adjustments.saturation}</span>
          </span>
          <input
            className={sliderClass}
            type="range"
            min="-40"
            max="40"
            value={adjustments.saturation}
            onChange={(event) => onAdjustmentChange('saturation', Number(event.target.value))}
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => onAdjustmentChange('glow', !adjustments.glow)}
          className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
            adjustments.glow
              ? 'border-ember/60 bg-ember/10 text-white'
              : 'border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25'
          }`}
        >
          Glow {adjustments.glow ? 'On' : 'Off'}
        </button>

        <button
          type="button"
          onClick={() => onCompareModeChange(!compareMode)}
          className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
            compareMode
              ? 'border-sky-400/60 bg-sky-400/10 text-white'
              : 'border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25'
          }`}
        >
          Before / After
        </button>

        <label className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70">
          <span className="mr-3">Export</span>
          <select
            value={format}
            onChange={(event) => onFormatChange(event.target.value)}
            className="bg-transparent text-white outline-none"
          >
            <option value="png" className="bg-dusk">
              PNG
            </option>
            <option value="jpg" className="bg-dusk">
              JPG
            </option>
          </select>
        </label>
      </div>

      {compareMode ? (
        <label className="mt-6 block space-y-2">
          <span className="flex items-center justify-between text-sm text-white/70">
            <span>Compare slider</span>
            <span>{comparePosition}%</span>
          </span>
          <input
            className={sliderClass}
            type="range"
            min="0"
            max="100"
            value={comparePosition}
            onChange={(event) => onComparePositionChange(Number(event.target.value))}
          />
        </label>
      ) : null}
    </section>
  );
}
