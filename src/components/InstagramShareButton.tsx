import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";

interface InstagramShareButtonProps {
  imagePath: string;
  caption?: string;
}

const InstagramShareButton = ({ imagePath, caption = '' }: InstagramShareButtonProps) => {
  const shareToInstagram = async () => {
    const baseUrl = window.location.origin;
    const absoluteImageUrl = `${baseUrl}${imagePath}`;

    // 모바일 기기 확인
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 웹 공유 API 지원 확인
      if (navigator.share) {
        try {
          await navigator.share({
            title: caption,
            text: caption,
            url: absoluteImageUrl,
          });
        } catch (error) {
          console.error('Error sharing:', error);
          // 공유 API 실패시 인스타그램 앱으로 직접 이동
          window.location.href = `instagram://camera`;
        }
      } else {
        // 공유 API를 지원하지 않는 경우 인스타그램 앱으로 직접 이동
        window.location.href = `instagram://camera`;
      }
    } else {
      // 데스크톱에서는 인스타그램 웹사이트로 이동
      window.open('https://www.instagram.com', '_blank');
    }
  };

  return (
    <Button
      onClick={shareToInstagram}
      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    >
      <Share className="w-4 h-4" />
      인스타그램으로 공유하기
    </Button>
  );
};

export default InstagramShareButton;