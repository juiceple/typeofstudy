// app/types.ts

export interface Question {
    text: string;
    type: keyof typeof TypeInfo;
}
export interface DetailedReport {
    title: string;
    content: {
        특징: string[];
        짝꿍학생: {
            짝: string;
            이유: string[];
        };
        조언: {
            설명: string[];
        };
        확률: string;
        수시정시적합도: {
            vs: string;
            설명: string;
        };
        겨울방학추천과제: string[];
        추천프로그램: {
            설명: string[];
            프로그램명: string;
            url: string;
        };
    };
}
export interface TypeResult {
    advantages: string[];
    disadvantages: string[];
}

export const Questions: Question[] = [
    // 1) 완벽주의 미루기형(WP)
    {
        text: "계획을 세워놓고도, 계획보다 이해가 덜 됐다고 느끼면 진도를 쉽게 미뤄버린다.",
        type: "WP",
    },
    {
        text: "새로운 개념을 공부할 때, 머릿속에서 완벽히 ‘정리된 느낌’이 들지 않으면 다음 단계(문제풀이 등)로 넘어가지 못한다.",
        type: "WP",
    },
    {
        text: "사소한 부분에서 막히거나 틀리면, 큰 그림보다 그 사소한 부분에 지나치게 매달린다.",
        type: "WP",
    },
    {
        text: "조금이라도 허술하게 넘어간다고 느끼면 ‘이 공부는 잘못됐다’는 생각이 들어 처음부터 다시 시작하기도 한다.",
        type: "WP",
    },

    // 2) 과유불급 문제풀이형(PB)
    {
        text: "문제집이나 기출문제를 여러 번 푸는 것만으로 충분히 실력을 쌓을 수 있다고 믿는다.",
        type: "PB",
    },
    {
        text: "개념서나 이론서를 자세히 읽기보다는, 문제를 풀면서 헷갈리는 부분이 생기면 그때그때 찾아보는 편이다.",
        type: "PB",
    },
    {
        text: "문제를 많이 풀면 실력이 자동으로 늘 것이라 생각해, 틀린 문제나 개념을 정리하는 과정을 자주 건너뛴다.",
        type: "PB",
    },
    {
        text: "한 가지 유형을 여러 번 풀기보다는, 최대한 많은 유형을 풀어보며 감각을 익히려 한다.",
        type: "PB",
    },

    // 3) 감 잡고 끝내기형(FE)
    {
        text: "공부할 때 “아, 이건 시험에 나올 것 같아”라는 감이 오면 그 내용만 집중적으로 보고, 나머지는 힘을 빼고 훑어본다.",
        type: "FE",
    },
    {
        text: "이론이나 개념 전체를 차근차근 학습하기보다, 누군가가 정리해둔 ‘족보’나 ‘핵심 요약’ 위주로 본다.",
        type: "FE",
    },
    {
        text: "문제를 풀 때, 왜 그렇게 되는지보다 ‘문제 푸는 패턴’이나 ‘답이 나오는 흐름’을 먼저 빠르게 파악하려 한다.",
        type: "FE",
    },
    {
        text: "개념을 정확히 이해하지 않아도, 어느 정도 ‘찍감(찍어서 맞추는 감각)’으로 문제를 해결한 경험이 꽤 있다.",
        type: "FE",
    },

    // 4) 감성충만 동기부여형(GD)
    {
        text: "‘공부하고 싶은 마음’이 들 때는 몰아서 밤새울 정도로 달리지만, 그 열정이 사라지면 공부 시간이 전과 차이가 많이 나는 수준으로 감소한다.",
        type: "GD",
    },
    {
        text: "유튜브나 블로그에서 성공 사례(합격수기, 자극 영상)를 보면, 그 순간엔 폭발적으로 공부 의욕이 생긴다.",
        type: "GD",
    },
    {
        text: "스스로 ‘동기부여’가 되지 않는 날은, 아무리 계획을 세워도 실행을 잘 못한다.",
        type: "GD",
    },
    {
        text: "한 번 ‘마음이 식었다’고 느끼면, 다시 공부 기운을 끌어올리기가 쉽지 않다.",
        type: "GD",
    },

    // 5) 열심히 하는 척만 하는 형(FA)
    {
        text: "매일 8시간 이상 공부 장소에 앉아 있지만, 정작 돌아보면 ‘무엇을 했는지’ 기억이 가물가물하다.",
        type: "FA",
    },
    {
        text: "공부하다 잠시 쉬려고 핸드폰을 잡으면, 30분에서 1시간이 훌쩍 지나가곤 한다.",
        type: "FA",
    },
    {
        text: "가족이나 친구에게 “나 오늘 도서관(스터디 카페)에서 몇 시간이나 있었다”며 공부했다고 어필하곤 한다.",
        type: "FA",
    },
    {
        text: "‘오늘 하루종일 공부했는데 왜 진도가 이렇게 안 나가지?’라고 자주 느낀다.",
        type: "FA",
    },

    // 6) 모르면 다른 과목으로 도망가는 형(SC)
    {
        text: "딱 막히는 부분이 나오면 ‘이건 나중에 하자’ 하고, 더 편한 과목이나 쉬운 단원부터 공부한다.",
        type: "SC",
    },
    {
        text: "기출문제나 모의고사에서 자주 틀리는 파트가 있어도, 정면 돌파하기보다는 ‘잘 나오는 쉬운 부분’을 먼저 풀며 머리를 식힌다.",
        type: "SC",
    },
    {
        text: "과목마다 호불호가 너무 심해서, 못하는 과목이 눈에 보이면 당장 다른 과목으로 넘어가 버린다.",
        type: "SC",
    },
    {
        text: "사실 정복해야 할 개념이나 단원이 남아있어도, ‘시간 없으니 다른 것부터 하자’는 식으로 합리화하고 넘어간 적이 많다.",
        type: "SC",
    },
];



// 타입별 기본 정보
export const TypeInfo = {
    // 1) 완벽주의 미룬이 알약 (WP)
    WP: {
        name: "완벽주의 미룬이 알약",
        subname:
            "“모든 것을 완벽히 이해하고 정리해야만 직성이 풀리지만, 그 과정에서 진도가 밀리고 계획이 어그러질 수 있음”",
        advantages: [
            "문제를 풀 때 개념의 원리를 적용하는 능력이 뛰어나며, 응용 문제에 강할 가능성이 높아요.",
            "학습 계획과 정리가 체계적으로 이루어져 있으며, 반복 학습과 복습의 중요성을 잘 이해해요.",
            "노트 정리나 학습 자료 준비가 완벽해 시험 직전 복습 효율이 높아요.",
            "학습한 내용이 깊이 있게 머릿속에 남아 장기적으로 실력을 유지할 가능성이 높아요."
        ],
        disadvantages: [
            "모든 내용을 완벽히 이해하려다 보니 진도가 느리고, 계획된 학습량을 제때 완료하지 못할 수 있어요.",
            "시험 준비 기간 중 시간이 부족해질 위험이 커요.",
            "이론에 치중하여 실전 문제풀이 연습이 부족할 수 있어요.",
            "시간 압박이 있는 시험 상황에서 속도와 전략 면에서 약점을 드러낼 가능성이 높아요.",
            "모든 것을 완벽히 이해하고 정리하려는 집착으로 인해 심리적 부담과 스트레스를 느낄 수 있어요.",
            "학습 과정에서 작은 오류나 부족한 부분을 지나치게 걱정하며 자신감을 잃는 경우도 있어요.",
            "불확실성을 받아들이기 어려워 계획에 약간의 변경이나 예기치 못한 상황에 취약해요.",
            "우선순위 조정이 잘 되지 않아 중요도가 낮은 부분에 시간을 낭비할 수 있어요."
        ],
        percentage: "40%"
    },

    // 2) 문제 소믈리에 알약 (PB)
    PB: {
        name: "문제 소믈리에 알약",
        subname:
            "“문제풀이에만 몰두해서 개념학습을 소홀히 하지만, 많은 양의 문제 풀이가 필요한 과목에는 강점이 있음”",
        advantages: [
            "다양한 문제를 접하며 시험과 유사한 환경에 익숙해져 실전에서 긴장을 덜하고 빠르게 문제를 해결할 수 있음.",
            "제한된 시간 내에 문제를 푸는 데 강점을 보이며, 효율적인 풀이 전략을 잘 구사함.",
            "문제 풀이 과정에서 유사 문제를 빠르게 파악하고, 패턴을 활용해 효율적으로 문제를 해결할 수 있음.",
            "풀이 경험을 통해 다양한 유형의 문제에 대한 적응력이 높음.",
            "문제 풀이 위주의 학습으로 인해 단시간 내 학습 진도를 빠르게 진행할 수 있음.",
            "불필요한 정리에 시간을 쓰지 않고, 바로 문제 풀이로 넘어가는 실행력이 뛰어남."
        ],
        disadvantages: [
            "개념 학습을 소홀히 한 탓에 기본 원리나 이론에 대한 이해가 약함.",
            "새로운 유형의 문제나 응용 문제가 나오면 풀이법을 찾지 못하고 당황할 가능성이 큼.",
            "문제 풀이 중 틀린 문제를 제대로 복기하거나, 개념적으로 정리하지 않아 같은 실수를 반복함.",
            "문제 풀이 과정에서 이해 없이 외운 풀이법은 시험 환경에서 응용이 어렵게 됨.",
            "문제 풀이 중심의 학습은 단기적으로 성적이 오를 수 있으나, 장기적으로는 약점이 드러날 가능성이 높음.",
            "문제 풀이 속도와 실력이 꾸준히 유지되지 않고, 특정 수준에서 정체되기 쉬움.",
            "개념에 기반한 학습을 소홀히 하기 때문에 출제 범위 중 중요하지만 문제로 자주 다뤄지지 않는 부분을 놓칠 수 있음."
        ],
        percentage: "60%"
    },

    // 3) 극한의 효율충 알약 (FE)
    FE: {
        name: "극한의 효율충 알약",
        subname:
            "“직감적으로 중요한 포인트만 빠르게 익히고 넘어가는 스타일, 전체 개념이나 맥락 이해가 부족한 경우가 많음”",
        advantages: [
            "핵심 포인트를 빠르게 파악하고, 중요한 부분에 집중하는 능력이 뛰어나 효율적으로 학습 가능.",
            "시험에서 자주 출제되는 영역을 잘 캐치해 실전 대비에 강점이 있음.",
            "학습 중 어떤 부분이 중요한지 직관적으로 판단해 불필요한 부분에 시간을 낭비하지 않음.",
            "시험 직전에도 핵심 내용을 효과적으로 정리할 수 있음.",
            "중요한 내용 위주로 반복 학습을 하기 때문에 점수 상승이 빠르고, 단기 성과를 내기에 적합.",
            "복잡한 내용을 간결하게 정리하는 요령이 뛰어남."
        ],
        disadvantages: [
            "직관적으로 학습하다 보니 중요한 개념을 놓치거나, 세부적인 이해가 부족할 수 있음.",
            "기초가 약해 새로운 유형의 문제나 변형된 문제에 취약. 성적이 들쭉날쭉함.",
            "전체적인 이해 없이 요점만 잡으려다 허점이 생기기 쉬움.",
            "중요하다고 느끼지 않는 부분은 아예 건너뛰는 경우가 많아 학습의 균형이 깨질 수 있음.",
            "시험 범위 전체를 고르게 커버하지 않아 불안정한 점수를 받을 위험이 있음.",
            "중요한 포인트를 빠르게 익히는 데는 강하지만, 내용을 깊이 있게 학습하지 않아 응용력이 약함.",
            "시험에서 단순 암기 외에 논리적 사고나 창의적인 풀이가 필요한 문제에 약점을 드러냄.",
            "직감적으로 중요한 부분만 익히다 보니, 학습이 충분히 되었다는 착각에 빠질 가능성이 있음.",
            "시험에서 예상하지 못한 영역이 나오면 크게 당황할 수 있음."
        ],
        percentage: "80%"
    },

    // 4) 감성 알약 (GD)
    GD: {
        name: "감성 알약",
        subname:
            "“의지나 감정 기복에 따라 공부량이 극단적으로 바뀌며, 꾸준함이 부족한 편”",
        advantages: [
            "공부하고 싶을 때는 한 번에 몰아쳐서 밤을 새울 정도로 높은 집중력을 발휘하며, 단기간에 많은 양을 소화할 수 있음.",
            "공부를 시작하면 높은 몰입도로 어려운 문제도 해결하고, 깊이 있는 학습이 가능함.",
            "성공 사례, 자극적인 영상 등 외부 자극에 반응해 강한 학습 의욕을 얻는 능력이 뛰어남.",
            "자극을 통해 짧은 시간 안에 성과를 내기 위한 추진력이 생김.",
            "감정이 고조된 상태에서는 창의적이고 독창적인 학습 방법을 찾아내거나, 복잡한 문제를 해결할 때 유연한 사고를 발휘할 수 있음.",
            "하고 싶은 마음이 생기면 주저하지 않고 바로 실행에 옮기는 실행력을 발휘.",
            "다른 사람의 성공 이야기에서 영감을 얻어 스스로에게 동기를 부여하고 학습 동력을 찾는 능력이 있음.",
            "주변 사람들에게 자신감을 북돋아 주거나 긍정적인 에너지를 전파할 수 있음."
        ],
        disadvantages: [
            "의욕이 있을 때는 몰아서 하더라도, 감정 기복으로 인해 일정한 학습량을 유지하지 못하는 경우가 많음.",
            "지속적으로 공부하는 습관이 부족해 성적이 들쭉날쭉할 가능성이 있음.",
            "스스로 동기부여하기 어려운 날에는 학습을 거의 하지 않으며, 외부 자극 없이는 시작 자체가 어려움.",
            "외부 자극으로 생긴 의욕은 오래 지속되지 않고, 금세 사라지는 경향이 있음.",
            "감정이나 의지에 따라 학습 태도가 좌우되므로, 계획은 세워도 실행하지 못할 가능성이 큼.",
            "감정이 식거나 동기가 약화되면 다시 끌어올리기 어려워 학습 공백이 생기기 쉬움.",
            "공부하고 싶은 마음이 들지 않을 때는 자기 통제력이 약해져 중요한 일정도 놓칠 수 있음.",
            "의욕이 사라졌을 때 자기 자신에 대한 실망이나 죄책감으로 이어질 수 있음.",
            "단기간에 몰아서 공부하는 데는 강하지만, 꾸준히 학습해야 하는 장기적 과제나 시험 준비에 어려움을 겪음."
        ],
        percentage: "90%"
    },

    // 5) 허수 알약 (FA)
    FA: {
        name: "허수 알약",
        subname:
            "“도서관이나 스터디 카페에 오래 앉아 있지만, 실제 공부 집중도는 낮고, 성취도는 미미함”",
        advantages: [
            "학습 장소를 자주 방문하고 오랜 시간 책상 앞에 앉아 있어 주변에서 성실하다는 인상을 받음.",
            "동기 부여를 받기 쉬운 환경을 만들며 스스로도 학습 의지를 높일 기회를 얻음.",
            "스터디 카페나 도서관 등 집중하기 좋은 장소에서 시간을 보내는 습관이 있음.",
            "꾸준히 공부할 준비는 갖추고 있어 조금만 방향을 잡아도 실질적 성과를 낼 가능성이 있음."
        ],
        disadvantages: [
            "실제로 학습에 몰입하지 않고, 시간을 보내는 데 그쳐 효율성이 매우 낮음.",
            "스마트폰이나 주변 자극에 쉽게 산만해지는 경우가 많음.",
            "공부 시간을 오래 확보하더라도, 실제 학습한 내용은 적어 학업 성과로 이어지지 않음.",
            "“열심히 했는데 왜 결과가 안 나오지?“라는 심리적 혼란을 겪을 수 있음.",
            "명확한 목표와 계획 없이 공부하는 경우가 많아, 필요한 내용을 충분히 다루지 못함.",
            "학습 내용의 질과 양이 모두 부족해, 시험에서 성과를 내기 어렵게 됨.",
            "“공부를 하고 있다”는 자기만족에 빠져 현실적인 개선 노력을 등한시할 가능성이 큼.",
            "시간이 지날수록 학습 습관과 성과 간의 괴리가 커짐."
        ],
        percentage: "99%"
    },

    // 6) 닌자 알약 (SC)
    SC: {
        name: "닌자 알약",
        subname:
            "“어려운 문제나 취약 과목을 마주하면 바로 다른 과목으로 넘어가 버려, 약점을 해소하지 못하는 스타일”",
        advantages: [
            "어려운 문제나 스트레스를 주는 과목에 매달리지 않고, 유연하게 다른 과목으로 전환해 시간을 효율적으로 활용.",
            "한 과목에 시간을 너무 투자하지 않아 비교적 고른 학습을 유지할 수 있음.",
            "어려운 문제에 집착하지 않기 때문에 학습 과정에서 스트레스를 상대적으로 덜 받음.",
            "과목 전환으로 인해 학습의 지루함을 방지하고, 새로운 동기를 찾기 쉬움.",
            "다양한 과목을 빠르게 경험하며 전반적인 학습량을 확보할 가능성이 있음.",
            "특정 과목에서 느끼는 부담을 줄이고, 다른 과목에서 자신감을 유지할 수 있음."
        ],
        disadvantages: [
            "어려운 문제나 과목을 피하는 경향으로 인해 문제 해결 능력이 부족해질 수 있음.",
            "시험에서 마주하는 까다로운 문제나 새로운 유형에 대한 대처 능력이 약함.",
            "취약 과목을 반복적으로 피하면, 그 과목에 대한 두려움이 커지고, 결국 극복할 기회를 잃게 됨.",
            "장기적으로 특정 과목의 점수 향상이 어렵고, 전체 성적에 악영향을 미침.",
            "어려운 개념이나 문제를 건너뛰기 때문에 학습의 깊이가 얕아지고, 기초가 탄탄하지 않을 수 있음.",
            "과목 간 전환이 잦아 집중력이 흐트러질 가능성이 높음.",
            "특정 과목에서 지속적인 성과를 내지 못하면서 스스로 부족하다고 느껴 자신감이 떨어질 수 있음.",
            "‘못하는 과목은 영원히 못한다’는 생각에 갇힐 위험이 있음."
        ],
        percentage: "85%"
    }
} as const;

// 상세 보고서
export const DetailedReports: Record<string, DetailedReport> = {
    ///////////////////////////////////////////////////////////////////////////
    // 1) 완벽주의 미룬이 알약 (WP)
    ///////////////////////////////////////////////////////////////////////////
    WP: {
        title: "완벽주의 미룬이 알약 상세 보고서",
        content: {
            특징: [
                "당신은 본인뿐만 아니라 주변(부모, 선생님, 친구 등)의 기대를 충족하려는 압박을 스스로 느낄 수 있습니다.",
                "시험이나 성적 평가에서 높은 점수를 목표로 하며, 틀리는 것을 극도로 두려워합니다.",
                "완벽히 이해하지 못한 상태에서 진도를 나가지 못해 학습 시간이 비효율적으로 길어집니다.",
                "잘못된 점을 반복적으로 수정하며, 계획된 공부량을 끝내지 못하는 경우가 많습니다.",
                "자신이 기대한 수준에 미치지 못한다고 느끼면 쉽게 좌절하거나 스스로를 비난합니다.",
                "학습에 대한 불안과 스트레스가 쌓이면서 체력이나 정신 건강에 영향을 줄 수 있습니다.",
                "작은 오류에도 지나치게 민감하게 반응하며, 큰 흐름을 놓치고 구체적인 디테일에 집착합니다.",
                "새로운 시도를 두려워하거나 실패를 두려워해 도전적인 과제를 회피할 수도 있습니다."
            ],
            짝꿍학생: {
                짝: "문제 소믈리에 알약",
                이유: [
                    "완벽주의형은 개념 학습에 강점이 있고, 문제풀이형은 실전 감각에 강점이 있어 서로의 약점을 보완 가능.",
                    "완벽주의형은 상대에게 개념의 중요성을 알려줄 수 있고, 문제풀이형은 실전에 필요한 속도와 효율성을 가르쳐 줄 수 있음."
                ]
            },
            조언: {
                설명: [
                    "1. 당신은 아무것도 아니라는 것을 인지할 필요가 있습니다. 당신은 우주의 먼지입니다. 아무리 열과 성을 다해도, 100퍼센트 완벽한 무언가를 행할 수 없습니다. 완벽함을 추구하다 스트레스를 받지 않도록, 불안정함을 인정하고 일단 행동하세요.",
                    "2.무언가를 완벽히 행하겠다며 당신 나름의 완벽한 플랜을 세운 순간, 그 일에 대해서 부담감을 느끼고 강박을 가지게 되길 마련입니다. 모든 일을 다 완벽히 행하려는 순간, 결정한 일에 대해 강박을 느끼게 되고, 당신은 그것의 부담감을 느껴 피하게 될 수도 있습니다. 그런 회피가 지속된다면 당신은 결국 ‘재수’를 하게 될 것입니다. 적당히 하세요. 정말 당신에게 가장 중요한 과목을 위주로 ‘완벽한’ 플랜을 세우시고, 우선적으로 해치우세요. 모든 일을 완벽히 대하시면 골병이 나서 ‘사망’ 혹은 ‘재수’에 이를 수 있다는 것을 재차 강조합니다."
                ]
            },
            확률: "40% -> 0%",
            수시정시적합도: {
                vs: "수시 > 정시",
                설명:
                    "이 유형의 고등학생은 성실한 ‘수시 파이터’이거나, 완벽한 ‘정시러’가 될 확률이 높습니다.본디 이 유형의 학생의 경우 수시 교과 전형, 수시 학생부 종합 전형이 대학 입시에서 더욱 유리할 것으로 판단 됩니다만, 이 유형의 학생들은 정시를 선택해도 통계적으로 상당히 좋은 결과를 얻음이 입증되었습니다. 열심히 하세요 파이팅!"
            },
            겨울방학추천과제: [
                "1. 핵심 개념 정리 메커니즘 구축: ‘핵심 키워드 정리, 간략한 문제풀이, 오답 풀이’ 3단계를 노트에 담고, 제한 시간을 두어 과도한 시간 낭비를 막으세요.",
                "2. 개념이 많이 필요한 과목을 미리 선행하되, 배경지식으로 쌓는다는 느낌으로 가볍게 선행을 하세요. 고3의 경우 수1, 수2와 같은 수능 과목을 복습을 하시되, 배웠던 과목인 만큼 최대한 탄탄하게 복습을 하시는 것을 추천드립니다."
            ],
            추천프로그램: {
                설명: [
                    "학생분의 꼼꼼함과 성실함을 이용하여 방학 때 미리 생활기록부 스토리라인을 검토하고 작성하시는 것을 추천드립니다. 방학 때 남는 시간을 활용하여, 학기 중 부담을 줄이세요. ",
                    "메드스카이에서는 전문 컨설턴트가 1:1로 생활기록부를 관리해드리고 있습니다. 평범한 학생들은 따라오지 못할 심화적인 세특 주제와, 전문성을 챙겨보세요! 그 외에도 다양한 프로그램들이 존재하니 많은 관심 부탁드립니다!"
                ],
                프로그램명: "메드스카이 생활기록부 관리 프로그램",
                url: "https://medsky.co.kr/management"
            }
        }
    },

    ///////////////////////////////////////////////////////////////////////////
    // 2) 문제 소믈리에 알약 (PB)
    ///////////////////////////////////////////////////////////////////////////
    PB: {
        title: "문제 소믈리에 알약 상세 보고서",
        content: {
            특징: [
                "\"최소한의 노력으로 최대한의 결과를 내겠다\"는 생각을 자주 하는 편.",
                "즉각적인 성과를 선호하며 개념 학습보다는 문제 풀이로 성과를 확인하고자 함.",
                "긴 시간 준비보다 즉각적인 보상을 추구하는 경향이 강함.",
                "실전에서 문제를 해결하는 데 자신감이 있지만, 기초가 약해지면 한계를 느낄 때 좌절하기 쉬움.",
                "잘하는 과목에서는 자신감을 보이지만, 어려운 과목은 회피하려는 경향도 있음.",
                "타인의 도움보다는 혼자 문제를 풀어보며 실력을 쌓으려는 독립적 학습 태도를 보임.",
                "문제집과 친숙하며, 문제를 푼 횟수와 양으로 성취감을 느낄 때가 많음.",
                "구체적 계획 없이 “일단 문제부터 풀자”는 식이지만, 복습과 정리가 부족한 경우가 많음."
            ],
            짝꿍학생: {
                짝: "극한의 효율충 알약",
                이유: [
                    "문제풀이형은 실전 경험이 많지만 체계성이 부족하고, 극한의 효율충 알약은 ‘선택과 집중’ 능력이 뛰어나 서로 보완 가능.",
                    "문제풀이형은 실전 문제를 많이 제공해 효율충 알약의 빠른 판단을 강화하고, 효율충 알약은 개념적으로 중요한 부분을 짚어줄 수 있음."
                ]
            },
            조언: {
                설명: [
                    "1. 개념을 좀 더 공부하세요. 수능은 교과서 범위 내에서 변칙적으로 출제됩니다. 기초부터 착실하게 다져놓으면, 문제풀이만 주구장창 하는 것보다 훨씬 효율적으로 성적을 끌어올릴 수 있습니다.",
                    "2. 오답 노트를 적극 활용하세요. 틀린 이유를 분석하고, 같은 실수를 반복하지 않도록 복기해야 합니다. 한 번 더 풀어본 뒤 넘기는 것으로는 부족합니다."
                ],
            },
            확률: "60% -> 30%",
            수시정시적합도: {
                vs: "수시 <<<< 정시",
                설명:
                    "내신보다는 사고력 평가 위주인 수능에 강점을 보일 가능성이 큽니다. 지엽적인 내신 대비보다는, 다양한 유형의 문제에 적응하는 능력이 뛰어나기 때문에 정시가 더 적합해 보입니다."
            },
            겨울방학추천과제: [
                "1. 수학 교과서 개념 문제 풀이, 정석 풀이로 복습하기: 기초가 부실하면 문제를 많이 풀어도 큰 성과가 없습니다.",
                "2. EBS 수특 문학 등 개념 학습이 필요한 과목을 가볍게라도 정리해보세요."
            ],
            추천프로그램: {
                설명: [
                    "문제풀이 위주의 학습에서 벗어나 학생 맞춤형 학습 코칭을 받아보는 것을 추천드립니다."
                ],
                프로그램명: "메드스카이 학습 코칭 프로그램",
                url: "https://medsky.co.kr/winterCoaching"
            }
        }
    },

    ///////////////////////////////////////////////////////////////////////////
    // 3) 극한의 효율충 알약 (FE)
    ///////////////////////////////////////////////////////////////////////////
    FE: {
        title: "극한의 효율충 알약 상세 보고서",
        content: {
            특징: [
                "주변 상황이나 정보를 분석하기보다는 본능적으로 중요한 요소를 빠르게 캐치하는 능력이 있음.",
                "세부적인 계획보다는 바로 행동에 옮기고, 결과를 통해 피드백을 얻는 것을 선호함.",
                "본인의 직감과 판단을 믿는 경향이 강하며, 학습한 내용에 대해 자신감을 가지는 경우가 많음.",
                "불필요하다고 느끼는 일에 시간을 쓰지 않고, 목표를 빠르게 달성하려 함.",
                "복잡한 과정보다는 간단명료한 방식을 더 선호하며, 자신의 스타일을 고집하는 편.",
                "새로운 정보나 상황 변화에 유연하게 대처하지만, 중요하지 않다고 본 부분에서 실수하면 당황하거나 스트레스가 큼."
            ],
            짝꿍학생: {
                짝: "허수 알약",
                이유: [
                    "극한의 효율충은 효율적으로 학습하지만 깊이가 부족하고, 허수 알약은 ‘꾸준한 환경 유지’는 있으나 학습 효율이 낮음.",
                    "서로가 함께 학습하며 효율과 성실이라는 장점을 극대화하고, 단점을 보완할 수 있음."
                ]
            },
            조언: {
                설명: [
                    "1. 효율만 추구하다 보면 학습량이 절대적으로 부족해질 수 있습니다. 완벽주의는 아니더라도, 어느 정도 시간 투자와 비효율적 과정도 감수하세요.",
                    "2. 풀이노트나 오답노트를 만들어보세요. 당장은 비효율적으로 보이더라도, 이런 기록이 나중에 큰 자산이 됩니다."
                ],
            },
            확률: "80% -> 40%",
            수시정시적합도: {
                vs: "수시 >= 정시",
                설명:
                    "핵심만 빠르게 공략하고, 벼락치기에 강한 면모가 내신 시험에서 큰 효과를 발휘합니다. 따라서 수시 교과전형에서도 좋은 성과를 낼 가능성이 높습니다."
            },
            겨울방학추천과제: [
                "1. 과목별 기초 개념 & 세부 개념 복습 프로젝트: 앞서 빠르게만 훑고 넘어갔던 개념들을 보강해보세요.",
                "2. 다양한 유형의 문제 풀이: 개념을 짧은 시간 안에 익히더라도, 문제 풀이를 많이 해보면 부족한 부분이 드러납니다."
            ],
            추천프로그램: {
                설명: [
                    "방학 시즌에 미리 생활기록부 준비 및 수행평가 대비 전략을 짜두시면 학기 중에 훨씬 여유로울 것입니다."
                ],
                프로그램명: "메드스카이 학생부 & 학습 컨설팅",
                url: "https://medsky.co.kr/winterConsulting"
            }
        }
    },

    ///////////////////////////////////////////////////////////////////////////
    // 4) 감성 알약 (GD)
    ///////////////////////////////////////////////////////////////////////////
    GD: {
        title: "감성 알약 상세 보고서",
        content: {
            특징: [
                "감정 기복이 심해, 의욕이 있을 땐 폭발적이지만 없을 땐 전혀 공부하지 않을 수 있음.",
                "주변 사람, 환경, 영상, 성공 사례 등의 외부 자극에 크게 영향을 받음.",
                "동기만 생기면 밤새서라도 몰입하는 집중력을 보유하나, 그 동기가 사라지면 학습 공백이 길어짐.",
                "즉흥적이면서도 창의적인 성향이 있어, 감정이 고조되면 독창적 아이디어나 해법을 찾는 경우가 있음.",
                "장기적, 꾸준한 학습보다 단기 몰입에 치우치는 편이라, 계획 수립 및 실행이 고르지 않음.",
                "감정이 나쁠 때 자기 비하나 좌절감이 심해질 수 있음."
            ],
            짝꿍학생: {
                짝: "허수 알약",
                이유: [
                    "감성 알약은 동기가 생기면 몰입하지만 꾸준함이 부족하고, 허수 알약은 학습 장소 확보나 꾸준한 환경 유지는 잘하지만 효율이 낮음.",
                    "서로의 장단점을 보완해, 감성 알약은 ‘지속성’을, 허수 알약은 ‘실질적 집중력’을 배울 수 있음."
                ]
            },
            조언: {
                설명: [
                    "1. 감정의 노예가 되지 마세요. 기분이 좋지 않더라도, 계획한 공부량을 최소한으로라도 해내는 연습이 필요합니다.",
                    "2. 주변 환경을 적극 바꾸세요. 스터디카페, 독서실, 또는 관리형 학원 등 ‘강제성’을 부여할 수 있는 곳에서 공부하면 좋습니다. 당신은 쉽게 자극 받으니까요."
                ],
            },
            확률: "90% -> 20%",
            수시정시적합도: {
                vs: "수시 = 정시",
                설명:
                    "감정에 크게 좌우되므로, 어느 전형이든 ‘꾸준함’이 유지되지 않으면 성과가 나오기 어렵습니다. 다만, 학교 분위기나 주변 환경이 좋다면 수시에 유리하고, 혼자 공부를 잘 못한다면 정시 대비를 하면서도 독서실/학원 관리를 받는 것이 좋습니다."
            },
            겨울방학추천과제: [
                "1. 학원 또는 관리형 스터디카페 다니기: 혼자서는 쉽게 무너질 수 있으니, 강제성을 부여하는 환경이 필요합니다.",
                "2. 휴대폰/환경 개선: 공신폰으로 바꾸거나 SNS 로그아웃 등, 주변 자극을 최대한 차단하세요."
            ],
            추천프로그램: {
                설명: [
                    "감성 알약 유형은 자기 통제력이 약하기 때문에, 상위권 대학 멘토가 1:1로 매일 학습을 체크하는 ‘학습코칭 프로그램’이 효과적입니다."
                ],
                프로그램명: "메드스카이 학습코칭 & 과외 연동 프로그램",
                url: "https://medsky.co.kr/winterCoaching"
            }
        }
    },

    ///////////////////////////////////////////////////////////////////////////
    // 5) 허수 알약 (FA)
    ///////////////////////////////////////////////////////////////////////////
    FA: {
        title: "허수 알약 상세 보고서",
        content: {
            특징: [
                "겉으로 보기엔 오랜 시간 공부하는 것처럼 보여 주변에서 성실하다는 인상을 받기 쉬움.",
                "하지만 실제로는 집중도가 낮아, 책상 앞에 오래 앉아 있어도 학습의 질이 떨어짐.",
                "명확한 목표나 계획 없이 ‘공부해야 한다’는 의무감에만 매달리기 쉬움.",
                "스마트폰, SNS, 주변 환경 등에 쉽게 산만해져 실제 학습량이 미미함.",
                "‘공부를 하고 있다’는 자기 위안에 빠져 성과를 개선하기 위한 노력이 부족할 수 있음.",
                "실제 시험 성적이 기대보다 훨씬 낮게 나오면 심리적 혼란과 불안을 크게 느낌.",
                "그러나 꾸준히 학습 환경을 유지하려는 습관 자체는 잠재적인 가능성이 있음."
            ],
            짝꿍학생: {
                짝: "극한의 효율충 알약",
                이유: [
                    "허수 알약은 꾸준히 책상에 앉는 습관이 있으나 집중도와 효율이 부족함. 극한의 효율충 알약은 짧고 굵게 효율적으로 공부하지만, 학습 깊이가 부족함.",
                    "서로의 장점을 합치면 ‘꾸준함+효율’을 동시에 잡을 수 있음."
                ]
            },
            조언: {
                설명: [
                    "1. ‘공부했다’는 행위 자체에 위안을 얻지 말고, 매일 객관적인 지표를 통해 내가 얼마나 습득했는지를 확인하세요. 문제 풀이, 개념 암기 정도 등을 수치화하세요.",
                    "2. 매주 스스로 진도 범위 테스트를 보거나 모의고사를 풀어보면서, 학습 성과를 눈으로 확인해보세요. 방향이 틀렸다면 바로 수정해야 합니다."
                ]
            },
            확률: "99% -> 30%",
            수시정시적합도: {
                vs: "수시 >> 정시",
                설명:
                    "강력한 효율성은 부족하지만, 꾸준히 내신 시험과 생활기록부를 챙길 수 있는 성실함이 장점입니다. 학생부 종합전형에서 상승 여지가 크지만, ‘진짜 공부량’을 늘리지 않으면 높은 성적을 기대하기 어려울 수 있습니다."
            },
            겨울방학추천과제: [
                "1. 모의고사, 실전모의고사 위주의 학습: 실제 시험 시간을 맞춰 기출 또는 실전 모의고사를 풀어보세요. 주 1회 이상 점검하며 자신의 성적을 꾸준히 추적하세요.",
                "2. 핵심 개념 정리 습관 만들기: 키워드 정리, 간단 풀이, 오답 분석을 정해진 노트에 담고, 제한시간을 두어 집중력을 높이세요."
            ],
            추천프로그램: {
                설명: [
                    "SKY·의치한 학생들이 학생의 공부 습관, 성취도를 매일 점검하고 피드백을 주는 학습 코칭 프로그램을 이용하면, 앉아만 있는 공부 습관을 개선하는 데 큰 도움이 될 것입니다."
                ],
                프로그램명: "메드스카이 학습코칭 프로그램",
                url: "https://medsky.co.kr/winterCoaching"
            }
        }
    },

    ///////////////////////////////////////////////////////////////////////////
    // 6) 닌자 알약 (SC)
    ///////////////////////////////////////////////////////////////////////////
    SC: {
        title: "닌자 알약 상세 보고서",
        content: {
            특징: [
                "상황을 빠르게 분석하고, 더 이상 효율적이지 않다고 판단되면 과감히 다른 과목으로 전환하는 실용적 태도를 보임.",
                "한 과목에 얽매이지 않고, 다양한 선택지를 탐색하며 스트레스를 최소화하려는 경향이 강함.",
                "어려운 문제나 과목에 매달리기보다 비교적 쉬운 영역에서 성취감을 얻으려 하는 편.",
                "부담스럽거나 복잡한 과제에 직면하면 뒤로 미루거나 다른 과목으로 넘어가는 경우가 많음.",
                "여러 과목을 폭넓게 경험하며, 흥미가 떨어지면 또 다른 과목으로 갈아타기 쉬움.",
                "학습에서 완벽함보다는 ‘적당히’ 만족할 수준을 찾으려 하고, 자신을 지나치게 몰아붙이지 않음.",
                "취약 과목을 반복적으로 피하면 해당 과목에 대한 두려움이 커지고, 극복 기회를 잃을 수 있음.",
                "장기적으로 특정 과목 점수 향상에 어려움을 겪고, 약점이 고착화될 수 있음."
            ],
            짝꿍학생: {
                짝: "완벽주의 미룬이 알약",
                이유: [
                    "닌자 알약은 완벽주의 미룬이 알약의 철저함을 통해 어려운 과목에 대한 두려움을 극복 가능.",
                    "반대로 완벽주의 미룬이 알약은 닌자 알약의 ‘유연한 전환 능력’을 배우며 스트레스를 줄일 수 있음."
                ]
            },
            조언: {
                설명: [
                    "1. 하고 싶은 과목만 파고들면, 결국 전형 과정에서 걸러질 수 있습니다. 싫은 과목이라도 꾸준히 건드려야 약점이 사라집니다. 힘들어도 버티세요.",
                    "2. 과목 전환이 잦으면 깊이 있는 학습이 어려워집니다. 일정 시간을 정해 한 과목에 집중해보고, 취약 과목 ‘극복의 날’을 만들어보는 것도 추천합니다."
                ],
            },
            확률: "85% -> 20%",
            수시정시적합도: {
                vs: "수시 < 정시",
                설명:
                    "잘하는 과목과 못하는 과목이 극명하게 나뉘는 학생이 많아, 선택 과목 비중이 높은 정시 전형에서 상대적으로 이점이 있을 수 있습니다."
            },
            겨울방학추천과제: [
                "1. 과목별 복습 프로젝트: 예비 고2라면 통합과학 복습 등, 취약했던 과목의 핵심 개념을 다시 살펴보세요.",
                "2. 취약 과목 극복 데이: 일주일에 하루는 ‘가기 싫은 과목’만 붙잡는 날로 정하고 꾸준히 연습해보세요."
            ],
            추천프로그램: {
                설명: [
                    "SKY·의치한 멘토가 학생별 약점 과목을 집중 관리하는 코칭을 해드립니다. 과목별 심화 과외 연동도 가능하니 참고해보세요!"
                ],
                프로그램명: "메드스카이 맞춤형 과목 관리 프로그램",
                url: "https://medsky.co.kr/winterCoaching"
            }
        }
    }
};

