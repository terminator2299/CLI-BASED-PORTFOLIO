export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-1/3 pb-6 text-center">
      <div className="border-4 border-dotted border-[#c4a7e7] p-6 rounded-lg w-fit mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-widest text-[#c4a7e7]">
          BHAVYA
        </h1>
      </div>
      <div className="mt-6 text-[#c4a7e7] text-sm lg:text-base space-y-2">
        <p>Welcome to my portfolio!</p>
        <p>
          Type <span className="text-[#f6c177] font-semibold">help</span> to get a list of available commands.
        </p>
        <p>
          Use <span className="text-[#f6c177] font-semibold">↑</span> and{" "}
          <span className="text-[#f6c177] font-semibold">↓</span> to navigate command history.
        </p>
      </div>
    </div>
  );
}
