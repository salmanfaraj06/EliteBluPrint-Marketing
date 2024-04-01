function LovedByArchi() {
  return (
    <div className="min-h-[60vh] center flex-col my-[10vh] relative overflow-hidden">
      <div className="bg-gradient-to-b from-[#224EFF] to-85% to-transparent h-[80%] w-[50vw] absolute top-0" />

      <div className="w-[765px] h-[800px] rounded-full bg-[#070A0F] absolute top-[-65vh] left-[5px]" />
      <div className="w-[765px] h-[800px] rounded-full bg-[#070A0F] absolute top-[-65vh] right-[5px]" />

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
