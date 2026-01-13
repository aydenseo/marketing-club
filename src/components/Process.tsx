import React from "react";

const steps = [
    {
        step: "01",
        title: "기반 정렬 파트",
        subtitle: "사업을 ‘운영 관점’에서 다시 이해합니다",
        items: [
            "감이 아니라 데이터와 구조로 사업을 보는 법",
            "AARRR 등 필수 지표와 사고방식",
            "무엇을 보고 판단해야 하는지 기준 정렬"
        ],
        goal: "마케팅이 뭔지 모르겠다 → 어디를 봐야 하는지는 알겠다"
    },
    {
        step: "02",
        title: "수단 인식 파트",
        subtitle: "요즘 시대의 마케팅 방법들을 이해합니다",
        items: [
            "콘텐츠, 인플루언서 등 다양한 마케팅 방식 이해",
            "각각이 언제 효과가 나고, 언제 안 나는지",
            "남들이 한다가 아니라 '우리에게 맞는 수단' 이해"
        ],
        goal: "유행을 쫓지 않고, 선택할 수 있는 눈 만들기"
    },
    {
        step: "03",
        title: "핵심 파트",
        subtitle: "우리 브랜드에 맞는 전략을 스스로 설계합니다",
        items: [
            "시장, 고객, 브랜드를 객관적으로 다시 보기",
            "경쟁사 분석과 벤치마킹",
            "차별점과 철학을 기준으로 전략 역설계"
        ],
        goal: "이건 우리 브랜드가 할 마케팅이다를 스스로 말할 수 있게",
        highlight: true
    },
    {
        step: "04",
        title: "실험 파트",
        subtitle: "실제로 작게 실행하고, 피드백합니다",
        items: [
            "과하지 않은 수준의 마케팅 실험",
            "잘된 것 / 안 된 것 / 다음에 바꿀 것 정리",
            "완성이 아니라 다음 실험으로 이어지는 구조"
        ],
        goal: "머리로 아는 마케팅이 아니라, 직접 해본 경험 만들기"
    }
];

export function Process() {
    return (
        <section id="process" className="px-4 py-24 sm:px-6 lg:px-8 bg-white">
            <div className="mx-auto max-w-4xl">
                <div className="mb-16 text-center">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">Curriculum</span>
                    <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                        셀프 마케팅 클럽 진행 구조
                    </h2>
                    <p className="mt-4 text-slate-600">
                        정답을 배우는 곳이 아니라, 대표가 직접 구조를 이해하고 실험합니다.
                    </p>
                </div>

                <div className="relative border-l-2 border-slate-100 pl-8 ml-4 sm:ml-8 space-y-16">
                    {steps.map((item, idx) => (
                        <div key={idx} className="relative">
                            <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 ring-4 ring-white"></span>

                            <div className={`relative rounded-2xl border p-6 sm:p-8 transition-all hover:shadow-md ${item.highlight ? 'bg-indigo-50 border-indigo-100 ring-1 ring-indigo-200' : 'bg-white border-slate-200'}`}>
                                <div className="mb-4 flex items-center gap-3">
                                    <span className={`text-sm font-bold tracking-widest ${item.highlight ? 'text-indigo-600' : 'text-slate-400'}`}>STEP {item.step}</span>
                                    {item.highlight && <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white">CORE</span>}
                                </div>

                                <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">{item.title}</h3>
                                <p className="mb-6 text-lg font-medium text-slate-700">{item.subtitle}</p>

                                <ul className="mb-6 space-y-2 text-slate-600">
                                    {item.items.map((subItem, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"></span>
                                            <span>{subItem}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className={`flex items-start gap-2 rounded-lg p-4 text-sm font-medium ${item.highlight ? 'bg-white text-indigo-800' : 'bg-slate-50 text-slate-700'}`}>
                                    <span className="shrink-0 text-lg">👉</span>
                                    <span><strong>목적:</strong> {item.goal}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
