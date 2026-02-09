import React, { useEffect, useState } from 'react';

const App = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const phrases = [
    "No",
    "Plzzzzzz!",
    "Sure ho?",
    "Ek choti socha na!",

    "Kasto nisturi k!",
    "Mero mutu tutyo :(",
    "Ma ta marchhu natraaa",
    "AAAHHH.. BACHAU",
  ];

  useEffect(() =>{ console.log(noCount)}
  , [noCount])

  // "Yes" button grows, but "No" size is now removed from dynamic logic
  const yesButtonSize = noCount * 13 + 18; 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 p-6 overflow-hidden text-center">
      {yesPressed ? (
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-bold text-red-600 mb-6">Thankyouuuu babuuuu ❤️</h1>
          <video 
            className="w-full max-w-[320px] rounded-3xl shadow-2xl border-4 border-white"
            autoPlay 
            playsInline
            muted={true} 
            controls={false}
          >
            <source src="/cat.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl font-extrabold text-red-500 mb-2 leading-tight">
            Will you be my Valentine?
          </h1>

          <p className="text-xl font-medium text-gray-600 mb-10 h-8">
            {noCount > 0 ? phrases[Math.min(noCount, phrases.length - 1)] : ""}
          </p>
        {/* Parent div ma items-center thapne jasle garda No button stretch hudaina */}
<div className="flex justify-center items-center gap-6 w-full relative min-h-[300px]">
  
  {/* Yes Button */}
  <button
    className={`bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl transition-all shadow-xl active:scale-90 ${
      noCount >= 7 ? "w-full h-full " : ""
    }`}
    style={noCount < 7 ? { 
      fontSize: `${yesButtonSize}px`, 
      padding: `${yesButtonSize / 1.5}px ${yesButtonSize}px` 
    } : {}}
    onClick={() => setYesPressed(true)}
  >
    Yes
  </button>

  {/* No Button - 8 choti pachi hide hunchha */}
  {noCount < 8 && (
    <button
      className="bg-red-500 hover:bg-red-600 text-white w-14 h-10 font-medium py-2 px-4 rounded-lg transition-all shadow-md active:scale-95 shrink-0"
      onClick={() => setNoCount(noCount + 1)}
    >
      No
    </button>
  )}
</div>
        </div>
      )}
    </div>
  );
};

export default App;