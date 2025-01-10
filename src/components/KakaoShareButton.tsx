'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    Kakao: any;
  }
}

interface KakaoShareButtonProps {
  type: string;
  onShareComplete: () => void;
}

const KakaoShareButton = ({ 
  type,
  onShareComplete,
}: KakaoShareButtonProps) => {
  useEffect(() => {
    // SDK가 로드되었는지 확인
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js';
    script.async = true;
    script.onload = () => {
      // SDK 로드 완료 후 초기화
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init('d11d6e420852d3b36bd89279fe207f8b');
      }
    };
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleShare = () => {
    if (!window.Kakao?.Share) {
      console.error('Kakao SDK is not loaded');
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '나의 재수 성공 확률은?',
        description: `${type} 유형의 재수 성공 확률을 알아보세요!`,
        imageUrl: `${window.location.origin}/images/${type}.png`,
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
      },
      buttons: [
        {
          title: '테스트 하러가기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
        {
          title: '결과 보기',
          link: {
            mobileWebUrl: `${window.location.origin}/result/${type}`,
            webUrl: `${window.location.origin}/result/${type}`,
          },
        },
      ],
    })
    .then(() => {
      onShareComplete();
    })
    .catch((error: any) => {
      console.error('Kakao share error:', error);
    });
  };

  return (
    <Button
      onClick={handleShare}
      className="w-full bg-[#F7E600] text-black hover:bg-[#E6D700]"
    >
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;