
const HeroSection = () => {
  return (
    <div className=" relative overflow-hidden my-10">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 " />
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl" />
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-[#1a7226] border border-blue-500/20">
              ✨ New Release
            </span>
          </div>
          <h1 className="text-6xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AB8C95] via-[#000000] to-[#8E97C5] mb-3">
            One tool to manage <br /> contract and your team.
          </h1>
          <p className="text-md text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create stunning applications with our cutting-edge platform.
            Join thousands of developers building tomorrow's technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-br from-[#041107] via-[#0e5718] to-[#031406] backdrop-blur-sm text-white rounded-xl font-semibold border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#2d8f3f] rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-[#1a7226] rounded-full animate-ping" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-[#2d8f3f] rounded-full animate-bounce" />
    </div>
  );
}
export default HeroSection