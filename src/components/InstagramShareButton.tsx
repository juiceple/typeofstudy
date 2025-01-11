"use client";

import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";

interface InstagramShareButtonProps {
  imagePath: string; // 예: "/images/FA.jpg"
  caption?: string;
  onShareComplete?: () => void;  // 추가: 부모로부터 넘어오는 콜백
}

const InstagramShareButton = ({ imagePath, caption = "", onShareComplete }: InstagramShareButtonProps) => {
  const downloadAndShare = async () => {
    try {
      // 브라우저 상에서 현재 도메인 정보 가져옴
      const baseUrl = window.location.origin;
      const finalImageUrl = new URL(imagePath, baseUrl).href;

      // 이미지 fetch -> blob 변환
      const response = await fetch(finalImageUrl);
      if (!response.ok) {
        throw new Error("이미지를 불러오는데 실패했습니다.");
      }
      const blob = await response.blob();

      // 다운로드를 위한 임시 링크 생성 -> 클릭
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "share-image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // 모바일 기기 확인
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      // 인스타그램 앱으로 이동
      if (isMobile) {
        window.location.href = "instagram://story-camera";
      } else {
        window.open("https://www.instagram.com", "_blank");
      }

      // ★★★ 여기서 부모의 handleShareComplete() 호출
      if (onShareComplete) {
        onShareComplete();
      }

    } catch (error) {
      console.error("Error downloading image:", error);
      alert("이미지 다운로드 중 오류가 발생했습니다.");
    }
  };

  return (
    <Button
      onClick={downloadAndShare}
      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    >
      <Share className="w-4 h-4" />
      인스타그램으로 공유하기
    </Button>
  );
};

export default InstagramShareButton;
