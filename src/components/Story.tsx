import React from "react";

export function Story() {
    return (
        <section className="px-6 py-28 sm:px-8 lg:px-12 bg-slate-50">
            <div className="mx-auto max-w-3xl space-y-24">
                {/* Reason Section */}
                <div className="space-y-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900">
                        이 클럽을 만든 이유
                    </h2>
                    <div className="space-y-10 text-lg leading-loose text-slate-700">
                        <p>
                            많은 대표님들을 만나보면 한 가지 공통 된 문제가 있었습니다.<br />
                            마케팅을 잘 모르고 어려워하기 때문에, <strong className="text-slate-900">비효율적으로 광고비를 쓰고 있다는 점</strong>입니다.
                        </p>
                        <p>
                            마케팅 구조를 이해하지 못한 상태에서 대행에 맡기면, 결국 판단 기준은 사라지고 광고비만 늘어나는 선택으로 이어지기 쉽습니다.
                        </p>
                        <p>
                            이 클럽은 대표가 마케팅을 몰라서 생기는 <strong className="text-slate-900">불필요한 지출과 시행착오를 줄이기 위해</strong> 만들었습니다.
                        </p>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100 text-center">
                        <p className="font-medium text-slate-900">
                            "대표님들의 시간과 자본을<br className="sm:hidden" /> 조금이라도 아끼기 위해 만들어졌습니다."
                        </p>
                    </div>
                </div>

                {/* Operator Section */}
                <div className="space-y-8">
                    <h2 className="font-serif text-3xl font-bold text-slate-900">
                        이 클럽의 운영자
                    </h2>

                    <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">안티그래비티</h3>
                                <p className="text-sm text-slate-500">Brand & Marketing Director</p>
                            </div>

                            <div className="space-y-6 text-base text-slate-700 leading-loose">
                                <p>
                                    패션 잡화 브랜드 <strong>Heimdallr</strong>을 창업해 10년째 직접 운영하고 있으며, 브랜드·마케팅 스튜디오 <strong>구체화</strong>를 통해 다양한 스몰 브랜드의 마케팅 전략 수립 및 대행을 진행해왔습니다.
                                </p>
                                <p>
                                    그 과정에서 누적 수십억 원 규모의 마케팅 비용을 직접 집행했고, 스몰 브랜드를 중심으로 한 브랜드 성장 전략을 다수 설계해왔습니다.
                                </p>
                                <p>
                                    또한 네이버 스스로스쿨, 하나소셜유니버시티, 인천여성새일센터, 소셜캠퍼스온 등 여러 기업·공공기관에서 마케팅 및 브랜드 성장 전략 교육을 진행해왔습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
