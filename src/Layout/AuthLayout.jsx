import React from "react";

export const AuthLayout = ({ children, showTNC = false }) => {
  return (
    <main className="flex h-screen">
      <div className="relative w-3/5 h-full">
        <img
          src="/logo.png"
          alt="Logo"
          className="absolute top-[16px] left-1/2 transform -translate-x-1/2"
        />
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/1062712640066644349/TEAM/fe68/b3e4/-a585-4d9d-b241-b1c51e1920e1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VHf7gINyOLQtap5cvDlAZXxcOsWKZ4O5twX-SuVi3HaUhNMpT-ua2xsK5T2GMEyylGhrk3LOhKVUclRHVmdxdTE7CE4Kwy2EgCk3ZnEWaiF93JW6pmQUdXSWqet6oeyplfEFD3r4NHFcorNb~Gz3OzLPmxo4t1w3-8Ie0jXZL7ABJ8w7eSbyep37VRuBQDl6m7~s~hpCgTla0ty6SOxcgLmB-F90XpMC~O8LCs1ZuWV525IkQv3vH7toJM4mbBu02HFNZnyoG5xM3PaIzQuUKcNnLzFyRlOVPhzpM7XKBFlY4Jl4ViTkRZfG2XGU2TfXQZyDc7weasatDYcwQY4PYQ__"
            type="video/ogg"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className={
          showTNC
            ? "bg-[#F9F8F3] w-2/5 h-full flex flex-col justify-center"
            : "w-2/5 h-full"
        }
      >
        {showTNC ? (
          <div className="bg-[#FFFFFF] p-4 rounded-[16px] w-[80%] mx-auto shadow-custom">
            {children}
          </div>
        ) : (
          children
        )}
        {showTNC && (
          <div className="flex gap-[24px] pt-4 justify-center font-semibold text-[#607B88]">
            <span>Terms</span>
            <span>Plans</span>
            <span>Contact Us</span>
          </div>
        )}
      </div>
    </main>
  );
};
