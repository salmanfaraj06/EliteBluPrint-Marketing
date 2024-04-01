function LovedByArchi() {
  return (
    <div className="min-h-[60vh] center flex-col  relative overflow-hidden">
      <div className="bg-gradient-to-b from-[#224EFF] to-80% to-transparent h-[80%] w-[50vw] absolute top-0" />

      <div className="w-[765px] h-[765px] rounded-full bg-[#070A0F] absolute top-[-60vh] left-0" />
      <div className="w-[765px] h-[765px] rounded-full bg-[#070A0F] absolute top-[-60vh] right-0" />

      <div className="space-y-4 center flex-col absolute bottom-0 w-[80vw] mx-auto ">
        <h1 className="text-7xl font-semibold font-space-grotesk">
          Loved By Architects
        </h1>

        <p className="text-3xl opacity-50 text-center w-[55%]">
          We are proud to have helped tens of thousands of architects all over
          the world.
        </p>
      </div>
    </div>
  );
}

export default LovedByArchi;
