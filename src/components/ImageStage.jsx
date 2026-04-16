export function ImageStage({
  originalUrl,
  editedUrl,
  compareMode,
  comparePosition,
  presetName,
  onComparePositionChange,
}) {
  function updatePosition(event) {
    if (!compareMode) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0]?.clientX : event.clientX;
    if (typeof clientX !== 'number') return;

    const next = ((clientX - bounds.left) / bounds.width) * 100;
    onComparePositionChange(Math.min(100, Math.max(0, Math.round(next))));
  }

  return (
    <section className="glass-panel rounded-[32px] border border-white/10 p-5 shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Preview</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">{presetName}</h2>
        </div>
        <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/55">
          {compareMode ? 'Compare' : 'Edited'}
        </div>
      </div>

      <div className="mx-auto mt-5 w-full max-w-4xl">
        {originalUrl ? (
          <div
            className="relative h-[400px] w-full overflow-hidden rounded-[28px] bg-black/40 sm:h-[460px] lg:h-[520px]"
            onPointerDown={updatePosition}
            onPointerMove={(event) => {
              if (event.buttons === 1) {
                updatePosition(event);
              }
            }}
            onTouchStart={updatePosition}
            onTouchMove={updatePosition}
            style={{ touchAction: compareMode ? 'none' : 'auto' }}
          >
            <img
              src={originalUrl}
              alt="Original"
              className="absolute left-0 top-0 z-[1] h-full w-full object-cover"
            />
            {editedUrl ? (
              compareMode ? (
                <>
                  <div className="absolute left-4 top-4 z-[3] rounded-full bg-black/45 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    Before
                  </div>
                  <div className="absolute right-4 top-4 z-[3] rounded-full bg-black/45 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                    After
                  </div>
                  <div
                    className="absolute inset-y-0 left-0 z-[2] overflow-hidden"
                    style={{ width: `${comparePosition}%` }}
                  >
                    <img
                      src={editedUrl}
                      alt="Edited"
                      className="absolute left-0 top-0 h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute inset-y-0 z-[4] w-0.5 bg-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.4)]"
                    style={{ left: `calc(${comparePosition}% - 1px)` }}
                  >
                    <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/55 backdrop-blur">
                      <div className="absolute inset-y-3 left-[13px] w-px bg-white/70" />
                      <div className="absolute inset-y-3 right-[13px] w-px bg-white/70" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={editedUrl}
                  alt="Edited"
                  className="absolute left-0 top-0 z-[2] h-full w-full object-cover"
                />
              )
            ) : null}
          </div>
        ) : (
          <div className="flex h-[400px] w-full items-center justify-center rounded-[28px] bg-black/30 px-8 text-center text-sm text-white/50 sm:h-[460px] lg:h-[520px]">
            Upload an image to start previewing custom Lightroom-style looks rendered entirely in the browser.
          </div>
        )}
      </div>
    </section>
  );
}
