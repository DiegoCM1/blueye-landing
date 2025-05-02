import Image from "next/image";
import TestimonialImg from "@/public/images/roberto-cabezas-profile.jpeg";

export default function LargeTestimonial() {
  return (
    <section className="bg-gray-900 text-white py-12 md:pt-20">
      <div className="mx-auto max-w-3xl pb-8 text-center md:pb-12">
        <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
          Our Testimonies.
        </h2>
      </div>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold">
              “In disaster response, timing and clarity save lives. BluEye puts
              both directly into people’s hands, even when the grid goes down.
              It’s a smart, practical solution with real-world impact.”
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-500">Roberto Cabezas</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500" href="https://www.linkedin.com/in/roberto-cabezas-h/">
                Creative Technology Director at Centro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
