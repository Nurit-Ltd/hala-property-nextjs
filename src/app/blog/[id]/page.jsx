"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { HiOutlineBriefcase } from "react-icons/hi";
import { TbGavel } from "react-icons/tb";
import { TbHomeSearch } from "react-icons/tb";
import { TbHanger2 } from "react-icons/tb";
import { TbBuildingBank } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa6";
import { HiOutlineAnnotation } from "react-icons/hi";
import { FaLink } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import fiveTips from "@/assets/blog/5-tips.jpg";

// Internal

import roger from "@/assets/blog/roger.png";
import wayne from "@/assets/blog/wayne.png";
import emanuel from "@/assets/blog/emanuel.png";
import eileen from "@/assets/blog/eileen.png";
import howToStage from "@/assets/blog/how-to-stage.jpg";
import understandingProperty2 from "@/assets/blog/understanding-property-2.jpg";
import isNowTheRightTime from "@/assets/blog/is-now.jpg";
import howTechnology from "@/assets/blog/how-technology.jpg";

const limitCharacters = (text, limit) => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

const SingleBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Clear form after submission
    reset();
  };

  const socialLinks = [
    { title: "facebook", icon: FaFacebookF, link: "#" },
    { title: "twitter", icon: FaXTwitter, link: "#" },
    { title: "linkedin", icon: FaLinkedinIn, link: "#" },
    { title: "share", icon: FaShareNodes, link: "#" },
  ];

  const rightBlogs = [
    {
      title: "How to Stage Your Home for a Quick Sale",
      description: "Explore the key factors that make a neighborhood desirable, from schools and amenities to future development plans",
      author: "Roger Shields",
      date: "20 Oct 2024",
      authorImg: roger,
      img: howToStage,
    },
    {
      title: "Understanding Property Taxes What Homebuyers Should Know",
      description: "Property taxes can significantly affect your homeownership budget. In this article, we break down how property taxes are calculated",
      author: "Wayne Kilback",
      date: "20 Oct 2024",
      authorImg: wayne,
      img: understandingProperty2,
    },
    {
      title: "Is Now the Right Time to Sell? How to Read the Real Estate Market",
      description: "Timing the sale of your home can be tricky. This blog will guide you through how to assess current market conditions",
      author: "Emanuel Kerluke",
      date: "20 Oct 2024",
      authorImg: emanuel,
      img: isNowTheRightTime,
    },
    {
      title: "How Technology is Changing the Future of Real Estate",
      description: "From virtual tours to blockchain-powered transactions, technology is revolutionizing the real estate industry. Discover the latest innovations reshaping how homes are bought and sold, and how you can take advantage of these advancements.",
      author: "Eileen Wunsch",
      date: "20 Oct 2024",
      authorImg: eileen,
      img: howTechnology,
    },
  ];

  const categories = [
    { name: "Investing", icon: HiOutlineBriefcase },
    { name: "Legal", icon: TbGavel },
    { name: "Home Buying", icon: TbHomeSearch },
    { name: "Lifestyle", icon: TbHanger2 },
    { name: "Economy", icon: TbBuildingBank },
  ];

  return (
    <div className="pt-[60px] lg:pt-24 font-Manrope bg-white min-h-[70vh]  ">
      <div className="container_fluid pt-[72px]  px-4 2xl:px-0 ">
        {/* Categories */}
        <h2 className="text-xl   font-bold  text-gray-900 leading-tight">Categories</h2>
        <div className="flex justify-start   items-center flex-nowrap overflow-scroll xl:overflow-auto  gap-4 mt-4">
          {categories.map((category, index) => (
            <button key={index} className={`border flex-shrink-0 h-[42px] border-gray-400 hover:border-primary font-semibold text-base text-gray-700 hover:text-primary transition flex justify-center items-center rounded-lg px-5 py-[10px] gap-2  `}>
              <category.icon />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Blog Content */}
      <div className=" blogContent ">
        <div className="container_fluid    px-4 2xl:px-0   ">
          {/* Blog Cards */}
          <div className="xl:flex justify-between gap-[32px] items-start mt-8   xl:mt-[60px] ">
            <div className="xl:w-[62%]  flex flex-col mb-8 xl:mb-0 ">
              <h1 className=" max-w-[570px] text-left text-xl xl:text-[32px] font-bold  text-gray-800 leading-tight">What to Expect in a Home Inspection A Complete Buyer’s Checklist</h1>

              <div className="flex mt-4 justify-start items-center font-medium text-gray-600 text-base  gap-[10px]">
                <Image src={roger} alt="author" className="w-6 h-6 rounded-full" />
                <span className="text-sm text-gray-700">Roger Shields</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>20 Oct 2024</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>6 min read</span>
              </div>
              {/* social links 32x32px fully roundeed with bg-gray-900 and text white class */}
              <div className="flex gap-4 mt-4">
                {socialLinks.map((link, index) => (
                  <a alt={link.title} key={index} href={link.link} className="w-[32px] h-[32px] rounded-full bg-gray-900 flex items-center justify-center text-white">
                    <link.icon className="text-base" />
                  </a>
                ))}
              </div>
              <Image className=" rounded-2xl w-full h-auto mt-[22px]" src={fiveTips} alt="blogHeader" />
              {/* blog content */}
              <div className=" mt-12 text-gray-700 text-sm xl:text-base leading-normal">
                <p>Buying a home is one of the biggest financial commitments most people will make, and a home inspection plays a critical role in ensuring that your investment is sound. Whether you’re a first-time buyer or an experienced homeowner, understanding the home inspection process can help you avoid costly surprises down the road.</p>
                <br />
                <p>In this comprehensive guide, we’ll walk you through what to expect during a home inspection, common issues that may arise, and how to use the inspection report to make informed decisions about your purchase</p>
                <br />
                <h2 className="text-[#0D152E] font-bold text-base xl:text-2xl mb-4"> What is a Home Inspection?</h2>
                <p>A home inspection is a thorough evaluation of a property’s condition, typically conducted by a licensed professional inspector. The primary goal of the inspection is to assess the structural integrity and functional aspects of the home, identifying any existing or potential issues. While inspections are not required by law in every transaction, most buyers opt for one to avoid purchasing a home with major defects or costly repairs.</p>
                <br />
                <h2 className="text-[#0D152E] font-bold text-base xl:text-2xl mb-4">The Home Inspector’s Role</h2>
                <p>The home inspector is a neutral third-party professional who examines the home’s major systems and components. They don’t make repairs or offer repair services, but they provide an unbiased report detailing the home’s current condition. This report helps you decide whether to move forward with the purchase, negotiate repairs, or walk away if significant issues are found.</p>
                <br />
                <h2 className="text-[#0D152E] font-bold text-base xl:text-2xl mb-4"> Key Areas Covered in a Home Inspection</h2>
                <br />
                <p>Home inspections cover various aspects of the property. Here are the primary areas that will be inspected:</p>

                <ul>
                  <li>Structural Components: The foundation, walls, roof, and framing of the home are inspected for structural soundness. Inspectors look for cracks, uneven floors, and signs of settlement, which can indicate foundation problems. </li>
                  <li>Roof: The inspector will assess the condition of the roof, checking for missing or damaged shingles, leaks, and the state of the gutters and downspouts. Roof issues can lead to expensive repairs if left unchecked.</li>
                  <li>Plumbing: The inspector will examine the home’s plumbing system, including pipes, water heaters, and faucets. They will look for leaks, corrosion, and signs of water damage, as well as test water pressure and check the sewage system.</li>
                  <li>Electrical System: Inspectors evaluate the electrical wiring, outlets, and panels to ensure they meet safety standards. They’ll look for potential fire hazards, outdated wiring, and proper grounding.</li>
                  <li>HVAC System: The heating, ventilation, and air conditioning (HVAC) system is assessed for its functionality, age, and overall condition. The inspector will test the system to ensure it’s operating efficiently and safely.</li>
                  <li>Windows and Doors: Inspectors check the windows and doors for proper operation, seals, and weatherproofing. They also look for signs of rot, drafts, and water intrusion around frames.</li>
                  <li>Insulation and Ventilation: Proper insulation and ventilation are key for energy efficiency and preventing moisture buildup. Inspectors check the attic and crawl spaces for adequate insulation and ventilation.</li>
                  <li>Exterior: The home’s exterior, including siding, paint, and landscaping, is evaluated for wear and damage. The inspector may also assess walkways, driveways, and fencing for safety concerns.</li>
                  <li>Interior: Inside the home, inspectors examine walls, ceilings, floors, and stairways for signs of damage, such as cracks, stains, or uneven surfaces. They will also inspect bathrooms, kitchens, and other living spaces for functionality and safety.</li>
                </ul>
                <br />
                <h2 className="text-[#0D152E] font-bold text-base xl:text-2xl mb-4"> What’s Not Included in a Home Inspection</h2>
                <p>While home inspections are comprehensive, there are some areas that may not be covered, including:</p>
                <br />
                <ul>
                  <li>Pest Control: Some inspectors may not check for termite damage or pest infestations unless specifically requested.</li>
                  <li>Swimming Pools/Spas: Pools, hot tubs, and spas are often not included in standard inspections, though you can request an add-on service.</li>
                  <li>Septic Systems: Inspectors may not assess septic systems unless they specialize in this area. Separate inspections are recommended for homes with septic tanks.</li>
                  <li>Hidden or Inaccessible Areas: If certain parts of the home are not accessible, such as a locked attic or a blocked crawl space, those areas may not be inspected.</li>
                </ul>
                <br />
                <p>It’s essential to discuss with your inspector what is and isn’t included and whether additional specialty inspections are needed.</p>
              </div>
              {/* Stats */}
              <div className=" my-12">
                <hr className="border-t border-gray-400 " />
                <div className="flex justify-between xl:justify-start items-center xl:gap-6 font-semibold py-4 text-gray-700">
                  <div className="flex items-center justify-center gap-2">
                    <FaRegEye />
                    <span>963 Views</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <HiOutlineAnnotation />
                    <span>0 Comments</span>
                  </div>
                  <div className="flex xl:ml-auto items-center justify-center gap-2 cursor-pointer">
                    <FaLink />
                    <span>Copy Link</span>
                  </div>
                </div>
                <hr className="border-t border-gray-400 " />
              </div>
              {/* Comment Form */}
              <div className=" mb-[72px] xl:mb-[96px]">
                <h2 className="text-base xl:text-2xl font-semibold mb-4">Leave a Comment</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Comment Area */}

                  <textarea id="comment" {...register("comment", { required: "Please enter your comment" })} className="w-full h-[132px] xl:h-[230px] p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" rows="4" placeholder="Write your comment" />
                  {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>}

                  <div className="flex flex-col xl:flex-row items-center justify-center gap-7">
                    {/* Name Input */}
                    <div className="w-full">
                      <label className="block text-[#0D152E] font-semibold mb-1" htmlFor="name">
                        Your Name
                      </label>
                      <input id="name" type="text" {...register("name", { required: "Please enter your name" })} className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" placeholder="John Doe" />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="w-full">
                      <label className="block text-[#0D152E] font-semibold mb-1" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Please enter your email address",
                          pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Please enter a valid email address",
                          },
                        })}
                        className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="example@gmail.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button type="submit" className=" w-[168px]  py-3 px-6   h-[48px] bg-primary text-white   rounded-lg font-semibold hover:bg-blue-500 transition duration-200">
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="xl:w-[34%]  pb-[48px] xl:pb-0 ">
              <div className="relative max-w-md mx-auto xl:mt-[96px] mb-[76px]  ">
                <input type="text" placeholder="Search..." className="w-full py-3 px-4 pr-10 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 h-[52px] " />
                <FaMagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <h2 className="text-[#0D152E] font-bold text-xl mb-6 text-left lg:text-center xl:text-left">Recent Posts</h2>
              <div className="grid lg:grid-cols-2 gap-8 xl:block">
                {rightBlogs.map((blog, index) => (
                  <a href="/blog/123" key={index} className=" max-w-[500px] mx-auto flex justify-between items-stretch mb-5">
                    <div className="w-[37%] xl:w-[33%]">
                      <Image className=" rounded-2xl   h-full" src={blog.img} alt="blog title" />
                    </div>
                    <div className="w-[60%] xl:w-[65%]  flex flex-col  ">
                      <h3 className="    font-bold  text-gray-700 leading-tight">{limitCharacters(blog.title, 50)}</h3>
                      <p className=" mt-[6px]    text-sm      text-gray-600">{limitCharacters(blog.description, 30)}</p>
                      <div className="flex mt-2 justify-between xl:justify-start items-center font-medium text-gray-600 text-xs xl:text-base  xl:gap-[10px]">
                        <Image src={blog.authorImg} alt="author" className="w-6 h-6 rounded-full" />
                        <span className="text-sm text-gray-700">{blog.author}</span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
