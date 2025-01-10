'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function ShareAndReportButton({ type }: { type: string }) {
    const router = useRouter();
    const [shared, setShared] = useState(false); // 공유 완료 여부 관리
    const [isDialogOpen, setIsDialogOpen] = useState(false); // 모달 열림 여부

    const handleShareComplete = () => {
        localStorage.setItem('userType', type);  // 현재 유형을 localStorage에 저장
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
                    <DialogContent className="max-w-lg">
                        <DialogHeader>
                            <DialogTitle className="text-center">친구들과 공유하기</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col items-center space-y-4 mt-4">
                            <h3>인스그램 스토리 공유시 @yaktoon 태그해서 올리면 추첨을 통해 기프티콘 보내드립니다!</h3>
                            <Button
                                onClick={() => {
                                    alert('카카오톡 공유하기 기능 호출!');
                                    handleShareComplete(); // 공유 완료 시 호출
                                }}
                                className="w-full bg-[#F7E600] text-black hover:bg-[#E6D700]"
                            >
                                카카오톡 공유하기
                            </Button>
                            <Button
                                onClick={() => {
                                    alert('인스타그램 공유하기 기능 호출!');
                                    handleShareComplete(); // 공유 완료 시 호출
                                }}
                                className="w-full bg-[#E4405F] text-white hover:bg-[#D93250]"
                            >
                                인스타그램 스토리 공유하기
                            </Button>
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
