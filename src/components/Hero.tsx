import React from "react";

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] flex-col justify-center px-4 pt-20 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                    <span className="relative inline-block">
                        <span className="relative z-10">대표가 관여하지 않는 마케팅은</span>
                        <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-yellow-100/80 sm:h-4"></span>
                    </span>
                    <br />
                    <span className="mt-2 block text-slate-800">대부분 겉돌 수밖에 없습니다.</span>
                </h1>

                <div className="mt-12 space-y-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
                    <p>
                        <strong className="font-serif text-slate-900">셀프 마케팅 클럽</strong>은
                        제품은 잘 만들지만<br className="hidden sm:block" />
                        어떻게 팔리고 성장하는지는 모르는<br className="hidden sm:block" />
                        <span className="font-semibold text-indigo-700">스몰 브랜드 대표</span>들이
                    </p>
                    <p>
                        자기 브랜드만의 차별점과 철학을 바탕으로<br />
                        직접 마케팅을 설계하고 실행해보는 <br className="sm:hidden" /><strong>실험형 클럽</strong>입니다.
                    </p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center shadow-sm">
                        <p className="text-slate-600 mb-2">이곳은</p>
                        <p className="font-medium text-slate-900">
                            마케팅을 대신 해주는 곳도 아니고<br />
                            정답을 알려주는 강의도 아닙니다.
                        </p>
                    </div>

                    <div className="text-2xl hidden sm:block text-slate-300">→</div>

                    <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6 text-center shadow-sm">
                        <p className="text-indigo-600 mb-2">오직 대표로서</p>
                        <p className="font-bold text-indigo-900">
                            "우리 브랜드 마케팅이 어떻게 돌아가는지"<br />
                            직접 이해하고 경험해보는 자리입니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
