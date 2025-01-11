// app/page.tsx
'use client';

import { useEffect, useState } from 'react'
import { Questions } from './types';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    WP: 0,
    PB: 0,
    FE: 0,
    GD: 0,
    FA: 0,
    SC: 0,
  });

  useEffect(() => {
          localStorage.setItem('userType', '')
      }, []);

  const handleAnswer = (score: number) => {
    const question = Questions[currentQuestion];
    const newScores = {
      ...scores,
      [question.type]: scores[question.type] + score
    };
    setScores(newScores);

    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // 최종 점수 계산
      const maxType = Object.entries(newScores).reduce((max, [type, score]) =>
        score > max[1] ? [type, score] : max, ['', -1])[0];
      
      // 결과 페이지로 리다이렉트
      router.push(`/${maxType}`);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <Image
          src="/medsky-logo.png"
          alt="MedSky Logo"
          width={60}
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