import React from "react";

const steps = [
    {
        step: "01",
        title: "브랜드를 데이터로 진단합니다",
        subtitle: "“마케팅이 안 된다”는 말을 지표 단위로 쪼개봅니다.",
        items: [
            "우리 브랜드의 고객 흐름을 AARRR 기준으로 직접 분류",
            "유입 / 전환 / 재구매 중 어디에서 새고 있는지 확인",
            "매출과 연결되는 핵심 지표(구매율, 객단가 등) 정리",
            "지금 가장 먼저 손대야 할 한 지점 결정"
        ],
        change_bad: "“마케팅이 전반적으로 문제인 것 같다”",
        change_good: "“지금은 유입이 아니라 전환 문제다”",
        description: "감이 아니라, 어디가 문제인지 말로 설명할 수 있는 상태가 됩니다."
    },
    {
        step: "02",
        title: "마케팅 방법을 성과 조건으로 분해합니다",
        subtitle: "콘텐츠, 인플루언서, 퍼포먼스 마케팅을 성과 기준으로 이해합니다.",
        items: [
            "콘텐츠 마케팅: 어떤 고객층이, 어떤 단계에서 반응하는지",
            "인플루언서 마케팅: 언제 전환으로 이어지고, 실제 성과는 어떤지",
            "퍼포먼스 광고: 광고비 대비 효율이 나는 구조인지",
            "모든 수단을 지표와 실제 사례 기준으로 분석"
        ],
        change_bad: "“남들이 하니까 우리도 해야 하나?”",
        change_good: "“이건 지금 우리 단계에서 효율이 안 난다”",
        description: "불안해서 따라가는 게 아니라, '안 해도 되는 것'을 안 한다고 말할 수 있게 됩니다."
    },
    {
        step: "03",
        title: "마케팅 전략을 수치로 설계합니다",
        subtitle: "‘감각적인 전략’이 아닌, 숫자로 증명되는 전략을 세웁니다.",
        items: [
            "우리 브랜드 차별점을 고객 반응 지표와 연결",
            "경쟁 브랜드 마케팅을 숫자로 분해해 벤치마킹",
            "그래서 우리 브랜드가 집중해야 할 마케팅 하나를 결정",
            "(예: 유입 늘리기 vs 전환 높이기 vs 재구매 만들기)"
        ],
        change_bad: "“뭘 좀 더 해봐야 할 것 같은데…”",
        change_good: "“우리는 지금 재구매율을 올리는 마케팅을 해야 합니다.”",
        description: "전략이 ‘느낌’이 아니라 ‘설명 가능한 판단’으로 바뀝니다."
    },
    {
        step: "04",
        title: "전략 → 실행 → 판단의 사이클을 수행합니다",
        subtitle: "계획만 세우고 끝내지 않습니다. 직접 실행하고 검증합니다.",
        items: [
            "리스크가 가장 적은 전략을 하나 정해 실행",
            "직접 실행해보고 지표가 어떻게 변했는지 확인",
            "결과를 바탕으로 다음에 바꿀 포인트 정리"
        ],
        change_bad: "“마케팅이 잘 되는지 모르겠다”",
        change_good: "“이 전략은 유입은 많은데 전환률이 낮다”",
        description: "마케팅을 잘 된다 / 안 된다가 아니라 '숫자'로 판단할 수 있게 됩니다."
    }
];

export function Process() {
    return (
        <section id="process" className="px-6 py-24 sm:px-8 lg:px-12 bg-white">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">Curriculum</span>
                    <h2 className="mt-4 font-serif text-2xl font-bold text-slate-900 sm:text-4xl break-keep">
                        셀프 마케팅 클럽 진행 구조
                    </h2>
                </div>

                <div className="space-y-20 sm:space-y-24">
                    {steps.map((item, idx) => (
                        <div key={idx} className="relative scroll-mt-20">
                            {/* Step Header */}
                            <div className="mb-4 flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                                    {item.step}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 break-keep sm:text-2xl">{item.title}</h3>
                            </div>

                            {/* Content Box */}
                            <div className="ml-4 border-l-2 border-slate-100 pl-6 pb-4 sm:ml-4">
                                <p className="mb-8 text-lg font-medium text-slate-700 break-keep leading-loose">
                                    {item.subtitle}
                                </p>

                                <ul className="mb-8 space-y-3 text-slate-600">
                                    {item.items.map((subItem, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"></span>
                                            <span className="break-keep">{subItem}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Change Box */}
                                <div className="rounded-xl bg-slate-50 p-5 border border-slate-200">
                                    <p className="mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">이 단계 이후, 대표님의 변화</p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex gap-2 text-sm sm:text-base">
                                            <span className="shrink-0">❌</span>
                                            <span className="text-slate-500 line-through decoration-slate-400">{item.change_bad}</span>
                                        </div>
                                        <div className="flex gap-2 text-sm sm:text-base font-medium">
                                            <span className="shrink-0">⭕</span>
                                            <span className="text-indigo-900 bg-indigo-50/50">{item.change_good}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 border-t border-slate-200 pt-3 mt-3">
                                        👉 {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 sm:mt-24 p-6 sm:p-10 bg-indigo-900 rounded-2xl text-white text-center">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold mb-4">이 진행 구조의 핵심</h3>
                    <p className="opacity-90 leading-relaxed mb-6 break-keep">
                        이 클럽은 마케팅 기법을 배우는 게 아니라,<br className="hidden sm:block" />
                        대표가 문제를 정의하고, 판단하고, 결정하는<br className="hidden sm:block" />
                        <span className="font-bold underline decoration-indigo-400 underline-offset-4">‘의사결정의 기준’을 바꾸는 과정</span>입니다.
                    </p>
                    <p className="text-sm sm:text-base opacity-75 font-light">
                        그래야 마케팅이 더 이상 감정 노동이 아니라<br />
                        통제 가능한 경영의 영역이 되기 때문입니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
