"use client"
import { useEffect, useState } from 'react'
import { Questions } from './types';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AlertDialog, AlertDialogTitle, AlertDialogContent } from '@/components/ui/alert-dialog';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CircleX } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAlert, setShowAlert] = useState(true);
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
      const maxType = Object.entries(newScores).reduce((max, [type, score]) =>
        score > max[1] ? [type, score] : max, ['', -1])[0];
      router.push(`/${maxType}`);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogContent className="mx-auto max-w-sm rounded-lg">
          <div className="space-y-2 text-center">
            <div className="text-m text-red-600 font-bold">주의</div>
            <div className="text-lg">재미로만 봐주세요</div>
            <div className="text-sm text-gray-500">made by 알약툰, 메드스카이</div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setShowAlert(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <CircleX className="h-5 w-5" />
            </button>
          </div>
        </AlertDialogContent>
      </AlertDialog>


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