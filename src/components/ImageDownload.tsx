"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Share } from "lucide-react";

interface TwoStepShareProps {
  imagePath: string; // 예: "/images/FA.jpg"
  onShareComplete?: () => void; // 부모에서 받아오는 콜백
}

export default function TwoStepShare({
  imagePath,
  onShareComplete,
}: TwoStepShareProps) {
  const [isDownloaded, setIsDownloaded] = useState(false);

  // 1) 이미지 다운로드
  const handleDownload = async () => {
    try {
      // 브라우저 상에서 현재 도메인 정보
      const baseUrl = window.location.origin;
      const finalImageUrl = new URL(imagePath, baseUrl).href;

      // 이미지 fetch -> blob 변환
      const response = await fetch(finalImageUrl);
      if (!response.ok) {
        throw new Error("이미지를 불러오는데 실패했습니다.");
      }
      const blob = await response.blob();

      // 모바일 기기 판별
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // iOS Safari 등에서 자동 다운로드가 막힐 수 있으므로, 새 탭에서 이미지를 열어 직접 저장하도록 유도
        const blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl, "_blank");

        alert("이미지를 길게 눌러 저장해주세요. 저장 후, '인스타그램 열기' 버튼을 눌러주세요!");
      } else {
        // 데스크톱 환경 -> a 태그 생성하여 link.click()로 다운로드
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "share-image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        alert("이미지가 다운로드되었습니다. 이제 '인스타그램 열기' 버튼을 눌러주세요!");
      }

      setIsDownloaded(true);
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("이미지 다운로드 중 오류가 발생했습니다.");
    }
  };

  // 2) 인스타그램 열기
  const handleOpenInstagram = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 인스타그램 스토리 카메라로 이동
      window.location.href = "instagram://story-camera";
    } else {
      // 데스크톱 환경은 인스타그램 웹사이트 열기
      window.open("https://www.instagram.com", "_blank");
    }

    // 인스타그램 열기 버튼을 누른 시점에 onShareComplete 호출
    if (onShareComplete) {
      onShareComplete();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
      >
        <Download className="w-4 h-4" />
        1) 사진 다운로드
      </Button>

      <Button
        onClick={handleOpenInstagram}
        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        disabled={!isDownloaded} // 다운로드 완료 후에만 버튼 활성화
      >
        <Share className="w-4 h-4" />
        2) 인스타그램 열기
      </Button>
    </div>
  );
}
