'use client';

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import InstagramShareButton from '@/components/InstagramShareButton';
import KakaoShareButton from '@/components/KakaoShareButton';

export default function ShareAndReportButton({ type }: { type: string }) {
    const router = useRouter();
    const [shared, setShared] = useState(false); // 공유 완료 여부 관리
    const [isDialogOpen, setIsDialogOpen] = useState(false); // 모달 열림 여부

    useEffect(() => {
        const sharedStatus = localStorage.getItem('isShared') === 'false';
        localStorage.setItem('userType', '')
        setShared(sharedStatus);
    }, []);

    const handleShareComplete = () => {
        localStorage.setItem('userType', type);  // 현재 유형을 localStorage에 저장
        localStorage.setItem('isShared', 'true'); // 공유 상태 true 설정
        setIsDialogOpen(false);  // 모달 닫기
        setShared(true);  // 공유 완료 상태 설정
    };


    const handleReportView = () => {
        router.push(`/report/${type}`); // 상세 보고서 페이지로 이동
    };

    return (
        <div className="flex justify-center mt-8 w-full">
            {!shared ? (
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="w-full max-w-md bg-yellow-500 hover:bg-yellow-600 text-black">
                            공유하고 상세 보고서 보기
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xs">
                        <DialogHeader>
                            <DialogTitle className="text-center">친구들과 공유하기</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col items-center space-y-6 mt-4">
                            <div>
                                <h3 className='text-sm'>인스타그램 스토리 공유시 @yaktoon 태그해서 올리면 추첨을 통해 기프티콘 보내드립니다!</h3>
                                <p className='text-xs'>1. 사진 다운로드</p>
                                <h3 className='text-xs'>2. 인스타그램 눌러서 스토리 제작</h3>
                            </div>
                            <div className='flex gap-4'>
                                <KakaoShareButton
                                    type={type}
                                    onShareComplete={handleShareComplete}
                                />
                                <InstagramShareButton
                                    imagePath={`/images/${type}.jpg`}
                                    onShareComplete={handleShareComplete}  // 추가
                                />

                            </div>
                            <Button
                                onClick={() => setIsDialogOpen(false)}
                                className="w-full bg-gray-500 text-white hover:bg-gray-600"
                            >
                                닫기
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            ) : (
                <Button
                    onClick={handleReportView}
                    className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white"
                >
                    상세 보고서 보기
                </Button>
            )}
        </div>
    );
}
