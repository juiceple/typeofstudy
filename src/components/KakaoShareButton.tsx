'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from "next/image";

declare global {
    interface Window {
        Kakao: KakaoSDK;
    }
}

interface KakaoSDK {
    isInitialized: () => boolean;
    init: (apiKey: string) => void;
    Share: {
        sendDefault: (params: KakaoShareParams) => void;
    };
}

interface KakaoShareParams {
    objectType: string;
    content: {
        title: string;
        description: string;
        imageUrl: string;
        link: {
            mobileWebUrl: string;
            webUrl: string;
        };
    };
    social?: {
        likeCount?: number;
        commentCount?: number;
        sharedCount?: number;
    };
    buttons: Array<{
        title: string;
        link: {
            mobileWebUrl: string;
            webUrl: string;
        };
    }>;
}

interface KakaoShareButtonProps {
    type: string;
    onShareComplete: () => void; // 여전히 클릭 후 로직을 처리하기 위한 함수
}

const KakaoShareButton = ({ type, onShareComplete }: KakaoShareButtonProps) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js';
        script.async = true;
        script.onload = () => {
            if (window.Kakao && !window.Kakao.isInitialized()) {
                window.Kakao.init('d11d6e420852d3b36bd89279fe207f8b');
            }
        };
        document.head.appendChild(script);

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
                title: '나의 재수 확률은?',
                description: `${type} 유형의 재수 확률을 알아보세요!`,
                imageUrl: `${window.location.origin}/images/${type}.png`,
                link: {
                    mobileWebUrl: window.location.origin,
                    webUrl: window.location.origin,
                },
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845,
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
                        mobileWebUrl: `${window.location.origin}/${type}`,
                        webUrl: `${window.location.origin}/${type}`,
                    },
                },
            ],
        });

        // 공유 버튼 클릭 후 처리할 로직
        onShareComplete(); // 성공 여부와 관계없이 콜백 호출
    };

    return (
        <Button
            onClick={handleShare}
            className="relative rounded-full bg-gray-200 hover:bg-gray-300 w-12 h-12 shadow-md overflow-hidden"
        >
            <Image
                src="/images/kakaologo.svg"
                alt="Instagram Logo"
                fill // 부모에 맞춰 꽉 차게 설정
                className="object-cover"
            />
        </Button>
    );
};

export default KakaoShareButton;
