"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TwoStepShareProps {
//   imagePath: string; // 예: "/images/FA.jpg"
  onShareComplete?: () => void; // 부모에서 받아오는 콜백
}

export default function TwoStepShare({
//   imagePath,
  onShareComplete,
}: TwoStepShareProps) {


  const handleOpenInstagram = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "instagram://story-camera";
    } else {
      window.open("https://www.instagram.com", "_blank");
    }

    if (onShareComplete) {
      onShareComplete();
    }
  };

  return (
    <div className="flex gap-4 items-center">
      {/* 다운로드 버튼 */}
      {/* <Button
        onClick={handleDownload}
        className="rounded-full bg-gray-400 hover:bg-gray-500 w-12 h-12 flex items-center justify-center p-2 shadow-md"
      >
        <Download className="w-4 h-4" />
      </Button> */}

      {/* 인스타그램 버튼 */}
      <Button
        onClick={handleOpenInstagram}
        className="relative rounded-full bg-white hover:bg-gray-100 w-12 h-12 shadow-md overflow-hidden"
        // disabled={!isDownloaded} // 다운로드 완료 후 활성화
      >
        <Image
          src="/images/instagram-logo.png"
          alt="Instagram Logo"
          fill // 부모에 맞춰 꽉 차게 설정
          className="object-cover"
        />
      </Button>
    </div>
  );
}
