"use client";

export default function WaitlistForm() {
  return (
    <section id="waitlist" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Join the Waitlist</h2>
      <p className="mb-6 text-gray-600 max-w-md mx-auto">
        Get early access to BluEyes and stay ahead of the storm.
      </p>
      <form
        action="https://formsubmit.co/BluEyeHurricaneAlerts@gmail.com"
        method="POST"
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full max-w-sm rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <button
          type="submit"
          className="btn bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md"
        >
          Get Early Access
        </button>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://blueyes-landing-l2ty.vercel.app/thanks" />
      </form>
    </section>
  );
}
