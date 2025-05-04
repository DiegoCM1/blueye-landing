import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/vale-profile.png";
import Avatar02 from "@/public/images/victor-profile.jpg";
import Avatar03 from "@/public/images/ivan-profile.jpg";
import Avatar04 from "@/public/images/edgar-profile.png";
import Avatar05 from "@/public/images/diego-profile.jpg";

export default function TeamMembers() {
  return (
    <section className="relative bg-gray-900">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h2
              className="mb-6 text-3xl font-bold md:text-5xl text-blue-100"
              data-aos="zoom-y-out"
            >
              Meet the BluEye Team
            </h2>
            <p
              className="mb-8 text-lg text-blue-100"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              We’re a multidisciplinary team of engineers, designers, and
              strategists combining AI, empathy, and real-world insight to make
              disaster prevention smarter and more human. From tech to
              execution, everything we build is grounded in impact.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col">
            {/* First Block */}
            <div className="lg:flex lg:justify-evenly">
              <div className="text-center lg:w-1/5 mb-10" data-aos="fade-up">
                <Image
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg"
                  src={Avatar01}
                  alt="Valentina Veraza"
                />
                <h3 className="text-xl font-semibold text-blue-100 transition-colors duration-300 hover:text-blue-400">
                  <a
                    href="https://www.linkedin.com/in/amy-veraza-garcia-548922285/?originalSubdomain=mx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Amy Valentina Veraza
                  </a>
                </h3>
                <p className="text-sm text-blue-100">
                  Key contributor to BluEye’s AI integration, connecting
                  intelligent systems with real-time user needs. Technically
                  sharp and versatile, she also supports the frontend experience
                  with clean, scalable code — making her a vital force behind
                  both the logic and the look of the app.
                </p>
              </div>

              <div
                className="text-center lg:w-1/5 mb-10"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <Image
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg"
                  src={Avatar03}
                  alt="Héctor Iván Reséndiz"
                />
                <h3 className="text-xl font-semibold text-blue-100 transition-colors duration-300 hover:text-blue-400">
                  <a
                    href="https://www.linkedin.com/in/hi-resendiz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  Héctor Iván Reséndiz
                  </a>
                </h3>
                <p className="text-sm text-blue-100">
                  MBA graduate and product strategist with a sharp eye for
                  business value. As BluEye’s Product Manager, he bridges the
                  gap between innovation and user impact — ensuring the
                  technology we build solves real-world problems at scale and
                  with purpose.
                </p>
              </div>

              <div
                className="text-center lg:w-1/5 mb-10"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <Image
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg"
                  src={Avatar05}
                  alt="Luis Diego Colin"
                />
                <h3 className="text-xl font-semibold text-blue-100 transition-colors duration-300 hover:text-blue-400">
                  <a
                    href="https://www.linkedin.com/in/luis-colin-mendiola-974679176/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Luis Diego Colin
                  </a>
                </h3>

                <p className="text-sm text-blue-100">
                  Lead Frontend Developer and Prompt Engineer behind BluEye’s
                  AI-powered interface. With a strong grasp of both product and
                  business strategy, Diego bridges technical execution with
                  user-focused design. His rare ability to move between code,
                  design, and business thinking makes him a very valuable asset
                  to the team.
                </p>
              </div>
            </div>

            {/* Second block */}
            <div className="lg:flex lg:justify-evenly">
              <div
                className="text-center lg:w-1/5 mb-10"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <Image
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg"
                  src={Avatar02}
                  alt="Victor Veraza"
                />
                <h3 className="text-xl font-semibold text-blue-100 transition-colors duration-300 hover:text-blue-400">
                  <a
                    href="https://www.linkedin.com/in/victor-joohvan-veraza-garc%C3%ADa-0500b3221/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Victor Joohvan Veraza
                  </a>
                </h3>
                <p className="text-sm text-blue-100">
                  Business-minded and detail-oriented, Victor plays a key role
                  in BluEye’s research and validation processes. He ensures
                  every decision is backed by user needs, data, and real-world
                  context — helping the team stay grounded while scaling smart.
                </p>
              </div>

              <div
                className="text-center lg:w-1/5 mb-10"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <Image
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg"
                  src={Avatar04}
                  alt="Edgar Humberto Del Campo"
                />
                <h3 className="text-xl font-semibold text-blue-100 transition-colors duration-300 hover:text-blue-400">
                  <a
                    href="https://www.linkedin.com/in/edgar-del-campo-8b0865156/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Edgar Humberto Del Campo
                  </a>
                </h3>
                <p className="text-sm text-blue-100">
                  A backend-focused developer who played a key role in
                  integrating BluEye’s AI engine with real-time infrastructure.
                  Edgar brings strong technical skills to the table, ensuring
                  that the logic, data flow, and AI responses remain stable,
                  fast, and reliable under pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
