import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  // return <>{children}</>;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="overflow-hidden">
        <div className={"mx-auto mt-28 w-full flex-grow lg:max-w-7xl"}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
