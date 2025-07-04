export default function OurMission() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10  font-sans">
      {/* Header */}
      <div className="flex px-20 flex-col items-end gap-1">
        <div className="flex items-center gap-58 text-sm uppercase tracking-wide">
          <div>Our Mission</div>
          <div>(02)</div>
        </div>
        <div className="w-90 h-[1px] bg-gray-400/60"></div>
      </div>
      <div className="relative">
          <h1 className="text-[4rem] md:text-[7rem] lg:text-[8rem] font-black leading-[1]">
            <span className="relative block">EVOLUTION</span>
            <span className="relative block">THROUGH</span>
            <span className="relative block">DESIGN</span>
          </h1>
        </div>
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Left Side - Image */}
        <div className="flex justify-center items-start">
          <img
          src="/images/678e40b324d85865a7b5cad6_mission-p-500.jpg" alt="Mission Image"
            className="w-[220px] max-w-md object-cover"
          />
        </div>

        {/* Right Side - Large Heading */}
       
      </div>

      {/* Bottom Right Paragraph */}
      <div className="mt-10 flex justify-end">
        <p className="text-sm max-w-lg text-right">
          We thrive on turning imaginative concepts into user-friendly digital
          solutions. Whether its a sleek website, a user-friendly app, or a
          memorable brand identity, we focus on creating designs that not only
          look great but also resonate with your audience. We value open
          communication and transparency, keeping you involved throughout the
          process.
        </p>
      </div>
    </div>
  );
}
