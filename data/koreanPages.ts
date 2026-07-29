export type KoreanPageKey =
  | "home"
  | "ecm"
  | "solutions"
  | "industrialWastewater"
  | "waterReuse"
  | "poolSpa"
  | "pilots";

export type KoreanPageData = {
  key: KoreanPageKey;
  path: string;
  englishPath: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: {
    title: string;
    body: string;
    href?: string;
    linkLabel?: string;
  }[];
};

export const koreanPages: Record<KoreanPageKey, KoreanPageData> = {
  home: {
    key: "home",
    path: "/ko/",
    englishPath: "/",
    title: "AWT ECM 기반 수처리 및 물재이용 기술",
    description:
      "AWT는 전기응집과 세라믹 멤브레인을 결합한 ECM 기반 수처리 기술로 산업용수, 공업용수, 산업폐수, 물재이용, 담수화 전처리, 수영장 및 스파 물정화 분야를 지원합니다.",
    eyebrow: "AWT Korean Overview",
    h1: "AWT ECM 기반 첨단 수처리 및 물재이용 기술",
    intro:
      "AWT(Advanced Water Technology)는 전기응집과 세라믹 멤브레인을 결합한 ECM 기반 수처리 기술을 개발합니다. 상수처리, 산업용수와 공업용수, 산업폐수, 물재이용, 냉각수 재이용, 담수화 전처리, 수영장 및 스파 물정화 분야에 적용 가능한 수처리 시스템을 제공합니다.",
    sections: [
      {
        title: "ECM 수처리 기술이란?",
        body:
          "ECM은 Electrocoagulation + Ceramic Membrane Filtration의 약자로, 전기응집을 통해 오염물질을 응집시키고 세라믹 멤브레인으로 분리하는 수처리 플랫폼입니다.",
        href: "/ko/ecm-technology/",
        linkLabel: "ECM 수처리 기술 보기"
      },
      {
        title: "산업용수·공업용수·상업용수 처리",
        body:
          "상업·산업시설에서 사용하는 공정용수, 냉각수, 세척수 및 재이용수는 원수 조건과 사용 목적에 따라 공정 검토가 필요합니다.",
        href: "/ko/solutions/industrial-wastewater/",
        linkLabel: "산업용수와 산업폐수 적용 보기"
      },
      {
        title: "물재이용과 냉각수 재이용",
        body:
          "AWT는 처리수 또는 산업폐수를 ECM 전처리와 세라믹 멤브레인 여과로 정리한 뒤, 필요 시 RO 공정과 연결해 공정용수·공업용수·냉각수 재이용을 검토합니다.",
        href: "/ko/solutions/water-reuse/",
        linkLabel: "물재이용 기술 보기"
      },
      {
        title: "Elysian 수영장·스파 물정화",
        body:
          "Elysian Pool & Spa는 개인 수영장, 실내 수영장, 웰니스 풀, 스파 물정화에 적용을 검토할 수 있는 AOP, 전기응집, 세라믹 멤브레인 기반 폐쇄형 순환 처리 개념입니다.",
        href: "/ko/solutions/pool-spa/",
        linkLabel: "수영장 물정화 적용 보기"
      }
    ]
  },
  ecm: {
    key: "ecm",
    path: "/ko/ecm-technology/",
    englishPath: "/ecm-technology/",
    title: "ECM 수처리 기술 | AWT",
    description:
      "AWT ECM 수처리 기술은 전기응집과 세라믹 멤브레인 여과를 결합해 물정화, 산업폐수, 물재이용, RO 전처리 적용을 검토합니다.",
    eyebrow: "ECM Technology",
    h1: "ECM 수처리 기술",
    intro:
      "AWT의 ECM은 전기응집과 세라믹 멤브레인 여과를 결합한 수처리 기술입니다. 오염물질을 응집한 뒤 내구성이 높은 세라믹 멤브레인으로 분리하여 물정화, 산업폐수, 물재이용, RO 전처리 공정에 적용 가능성을 검토합니다.",
    sections: [
      {
        title: "전기응집",
        body:
          "전기응집은 저전압 전기 반응을 이용해 부유물질, 인 관련 오염물질, 일부 유기성 오염물질을 응집시켜 후단 분리를 쉽게 만드는 공정입니다."
      },
      {
        title: "세라믹 멤브레인 여과",
        body:
          "세라믹 멤브레인은 물리적 여과 장벽으로 작동하며, 고부하 수질 조건에서 안정적인 여과와 역세척 운전을 목표로 합니다."
      },
      {
        title: "RO 전처리와 물재이용",
        body:
          "ECM은 수질 조건에 따라 RO 전처리로 검토될 수 있으며, 막오염 부담 저감과 재이용수 생산 안정화에 기여할 수 있습니다.",
        href: "/ko/solutions/water-reuse/",
        linkLabel: "물재이용과 RO 전처리 보기"
      }
    ]
  },
  solutions: {
    key: "solutions",
    path: "/ko/solutions/",
    englishPath: "/solutions/",
    title: "AWT 수처리 솔루션 | ECM 기술",
    description:
      "AWT는 상수처리, 하수처리, 산업폐수, 산업용수 재이용, 담수화 전처리, 수영장 및 스파 물정화 분야의 ECM 수처리 솔루션을 제공합니다.",
    eyebrow: "Solutions",
    h1: "AWT 수처리 솔루션",
    intro:
      "AWT는 ECM 기술을 기반으로 상수처리, 하수처리, 산업폐수, 산업용수와 공업용수 재이용, 담수화 전처리, Elysian Pool & Spa 물정화 분야를 용도별로 구분해 제안합니다.",
    sections: [
      {
        title: "상수·정수 처리",
        body: "수돗물 정화, 지표수 처리, 음용수 처리, 소규모 정수시설 및 이동식 정수시설 적용을 검토합니다."
      },
      {
        title: "산업폐수와 공정용수",
        body:
          "공장폐수, 제조업 폐수, 냉각수, 보일러 용수, 공정용수 등 상업·산업시설 수처리 요구에 맞춰 ECM 적용성을 검토합니다.",
        href: "/ko/solutions/industrial-wastewater/",
        linkLabel: "산업폐수 솔루션 보기"
      },
      {
        title: "물재이용",
        body: "처리수와 산업폐수를 재이용수로 전환하기 위해 ECM 전처리, 세라믹 멤브레인 여과, 필요 시 RO 공정 연결을 검토합니다.",
        href: "/ko/solutions/water-reuse/",
        linkLabel: "물재이용 솔루션 보기"
      }
    ]
  },
  industrialWastewater: {
    key: "industrialWastewater",
    path: "/ko/solutions/industrial-wastewater/",
    englishPath: "/solutions/industrial-wastewater/",
    title: "산업폐수 및 산업용수 처리 | AWT ECM",
    description:
      "AWT는 산업폐수, 공정용수, 공업용수, 냉각수, 상업용수 처리와 재이용을 위해 ECM 기반 전기응집 및 세라믹 멤브레인 적용을 검토합니다.",
    eyebrow: "Industrial Water",
    h1: "산업폐수 및 산업용수 처리",
    intro:
      "산업용수와 공업용수는 제조 공정, 세척, 냉각, 보일러, 공정수 등 다양한 용도로 사용됩니다. AWT는 산업폐수와 공정용수의 수질 조건을 검토한 뒤 ECM 기반 전기응집과 세라믹 멤브레인 여과 적용을 제안합니다.",
    sections: [
      {
        title: "상업·산업시설 용수",
        body:
          "상업용수는 독립된 단일 기술 분류라기보다 상업·산업시설에서 사용하는 공정용수, 냉각수, 세척수 및 재이용수의 문맥에서 검토합니다."
      },
      {
        title: "산업폐수 재이용",
        body:
          "산업폐수는 유입 수질과 방류·재이용 목표에 따라 전처리, 막여과, RO 연결 여부가 달라집니다. AWT는 파일럿 테스트를 통해 적용 가능성을 검토합니다.",
        href: "/ko/pilots/",
        linkLabel: "실증 및 파일럿 데이터 보기"
      }
    ]
  },
  waterReuse: {
    key: "waterReuse",
    path: "/ko/solutions/water-reuse/",
    englishPath: "/solutions/water-reuse/",
    title: "산업용수 물재이용 및 RO 전처리 | AWT ECM",
    description:
      "AWT ECM은 산업용수 재이용, 공업용수 재이용, 냉각수 재이용, RO 전처리, 인 및 부유물질 저감 적용을 검토합니다.",
    eyebrow: "Water Reuse",
    h1: "산업용수 물재이용 및 RO 전처리",
    intro:
      "물재이용은 처리수 또는 산업폐수를 다시 공정용수, 공업용수, 냉각수 등으로 활용하기 위한 과정입니다. AWT는 ECM 전처리, 세라믹 멤브레인 여과, 필요 시 RO 공정을 연결해 재이용수 생산 가능성을 검토합니다.",
    sections: [
      {
        title: "ECM 전처리 역할",
        body:
          "전기응집은 인, 부유물질, 탁도, 일부 유기성 오염물질을 응집시켜 후단 막여과와 RO 공정의 부담을 줄이는 방향으로 검토됩니다."
      },
      {
        title: "냉각수와 공정수 재이용",
        body:
          "냉각수 재이용과 공정수 재이용은 농축, 스케일, 부식, 유기물 조건을 함께 검토해야 하며, 파일럿 테스트로 운전 안정성을 확인하는 것이 중요합니다."
      }
    ]
  },
  poolSpa: {
    key: "poolSpa",
    path: "/ko/solutions/pool-spa/",
    englishPath: "/solutions/pool-spa/",
    title: "Elysian 수영장 및 스파 물정화 | AWT",
    description:
      "Elysian Pool & Spa는 개인 수영장, 실내 수영장, 웰니스 풀, 스파 물정화에 AOP, 전기응집, 세라믹 멤브레인 여과 적용을 검토합니다.",
    eyebrow: "Elysian Pool & Spa",
    h1: "Elysian 수영장 및 스파 물정화",
    intro:
      "Elysian Pool & Spa는 개인 수영장, 실내 수영장, 웰니스 풀, 스파 물정화에 적용을 검토할 수 있는 폐쇄형 순환 처리 개념입니다. AOP, 전기응집, 세라믹 멤브레인 여과를 결합하며, 실제 적용 전에는 현장 수질과 지역 규정을 확인해야 합니다.",
    sections: [
      {
        title: "개인 수영장 적용",
        body:
          "개인 수영장은 공공·상업용 수영장과 다른 규정이 적용될 수 있으므로, 소유 구조와 지역 보건 규정을 함께 검토해야 합니다."
      },
      {
        title: "실내 수영장과 스파",
        body:
          "실내 수영장과 스파는 수온, 유기물 부하, 순환량, 환기 조건이 중요합니다. Elysian 적용은 현장 수질시험과 운전 조건을 바탕으로 검토합니다."
      }
    ]
  },
  pilots: {
    key: "pilots",
    path: "/ko/pilots/",
    englishPath: "/pilots/",
    title: "AWT ECM 수처리 실증 및 적용 기록",
    description:
      "AWT의 하수처리, 병원폐수, 인 제거, 지표수 정화, 산업폐수 처리 관련 ECM 파일럿 및 적용 데이터를 확인합니다.",
    eyebrow: "Pilots & Applications",
    h1: "AWT ECM 수처리 실증 및 적용 기록",
    intro:
      "AWT의 파일럿 및 적용 기록은 수질 조건, 처리용량, 실증기간, 측정 단위와 함께 검토해야 합니다. 표의 수치는 특정 조건의 결과이며, 모든 현장 성능을 일반화하지 않습니다.",
    sections: [
      {
        title: "실증 데이터 해석",
        body:
          "각 실증 결과는 원수 조건, 유입 부하, 계절 변화, 처리용량, 측정 방법에 따라 의미가 달라집니다. AWT는 프로젝트별 파일럿 테스트를 통해 적용 가능성을 검토합니다."
      },
      {
        title: "관련 솔루션 연결",
        body:
          "하수처리, 산업폐수, 물재이용, 인 제거, 지표수 정화는 각각 다른 운전 조건을 가지므로 관련 솔루션 페이지와 함께 확인하는 것이 좋습니다.",
        href: "/ko/solutions/",
        linkLabel: "수처리 솔루션 보기"
      }
    ]
  }
};

export function getKoreanPage(key: KoreanPageKey) {
  return koreanPages[key];
}
