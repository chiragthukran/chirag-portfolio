export function GraphiDrawDemo() {
  return (
    <section id="demo" className="border-y bg-muted/30 py-20">
      <div className="">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            See GraphiDraw in Action
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            A clean, collaborative canvas built for sketching ideas together
            in real time.
          </p>

          <div className="relative overflow-hidden rounded-xl border bg-background shadow-2xl">
            <video
              className="h-auto w-full"
              controls
              preload="metadata"
              playsInline
            >
              <source
                src="https://res.cloudinary.com/dmtktd1wr/video/upload/v1770823996/Untitled_video_-_Made_with_Clipchamp_iyxbb2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
