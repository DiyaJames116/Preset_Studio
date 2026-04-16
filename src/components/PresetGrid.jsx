export function PresetGrid({
  presets,
  categories,
  thumbnails,
  selectedPresetId,
  activeCategory,
  onCategorySelect,
  onSelect,
}) {
  const visiblePresets = presets.filter((preset) => preset.category === activeCategory);

  return (
    <section className="glass-panel rounded-[28px] border border-white/10 p-5 shadow-panel">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Presets</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white">Preset packs</h2>
        </div>
        <p className="text-sm text-white/50">Browse by mood, then tap a preset to apply it.</p>
      </div>

      <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
        {categories.map((category) => {
          const selected = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategorySelect(category)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                selected
                  ? 'border-ember/70 bg-ember/15 text-white'
                  : 'border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25 hover:text-white'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visiblePresets.map((preset) => {
          const selected = preset.id === selectedPresetId;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelect(preset.id)}
              className={`group overflow-hidden rounded-[24px] border p-2 text-left transition duration-300 ${
                selected
                  ? 'border-berry/80 bg-berry/10 shadow-glow'
                  : 'border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]'
              }`}
            >
              <div className="overflow-hidden rounded-[18px] bg-black/30">
                {thumbnails[preset.id] ? (
                  <img
                    src={thumbnails[preset.id]}
                    alt={preset.name}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="aspect-[4/5] animate-pulse bg-white/5" />
                )}
              </div>
              <div className="px-1 pb-1 pt-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">{preset.name}</h3>
                  {selected ? (
                    <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                      Live
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-6 text-white/55">{preset.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
