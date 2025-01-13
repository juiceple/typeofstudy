"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Share } from "lucide-react";

interface TwoStepShareProps {
    url?: string;
    title?: string;
    text?: string;
    onShareComplete?: () => void;
}

export default function TwoStepShare({
    url = "https://typeofstudy.vercel.app",
    title = "나의 재수 확률은?",
    text = "공부 유형 진단을 통해 재수 확률을 알아보세요!",
    onShareComplete,
}: TwoStepShareProps) {
    // Check if Web Share API is supported
    const isShareSupported = typeof navigator !== 'undefined' && 'share' in navigator;

    const handleShare = async () => {
        try {
            if (isShareSupported) {
                await navigator.share({
                    title,
                    text,
                    url,
                });
                if (onShareComplete) {
                    onShareComplete();
                }
            } else {
                const fallbackUrl = `https://www.instagram.com/share?url=${encodeURIComponent(url)}`;
                window.open(fallbackUrl, '_blank');
                if (onShareComplete) {
                    onShareComplete();
                }
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <div className="flex gap-4 items-center">
            <Button
                onClick={handleShare}
                className="relative rounded-full bg-white hover:bg-gray-100 w-12 h-12 shadow-md overflow-hidden"
            >
                {isShareSupported ? (
                    <Share className="w-6 h-6 text-gray-600" />
                ) : (
                    <Image
                        src="/images/instagram-logo.png"
                        alt="Share"
                        fill
                        className="object-cover"
                    />
                )}
            </Button>
        </div>
    );
}