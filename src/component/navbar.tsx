import log from "@/assites/log.png";
import search from "@/assites/search.png";
import Top from "@/assites/top.png";
import React from "react";
import Image from "next/image";
import Call from "@/assites/call.png";
import Mail from "@/assites/mail.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-screen">
      {/* Top Bar */}
      <div className="h-8 w-full bg-blue-400 flex justify-between items-center relative">
        <div className="hidden md:flex space-x-6 items-center left-96 relative m-60 ">
          <Image src={Mail} width={20} height={20} alt="mail"  />
          <p className="text-sm md:text-lg text-gray-700 hover:text-blue-500">
            www.registerkaro.in
          </p>
          <p>|</p>
          <Image src={Call} width={20} height={20} alt="call" />
          <p className="text-sm md:text-lg text-gray-700 hover:text-blue-500">
            +918447746183
          </p>
        </div>
        <div className="hidden md:flex justify-around items-center m-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M13.001 19.9381C16.9473 19.446 20.001 16.0796 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.0796 7.05467 19.446 11.001 19.9381V14H9.00098V12H11.001V10.3458C11.001 9.00855 11.1402 8.52362 11.4017 8.03473C11.6631 7.54584 12.0468 7.16216 12.5357 6.9007C12.9184 6.69604 13.3931 6.57252 14.2227 6.51954C14.5519 6.49851 14.9781 6.52533 15.501 6.6V8.5H15.001C14.0837 8.5 13.7052 8.54332 13.4789 8.66433C13.3386 8.73939 13.2404 8.83758 13.1653 8.97793C13.0443 9.20418 13.001 9.42853 13.001 10.3458V12H15.501L15.001 14H13.001V19.9381ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.3499 5.55005C13.7681 5.55005 12.4786 6.81809 12.4504 8.39658L12.4223 9.97162C12.4164 10.3029 12.143 10.5667 11.8117 10.5608C11.7881 10.5604 11.7646 10.5586 11.7413 10.5554L10.1805 10.3426C8.12699 10.0625 6.15883 9.11736 4.27072 7.54411C3.67275 10.8538 4.84 13.1472 7.65342 14.916L9.40041 16.0142C9.68095 16.1906 9.7654 16.561 9.58903 16.8415C9.54861 16.9058 9.49636 16.9619 9.43504 17.0067L7.84338 18.1696C8.78973 18.229 9.68938 18.1875 10.435 18.0387C15.1526 17.0973 18.2897 13.547 18.2897 7.69109C18.2897 7.213 17.2774 5.55005 15.3499 5.55005ZM10.4507 8.3609C10.4983 5.69584 12.6735 3.55005 15.3499 3.55005C16.7132 3.55005 17.9465 4.10683 18.8348 5.0054C19.5462 5.00005 20.1514 5.17991 21.5035 4.35967C21.1693 6.00005 21.0034 6.71201 20.2897 7.69109C20.2897 15.3326 15.5926 19.0489 10.8264 20C7.5587 20.6522 2.80646 19.5815 1.44531 18.1587C2.13874 18.1054 4.95928 17.802 6.58895 16.6092C5.20994 15.6987 -0.278631 12.4681 3.32772 3.78642C5.02119 5.76307 6.73797 7.10855 8.47807 7.82286C9.63548 8.29798 9.91978 8.2885 10.4507 8.3609Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8.49161 19.1912C8.51535 18.8546 8.56306 18.5199 8.63456 18.1897C8.69754 17.8951 8.88867 17.0596 9.16872 15.8498L9.17581 15.8191C9.29895 15.2872 9.43089 14.7192 9.56283 14.1525C9.64199 13.8124 9.70356 13.5484 9.74438 13.4602C9.55012 13.0123 9.45298 12.5263 9.45969 12.0373C9.45969 10.6999 10.2157 9.66359 11.1958 9.6636C11.5555 9.65809 11.8996 9.81388 12.1383 10.09C12.3764 10.3655 12.4863 10.7335 12.4404 11.086C12.4404 11.5385 12.3548 11.8844 11.9865 13.1212C11.9158 13.3587 11.8674 13.5254 11.8215 13.692C11.7696 13.8799 11.7261 14.0503 11.6887 14.2136C11.5928 14.6003 11.6811 15.011 11.9262 15.3195C12.1707 15.6272 12.5421 15.7966 12.9319 15.7762C14.4242 15.7762 15.5321 13.7911 15.5321 11.2277C15.5321 9.25804 14.2412 7.95424 12.1 7.95416C11.0224 7.91127 9.97466 8.32523 9.20095 9.09986C8.42664 9.87508 7.99452 10.9437 8.00559 12.0614C7.98214 12.6633 8.17064 13.2536 8.51804 13.7053C8.69915 13.8441 8.76869 14.0885 8.69262 14.2941C8.65157 14.4632 8.55259 14.8473 8.51649 14.9755C8.49464 15.1032 8.41497 15.2131 8.30126 15.2715C8.18678 15.3303 8.05172 15.3297 7.94618 15.2737C6.78507 14.7954 6.14967 13.4963 6.14967 11.8349C6.14967 8.84907 8.64129 6.2497 12.3417 6.2497C15.4772 6.2497 17.8231 8.57864 17.8231 11.3896C17.8231 14.922 15.8911 17.4942 13.1337 17.4942C12.3393 17.5202 11.5838 17.162 11.087 16.535L11.044 16.712C10.9499 17.0992 10.9028 17.2928 10.8368 17.5638L10.8349 17.5715C10.6887 18.1717 10.5867 18.5885 10.5471 18.7452C10.4412 19.0998 10.307 19.448 10.1471 19.7841C10.7421 19.9253 11.3628 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 15.1594 5.83244 17.8911 8.49161 19.1912ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"></path></svg>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-16 bg-white flex flex-wrap justify-between items-center px-4 lg:px-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          
          <Image src={Top} width={40} height={50} alt="top"  className="absolute"/>
          <Image src={log} width={100} height={40} alt="log" />
         
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 left-60 relative">
          <p className="text-sm lg:text-base text-black hover:text-blue-500 cursor-pointer">
            Home
          </p>
          <p className="text-sm lg:text-base text-black hover:text-blue-500 cursor-pointer">
            Our Services
          </p>
          <Link href="/about" className="text-sm lg:text-base text-black hover:text-blue-500 cursor-pointer">
            Blog
          </Link>
          <p className="text-sm lg:text-base text-black hover:text-blue-500 cursor-pointer">
            Contact Us
          </p>
          <p className="text-sm lg:text-base text-black hover:text-blue-500 cursor-pointer">
            About Us
          </p>
        </div>

        {/* Search and Button */}
        <div className="flex items-center space-x-4">
          <Image src={search} width={30} height={30} alt="search" />
          <button className="h-8 w-28 bg-orange-500 text-white text-sm lg:text-base rounded-lg hover:bg-orange-600">
            Talk An Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
