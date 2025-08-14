import Link from "next/link";

const FooterSection = () => {
  return (
    <>
      <section className="bg-black min-h-[70vh] flex flex-col justify-center items-center  px-4 py-8">
        <div className="flex flex-col justify-center items-center w-full ">
          <Link href="#" className="footer-logo  gap-2 md:gap-5 mb-8">
            <div className="text-white tracking-wide text-[3rem] sm:text-[3rem] md:text-[6rem] lg:text-[14rem] font-bold">
              STELLERBYTE
            </div>
          </Link>

          <div className="flex w-full flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-6 md:gap-4 w-full">
              <div className="h-full flex flex-col justify-start text-center md:text-left text-sm items-center md:items-start text-white w-full md:w-1/3 gap-2">
                <h4 className="font-bold">mail@stellerbyte.com</h4>
                <h4 className="font-bold">+91 9876543210</h4>
                <h4 className="font-bold">Address</h4>
              </div>

              <div className="flex flex-col gap-[6px] justify-start items-center md:items-start text-[14px] leading-[1.6]">
                <Link
                  href="#services"
                  className="hover:text-gray-400 transition-colors"
                >
                  <span className="text-white">Services</span>
                </Link>

                <Link
                  href="/contact-us"
                  className="hover:text-gray-400 transition-colors"
                >
                  <span className="text-white">About us</span>
                </Link>
                <Link
                  href="/contact-us"
                  className="hover:text-gray-400 transition-colors"
                >
                  <span className="text-white">Contact us</span>
                </Link>
              </div>

              <div className="w-full md:w-1/3 flex flex-col gap-[6px] justify-start items-center md:items-end text-[14px] leading-[1.6] text-center md:text-right">
                <span className="text-white">
                  © StellerByte 2025 all rights reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
