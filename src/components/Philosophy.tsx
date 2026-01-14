import React from "react";

export function Philosophy() {
    return (
        <section id="philosophy" className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12 bg-slate-50">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-10 text-center font-serif text-2xl font-bold text-slate-900 sm:text-4xl break-keep leading-snug">
                    왜 작은 브랜드일수록<br />
                    마케팅은 <span className="relative inline-block z-10">대표의 영역<span className="absolute bottom-1 left-0 -z-10 h-2 w-full bg-yellow-200/50 sm:h-3"></span></span>일까요?
                </h2>

                <div className="space-y-12 text-lg leading-loose text-slate-700">
                    <div>
                        <p className="font-bold text-slate-900 mb-4 text-xl">
                            작은 브랜드에는<br /> '대신 이해해줄 사람'이 없기 때문입니다.
                        </p>
                        <p className="leading-loose">
                            이 브랜드를 왜 시작했고,<br />
                            왜 이 제품이어야 하고,<br />
                            고객은 어떤 포인트에 반응하는지<br />
                            <span className="text-slate-500 text-base">제대로 아는 사람이 부족하기 때문입니다.</span>
                        </p>
                        <p className="mt-4 font-semibold text-indigo-700">
                            그리고 그걸 가장 잘 아는 사람은<br />
                            대표님 본인입니다.
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-4 text-lg">
                            대표가 마케팅을 전부 직접 하라는 뜻은 아닙니다.
                        </h3>
                        <p className="mb-6 text-base text-slate-600">
                            대신 다음 3가지는 직접 하셔야 합니다.
                        </p>

                        <ul className="space-y-6 text-base font-medium text-slate-800 text-left inline-block">
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">1</span>
                                <span>지금 우리 브랜드 마케팅이 어떻게 돌아가는지</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">2</span>
                                <span>어떤 선택을 왜 하고 있는지</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">3</span>
                                <span>앞으로 무엇을 바꿔야 하는지</span>
                            </li>
                        </ul>

                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <p className="font-bold text-indigo-900 leading-snug">
                                대표가 이해하고, 스스로 판단할 수 있는 상태를<br className="sm:hidden" /> 만드는 것을 목표로 합니다.
                            </p>
                            <p className="mt-2 text-sm text-slate-500">
                                그래야 대행을 맡기든, 직원과 함께 하든,<br /> 마케팅이 더 이상 답답하지 않기 때문입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
