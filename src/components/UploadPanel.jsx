export function UploadPanel({ previewUrl, onFileSelect, fileName, isConvertingHeic }) {
  return (
    <section className="glass-panel rounded-[28px] border border-white/10 p-5 shadow-panel">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Upload</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white">Source photo</h2>
        </div>
        <label className="cursor-pointer rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-ember/60 hover:bg-ember/10">
          Choose Image
          <input
            type="file"
            accept="image/*,.heic,.HEIC"
            className="hidden"
            onChange={(event) => onFileSelect(event.target.files?.[0])}
          />
        </label>
      </div>

      <div className="relative mt-5 overflow-hidden rounded-[24px] border border-dashed border-white/10 bg-white/[0.03]">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Uploaded preview"
            className="aspect-[4/5] w-full object-cover"
          />
        ) : (
          <div className="flex aspect-[4/5] items-center justify-center px-8 text-center text-sm text-white/50">
            Drop in a portrait or lifestyle shot to generate warm orange, neon, glam, and film-inspired presets.
          </div>
        )}

        {isConvertingHeic ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 backdrop-blur-sm">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-ember" />
            <p className="text-sm font-medium text-white/85">Converting HEIC image...</p>
          </div>
        ) : null}
      </div>

      <p className="mt-4 truncate text-sm text-white/55">
        {fileName || 'PNG, JPG, HEIC converted by the browser if supported.'}
      </p>
    </section>
  );
}
