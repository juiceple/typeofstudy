"use client"

import { useEffect, useState } from 'react';
import { Questions } from './types';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AlertDialog, AlertDialogTitle, AlertDialogContent } from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';


type AnswerHistoryItem = {
  questionIndex: number;
  score: number;
  type: 'WP' | 'PB' | 'FE' | 'GD' | 'FA' | 'SC';
  previousScores: {
    WP: number;
    PB: number;
    FE: number;
    GD: number;
    FA: number;
    SC: number;
  };
};

export default function Home() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAlert, setShowAlert] = useState(true);

  // Add history state to track answers
  const [answerHistory, setAnswerHistory] = useState<AnswerHistoryItem[]>([]);

  // Modified scores state to track individual question scores
  const [scores, setScores] = useState({
    WP: 0,
    PB: 0,
    FE: 0,
    GD: 0,
    FA: 0,
    SC: 0
  });

  useEffect(() => {
    localStorage.setItem('userType', '');
  }, []);

  const handleAnswer = (score: number) => {
    const question = Questions[currentQuestion];
    const newScores = {
      ...scores,
      [question.type]: scores[question.type] + score
    };

    // Store the answer in history
    const answer: AnswerHistoryItem = {
      questionIndex: currentQuestion,
      score: score,
      type: question.type,
      previousScores: { ...scores }
    };
    setAnswerHistory((prev) => [...prev, answer]);

    setScores(newScores);

    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const maxType = Object.entries(newScores).reduce(
        (max, [type, value]) => (value > max[1] ? [type, value] : max),
        ['', -1]
      )[0];
      router.push(`/${maxType}`);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0 && answerHistory.length > 0) {
      // Get the last answer
      const lastAnswer = answerHistory[answerHistory.length - 1];

      // Restore previous scores
      setScores(lastAnswer.previousScores);

      // Remove the last answer from history
      setAnswerHistory(answerHistory.slice(0, -1));

      // Go back to previous question
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <AlertDialog open={showAlert}>
        <AlertDialogContent className='max-w-xs rounded-lg'>
          <AlertDialogTitle className="text-center text-red-600">
            주의
          </AlertDialogTitle>
          <div className="text-center">
            재미로만 봐주세요
          </div>
          <div className="text-center text-sm text-gray-500">
            made by 알약툰, 메드스카이
          </div>
          <Button
            onClick={() => setShowAlert(false)}
            className="mt-4"
          >
            확인
          </Button>
        </AlertDialogContent>
      </AlertDialog>
      <div className="flex justify-center mb-4">
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
          <div className="flex justify-between items-center">
            <Button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="text-sm rounded-full"
            >
                <ChevronLeft />
            </Button>
            <div className="text-sm">
              진행도: {currentQuestion}/{Questions.length}
            </div>
          </div>
          <Progress value={(currentQuestion / Questions.length) * 100} className="mt-2" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-medium mb-6">
            {Questions[currentQuestion].text}
          </div>
          <div className="space-y-4">
            {[
              { text: "매우 일치한다", score: 4 },
              { text: "어느정도 일치한다", score: 3 },
              { text: "거의 일치하지 않는다", score: 2 },
              { text: "전혀 일치하지 않는다", score: 1 }
            ].map((option) => (
              <Button
                key={option.score}
                onClick={() => handleAnswer(option.score)}
                className="h-14 w-full"
              >
                {option.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
