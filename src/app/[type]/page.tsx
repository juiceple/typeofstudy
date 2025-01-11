// app/[type]/page.tsx
'use client';

import { TypeInfo } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ShareAndReportButton from '@/components/ShareAndReportButton';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';

export default function ResultPage() {
  const router = useRouter();
  const params = useParams(); // useParams 훅 사용하여 params 가져오기
  const type = params.type as keyof typeof TypeInfo;
  
  // 유효하지 않은 타입인 경우 홈으로 리다이렉트
  if (!TypeInfo[type]) {
    router.push('/');
    return null;
  }

  const result = TypeInfo[type];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <a href="https://medsky.co.kr/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/medsky-logo.png"
            alt="MedSky Logo"
            width={60}
            height={40}
            priority
            className="cursor-pointer"
          />
        </a>
      </div>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            학습 유형 진단 결과
          </CardTitle>
          <p className="text-xl text-center mt-4">
            {`당신의 학습 유형은 ${result.name}입니다!`}
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">장점</h3>
              <ul className="list-disc pl-5 space-y-2">
                {result.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">단점</h3>
              <ul className="list-disc pl-5 space-y-2">
                {result.disadvantages.map((dis, i) => (
                  <li key={i}>{dis}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 space-y-4 flex flex-col items-center">
              <ShareAndReportButton type={type} />

              <a href="https://medsky.co.kr/coaching" target="_blank" rel="noopener noreferrer" className="w-full max-w-md">
                <Button variant="default" className="w-full bg-black text-white">
                  학습 코칭 알아보기
                </Button>
              </a>
              <a href="https://pf.kakao.com/_Zxmxhun" target="_blank" rel="noopener noreferrer" className="w-full max-w-md">
                <Button variant="default" className="w-full bg-[#F7E600] text-black hover:bg-[#E6D700]">
                  카카오톡 상담하기
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}