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
        text: "시험 공부를 미리하는 것은 비겁한 일이라 생각한다.",
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
                "학습에 대한 불안과 스트레스가 쌓이면서, 체력이나 정신 건강에 영향을 줄 수 있습니다.",
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
                    "1. 당신은 아무것도 아니라는 것을 인지할 필요가 있습니다. 당신은 아무것도 아닙니다. 당신은 밥입니다. 당신은 우주의 먼지입니다. 아무리 열과 성을 다해도, 100퍼센트 완벽한 무언가를 행할 수 없습니다. 그것을 인지하셔야 합니다. 당신이 완벽히 무언가를 행하지 못했다고 해서 스트레스를 받지 마세요. 이 세상에 완벽한 사람은 없습니다. 불안정함을 인정하고, 일단 아무거나 행하세요.",
                    "2. 무언가를 완벽히 행하겠다며 당신 나름의 완벽한 플랜을 세운 순간, 그 일에 대해서 부담감을 느끼고 강박을 가지게 되기 마련입니다. 모든 일을 다 완벽히 행하려는 순간, 결정한 일에 대해 강박을 느끼게 되고, 당신은 그것의 부담감을 느껴 피하게 될 수도 있습니다. 그런 회피가 지속된다면 당신은 결국 ‘재수’를 하게 될 것입니다. 적당히 하세요. 정말 당신에게 가장 중요한 과목을 위주로 ‘완벽한’ 플랜을 세우시고, 우선적으로 해치우세요. 모든 일을 완벽히 대하시면 골병이 나서 ‘사망’ 혹은 ‘재수’에 이를 수 있다는 것을 재차 강조합니다."
                ]
            },
            확률: "40% -> 0%",
            수시정시적합도: {
                vs: "수시 > 정시",
                설명:
                    "이 유형의 고등학생은 성실한 ‘수시 파이터’이거나, 완벽한 ‘정시러’일 확률이 높습니다. 본디 이 유형의 학생의 경우 수시 교과 전형, 수시 학생부 종합 전형이 대학 입시에서 더욱 유리할 것으로 판단됩니다만, 이 유형의 학생들은 정시를 선택해도 통계적으로 상당히 좋은 결과를 얻음이 입증되었습니다. 열심히 하세요 파이팅!"
            },
            겨울방학추천과제: [
                "1. 핵심 개념을 정리하는 메커니즘을 확고하게 다잡아보세요. 핵심 키워드 정리, 간략한 문제풀이, 오답 풀이, 이 고정된 3가지가 노트에 들어갈 수 있게끔 설정해둔 뒤, 제한시간을 설정해 필요 이상의 시간을 핵심 개념을 정리하는 데 소비하지 않도록 해보세요.",
                "2. 개념을 많이 필요로 하는 과목의 경우 미리 선행을 하되, 배경지식으로 쌓는다는 느낌으로 가볍게 선행을 하세요. 고3의 경우 수1, 수2와 같은 수능 과목을 복습을 하시되, 배웠던 과목인 만큼 최대한 탄탄하게 복습을 하시는 것을 추천드립니다."
            ],
            추천프로그램: {
                설명: [
                    "학생분의 꼼꼼함과 성실함을 이용하여 방학 때 미리 생활기록부 스토리라인을 검토하고 작성하시는 것을 추천드립니다. 방학 때 남는 시간을 활용하여, 학기 중 부담을 줄이세요.",
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
            "\"최소한의 노력으로 최대한의 결과를 내겠다\"는 생각을 자주 합니다.",
            "즉각적인 성과를 선호하며 개념 학습보다는 문제 풀이로 성과를 확인하고자 합니다.",
            "긴 시간 준비보다 즉각적인 보상을 추구하는 경향이 강합니다.",
            "자신감, 약간의 무모함이 존재하며 실전에서 문제를 해결하는 데 자신감이 있지만, 기초가 약해지면 한계를 느낄 때 좌절하기 쉽습니다.",
            "잘하는 과목에서는 자신감을 보이지만, 어려운 과목은 회피하려는 경향 또한 존재합니다.",
            "다소 독립적인 학습 태도를 보이며 타인의 도움보다는 혼자 문제를 풀어보며 실력을 쌓으려는 성향이 강합니다.",
            "누군가의 조언이나 개념 강의보다는 스스로 답을 찾는 방식을 선호하며 문제집과 친숙합니다.",
            "\"일단 해보자\"는 마음가짐으로 시작하지만, 체계적인 복습이 부족할 수 있습니다.",
            "시간을 효율적으로 쓰는 데 능숙하지만, 개념 학습에 시간을 할애하는 것을 귀찮아합니다."
          ],
          짝꿍학생: {
            짝: "극한의 효율 알약",
            이유: [
              "문제풀이형은 실전 경험이 많지만 체계성이 부족하고, 직감형은 선택과 집중 능력이 뛰어나 서로 보완 가능합니다.",
              "문제풀이형은 실전 문제를 제공하며 직감형의 빠른 판단을 강화하고, 직감형은 문제풀이형에게 개념적으로 중요한 부분을 짚어줄 수 있습니다."
            ]
          },
          조언: {
            설명: [
              "1. 개념을 좀 공부하세요. 아마 이 유형이 떴으면, 실제로도 개념 공부량이 부족할 확률이 높습니다. 고작 설문조사 알고리즘 주제에, '니가 뭘 알아!'라는 생각이 들 수 있지만, 개념 공부는 필수입니다. 수능은 늘 변칙적이고, 새로운 문제를 가져옵니다만, 전부 교과서 범위 내에서 변형되어 출제된 문제들임을 알립니다. 기본부터 착실하게 다시 근본 실력을 다지면, 수많은 문제를 푸는 것보다 더욱 효율적으로 실력을 키울 수 있습니다.",
              "2. 오답 노트를 적극 활용하세요. 틀린 문제는 같은 실수를 반복하지 않도록 복기하고, 틀린 이유를 분석해야 합니다. 그저 틀린 문제를 다시 풀어보고 넘어가는 것은 절대로 오답 분석이 아닙니다. 오답 분석을 하지 않으면 시험에서 비슷한 문제를 만날 때 다시 틀리게 됩니다. 오답 노트를 작성하는 것은 절대 비효율적인 선택이 아니며, 반드시 활용하시기 바랍니다."
            ]
          },
          확률: "60% -> 30%",
          수시정시적합도: {
            vs: "수시 <<<< 정시",
            설명:
              "이 유형의 고등학생은 불타는 정시 파이터의 기질을 타고났을 확률이 높습니다. 다양한 유형의 문제를 푸는 것을 즐기기에 내신과 같이 한정되고 지엽적인 시험보다는 사고력 평가 위주의 문제가 출제되는 수능에서 높은 적합도를 나타냅니다."
          },
          겨울방학추천과제: [
            "1. 수학 교과서 개념 문제 풀이 및 정리하기: 많은 수학 문제를 푼다고 해서 실력이 일취월장하지는 않습니다. 문제를 많이 푸는 것은 도움이 되지만, 기초가 부실하다면 비효율적인 행위가 될 수 있음을 명심하세요. 그동안 무시해왔던 개념 학습을 다시 한 번 점검해 보세요. 개념 문제를 정석적인 풀이 방식으로 풀며 기초를 다진 후 다양한 문제 유형을 접해보세요. 결국 많은 문제는 하나의 개념에서 변형된 것임을 이해한 순간, 실력은 비약적으로 향상됩니다.",
            "2. EBS 수특 문학 정리하기: '문제 소믈리에' 유형의 경우 국어와 영어 과목 역시 기본 개념 없이 사고력만으로 문제를 푼다는 착각을 할 수 있습니다. 하지만 기초적인 개념은 국어와 영어에서도 필수적입니다. 방학 기간 동안 EBS 수특 문학을 미리 읽어보세요. 이러한 경험은 배경지식을 탄탄히 쌓고 기본 문학 지식을 보완하는 데 큰 도움이 됩니다."
          ],
          추천프로그램: {
            설명: [
              "다양한 문제를 많이 푸는 것은 좋은 학습법이지만, 학습자의 수준에 따라 비효율적인 방식이 될 수 있습니다. 학생의 학습 수준을 객관적으로 진단하고 맞춤형 학습법을 제시하며, 문제집과 학습 스케줄 관리를 지원하는 학습 코칭 프로그램을 추천드립니다. 전교 1등, 올 1등급, 메디컬, SKY 선생님들의 학습 관리로 성적 향상을 경험해 보세요!"
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
            "주변 상황이나 정보를 분석하기보다는 본능적으로 중요한 요소를 빠르게 캐치하는 능력이 뛰어납니다.",
            "세부적인 계획보다는 바로 행동에 옮기고, 결과를 통해 피드백을 얻는 것을 선호합니다.",
            "본인의 직감과 판단을 믿는 경향이 강하며, 학습한 내용에 대해 자신감을 가지는 경우가 많습니다.",
            "자신감이 높은 만큼 새로운 도전이나 빠른 선택을 두려워하지 않는 모습이 나타납니다.",
            "불필요하다고 생각되는 일에 시간을 투자하는 것을 꺼려하며, 목표를 빠르게 달성하는 것을 선호합니다.",
            "복잡한 과정보다는 간단명료한 방식을 더 좋아합니다.",
            "자신만의 학습 스타일이나 판단 방식을 고집하는 경우가 있어, 다른 방법을 시도하는 데 소극적일 수 있습니다.",
            "자신이 중요하지 않다고 생각했던 부분에서 실수할 경우 당황하거나 스트레스를 받을 수 있습니다.",
            "새로운 정보나 상황 변화에 유연하게 대처하는 경향이 있습니다.",
            "심사숙고보다는 행동으로 옮기는 속도가 빠르며, 결과를 통해 배움을 얻으려 합니다."
          ],
          짝꿍학생: {
            짝: "허수 알약",
            이유: [
              "극한의 효율충 알약은 효율적으로 학습하지만 깊이가 부족하고, 허수 알약은 학습 효율을 높일 필요가 있습니다.",
              "직감형의 핵심 파악 능력이 허수 알약에게 동기를 줄 수 있고, 허수 알약의 여유로운 성향이 직감형의 과도한 효율 추구를 완화할 수 있습니다."
            ]
          },
          조언: {
            설명: [
              "1. 이 정도 공부한 거 치고도 이 정도 성적이면 나쁘지 않다고 착각할 수 있습니다. 남들보다 단기 정보 습득률이 높고 벼락치기에 강하지만, 남들도 벼락치기를 못하는 것이 아닙니다. 책상에 오래 앉아 있는 것이 비효율적이라 생각할 수 있지만, 효율성이 떨어지는 학습 과정도 필요합니다. 이를 받아들이고 공부량을 늘려보세요.",
              "2. 풀이노트와 오답노트를 작성해보세요. 이런 노트를 만드는 일이 비효율적이라 생각될 수 있지만, 학습 습관을 교정하고 부족한 부분을 보완하는 중요한 과정입니다."
            ]
          },
          확률: "80% -> 40%",
          수시정시적합도: {
            vs: "수시 >= 정시",
            설명:
              "효율적으로 학습을 진행하는 만큼, 한정된 시간 내에 벼락치기 능력이 뛰어납니다. 이러한 특성은 내신 시험기간에 특히 빛을 발하며, 정시보다는 수시 교과전형에서 우수함을 발할 수 있습니다."
          },
          겨울방학추천과제: [
            "1. 과목별 복습 프로젝트: 가볍게 핵심만 짚고 넘어갔던 과목들의 기본 개념과 세부 개념을 다시 점검해 보세요. 전과목을 다 하지 말고, 다음 학기 또는 수능과 관련된 과목 위주로 복습하는 것을 추천합니다. 예를 들어, 예비 고2의 경우 통합과학을 복습하여 물화생지의 기초를 다져보세요.",
            "2. 다양한 유형의 문제 풀이: 효율적으로 개념 학습을 마쳤다면 문제를 풀어보며 부족한 개념을 보완하세요. 문제를 풀 때 드러나는 약점을 극복하는 과정을 통해 실력을 더 향상시킬 수 있습니다."
          ],
          추천프로그램: {
            설명: [
              "극한의 효율충 유형은 수시 전형이 정시 전형보다 유리합니다. 그러나 성실성이 다소 부족할 수 있어 학기 중 수행평가와 보고서 준비 등에 부담을 느낄 수 있습니다. 방학 시즌을 이용하여 생활기록부 작성 전략을 미리 준비해두세요. 또한 학기 중 효율적인 시간 운영을 위해 컨설팅을 받아보는 것도 방법이 될 수 있습니다. 전문 컨설턴트가 학생의 생활기록부를 평가하고, 작성 전 과정을 관리해 드립니다."
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
            "자신의 감정을 솔직하게 받아들이고 행동으로 옮기려는 경향이 강합니다.",
            "의욕이 생기면 몰입도가 높아지고, 반대로 의욕이 없으면 아무것도 하지 않는 극단적인 태도를 보입니다.",
            "주변 상황, 타인의 피드백, 혹은 작은 변화에도 쉽게 영향을 받아 기분이 좌우되기 쉽습니다.",
            "유튜브, 블로그, 성공 사례 등에서 영감을 얻고, 이를 통해 학습 의욕을 끌어올리는 데 탁월합니다. 외부에서 자극이 없을 때는 스스로 동기를 만들어내는 데 어려움을 겪습니다.",
            "한 번 마음이 움직이면 강력한 집중력과 열정을 발휘하며, 밤을 새워서라도 목표를 이루려고 노력합니다.",
            "계획을 세우기보다는 그 순간의 열정과 감정을 믿고 바로 행동에 옮기는 즉흥적인 성향이 강합니다.",
            "감정이 고조되었을 때 높은 창의성과 독창성을 발휘할 가능성이 큽니다. 특히 글쓰기나 예술적 활동에 강점이 있습니다.",
            "규칙이나 틀에 얽매이기보다는 감정을 바탕으로 자유롭게 사고하고 표현하는 것을 선호합니다.",
            "외부 자극으로 의욕이 생기면 성과를 내고자 하는 욕구가 강합니다. ‘이만큼은 해내야 한다’는 강박이 있을 수 있습니다.",
            "감정이 저조하거나 동기가 사라졌을 때, 무기력감이나 자기 비판으로 이어지기 쉽습니다."
          ],
          짝꿍학생: {
            짝: "허수 알약",
            이유: [
              "감성 알약은 동기가 생기면 몰입하지만 꾸준함이 부족하고, 허수 알약은 학습 장소 확보나 꾸준한 환경 유지에 강점이 있지만 효율이 낮습니다.",
              "서로의 장단점을 보완해, 감성 알약은 ‘지속성’을, 허수 알약은 ‘실질적 집중력’을 배울 수 있습니다."
            ]
          },
          조언: {
            설명: [
              "1. 자신의 감정에 휘둘리지 말고, 기분이 좋지 않더라도 계획한 공부량을 최소한으로라도 해내는 연습을 하세요. 감정에 따라 학습량이 들쭉날쭉하면, 성과는 제자리걸음을 할 뿐입니다. 감정을 조절하고 꾸준히 학습하는 성숙한 자세가 필요합니다.",
              "2. 주변 환경을 적극적으로 바꾸세요. 스터디카페, 독서실 또는 관리형 학원 등 ‘강제성’을 부여할 수 있는 곳에서 공부하세요. 외부 자극을 통해 동기를 유지하는 것이 효과적입니다."
            ]
          },
          확률: "90% -> 20%",
          수시정시적합도: {
            vs: "수시 = 정시",
            설명:
              "감정에 크게 좌우되므로, 어느 전형이든 ‘꾸준함’이 유지되지 않으면 성과가 나오기 어렵습니다. 다만 학교 분위기나 주변 환경이 좋다면 수시에 유리하고, 혼자 공부하기 힘들다면 정시 대비를 하면서도 독서실/학원 관리를 받는 것이 좋습니다."
          },
          겨울방학추천과제: [
            "1. 학원 또는 관리형 스터디카페 다니기: 혼자서는 쉽게 무너질 수 있으니 강제성을 부여하는 환경이 필요합니다.",
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
            "주변으로부터 성실하다는 평가를 받고자 하는 욕구가 강하며, 이를 통해 스스로도 동기부여를 얻으려고 함.",
            "자신의 노력을 보여주고 싶어 하고, 사회적 인정이나 칭찬을 받으면 만족감을 느끼는 경향이 있음.",
            "책상 앞에 오래 앉아 있거나 공부하는 모습을 연출하면서, \"그래도 난 노력하고 있다\"는 자기 위안을 얻으려 함.",
            "실제로 학습의 깊이나 효율성에 문제가 있어도 이를 인정하기보다, 외적인 노력으로 스스로를 합리화하려는 경향이 있음.",
            "구체적인 학습 계획이나 전략 없이 막연히 \"공부를 해야 한다\"는 의무감에만 의존하는 경우가 많음.",
            "학습의 최종 목표를 명확히 설정하지 않아, 집중력과 동기 부여가 떨어지기 쉬움.",
            "스마트폰, 소셜 미디어, 주변 사람들과의 대화 등 외부 자극에 쉽게 영향을 받아 집중력을 잃음.",
            "공부를 시작하더라도 오랜 시간 몰입하지 못하고 자주 딴생각에 빠지거나 손을 놓는 경우가 많음.",
            "학업 성과가 낮아도 이를 학습 방식이나 태도의 문제로 연결짓기보다 외부 요인(시험 난이도, 시간 부족 등)을 탓하는 경향이 있음.",
            "실제 공부 성과가 낮음에도 \"공부는 하고 있다\"는 표면적인 행동에 만족하며, 개선하려는 노력이 부족함.",
            "꾸준히 학습 환경을 유지하려는 노력은 보여주며, 이는 올바른 방향으로 나아간다면 큰 성과를 낼 수 있는 기반이 됨.",
            "성과가 낮은 현실에 대해 내적으로는 불안감을 느끼며, 이로 인해 의욕이 더 떨어지거나 좌절할 가능성이 있음."
          ],
          짝꿍학생: {
            짝: "극한의 효율충 알약",
            이유: [
              "허수 알약 유형은 효율적인 학습 습관이 필요하며, 극한의 효율충 알약은 어려움을 극복하는 꾸준한 습관이 필요합니다.",
              "서로가 함께 학습하며 성실하게 계획을 이행하고, 과목의 균형을 잡는 데 도움을 줄 수 있습니다."
            ]
          },
          조언: {
            설명: [
              "1. 당신이 공부라 생각하고 행했던 것들의 대부분은 공부가 아닐 확률이 높습니다. 공부를 하고 있다는 사실 자체에 위안을 가지지 마세요. 세상은 결과입니다. 과정보다는 결국 시험 성적을 어떻게 받는지가 더욱 중요한 거에요. 오늘 책상에 얼마나 앉아있었는지, 인강을 얼마나 봤는지, 보다는 확실하고 객관적인 지표로 학생분의 공부량을 체크하세요. 예를 들어 오늘 배운 진도에 대해 얼마나 제대로 이해했는지, 심화 문제를 얼마나 확실하게 풀었는지 그날의 목표에 맞춰서 체크해보세요.",
              "2. 철저히 자신의 상태를 체크하세요. 매주 한 번은 진도 범위에 대한 테스트를 시행하시는 것이 좋습니다. 그 결과를 통해 자신이 제대로 공부하고 있는지 검증하세요. 지금 내가 하고 있는 공부가 맞는 공부법인지, 너무 비효율적으로 공부하고 있는 것은 아닌지 끊임없이 의심하세요. 당신은 성실한 학생입니다만, 방향성이 잘못된 겁니다. 조금만 더욱 교정한다면 훨씬 우수한 학생이 될 수 있음을 알립니다."
            ]
          },
          확률: "99% -> 30%",
          수시정시적합도: {
            vs: "수시 >> 정시",
            설명:
              "이 유형의 고등학생은 효율성이 다소 떨어지지만 특유의 성실함으로 내신 시험과 생활기록부 관리, 수시 학생부 종합 전형에 두각을 드러냅니다. 허나 학습 과정 속에서 비효율적인 측면이 다소 드러나기에 타 유형대비 좋은 성적을 얻기 힘들 것으로 예측됩니다."
          },
          겨울방학추천과제: [
            "1. 모의고사, 실전모의고사 위주의 학습: 마더텅, 자이스토리와 같은 수능 기출 문제 모음집을 이용해 과거의 기출 문제들을 실제 수능처럼 풀어보거나, 실전 모의고사를 통해 자신의 성적을 꾸준히 체크해보세요. 실전 모의고사의 경우 예상 등급컷이 동봉되어있기에, 학생분의 성적을 객관적으로 체크할 수 있는 좋은 도구가 될 것입니다. 일주일에 한 번 자신의 실력을 객관적으로 평가하면서, 자신의 공부량을 차갑게 판단하며 더욱 공부한다면 좋은 결과 얻을 수 있으리라 판단됩니다.",
            "2. 핵심 개념을 정리하는 메커니즘을 확고하게 다잡아보세요. 핵심 키워드 정리, 간략한 문제풀이, 오답 풀이, 이 고정된 3가지가 노트에 들어갈 수 있게끔 설정해둔 뒤, 제한시간을 설정해 필요 이상의 시간을 핵심 개념을 정리하는 데 소비하지 않도록 해보세요."
          ],
          추천프로그램: {
            설명: [
              "허수 알약 유형의 학생분께는 학습코칭 프로그램을 추천드립니다. 이 프로그램 같은 경우 SKY, 메디컬 상위권 대학 멘토님들이 학생분의 공부 습관, 성적대를 철저히 분석해, 학생분께 가장 적합한 공부법과 진도, 그 외 학업과 관련한 모든 것들을 관리해드리는 프로그램입니다! 프로그램 내에서 학생분의 수업 진도와 그 외 과제 이행, 취침 시간까지 모두 철저하게 관리하여 공부에 강제성을 부여하고 있습니다! 또한 과외 프로그램과 연동하여, 더욱 과목별로 심화적이고 체계적인 관리가 가능하니, 방학 때 공부를 어떻게 해야 할지 막막했던 학생, 관리형 스터디카페를 다니고 싶었지만 집과 거리가 멀어 포기했던 학생분들께 추천드립니다!"
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
            "상황을 빠르게 분석하고, 더 이상 효율적이지 않다고 판단되면 과감히 다른 과목으로 전환하는 실용적인 태도를 보임.",
            "한 가지에 얽매이지 않고, 다양한 선택지를 탐색하는 데 익숙하며, 과도한 스트레스를 회피하려는 성향이 강함.",
            "학습 과정에서 스트레스를 최소화하려고 하며, 어려운 문제나 과목에 매달리기보다는 비교적 쉬운 영역에서 성취감을 찾으려 함.",
            "부담스럽거나 복잡한 과제에 직면하면 이를 회피하거나 뒤로 미루려는 경향이 있음.",
            "한 가지에 몰두하기보다는 여러 가지를 폭넓게 경험하며, 다양한 과목에 흥미를 느끼는 경우가 많음.",
            "새로운 과목이나 쉽게 접근할 수 있는 내용을 더 선호하며, 도전을 통해 재미를 찾으려는 성향도 있음.",
            "학습에서 완벽함을 추구하기보다는 일정 수준에서 만족하며, 자신을 지나치게 몰아붙이지 않음.",
            "한 과목에 지나치게 시간을 투자하지 않고, 과목 간 균형을 맞추려는 태도를 보임.",
            "자신이 약하다고 느끼는 영역을 피하며, 해당 과목에 대한 도전 의지가 낮음. 결과적으로 취약 과목을 극복하지 못해 자신감이 저하될 수 있음.",
            "어려운 문제를 풀다 실패했을 때 좌절감이 클 수 있어, 아예 시도조차 하지 않으려는 경향이 있음.",
            "한 과목에 오랜 시간 집중하는 데 어려움을 느끼며, 흥미가 떨어지면 다른 과목으로 전환하려는 경향이 강함."
          ],
          짝꿍학생: {
            짝: "완벽주의 미룬이 알약",
            이유: [
              "닌자 알약은 완벽주의 미룬이 알약의 철저함을 통해 어려운 과목에 대한 두려움을 극복할 수 있습니다.",
              "반대로 완벽주의 미룬이 알약은 닌자 알약의 유연성을 배우며 스트레스 관리 능력을 향상시킬 수 있습니다."
            ]
          },
          조언: {
            설명: [
              "1. 하고 싶은 것만 하면서 인생을 살아갈 수는 없습니다. 초등학생도 아니고 좋아하는 과목만 공부해서는 절대 좋은 대학에 갈 수 없습니다. 특정 과목을 걸러서 공부하면 학생분도 대학에서 걸러진다는 것을 명심하세요. 특정 과목을 보면 숨이 턱막히고, 온몸이 간지럽고, 뇌가 부서질 것 같으셔도 그냥 버티세요. 악으로 깡으로 버텨서 공부하세요. 원래 공부는 힘듭니다. 모든 학생들이 그 과정을 버티고 있습니다. 압니다.. 많이 힘든 거.. 그래도 어쩌겠습니까, 견디셔야됩니다. 응원합니다.",
              "2. 과목 간 전환이 잦아 집중력이 흐트러질 수 있습니다. 효율적인 학습을 위해서는 일정 시간 동안 한 과목에 집중하고, 이후 다른 과목으로 전환하는 방식이 효과적입니다. 이러한 집중적인 학습 습관을 통해 학습의 질을 높일 수 있습니다. 취약 과목이 존재한다면, 일주일 중 하루는 그 취약 과목을 극복하기 위해 시간을 많이 투자하는 날을 설정하는 것도 하나의 방법이 될 수 있습니다."
            ]
          },
          확률: "85% -> 20%",
          수시정시적합도: {
            vs: "수시 < 정시",
            설명:
              "이 유형의 경우 잘하는 과목은 굉장히 잘하고 못하는 과목은 굉장히 못하는 학생분들이 많이 포진되어있을 가능성이 높습니다. 이런 유형의 경우 통상적으로 과목의 수가 적으면서 과목 반영비와 전형이 세분화 될 수 있는 정시 전형에서 보다 학생분이 유리함을 느낄 수 있습니다."
          },
          겨울방학추천과제: [
            "1. 과목별 복습 프로젝트: 어렵고 공부하기 싫다는 이유로 넘어갔던 과목들의 기본 개념과 세부 개념을 다시금 돌아볼 필요가 있습니다. 전과목을 다하시지는 말고, 당장 다음 학기, 혹은 수능과 연관이 될 수 있는 과목의 경우만 복습을 하시는 것을 추천드립니다.",
            "2. 취약 과목 극복 데이 설정하기: 보통 이공 계열 친구들의 경우, 국어와 영어, 문과 친구들의 경우, 수학 과목을 배제하고 공부하는 경우가 많습니다. 그런 경우 99퍼센트 확률로 재수를 하시거나, 자신이 원하지 않는 대학교를 가게 될 가능성이 높습니다. 일주일 중 딱 하루 날잡고 취약 과목만 하는 날을 설정해보세요. 아니면 좋아하는 과목과 취약 과목을 번갈아가면서 공부할 수 있게끔 설정을 하는 방식으로, 의도적으로라도 꾸준히 취약 과목을 공부하시려고 노력하시는 것을 추천 드립니다."
          ],
          추천프로그램: {
            설명: [
              "닌자 알약 유형의 학생분께는 학습코칭 프로그램을 추천드립니다. 이 프로그램 같은 경우 SKY, 메디컬 상위권 대학 멘토님들이 학생분의 공부 습관, 성적대를 철저히 분석해, 학생분께 가장 적합한 공부법과 진도, 그 외 학업과 관련한 모든 것들을 관리해드리는 프로그램입니다! 프로그램 내에서 학생분의 수업 진도와 그 외 과제 이행, 취침 시간까지 모두 철저하게 관리하여 공부에 강제성을 부여하고 있습니다! 또한 과외 프로그램과 연동하여, 더욱 과목별로 심화적이고 체계적인 관리가 가능하니, 방학 때 공부를 어떻게 공부를 해야할지 막막했던 학생, 관리형 스카를 다니고 싶었는데, 집과 거리가 너무 멀어서 포기했던 학생분들께 추천드립니다!"
            ],
            프로그램명: "메드스카이 맞춤형 과목 관리 프로그램",
            url: "https://medsky.co.kr/winterCoaching"
          }
        }
      }
      
};

