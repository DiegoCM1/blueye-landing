export default function ThanksPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-6">
          🎉 You're officially on the BluEyes Waitlist!
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mb-8">
          Thank you for trusting BluEyes.  
          <br /> 
          You’re now part of a movement to protect lives with smarter, faster, AI-driven hurricane alerts.
          <br /> 
          We'll keep you updated — exciting things are coming soon.
        </p>
        <a
          href="/"
          className="btn bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Back to Home
        </a>
      </div>
    );
  }
  