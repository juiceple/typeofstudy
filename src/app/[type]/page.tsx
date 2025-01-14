// app/[type]/page.tsx
'use client';
import Link from 'next/link'
import { TypeInfo } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ShareAndReportButton from '@/components/ShareAndReportButton';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ResultPage() {
  const router = useRouter();
  const params = useParams(); // useParams 훅 사용하여 params 가져오기
  const type = params.type as keyof typeof TypeInfo;

  // 유효하지 않은 타입인 경우 홈으로 리다이렉트
  if (!TypeInfo[type]) {
    router.push('/');
    return null;
  }


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
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Image
                src={`/images/${type}.png`}
                alt="type report"
                width={1000}
                height={40}
                priority
              />
            </div>
            <div className="mt-8 flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg gap-2">
              <h3 className='text-sm border-b-2 w-full text-center pb-2'>인스타그램에 보고서 사진(꾹 눌러서 다운로드하시면 됩니다!)을 사이트 링크와 함께 스토리 공유시 @yaktoon 태그해서 올리면 추첨을 통해 기프티콘을 보내드립니다!</h3>
              <ShareAndReportButton type={type} />

              <Button className="w-full bg-gray-500 hover:bg-black text-white">
                <Link
                  href={"/"}
                  className="w-full"
                >
                  새로 진단 받기
                </Link>
              </Button>
              {/* <a href="https://medsky.co.kr/coaching" target="_blank" rel="noopener noreferrer" className="w-full max-w-md">
                <Button variant="default" className="w-full bg-black text-white">
                  학습 코칭 알아보기
                </Button>
              </a>
              <a href="https://pf.kakao.com/_Zxmxhun" target="_blank" rel="noopener noreferrer" className="w-full max-w-md">
                <Button variant="default" className="w-full bg-[#F7E600] text-black hover:bg-[#E6D700]">
                  카카오톡 상담하기
                </Button>
              </a> */}
            </div>
          </div>
        </CardContent>
      </Card>
    </main >
  );
}