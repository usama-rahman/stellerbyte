import Link from "next/link";

const FooterSection = () => {
  return (
    <>
      <section className="bg-black h-[70vh] flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <Link href="#" className="footer-logo w-inline-block gap-5">
            <div className="text-white text-[14rem] font-bold">S</div>
            <div className="text-white text-[14rem] font-bold">T</div>
            <div className="text-white text-[14rem] font-bold">E</div>
            <div className="text-white text-[14rem] font-bold">L</div>
            <div className="text-white text-[14rem] font-bold">L</div>
            <div className="text-white text-[14rem] font-bold">E</div>
            <div className="text-white text-[14rem] font-bold">R</div>
            <div className="text-white text-[14rem] font-bold">B</div>
            <div className="text-white text-[14rem] font-bold">Y</div>
            <div className="text-white text-[14rem] font-bold">T</div>
            <div className="text-white text-[14rem] font-bold">E</div>
          </Link>

          <div className="flex w-full flex-row justify-between items-center">
            <div className="flex justify-center items-end gap-4 w-full">
              <div className="h-full flex flex-col justify-start text-center text-sm items-start text-white w-1/3 gap-2">
                <h4 className="font-bold">mail@stellerbyte.com</h4>
                <h4 className="font-bold">+91 9876543210</h4>
                <h4 className="font-bold">Address</h4>
              </div>

              <div className=" flex flex-col gap-[6px] justify-start items-start text-[14px] leading-[1.6]">
                <Link href="#services" className="hover:text-gray-400">
                  <span className="text-white">Services</span>
                </Link>

                <Link href="/contact-us" className="hover:text-gray-400">
                  <span className="text-white">About us</span>
                </Link>
                <Link href="/contact-us" className="hover:text-gray-400">
                  <span className="text-white">Contact us</span>
                </Link>
              </div>

              <div className="w-1/3 flex flex-col gap-[6px] justify-start items-end text-[14px] leading-[1.6]">
                © StellerByte 2025 all rights reserved
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
