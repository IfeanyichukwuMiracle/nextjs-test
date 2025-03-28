import Link from "next/link";
import Image from "next/image";
import image from "../../public/investor.jpg";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="w-full fixed top-0 bg-[#fdfdfd] z-50 flex px-3 py-3  justify-between items-center">
        <p className="font-bold">Climax AI</p>
        <div className="flex items-center gap-2 text-[.96rem]">
          <nav>About</nav>
          <nav>Contact</nav>
          <Link href="/signup">
            <nav className="bg-gray-950 hover:bg-gray-900 transition-all cursor-pointer text-[whitesmoke] font-semibold px-2 py-1 rounded-full">
              Register
            </nav>
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <main className="w-full px-3 sm:py-32 sm:px-6 py-28 bg-gradient-to-t from-gray-300 via-[#fcfcfc] to-[#fdfdfd]">
        {/* Hero text */}
        <div className="w-full m-auto sm:w-[60%] md:w-[55%] text-center mb-10">
          <p className="font-extrabold capitalize text-4xl sm:text-5xl">
            AI services that boost your business
          </p>
          <p className="text-base my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            magnam quis. Velit, dolorem. Lorem erw.
          </p>
          <button className="bg-gray-950 hover:bg-gray-900 transition-all cursor-pointer text-[whitesmoke] font-semibold px-2 py-1 rounded-full">
            Get Started
          </button>
        </div>
        {/* Hero image */}
        <div className="w-full relative m-auto sm:w-[80%] md:w-[70%]">
          <Image
            src={image}
            alt="businessman"
            className="block w-full rounded-md"
          />
          {/* floating card */}
          <div className="p-2 scale-90 sm:scale-100 rounded-md w-max absolute -top-[1.5rem] -right-[1rem] bg-[#fdfdfd] flex items-center gap-2 shadow-2xl">
            <div className="size-7 rounded-full text-white bg-gray-950 flex items-center justify-center font-bold text-[.95rem]">
              O
            </div>
            <div>
              <p className="text-[.92rem] font-semibold">Cornell Adameu</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet $50
              </p>
            </div>
          </div>
          <div className="p-2 scale-90 sm:scale-100 rounded-md w-max absolute -bottom-[1.5rem] -left-[1rem] bg-[#fdfdfd] flex items-center gap-2 shadow-2xl">
            <div className="size-7 rounded-full text-white bg-gray-950 flex items-center justify-center font-bold text-[.95rem]">
              O
            </div>
            <div>
              <p className="text-[.92rem] font-semibold">Cornell Adameu</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet $50
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Benefits section */}
      <section className="bg-gray-950 relative z-10 text-[#fdfdfd] px-3 py-24 sm:px-12 -mt-4 rounded-3xl">
        {/* First benefit */}
        <section className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div className="w-full sm:w-[50%]">
            <p className="text-2xl sm:text-3xl">Growth Funding</p>
            <p className="text-2xl sm:text-3xl text-gray-500">
              Custom terms rooted in deep understanding of startups
            </p>
          </div>
          <div className="w-full sm:w-[50%]">
            <p className="mb-5 text-[.94rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut enim
              suscipit neque, error nostrum illo modi. Laborum assumenda
              pariatur repellat!
            </p>
            <p className="text-[.94rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              recusandae veritatis quidem velit fuga natus praesentium cumque
              ipsam alias accusantium quae excepturi odio consequatur officia
              voluptatum nulla, mollitia reprehenderit soluta deserunt
              asperiores! Nobis, beatae ipsam?
            </p>
          </div>
        </section>
        <section className="flex flex-col sm:flex-row my-8 sm:my-10 gap-6">
          <div>
            <Image src={image} alt="businessman" className="block rounded-md" />
          </div>
          <div>
            <Image src={image} alt="businessman" className="block rounded-md" />
          </div>
          <div className="hidden sm:block">
            <Image src={image} alt="businessman" className="block rounded-md" />
          </div>
        </section>
        {/* second benefit */}
        <section className="flex mt-[8rem] flex-col sm:flex-row gap-6 sm:gap-8">
          <div className="w-full sm:w-[50%]">
            <p className="text-2xl sm:text-3xl">Growth Funding</p>
            <p className="text-2xl sm:text-3xl text-gray-500">
              Custom terms rooted in deep understanding of startups
            </p>
          </div>
          <div className="w-full sm:w-[50%]">
            <p className="mb-5 text-[.94rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut enim
              suscipit neque, error nostrum illo modi. Laborum assumenda
              pariatur repellat!
            </p>
            <p className="text-[.94rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              recusandae veritatis quidem velit fuga natus praesentium cumque
              ipsam alias accusantium quae excepturi odio consequatur officia
              voluptatum nulla, mollitia reprehenderit soluta deserunt
              asperiores! Nobis, beatae ipsam?
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-3 my-8 sm:my-10 gap-6">
          <div>
            <Image src={image} alt="businessman" className="block rounded-md" />
            <p className="mt-2 text-xl font-semibold">
              Get introduced to the investors looking for you
            </p>
          </div>
          <div>
            <Image src={image} alt="businessman" className="block rounded-md" />
            <p className="mt-2 text-xl font-semibold">
              Get introduced to the investors looking for you
            </p>
          </div>
          <div>
            <Image src={image} alt="businessman" className="block rounded-md" />
            <p className="mt-2 text-xl font-semibold">
              Get introduced to the investors looking for you
            </p>
          </div>
          <div>
            <Image src={image} alt="businessman" className="block rounded-md" />
            <p className="mt-2 text-xl font-semibold">
              Get introduced to the investors looking for you
            </p>
          </div>
        </section>
      </section>

      {/* pricing */}
      <section className="px-3 py-24 sm:px-12 -mt-4 bg-gradient-to-b from-gray-300 via-[#fcfcfc] to-[#fdfdfd]">
        <section className="flex mt-[8rem] flex-col sm:flex-row gap-6 sm:gap-8">
          <div className="w-full sm:w-[50%]">
            <p className="text-2xl sm:text-3xl">AI Service Packages</p>
            <p className="text-2xl sm:text-3xl text-gray-500">
              Custom terms rooted in deep understanding of startups
            </p>
          </div>
          <div className="w-full sm:w-[50%]">
            <p className="text-[.94rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut enim
              suscipit neque, error nostrum illo modi. Laborum assumenda
              pariatur repellat!
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-3 my-8 sm:my-10 gap-6">
          {/* Regular package */}
          <div className="rounded-md bg-gray-100 flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all p-3 shadow-md">
            <div>
              <p className="text-xl font-bold mb-1 text-gray-500">Regular</p>
              <p className="text-2xl sm:text-4xl font-extrabold">$1,500</p>
              <p className="text-[.97rem] my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                harum quo officia dolorum cum cupiditate officiis voluptatum
                minima dolorem aspernatur.
              </p>
              <ul>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
              </ul>
            </div>
            <button className="block w-full mt-8 sm:mt-0 border font-semibold border-gray-950 rounded-full px-2 py-1">
              Get Package
            </button>
          </div>
          {/* Main package */}
          <div className="rounded-md bg-[#fdfdfd] cursor-pointer hover:shadow-2xl transition-all p-3 shadow-md">
            <div>
              <p className="text-xl font-bold text-gray-500 mb-1">Main</p>
              <p className="text-2xl sm:text-4xl font-extrabold">$3,500</p>
              <p className="text-[.97rem] my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                harum quo officia dolorum cum cupiditate officiis voluptatum
                minima dolorem aspernatur.
              </p>
              <ul>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
              </ul>
            </div>
            <button className="block bg-gray-950 font-semibold w-full mt-8 text-[#fdfdfd] rounded-full px-2 py-1">
              Get Package
            </button>
          </div>
          {/* Another */}
          <div className="rounded-md bg-gray-100 flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all p-3 shadow-md">
            <div>
              <p className="text-xl font-bold mb-1 text-gray-500">
                Pro-Regular
              </p>
              <p className="text-2xl sm:text-4xl font-extrabold">$2,250</p>
              <p className="text-[.97rem] my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                harum quo officia dolorum cum cupiditate officiis voluptatum
                minima dolorem aspernatur.
              </p>
              <ul>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="flex items-center gap-1">
                  <span>*</span>
                  <span>Lorem ipsum dolor sit amet.</span>
                </li>
              </ul>
            </div>
            <button className="block w-full mt-8 sm:mt-0 border font-semibold border-gray-950 rounded-full px-2 py-1">
              Get Package
            </button>
          </div>
        </section>
      </section>

      {/* Footer section */}
      <footer className="w-full px-3 py-2">
        <div className="w-max m-auto">
          &copy; Copyright{" "}
          <span className="font-bold">Climax AI Solutions</span> 2025
        </div>
      </footer>
    </>
  );
}
