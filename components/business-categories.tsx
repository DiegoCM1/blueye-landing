import Image from "next/image";
import Logo01 from "@/public/images/blueye-logo.png";
import Logo02 from "@/public/images/ollama-logo.png";
import Logo03 from "@/public/images/meta-logo.png";
import Logo04 from "@/public/images/mexico-logo.png";
import Logo05 from "@/public/images/open-weather-logo.png";
import Logo06 from "@/public/images/noaa-logo.png";
import Logo07 from "@/public/images/cenapred-logo.png";
import Logo08 from "@/public/images/proteccion-civil-logo.png";
import Logo09 from "@/public/images/cruz-roja-logo.jpg";

export default function BusinessCategories() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="text-3xl font-bold my-6 text-center">Our business partners</h2>

        <div className="pb-12 md:pb-20">
          {/* Tab panels */}
          <div className="relative flex h-[324px] items-center justify-center overflow-x-hidden">
            {/* Small blue dots */}
            <div className="absolute -z-10 scale-75 md:scale-100">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
              >
                <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 7)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 0)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 25)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 32)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 7)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 25)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 14)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 25)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 32)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 39)"
                />
              </svg>
            </div>
            {/* Blue glow */}
            <div className="absolute -z-10 scale-75 md:scale-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={432}
                height={160}
                viewBox="0 0 432 160"
              >
                <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                  <path
                    className="fill-blue-500"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2044_9"
                    x={0}
                    y={0}
                    width={432}
                    height={160}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={32}
                      result="effect1_foregroundBlur_2044_9"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Lines */}
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-[100px] md:inset-x-[200px] top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>

            {/* Logos */}
            {/* Center logo */}
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,var(--color-blue-500))_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <Image
                    className="relative rounded-full"
                    src={Logo01}
                    width={50}
                    height={50}
                    alt="Logo 01"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center">
                {/* Side logos */}
                <div className="absolute -translate-x-[80px] md:-translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-white shadow-lg">
                      <Image
                        className="relative"
                        src={Logo02}
                        width={35}
                        height={35}
                        alt="Logo 02"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute translate-x-[80px] md:translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-white shadow-lg">
                      <Image
                        className="relative"
                        src={Logo03}
                        width={35}
                        height={35}
                        alt="Logo 03"
                      />
                    </div>
                  </div>
                </div>

                {/* Corner logos */}
                <div className="absolute -translate-x-[120px] -translate-y-[60px] md:-translate-x-[216px] md:-translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Image
                        className="relative rounded-full"
                        src={Logo04}
                        width={45}
                        height={45}
                        alt="Logo 04"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute translate-x-[120px] -translate-y-[60px] md:translate-x-[216px] md:-translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Image
                        className="relative rounded-full"
                        src={Logo05}
                        width={45}
                        height={45}
                        alt="Logo 05"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute translate-x-[120px] translate-y-[60px] md:translate-x-[216px] md:translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Image
                        className="relative rounded-full"
                        src={Logo06}
                        width={35}
                        height={35}
                        alt="Logo 06"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute -translate-x-[120px] translate-y-[60px] md:-translate-x-[216px] md:translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Image
                        className="relative"
                        src={Logo07}
                        width={35}
                        height={35}
                        alt="Logo 07"
                      />
                    </div>
                  </div>
                </div>

                {/* Small corner logos */}
                <div className="absolute -translate-x-[160px] md:-translate-x-[292px] opacity-40">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <Image
                        className="relative"
                        src={Logo08}
                        width={25}
                        height={25}
                        alt="Logo 08"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute translate-x-[160px] md:translate-x-[292px] opacity-40">
                  <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <Image
                        className="relative"
                        src={Logo09}
                        width={25}
                        height={25}
                        alt="Logo 09"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
