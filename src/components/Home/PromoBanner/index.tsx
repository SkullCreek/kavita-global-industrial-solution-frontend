import React from "react";
import Image from "next/image";
import { whatsappLink } from "@/constants/contact";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              Turnkey Corrugation Lines
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              Trading &amp; Services You Can Trust
            </h2>

            <p>
              Complete corrugated cardboard production lines, converting
              machinery and wear parts — specified, supplied and supported
              from a single window.
            </p>

            <a
              href={whatsappLink(
                "Hi, I'd like to know more about your corrugation machinery and services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
            >
              Enquire on WhatsApp
            </a>
          </div>

          <Image
            src="/images/catalogue/corrugated-cardboard-production-line-1-1.jpeg"
            alt="corrugated cardboard production line"
            className="absolute bottom-0 right-4 lg:right-14 -z-1 object-contain hidden sm:block"
            width={340}
            height={300}
          />
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/catalogue/dual-cartridge-seal-37-1.jpeg"
              alt="mechanical seals and rotary unions"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1 hidden sm:block"
              width={190}
              height={190}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                Sealing &amp; Fluid Handling
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Mechanical Seals &amp; Rotary Joints
              </h2>

              <p className="font-semibold text-custom-1 text-teal">
                Duty-matched sealing, every time
              </p>

              <a
                href="/shop-without-sidebar?category=Sealing+%26+Fluid+Handling"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9"
              >
                View Range
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/catalogue/protection-devices-distribution-51-1.jpeg"
              alt="electrical and power systems"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1 hidden sm:block"
              width={160}
              height={160}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Electrical &amp; Power Systems
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Built for <span className="text-orange">Uptime</span>
              </h2>

              <p className="max-w-[285px] text-custom-sm">
                Switchgear, LED lighting, cable and power backup engineered
                for continuous industrial operation.
              </p>

              <a
                href="/shop-without-sidebar?category=Electrical+%26+Power+Systems"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
              >
                View Range
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
