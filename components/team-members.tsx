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
            <h2 className="mb-6 text-3xl font-bold md:text-5xl text-blue-100" data-aos="zoom-y-out">
              Meet the BluEye Team
            </h2>
            <p className="mb-8 text-lg text-blue-100" data-aos="zoom-y-out" data-aos-delay={150}>
              We're a team of developers, designers, and innovators passionate about protecting lives through technology. Our goal is simple: make hurricane response smarter, faster, and accessible to everyone.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center" data-aos="fade-up">
              <Image className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg" src={Avatar01} alt="Valentina Veraza" />
              <h3 className="text-xl font-semibold">Amy Valentina Veraza</h3>
              <p className="text-sm text-blue-100">Computer Engineering student at UNAM’s Faculty of Engineering. Interface and UX design lead, creating user-friendly experiences that support calm decision-making in emergency situations.</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay={100}>
              <Image className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg" src={Avatar02} alt="Victor Veraza" />
              <h3 className="text-xl font-semibold">Victor Joohvan Veraza</h3>
              <p className="text-sm text-blue-100">Bachelor’s student in Computer Science at the Instituto Politécnico Nacional. Leads backend logic and database infrastructure, ensuring system resilience and stability during high-stress disaster scenarios.</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay={200}>
              <Image className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg" src={Avatar03} alt="Héctor Iván Reséndiz" />
              <h3 className="text-xl font-semibold">Héctor Iván Reséndiz</h3>
              <p className="text-sm text-blue-100">AI engineer building personalized responses and helping BluEye understand what users need in real time.</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay={300}>
              <Image className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg" src={Avatar04} alt="Edgar Humberto Del Campo" />
              <h3 className="text-xl font-semibold">Edgar Humberto Del Campo</h3>
              <p className="text-sm text-blue-100">Computer Engineering student at UNAM's Faculty of Engineering. Focused on offline-first system architecture, ensuring BluEye remains functional in areas with low or no connectivity. Dedicated to operational reliability under extreme conditions.</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay={400}>
              <Image className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg" src={Avatar05} alt="Luis Diego Colin" />
              <h3 className="text-xl font-semibold">Luis Diego Colin</h3>
              <p className="text-sm text-blue-100">Self-taught developer and AI product builder focused on solving real-world problems through scalable technology. Leads the project’s vision, strategy, and product design.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}