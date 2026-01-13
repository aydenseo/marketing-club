import React from "react";
import Link from "next/link";

export function CTA() {
    return (
        <section id="join" className="px-4 py-24 sm:px-6 lg:px-8 bg-white text-center">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-6 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                    지금 바로 시작해보세요
                </h2>
                <p className="mb-12 text-lg text-slate-600">
                    지금은 완성된 프로그램이 아니라<br />
                    같이 실험해볼 대표님을 모집하는 단계입니다.
                </p>

                <div className="mb-12 rounded-2xl bg-slate-50 p-8 border border-slate-200 inline-block w-full max-w-md">
                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Early Bird</p>
                    <div className="mt-4 flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold text-slate-900">50만원</span>
                        <span className="text-slate-500 line-through">정가 미정</span>
                    </div>

                    <ul className="mt-6 space-y-3 text-left text-sm text-slate-600">
                        <li className="flex gap-2">
                            <span className="text-indigo-600">✓</span>
                            소수 정예 실험형 클럽 참여권
                        </li>
                        <li className="flex gap-2">
                            <span className="text-indigo-600">✓</span>
                            4주간의 밀착 피드백 및 코칭
                        </li>
                        <li className="flex gap-2">
                            <span className="text-indigo-600">✓</span>
                            실험 단계 특가 (향후 가격 인상 예정)
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="#"
                        className="w-full sm:w-auto rounded-full bg-slate-100 px-8 py-4 text-base font-bold text-slate-900 transition-all hover:bg-slate-200"
                    >
                        무료 웨비나 신청하기 {'>'}
                    </Link>
                    <Link
                        href="#"
                        className="w-full sm:w-auto rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5"
                    >
                        클럽 참여 신청하기 {'>'}
                    </Link>
                </div>

                <p className="mt-8 text-sm text-slate-400">
                    * 본 클럽은 소수 인원으로 진행되며 조기 마감될 수 있습니다.
                </p>
            </div>
        </section>
    );
}
