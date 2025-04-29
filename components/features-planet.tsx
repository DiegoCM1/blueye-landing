import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Hurricane safety, powered by AI. Wherever you are.
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Real-Time Alerts"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Offline Emergency Mode"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Crowdsourced Safety Map"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="AI Stress-Adaptive Guidance"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-radar-icon lucide-radar"
                >
                  <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
                  <path d="M4 6h.01" />
                  <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
                  <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
                  <path d="M12 18h.01" />
                  <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="m13.41 10.59 5.66-5.66" />
                </svg>
                <span>Real-Time Hurricane Tracking</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Stay updated with live storm alerts based on official data,
                directly tied to your location and risk zone.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-wifi-off-icon lucide-wifi-off"
                >
                  <path d="M12 20h.01" />
                  <path d="M8.5 16.429a5 5 0 0 1 7 0" />
                  <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
                  <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
                  <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
                  <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
                  <path d="m2 2 20 20" />
                </svg>
                <span>Offline Emergency Mode</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                When the network drops, BluEye doesn’t — offline shelter maps,
                survival strategies, key contacts, and smart AI help keep you
                safe.{" "}
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-brain-cog-icon lucide-brain-cog"
                >
                  <path d="m10.852 14.772-.383.923" />
                  <path d="m10.852 9.228-.383-.923" />
                  <path d="m13.148 14.772.382.924" />
                  <path d="m13.531 8.305-.383.923" />
                  <path d="m14.772 10.852.923-.383" />
                  <path d="m14.772 13.148.923.383" />
                  <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771" />
                  <path d="M17.998 5.125a4 4 0 0 1 2.525 5.771" />
                  <path d="M19.505 10.294a4 4 0 0 1-1.5 7.706" />
                  <path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516" />
                  <path d="M4.5 10.291A4 4 0 0 0 6 18" />
                  <path d="M6.002 5.125a3 3 0 0 0 .4 1.375" />
                  <path d="m9.228 10.852-.923-.383" />
                  <path d="m9.228 13.148-.923.383" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>Personalized AI Guidance</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Our AI adapts recommendations based on your critical needs,
                delivering custom advice to stay safe before, during and after
                the hurricane.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-map-icon lucide-map"
                >
                  <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
                  <path d="M15 5.764v15" />
                  <path d="M9 3.236v15" />
                </svg>
                <span>Crowdsourced Safety Map</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                After the storm, users can share updates about flooded zones,
                blocked roads, and shelter conditions.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart-pulse-icon lucide-heart-pulse"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                </svg>
                <span>Stress-Resilient Communication</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                BluEye reduces emotional overload during critical moments,
                providing clear, calming support when you need it most.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-globe-icon lucide-globe"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>Global Expansion Vision</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Designed for replication across coastal zones worldwide —
                starting in Mexico, but built for the world.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
