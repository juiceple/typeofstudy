// app/page.tsx
'use client';

import { useState } from 'react';
import { Questions, TypeInfo } from './types';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import ShareAndReportButton from '@/components/ShareAndReportButton';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();  // 라우터 선언 추가
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    WP: 0,
    PB: 0,
    FE: 0,
    GD: 0,
    FA: 0,
    SC: 0,
  });
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (score: number) => {
    const question = Questions[currentQuestion];
    setScores(prev => ({
      ...prev,
      [question.type]: prev[question.type] + score
    }));

    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const getResult = () => {
    const maxType = Object.entries(scores).reduce((max, [type, score]) =>
      score > max[1] ? [type, score] : max, ['', -1])[0] as keyof typeof TypeInfo;
    return { type: maxType, info: TypeInfo[maxType] };  // type도 함께 반환하도록 수정
  };

  if (completed) {
    const { type, info: result } = getResult();  // type과 info 분리

    return (
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <a href="https://medsky.co.kr/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/medsky-logo.png"
              alt="MedSky Logo"
              width={80}
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
              당신의 학습 유형은 <strong>{result.name}</strong> 입니다!
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

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <Image
          src="/medsky-logo.png"
          alt="MedSky Logo"
          width={100}
          height={40}
          priority
        />
      </div>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <Progress value={(currentQuestion / Questions.length) * 100} />
          <p className="text-sm text-gray-500 mt-2">
            진행도: {currentQuestion}/{Questions.length}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="h-32 flex items-center">
            <h2 className="text-xl font-semibold">
              {Questions[currentQuestion].text}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Button
              onClick={() => handleAnswer(4)}
              className="h-14"
            >
              매우 일치한다
            </Button>
            <Button
              onClick={() => handleAnswer(3)}
              className="h-14"
            >
              어느정도 일치한다
            </Button>
            <Button
              onClick={() => handleAnswer(2)}
              className="h-14"
            >
              거의 일치하지 않는다
            </Button>
            <Button
              onClick={() => handleAnswer(1)}
              className="h-14"
            >
              전혀 일치하지 않는다
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}