"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi";
import { TbGavel } from "react-icons/tb";
import { TbHomeSearch } from "react-icons/tb";
import { TbHanger2 } from "react-icons/tb";
import { TbBuildingBank } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";

// Internal Imports

import HeaderImg from "@/assets/blog/blog-header.jpg";
import fiveTips from "@/assets/blog/5-tips.jpg";
import whyLocation from "@/assets/blog/why-location.jpg";
import understandingProperty from "@/assets/blog/understanding-property.jpg";
import theHombebuyers from "@/assets/blog/the-homebuyers.jpg";
import roger from "@/assets/blog/roger.png";
import theFirstTime from "@/assets/blog/the-first-time.jpg";
import realState from "@/assets/blog/real-state.jpg";
import aGuideTo from "@/assets/blog/a-guide-to.jpg";
import findingPerfect from "@/assets/blog/finding-perfect.jpg";
import rentingVs from "@/assets/blog/renting-vs.jpg";
import ecoFriendly from "@/assets/blog/eco-friendly.jpg";
import whatToLook from "@/assets/blog/what-to-look.jpg";
import theFuture from "@/assets/blog/the-future.jpg";
import whatToExpect from "@/assets/blog/what-to-expect.jpg";
import Link from "next/link";

const limitCharacters = (text, limit) => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

const Blog = () => {
  const rightBlogs = [
    { title: "Why Location Matters How to Choose the Best Neighborhood", description: "Explore the key factors that make a neighborhood desirable, from schools and amenities to future development plans", img: whyLocation },
    { title: "Understanding Property Taxes What Every Buyer Should Know", description: "Break down the often confusing topic of property taxes, including how they are calculated and their impact on long-term ownership costs.", img: understandingProperty },
    { title: "The Homebuyer's Checklist What to Look for During a Property Tour", description: "A comprehensive checklist for buyers to ensure they don’t miss important details when touring a potential new home.", img: theHombebuyers },
  ];

  const categories = [
    { name: "Investing", icon: HiOutlineBriefcase },
    { name: "Legal", icon: TbGavel },
    { name: "Home Buying", icon: TbHomeSearch },
    { name: "Lifestyle", icon: TbHanger2 },
    { name: "Economy", icon: TbBuildingBank },
  ];

  const [activeCategory, setActiveCategory] = useState("Home Buying");

  const allBlogs = [
    {
      title: "The First-Time Homebuyer’s Checklist Everything You Need to Know",
      description: "Buying your first home can be overwhelming, but it doesn’t have to be. This detailed checklist breaks down every step of the home-buying process, from securing financing to making the final offer.",
      img: theFirstTime,
      category: ["Home Buying", "Lifestyle", "Economy"],
    },
    {
      title: "Real Estate Investment Strategies How to Build Wealth in 2024",
      description: "Thinking about diving into real estate investment? This article outlines the best strategies for 2024, including rental properties, flipping homes, and investing in REITs.",
      img: realState,
      category: ["Home Buying", "Lifestyle", "Economy"],
    },
    {
      title: "A Guide to Understanding Mortgage Rates What Buyers Should Know",
      description: "Mortgage rates can be confusing, but understanding them is key to making smart financial decisions when buying a home.",
      img: aGuideTo,
      category: ["Home Buying", "Lifestyle", "Economy"],
    },
    {
      title: "Finding Perfect Neighborhood What to Consider Before You Buy",
      description: "Location is one of the most important factors when buying a home. This blog dives into how to evaluate neighborhoods based on lifestyle, proximity to schools and amenities",
      img: findingPerfect,
      category: ["Home Buying", "Lifestyle", "Economy"],
    },
    {
      title: "Renting vs. Buying Which Option is Right for You",
      description: "Should you rent or buy a home? This article breaks down the pros and cons of both, helping readers weigh financial factors, lifestyle preferences, and long-term goals.",
      img: rentingVs,
      category: ["Investing", "Legal", "Home Buying", "Lifestyle", "Economy"],
    },
    {
      title: "Eco-Friendly Homes How to Make Your Property More Sustainable",
      description: "Sustainability is becoming a key concern for many homebuyers. This post explores simple upgrades you can make to reduce your home’s environmental impact",
      img: ecoFriendly,
      category: ["Investing", "Legal", "Home Buying", "Lifestyle", "Economy"],
    },
    {
      title: "What to Look for During a Property Inspection A Buyer’s Guide",
      description: "A home inspection is a critical step in the buying process. This guide highlights what to look for during an inspection, from structural issues to hidden electrical or plumbing problems.",
      img: whatToLook,
      category: ["Investing", "Legal", "Home Buying"],
    },
    {
      title: "The Future of Smart Homes What’s Next in Real Estate Technology",
      description: "Technology is rapidly changing how we live in and manage our homes. This article takes a look at the latest smart home innovations, including AI-powered appliances",
      img: theFuture,
      category: ["Investing", "Legal", "Home Buying"],
    },
    {
      title: "What to Expect in a Home Inspection A Complete Buyer’s Checklist",
      description: "A home inspection is a crucial step in the buying process, but many first-time buyers don’t know what to expect.",
      img: whatToExpect,
      category: ["Investing", "Legal", "Home Buying"],
    },
  ];

  return (
    <div className="pt-[60px] lg:pt-24 font-Manrope bg-white min-h-[70vh]  ">
      {/* Blog Header */}
      <div className="relative h-[256px] xl:h-[650px]">
        <div
          className="absolute top-0 left-0 w-full h-full "
          style={{
            backgroundImage: `url(${HeaderImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="absolute z-10 top-0 left-0 w-full h-full "
          style={{
            background: "linear-gradient(180deg, rgba(4, 4, 4, 0.1) 0.28%, rgba(0, 0, 0, 0.4) 49.18%, rgba(0, 0, 0, 0.1) 100%)",
          }}
        ></div>
        <div
          className="absolute z-20 top-0 left-0 w-full h-full "
          style={{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 40.34%, rgba(0, 0, 0, 0.4) 100%)",
            backdropFilter: "blur(1px)",
          }}
        ></div>
        <div className="container_fluid absolute top-0 left-0 z-30 flex justify-start items-end right-0 bottom-0">
          <div className="flex flex-col items-start max-w-[765px] gap-4 pb-[24px] xl:pb-[64px]">
            <h1 className="text-xl font-Merriweather xl:text-[60px] font-bold  text-white leading-tight">Top Property Investment Strategies for 2024</h1>
            <p className="text-base xl:text-lg font-Manrope  text-white">A guide to the best investment opportunities in real estate, covering the latest market trends and tips for maximizing returns.</p>
          </div>
        </div>
      </div>
      {/* Blog Content */}
      <div className="bg-secBg ">
        <div className="container_fluid py-[32px] xl:pt-[100px]  ">
          {/* Heading */}
          <div className="flex flex-col items-center max-w-[1038px] mx-auto  gap-2  ">
            <h2 className="text-xl   xl:text-[48px] font-bold  text-darkBlue leading-tight">
              Featured <span className="text-primary">Blogs</span>
            </h2>
            <p className="text-sm xl:text-lg   text-center  text-gray-700">Stay updated with the latest trends and insights in the property market. These are our most-read articles, packed with expert tips and advice to help you make informed decisions, whether you&apos;re buying, selling, or investing in real estate.</p>
          </div>

          {/* Blog Cards */}
          <div className="xl:flex justify-between gap-[32px] items-start mt-8   xl:my-[60px] ">
            <div className="xl:w-[52%]  flex flex-col mb-8 xl:mb-0 ">
              <Link href="/blog/123" className=" hover:opacity-90 transition  ">
                <Image className=" rounded-2xl w-full h-auto" src={fiveTips} alt="blogHeader" />
              </Link>
              <Link href="/blog/123" className="text-gray-800 hover:text-primary transition">
                <h3 className=" mt-6    xl:text-[32px] font-bold   leading-tight">5 Tips for First-Time Home Buyers What You Need to Know</h3>
              </Link>

              <p className=" mt-2 text-sm xl:text-base       text-gray-700">Help first-time buyers navigate the process with key advice on budgeting, mortgage options, and avoiding common mistakes.</p>
              <Link href="/blog/123" className="mt-4 text-primary font-semibold flex items-center justify-start h-[22px]">
                <span>Read details </span>
                <FaArrowRightLong className="text-primary ml-1 mt-[5px] " />
              </Link>
            </div>
            <div className="xl:w-[45%]   ">
              {rightBlogs.map((blog, index) => (
                <div key={index} className="flex justify-between items-stretch mb-5">
                  <div className="w-[37%] xl:w-[33%]">
                    <Link href="/blog/123" className=" hover:opacity-90 transition  ">
                      <Image className=" rounded-2xl   h-full" src={blog.img} alt="blog title" />
                    </Link>
                  </div>
                  <div className="w-[60%] xl:w-[65%]  flex flex-col  ">
                    <Link href="/blog/123" className="text-gray-800 hover:text-primary transition">
                      <h3 className="   text-sm  xl:text-2xl font-bold    leading-tight">{limitCharacters(blog.title, 50)}</h3>
                    </Link>

                    <p className=" mt-[6px] xl:mt-3 text-xs xl:text-base       text-gray-700">{limitCharacters(blog.description, 70)}</p>
                    <Link href="/blog/123" className=" mt-2 xl:mt-4 text-sm xl:text-base text-primary font-semibold flex items-center justify-start h-[22px]">
                      <span>Read details </span>
                      <FaArrowRightLong className="text-primary ml-1 mt-[5px] " />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container_fluid pt-[72px] pb-12 lg:pb-[100px] px-4 2xl:px-0 ">
        {/* Categories */}
        <div className="flex justify-start lg:justify-center items-center flex-nowrap overflow-scroll xl:overflow-auto  gap-4 custom-scrollbar-no-width">
          {categories.map((category, index) => (
            <button key={index} onClick={() => setActiveCategory(category.name)} className={`border flex-shrink-0 h-[42px] border-[#CBD5E0] hover:border-primary font-semibold text-base text-gray-700 hover:text-primary transition flex justify-center items-center rounded-lg px-5 py-[10px] gap-2 ${activeCategory === category.name ? "border-primary text-primary bg-primary/5" : ""}`}>
              <category.icon />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 mt-8 xl:grid-cols-3 gap-y-10 lg:gap-x-8 lg:gap-y-12">
          {allBlogs
            .filter((blog) => blog.category.includes(activeCategory))
            .map((blog, index) => (
              <div key={index} className="   flex flex-col gap-4  max-w-[500px] mx-auto ">
                <Link href="/blog/123" className=" hover:opacity-90 transition   ">
                  <Image src={blog.img} alt="blog title" className="rounded-lg h-[236px] lg:h-[293px]" />
                </Link>
                <div className="flex justify-start items-center font-medium text-gray-600 text-base  gap-[10px]">
                  <Image src={roger} alt="author" className="w-6 h-6 rounded-full" />
                  <span className="text-sm text-gray-700">Roger Shields</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span>20 Oct 2024</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span>6 min read</span>
                </div>
                <Link href="/blog/123" className="text-gray-800 hover:text-primary transition">
                  <h3 className="text-2xl font-bold  ">{limitCharacters(blog.title, 50)}</h3>
                </Link>

                <p className="text-base mt-2 text-gray-600">{limitCharacters(blog.description, 90)}</p>
                <Link href="/blog/123" className="text-primary text-base mt-4 lg:mt-2 font-semibold flex items-center justify-start h-[22px]">
                  <span>Read details </span>
                  <FaArrowRightLong className="text-primary ml-1 mt-[5px] " />
                </Link>
              </div>
            ))}
        </div>
        {/* Load More Button */}
        <div className="flex justify-center mt-8 lg:mt-16">
          <button className="border border-gray-900 text-gray-900  text-base px-4 py-3 rounded-[40px] w-[144px] h-12   flex items-center justify-center gap-1 mt-8 bg-transparent font-bold hover:border-darkBlue hover:bg-darkBlue hover:text-white duration-200 transition ">
            Load More
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
