"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

interface TwoStepShareProps {
  imagePath: string; // 예: "/images/FA.jpg"
  onShareComplete?: () => void; // 부모에서 받아오는 콜백
}

export default function TwoStepShare({
  imagePath,
  onShareComplete,
}: TwoStepShareProps) {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
  try {
    const baseUrl = window.location.origin;
    const finalImageUrl = new URL(imagePath, baseUrl).href;

    const response = await fetch(finalImageUrl);
    if (!response.ok) throw new Error("이미지를 불러오는데 실패했습니다.");

    const blob = await response.blob();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, "_blank"); // 새 창에서 이미지 오픈
      alert("이미지를 길게 눌러 저장해주세요.");
    } else {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "share-image.jpg"; // 데스크탑은 자동 다운로드
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      alert("이미지가 다운로드되었습니다!");
    }

    setIsDownloaded(true);
  } catch (error) {
    console.error("Error downloading image:", error);
    alert("이미지 다운로드 중 오류가 발생했습니다.");
  }
};


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
        className="relative rounded-full bg-gray-200 hover:bg-gray-300 w-12 h-12 shadow-md overflow-hidden"
        // disabled={!isDownloaded} // 다운로드 완료 후 활성화
      >
        <Image
          src="/images/instagramlogo.jpeg"
          alt="Instagram Logo"
          fill // 부모에 맞춰 꽉 차게 설정
          className="object-cover"
        />
      </Button>
    </div>
  );
}
