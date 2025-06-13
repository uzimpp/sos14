export default function Footer() {
  return (
    <div className="p-6">
      {/* section 2 */}
      <div className="flex flex-row items-center justify-between">
        {/* title part */}
        <h1 className="large-title bold text-green">SOS14</h1>
        {/* link part */}
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-2">
            <p className="text--1 bold">Home</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text--1 bold">Agenda</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text--1 bold">Problems</p>
            <div>
              <p className="text--1">Day 1</p>
              <p className="text--1">Day 2</p>
              <p className="text--1">Day 3</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text--1 bold">FAQ's</p>
            <div>
              <p className="text--1">About SKE</p>
              <p className="text--1">About SOS Camp</p>
              <p className="text--1">Programming</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text--1 bold">Contact</p>
            <div>
              <p className="text--1">Instagram</p>
              <p className="text--1">Discord</p>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="flex flex-row items-center justify-between">
        {/* Credit part */}
        <p className="text--1">
          Made with <span className="text-pink">Heart</span> by the SOS14 Camp
          team
          <br />© 2025 All rights reserved.
        </p>
        {/* morse code part */}
        <div className="flex flex-row items-center gap-4 opacity-14">
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-5 bg-white rounded-full"></div>
              <div className="w-8 h-5 bg-white rounded-full"></div>
              <div className="w-8 h-5 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="text-3 bold">14</p>
        </div>
      </div>
    </div>
  );
}
