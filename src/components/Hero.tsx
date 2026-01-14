import React from "react";

export function Hero() {
    return (
        <section className="relative flex flex-col justify-center px-6 pt-24 pb-20 sm:min-h-[80vh] sm:pt-32 sm:pb-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl break-keep">
                    <span className="relative inline-block">
                        <span className="relative z-10">대표가 관여하지 않는 마케팅은</span>
                        <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-yellow-100/80 sm:h-4"></span>
                    </span>
                    <br />
                    <span className="mt-2 block text-slate-800">밑 빠진 독에 물 붓기입니다.</span>
                </h1>

                <div className="mt-12 space-y-8 text-lg leading-loose text-slate-700 sm:mt-16 sm:text-xl break-keep">
                    <p>
                        <strong className="font-serif text-slate-900">셀프 마케팅 클럽</strong>은<br className="sm:hidden" />
                        제품은 잘 만들지만 마케팅은 어려운 대표님들이
                    </p>
                    <p>
                        자기 브랜드만의 <span className="font-semibold text-indigo-700">철학과 차별점</span>을 바탕으로<br />
                        직접 마케팅을 설계하고 실행해보는 클럽입니다.
                    </p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <div className="w-full sm:w-auto rounded-2xl bg-indigo-50 border border-indigo-100 p-6 text-center shadow-sm">
                        <p className="text-indigo-600 mb-2 text-sm font-medium">오직 대표로서</p>
                        <p className="font-bold text-indigo-900 text-lg sm:text-xl leading-snug">
                            "우리 브랜드 마케팅이 어떻게 돌아가는지"<br />
                            직접 이해하고 경험해보는 자리입니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
