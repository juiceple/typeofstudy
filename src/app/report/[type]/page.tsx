'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TypeInfo, DetailedReports } from '../../types';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function ReportPage() {
  const [shared, setShared] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams(); // useParams 훅 사용하여 params 가져오기

  useEffect(() => {
    const unwrapParams = async () => {
      const storedType = localStorage.getItem('userType');
      const sharedStatus = localStorage.getItem('isShared');
      if (storedType !== params?.type) {
        router.push('/');
      } else {
        setShared(sharedStatus === 'true');
      }
      setLoading(false);
    };

    unwrapParams();
  }, [params, router]);

  if (loading) {
    return <div className="custom-loader"></div>;
  }

  const type = params?.type as keyof typeof TypeInfo;
  const typeInfo = TypeInfo[type];
  const report = DetailedReports[type];

  const handleShareComplete = () => {
    localStorage.setItem('isShared', 'true');
    setShared(true);
  };

  const handleKakaoShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `나의 학습 유형은 ${typeInfo.name}!`,
          description: typeInfo.advantages[0],
          imageUrl: 'YOUR_IMAGE_URL',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
        buttons: [
          {
            title: '나도 진단받기',
            link: {
              mobileWebUrl: window.location.origin,
              webUrl: window.location.origin,
            },
          },
        ],
      });
      handleShareComplete();
    }
  };

  const handleInstagramShare = () => {
    const text = encodeURIComponent(`나의 학습 유형은 ${typeInfo.name}!\n특징: ${report.content.특징.join(', ')}`);
    const url = `https://www.instagram.com/share?text=${text}`;
    window.open(url, '_blank');
    handleShareComplete();
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8 dongle-regular">
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
        <Card className="max-w-3xl mx-auto shadow-2xl">
          <CardHeader>
            <CardTitle className="text-5xl font-bold text-center">
              {report.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!shared ? (
              <div className="space-y-6 text-center">
                <div className="blur-sm">
                  <p className="text-lg font-bold">보고서를 보려면 공유해주세요!</p>
                </div>
                <div className="space-y-4 mt-8">
                  <Button
                    onClick={handleKakaoShare}
                    className="bg-[#F7E600] text-black hover:bg-[#E6D700]"
                  >
                    카카오톡 공유하기
                  </Button>
                  <Button
                    onClick={handleInstagramShare}
                    className="bg-[#E4405F] text-white hover:bg-[#D93250]"
                  >
                    인스타그램 스토리 공유하기
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* 특징 섹션 */}
                <div className='bg-gray-200 p-4 rounded-lg shadow-xl space-y-2'>
                  <h3 className="text-4xl font-semibold">특징</h3>
                  <ul className="list-disc pl-5 space-y-2 text-2xl">
                    {report.content.특징.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* 짝꿍학생 섹션 */}
                <div className='bg-gray-200 p-4 rounded-lg shadow-xl space-y-2'>
                  <h3 className="text-4xl font-semibold">짝꿍 학생</h3>
                  <p className="font-semibold text-2xl bg-gray-300 p-2 w-auto text-center rounded-lg">짝: {report.content.짝꿍학생.짝}</p>
                  <ul className="list-disc pl-5 space-y-2 text-2xl">
                    {report.content.짝꿍학생.이유.map((reason, index) => (
                      <li key={index}>{reason}</li>
                    ))}
                  </ul>
                </div>

                {/* 조언 섹션 */}
                <div className='bg-gray-200 p-4 rounded-lg shadow-xl space-y-2'>
                  <h3 className="text-4xl font-semibold">조언</h3>
                  <ul className="list-disc pl-5 space-y-2 text-2xl">
                    {report.content.조언.설명.map((advice, index) => (
                      <li key={index}>{advice}</li>
                    ))}
                  </ul>
                </div>

                {/* 확률 세션 */}
                <div className='bg-gray-200 p-4 rounded-lg shadow-xl space-y-2'>
                  <p className="text-2xl font-bold">조언을 이행 할 경우 재수 확률 {report.content.확률}</p>
                </div>

                {/* 수시/정시 적합도 섹션 */}
                <div className='bg-gray-200 p-4 rounded-lg shadow-xl space-y-2'>
                  <h3 className="text-4xl font-semibold">수시/정시 적합도</h3>
                  <p className="font-semibold text-2xl text-black bg-gray-300 p-2 w-auto text-center rounded-lg">{report.content.수시정시적합도.vs}</p>
                  <p className="text-2xl text-black">{report.content.수시정시적합도.설명}</p>
                </div>

                {/* 겨울방학 추천 과제 섹션 */}
                <div className='bg-gray-200 p-4 rounded-lg shadow-xl space-y-2'>
                  <h3 className="text-4xl font-semibold">겨울방학 추천 과제</h3>
                  <ul className="list-disc pl-5 space-y-2 text-2xl">
                    {report.content.겨울방학추천과제.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>

                {/* 추천 프로그램 섹션 */}
                <div className='w-full bg-gray-200 p-4 rounded-lg shadow-xl space-y-2'>
                  <h3 className="text-4xl font-semibold">추천 프로그램</h3>
                  <ul className="list-disc pl-5 space-y-2 text-2xl">
                    {report.content.추천프로그램.설명.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                  <Link href={report.content.추천프로그램.url} className='w-full'>
                    <div className='bg-gray-300 w-full mt-3 p-2 rounded-lg text-center text-3xl'>
                      {report.content.추천프로그램.프로그램명} 보러가기
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </>
  );
}
