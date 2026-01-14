import React from "react";

const targetYes = [
    {
        title: "자기 제품을 직접 만들고 운영하는 브랜드 대표",
        desc: "OEM/ODM, 자체 제작, 직접 기획 상품 등"
    },
    {
        title: "자사몰이나 스마트스토어 등 ‘자기 브랜드 채널’을 키우고 싶은 대표",
        desc: "단순 입점·유통이 아니라 브랜드 자산을 만들고 싶은 경우"
    },
    {
        title: "제품에는 자신 있지만, 사업을 감으로 운영하고 있다고 느끼는 대표",
        desc: "“이게 맞는 건지 모르겠다”는 혼란이 있는 상태"
    },
    {
        title: "매출은 어느 정도 나오기 시작했고, 이제 시스템을 잡고 싶은 대표",
        desc: "더 커지기 전에 구조를 이해하고 싶다는 욕구가 있는 경우"
    },
    {
        title: "마케팅 대행이나 직원에게 맡겨봤지만 답답했던 대표",
        desc: "성과보다도 “우리 브랜드 마케팅이 어떻게 돌아가는지 모르겠다”는 불안이 있는 경우"
    }
];

const targetNo = [
    {
        title: "자기 제품 없이 사입·구매대행 중심의 유통업자",
        desc: "브랜드 자체의 철학이나 차별점을 만들 의지가 없는 경우"
    },
    {
        title: "브랜드의 철학·차별점에 관심이 없는 대표",
        desc: "“그냥 잘 팔리면 된다”가 전부인 경우"
    },
    {
        title: "새로운 시도를 꺼리거나, 검증된 정답만 원하는 대표",
        desc: "실패 가능성을 감수하기 싫은 경우"
    },
    {
        title: "사업 전략과 성장 자체에 관심이 없는 대표",
        desc: "단기 매출만 보고 움직이는 경우"
    }
];

export function Target() {
    return (
        <section id="target" className="px-6 py-24 sm:px-8 lg:px-12 bg-slate-50">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-12 text-center font-serif text-2xl font-bold text-slate-900 sm:text-4xl">
                    어떤 분들에게 필요한가요?
                </h2>

                <div className="grid gap-12 md:grid-cols-2">
                    {/* Right Fit */}
                    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-indigo-100 ring-1 ring-indigo-50">
                        <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-lg">✅</span>
                            <h3 className="text-xl font-bold text-slate-900">이런 대표님께 맞습니다</h3>
                        </div>
                        <ul className="space-y-8">
                            {targetYes.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700">
                                    <span className="mt-1 shrink-0 text-green-600">✔</span>
                                    <div>
                                        <p className="font-bold text-slate-900 break-keep">{item.title}</p>
                                        <p className="mt-1 text-sm text-slate-500 break-keep">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Wrong Fit */}
                    <div className="rounded-2xl bg-slate-100 p-6 sm:p-8 shadow-inner border border-transparent">
                        <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-lg">❌</span>
                            <h3 className="text-xl font-bold text-slate-500">이런 분께는 맞지 않습니다</h3>
                        </div>
                        <ul className="space-y-8">
                            {targetNo.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-500">
                                    <span className="mt-1 shrink-0 text-slate-400">✖</span>
                                    <div>
                                        <p className="font-bold text-slate-500 break-keep">{item.title}</p>
                                        <p className="mt-1 text-sm text-slate-400 break-keep">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
