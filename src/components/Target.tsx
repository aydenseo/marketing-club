import React from "react";

const targetYes = [
    "자기 제품을 직접 만들고 운영하는 브랜드 대표",
    "(OEM/ODM, 자체 제작, 직접 기획 상품 등)",
    "자사몰, 스마트스토어 등 '자기 브랜드 채널'을 키우고 싶으신 분",
    "제품에는 자신 있지만, 사업을 감으로 운영하고 있다고 느끼는 분",
    "매출은 나오지만, 더 커지기 전에 시스템을 잡고 싶은 분",
    "마케팅 대행이나 직원에게 맡겨봤지만 답답했던 분"
];

const targetNo = [
    "자기 제품 없이 사입·구매대행 중심의 유통업자",
    "브랜드 자체의 철학이나 차별점을 만들 의지가 없는 분",
    "\"그냥 잘 팔리면 된다\"가 전부인 분",
    "새로운 시도를 꺼리거나, 검증된 정답만 원하는 분",
    "단기 매출만 보고 움직이는 분"
];

export function Target() {
    return (
        <section id="target" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-50">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-16 text-center font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                    이런 분들을 위해 준비했습니다
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Right Fit */}
                    <div className="rounded-2xl bg-white p-8 shadow-sm border border-indigo-100 ring-1 ring-indigo-50">
                        <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-lg">✅</span>
                            <h3 className="text-xl font-bold text-slate-900">이런 대표님께 맞습니다</h3>
                        </div>
                        <ul className="space-y-4">
                            {targetYes.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700">
                                    <span className="mt-1 shrink-0 text-green-600">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 rounded-lg bg-indigo-50 p-4 text-center text-sm font-medium text-indigo-800">
                            "우리 브랜드 마케팅이 어떻게 돌아가는지 모르겠다"는<br />불안감을 없애드립니다.
                        </div>
                    </div>

                    {/* Wrong Fit */}
                    <div className="rounded-2xl bg-slate-100 p-8 shadow-inner border border-transparent">
                        <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-lg">❌</span>
                            <h3 className="text-xl font-bold text-slate-500">이런 분께는 맞지 않습니다</h3>
                        </div>
                        <ul className="space-y-4">
                            {targetNo.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-500">
                                    <span className="mt-1 shrink-0 text-slate-400">✖</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
