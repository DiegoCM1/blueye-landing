'use client';

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-gray-900 to-blue-900 flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-6 animate-fade-in">
          🌊 You're on the BluEyes Early Access List!
        </h1>
        <p className="text-lg text-blue-100 mb-10 leading-relaxed">
          You’ve just taken the first step into the future of hurricane protection.
          <br />
          With your help, BluEyes is building the smartest AI-powered early warning system — designed to save lives when every second counts.
          <br />
          <span className="text-blue-300 font-semibold">
            You’re not just waiting — you’re part of a movement.
          </span>
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-base font-medium px-8 py-3 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
        >
          🔙 Return to Home
        </a>
      </div>
    </div>
  );
}
