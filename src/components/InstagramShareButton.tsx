import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";

interface InstagramShareButtonProps {
  imageUrl: string;
  caption?: string;
}

const InstagramShareButton = ({ imageUrl, caption = '' }: InstagramShareButtonProps) => {
  const shareToInstagram = () => {
    // 인스타그램 스토리 공유 URL 생성
    // 참고: 인스타그램은 웹에서 직접 스토리 공유가 제한적이므로,
    // 모바일에서 인스타그램 앱으로 연결되도록 구현합니다.
    const instagramUrl = `instagram-stories://share`;
    
    // 이미지 URL이 인스타그램에서 접근 가능한 공개 URL이어야 합니다
    const params = new URLSearchParams({
      source_application: 'your_app_name',
      media: imageUrl,
      caption: caption
    });

    // 모바일 기기 확인
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 모바일에서는 인스타그램 앱으로 직접 연결
      window.location.href = `${instagramUrl}?${params.toString()}`;
    } else {
      // 데스크톱에서는 QR 코드나 안내 메시지를 표시할 수 있습니다
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