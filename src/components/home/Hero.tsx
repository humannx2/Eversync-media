"use client";

export default function HeroSection() {
  return (
       <section
      className="bg-[url('/images/hero-image.jpg')] bg-cover bg-center min-h-screen w-full"
    >
        <h1 className="text-[13rem] text-white mix-blend-difference font-bold pt-4 text-center px-8 flex flex-col justify-center pointer-events-none select-none">
    <span className="text-start animate-cube-in origin-bottom [transform-style:preserve-3d] block">
      {"Brave".toUpperCase()}
    </span>
    <span className="text-end -mt-20 animate-cube-in-delay origin-top [transform-style:preserve-3d] block">
      {"Studio".toUpperCase()}
    </span>
  </h1>
            
        <div className="flex items-center justify-between px-10 py-4 mt-2">
            {/* <div className="flex flex-col gap-1 text-neutral-100/60 text-lg font-semibold"> */}
            <div className="text-white w-full max-w-sm">
                {/* Title with icon */}
                <div className="flex items-center gap-2 mb-6 text-md font-semibold">
                  <span>What we do</span>
                  <span className="rotate-45 inline-block">↷</span>
                </div>

                {/* Service List with dividers */}
                <div className="border-t border-white/60 divide-y divide-white/60">
                  {[
                    { title: "BRANDING", number: "01" },
                    { title: "DESIGN", number: "02" },
                    { title: "DEVELOPMENT", number: "03" },
                    { title: "PHOTOGRAPHY", number: "04" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-4 text-white uppercase text-base font-medium tracking-wide"
                    >
                      <span>{item.title}</span>
                      <span>{item.number}</span>
                    </div>
                  ))}
                </div>
              </div>
            
            <div className="max-w-[300px] text-white/80">
                <p>Brave is a full-service creative studio creating beautiful digital experiences and products. We are an award winning design and art group specializing in branding, web design and engineering.</p>
            </div>
        </div>
    </section>
  )
}
