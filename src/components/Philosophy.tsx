import React from "react";

export function Philosophy() {
    return (
        <section id="philosophy" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-50">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-12 text-center font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                    왜 작은 브랜드일수록<br />
                    <span className="relative z-10 inline-block">
                        대표가 직접 관여해야 할까요?
                        <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-yellow-200/50"></span>
                    </span>
                </h2>

                <div className="space-y-8 text-lg leading-loose text-slate-700">
                    <p>
                        작은 브랜드의 마케팅은 예산도 부족하고 레퍼런스도 적고 브랜드 파워도 약합니다.
                    </p>

                    <div className="border-l-4 border-slate-300 pl-6 italic text-slate-600">
                        "이 상황에서 겉으로 보이는 기술이나 광고 기법보다 중요한 건..."
                    </div>

                    <ul className="space-y-4 font-medium text-slate-900">
                        <li className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">1</span>
                            <span>왜 이 브랜드를 시작했는지</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">2</span>
                            <span>왜 이 제품이어야 하는지</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">3</span>
                            <span>고객이 실제로 반응하는 미세한 포인트</span>
                        </li>
                    </ul>

                    <p className="pt-4">
                        이것을 가장 잘 아는 사람은 결국 <strong className="text-indigo-700 underline decoration-indigo-200 decoration-4 underline-offset-4">대부분 대표 본인</strong>입니다.
                    </p>

                    <div className="mt-8 rounded-xl bg-white p-8 shadow-sm border border-slate-100 text-center">
                        <p className="mb-4 text-slate-600">그래서 이 클럽은 "다 직접 하세요"가 아니라,</p>
                        <h3 className="font-serif text-2xl font-bold text-slate-900">
                            👉 대표가 자기 브랜드의 마케팅 구조를<br />
                            <span className="text-indigo-600">'이해하고 스스로 판단할 수 있는 상태'</span>를<br />
                            만드는 것을 목표로 합니다.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
