"use strict";

import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const splitWith = ["1", "2", "3"];
const imageBase = "https://assets.codepen.io/3685267/bill-splitter-app-";

function App() {
  return (
    <React.Fragment>
      <div className="h-[700px] flex space-x-12 items-center">
        <ScreenA />
        <ScreenB />
      </div>
    </React.Fragment>
  );
}

function Screen({ children, className }) {
  return (
    <React.Fragment>
      <div className={`bg-[#48426d] screen-shadow w-80 h-[640px] p-7 rounded-3xl ${className}`}>
        {children}
      </div>
    </React.Fragment>
  );
}

function ScreenA() {
  return (
    <Screen className="-translate-y-5">
      <Header />
      <TotalBill />
      <PrvSplit />
      <NearbyFriends />
    </Screen>
  );
}

function Header() {
  return (
    <div className="flex justify-between mt-3">
      <div className="yellow-text text-lg">
        <div> Orix </div>
        <div className="font-bold"> Bill Splitter </div>
      </div>
      <div className="w-16 h-16 relative">
        <div className="absolute inset-0 bg-[#342f52] overflow-hidden" style={{ border: "2px solid #544e75", borderRadius: "15px" }}>
          <div className="bg-[#48426c] text-center absolute inset-x-0 bottom-0 text-xs font-bold py-1">Sajon</div>
        </div>
        <img src={`${imageBase}8.png`} className="w-14 h-14 absolute" style={{ left: "50%", top: "-19px", transform: "translate(-50%, 0)" }} />
      </div>
    </div>
  );
}

function TotalBill() {
  return (
    <div className="bg-[#edc08c] custom-border mt-6 flex p-6 shadow-md">
      <div className="grow">
        <div className="text-[#48426d] font-semibold text-sm"> Total Bill </div>
        <div className="text-[#48426d] font-bold text-xl mt-1"> $750.86 </div>
        <button className="bg-[#48426d] yellow-text font-bold py-4 px-4 mt-3 text-sm custom-border ">Split Now</button>
      </div>
      <div className="shrink-0 inline-flex flex-col items-center">
        <div className="text-[#48426d] font-bold text-sm"> Split With </div>
        <div className="w-14 h-14 mt-2 relative">
          <div className="absolute inset-x-0 top-0 bg-white flex justify-center rounded-lg shadow-lg">
            <div className="w-9 pt-5 pb-2">
              {splitWith.map((i) => (
                <div key={i} className="w-9 h-9 rounded-full overflow-hidden bg-contain" style={{
                  backgroundImage: `url("${imageBase}${i}.png")`,
                  marginTop: "-6px",
                  padding: "2px",
                  border: "2px solid #fff"
                }} />
              ))}
              <div className="w-9 h-9 rounded-full overflow-hidden grid place-items-center" style={{
                background: "#f1aa9b",
                marginTop: "-6px",
                padding: "2px",
                border: "2px solid #fff"
              }}>
                <PlusIcon className="size-4" strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrvSplit() {
  return (
    <div className="bg-[#373258] h-16 mt-6 custom-border flex items-center shadow-md">
      <div className="h-16 w-16 grid place-items-center">
        <div className="h-11 w-11 rounded-full bg-[#48426d] grid place-items-center yellow-text blue-shadow">
          <ExclamationCircleIcon className="size-6" />
        </div>
      </div>
      <div className="ml-1">
        <div className="text-sm font-semibold yellow-text">Your previous split</div>
        <div className="text-xs mt-1"> $678.56 </div>
      </div>
    </div>
  );
}

const nearbyItems = [
  { name: "Anna", image: "6" },
  { name: "Khalifa", image: "7" },
  { name: "Lisa", image: "9" }
];

const recentItems = [
  { name: "Sing", image: "7" },
  { name: "Alex", image: "3" },
  { name: "Bryan", image: "4" },
  { name: "Mike", image: "2" }
];

function NearbyFriends() {
  return (
    <div className="mt-6 rounded-3xl relative">
      <svg width="264" height="224" viewBox="0 0 264 224" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 84V206C0 216.493 8.50659 225 19 225H245C255.493 225 264 216.493 264 206V19C264 8.50659 255.493 0 245 0H83.1214C72.628 0 64.1214 8.50659 64.1214 19V46C64.1214 56.4934 55.6149 65 45.1214 65H19C8.50659 65 0 73.5066 0 84Z" fill="#373258" />
      </svg>
      <div className="w-14 h-14 bg-[#edc08c] absolute top-0 left-0 grid place-items-center text-[#48426d] custom-border ">
        <MagnifyingGlassIcon className="w-6 h-6" />
      </div>
      <div className="absolute inset-0 p-4" style={{ paddingLeft: "64px" }}>
        <div className="flex items-center justify-between text-xs pb-2">
          <div className="yellow-text"> Nearby Friends </div>
          <div> See all </div>
        </div>
        <div className="flex justify-between ">
          {nearbyItems.map(({ name, image }) => (
            <div className="w-12 bg-[#48426d] rounded-full pb-2.5 relative" key={name}>
              <div className="w-12 h-11 grid place-items-center">
                <div className="w-8 h-8 rounded-full bg-contain" style={{
                  backgroundImage: `url("${imageBase}${image}.png")`,
                  padding: "2px",
                  border: "2px solid #fff"
                }} />
              </div>
              <div className="text-center mt-1 font-semibold" style={{ fontSize: "10px" }}>{name}</div>
              <div className="absolute w-4 h-4 bg-[#cea87d] rounded-full grid place-items-center" style={{
                left: "50%",
                bottom: "-12px",
                transform: "translate(-50%, 0)"
              }}>
                <PlusIcon className="w-2 h-2" strokeWidth={5} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-xs mt-4 mb-2 yellow-text"> Recently Split </div>
      <div className="flex justify-between ">
        {recentItems.map(({ name, image }) => (
          <div className="w-10" key={name}>
            <div className="w-10 h-10 rounded-full bg-contain" style={{
              backgroundImage: `url("${imageBase}${image}.png")`,
              padding: "2px",
              border: "2px solid #fff"
            }} />
            <div className="text-xs text-center mt-1"> {name} </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenB() {
  return (
    <Screen className="translate-y-5">
      <SplitNow />
      <Receipt />
      <SliderSet />
      <ConfirmButton />
    </Screen>
  );
}

function SplitNow() {
  return (
    <div className="h-20 rounded-xl flex justify-between items-center ">
      <button className="h-14 w-14 bg-[#373258] rounded-xl yellow-text grid place-items-center shadow-md">
        <ChevronLeftIcon className="size-6" />
      </button>
      <div className="grow h-20 bg-[#edc08c] rounded-xl flex justify-center items-center text-[#48426d] text-2xl">
        Split Now
      </div>
      <button className="h-14 w-14 bg-[#373258] rounded-xl yellow-text grid place-items-center shadow-md">
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  );
}

function Receipt() {
  return (
    <div className="h-28 bg-[#373258] mt-6 flex items-center p-6 rounded-3xl relative">
      <div className="grow">
        <div className="text-white text-xs font-semibold">Receipt</div>
        <div className="text-white text-lg font-bold mt-2"> $375.43 </div>
        <div className="text-white text-xs mt-1"> You owe </div>
      </div>
      <div className="absolute top-0 right-0 flex flex-col justify-between h-full mr-4">
        <button className="w-8 h-8 bg-[#edc08c] flex justify-center items-center rounded-full shadow-md">+</button>
        <div className="flex justify-center items-center rounded-full h-8 w-8 bg-[#edc08c] shadow-md">-</div>
      </div>
    </div>
  );
}

function SliderSet() {
  return (
    <div className="bg-[#edc08c] h-28 mt-6 rounded-3xl shadow-md">
      <div className="flex justify-between p-4 text-[#48426d]">
        <div className="flex flex-col">
          <div className="font-bold text-sm">Split</div>
          <div className="text-xs mt-1"> $125.43 </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-sm">Your Share</div>
          <div className="text-xs mt-1"> $250.00 </div>
        </div>
      </div>
      <input type="range" min="0" max="100" defaultValue="50" className="w-full h-3 bg-[#373258] rounded-lg" />
    </div>
  );
}

function ConfirmButton() {
  return (
    <button className="bg-[#48426d] text-white font-bold py-4 px-4 mt-4 rounded-xl w-full shadow-md">Confirm</button>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
