import * as React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-2 bg-white">
      <header className="mb-1">
        <h1 className=" text-5xl italic text-blue-900 font-semibold select-none">
          OhHi.net
        </h1>
      </header>
      <nav className="mb-6">
        <ul className="flex justify-around items-center flex-wrap gap-5 bg-blue-600 text-white font-semibold border-t-8 border-blue-900 cursor-pointer">
          <li>Home</li>
          <li>News</li>
          <li>Create Journal</li>
          <li>Modify Journal</li>
          <li>Download</li>
          <li>Directory</li>
          <li>Support</li>
        </ul>
      </nav>
      <main className="font-serif">{children}</main>
      <footer className="bg-blue-600 text-white p-3 mt-3 border-t-8 border-blue-900 ">
        This is a normal footer 0_0
      </footer>
    </div>
  );
}
