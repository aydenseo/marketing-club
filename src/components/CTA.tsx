import React from "react";
import Link from "next/link";

export function CTA() {
    return (
        <section id="join" className="px-6 py-24 sm:px-8 lg:px-12 bg-white text-center">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-4 font-serif text-2xl font-bold text-slate-900 sm:text-4xl">
                    지금 바로 시작해보세요
                </h2>
                <p className="mb-10 text-base text-slate-600 sm:text-lg break-keep">
                    지금은 완성된 프로그램이 아니라<br />
                    같이 실험해볼 대표님을 모집하는 단계입니다.
                </p>

                <div className="mb-10 rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-200 inline-block w-full max-w-md">
                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Club Membership</p>
                    <div className="mt-4 flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold text-slate-900">50만원</span>
                        <span className="text-slate-500 line-through">정가 미정</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">테스트 단계 가격</p>

                    <div className="mt-6 border-t border-slate-200 pt-6 text-left space-y-4">
                        <div className="flex gap-3">
                            <span className="text-indigo-600 shrink-0">✓</span>
                            <span className="text-slate-700 text-sm">소수 정예 실험형 클럽 참여권</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-indigo-600 shrink-0">✓</span>
                            <span className="text-slate-700 text-sm">향후 구조와 가격은 달라질 수 있습니다.</span>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="space-y-8">
                    {/* Webinar */}
                    <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-slate-900">무료 웨비나 안내 (사전 설명회)</h3>
                            <p className="text-sm text-slate-500 mt-1 break-keep">
                                클럽 참여 전, 1시간 무료 웨비나를 통해 이 구조가 본인에게 맞는지 먼저 확인하실 수 있습니다.
                            </p>
                        </div>
                        <Link
                            href="#"
                            className="block w-full rounded-xl bg-slate-100 py-4 text-base font-bold text-slate-900 transition-all hover:bg-slate-200"
                        >
                            무료 웨비나 신청하기 {'>'}
                        </Link>
                    </div>

                    {/* Club Join */}
                    <div>
                        <Link
                            href="#"
                            className="block w-full rounded-xl bg-indigo-600 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            클럽 참여 신청하기 {'>'}
                        </Link>
                        <p className="mt-4 text-sm text-slate-400">
                            * 본 클럽은 소수 인원으로 진행되며 조기 마감될 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
