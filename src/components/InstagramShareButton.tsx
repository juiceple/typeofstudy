import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";

interface InstagramShareButtonProps {
  imagePath: string; // public 폴더 내의 이미지 경로
  caption?: string;
}

const InstagramShareButton = ({ imagePath = '', caption = '' }: InstagramShareButtonProps) => {
  const shareToInstagram = () => {
    // 현재 도메인을 가져와서 절대 URL 생성
    const baseUrl = window.location.origin;
    // public 폴더의 이미지에 대한 절대 URL 생성
    const absoluteImageUrl = `${baseUrl}${imagePath}`;
    
    const instagramUrl = `instagram-stories://share`;
    const params = new URLSearchParams({
      source_application: 'your_app_name',
      media: absoluteImageUrl,
      caption: caption
    });

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `${instagramUrl}?${params.toString()}`;
    } else {
      alert('모바일 기기에서 접속해주세요.');
    }
  };

  return (
    <Button
      onClick={shareToInstagram}
      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    >
      <Share className="w-4 h-4" />
      인스타그램 스토리 공유
    </Button>
  );
};

export default InstagramShareButton;