import React from "react";
import Image from "next/image";
import BgBlurBlock from "../Styles/bg-blur-block";

const WorkSection = () => {
  const workCategories = [
    {
      id: 1,
      title: "Website design",
      image:
        "https://cdn.prod.website-files.com/684cea2c1edb6bd91d60172e/686cb5f8d3c56f63e4dd0063_project-category-01.avif",
      href: "/project-category/website-design",
    },
    {
      id: 2,
      title: "Application Design",
      image:
        "https://cdn.prod.website-files.com/684cea2c1edb6bd91d60172e/686cb60690cda2446cad9049_project-category-02.avif",
      href: "/project-category/application-design",
    },
    {
      id: 3,
      title: "Dashboard Design",
      image:
        "https://cdn.prod.website-files.com/684cea2c1edb6bd91d60172e/686cb6122f1728bde143398d_project-category-03.avif",
      href: "/project-category/dashboard-design",
    },
  ];

  return (
    <section className="relative py-20  overflow-hidden" id="work">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-6">
              {/* Tag */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-5 h-5 relative">
                  <img
                    src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/6848195dfb203ef0a29d14bc_b0c373f625d479147468dc3d6dd3f3fe_Navbar%20Icon%2003.svg"
                    alt="Work Icon"
                    className="invert"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-sm font-medium text-white/80">Work</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/60">
                  our Work category
                </h2>
                <div className="space-y-2">
                  {workCategories.map((category, index) => (
                    <h2
                      key={category.id}
                      className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white ${
                        index === 0
                          ? "text-blue-400"
                          : index === 1
                          ? "text-purple-400"
                          : "text-pink-400"
                      }`}
                    >
                      {category.title}
                    </h2>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Work Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {workCategories.map((category, index) => (
              <a
                key={category.id}
                href={category.href}
                className="group block overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    width={20}
                    height={20}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex justify-center">
            <a
              href="/about-us"
              className="group inline-flex items-center gap-3 px-6 py-3   rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <span className="font-medium">view all project</span>
              <div className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300">
                <img
                  src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/68481d2acc3934f31f164c0c_arrow-right.svg"
                  alt="Arrow Right"
                  className="invert"
                  width={20}
                  height={20}
                />
              </div>
            </a>
          </div>
        </div>

        <BgBlurBlock />
      </div>
    </section>
  );
};

export default WorkSection;
