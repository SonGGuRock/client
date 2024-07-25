export type WorkStepType =
  | {
      ko: '성형';
      en: 'shape';
    }
  | {
      ko: '건조';
      en: 'dry';
    }
  | {
      ko: '정형';
      en: 'trim';
    }
  | {
      ko: '초벌';
      en: 'bisque_fire';
    }
  | {
      ko: '시유';
      en: 'glaze';
    }
  | {
      ko: '재벌';
      en: 'glaze_fire';
    }
  | {
      ko: '삼벌';
      en: 'triple_fire';
    }
  | {
      ko: '채색';
      en: 'color';
    };

export const WORK_STEP: WorkStepType[] = [
  {
    ko: '성형',
    en: 'shape',
  },
  {
    ko: '건조',
    en: 'dry',
  },
  {
    ko: '정형',
    en: 'trim',
  },
  {
    ko: '초벌',
    en: 'bisque_fire',
  },
  {
    ko: '시유',
    en: 'glaze',
  },
  {
    ko: '재벌',
    en: 'glaze_fire',
  },
  {
    ko: '삼벌',
    en: 'triple_fire',
  },
  {
    ko: '채색',
    en: 'color',
  },
];

export interface WorkStepLabelProps {
  work_step: WorkStepType['ko'];
  className: string;
}
export default function WorkStepLabel() {
  //   const found = STATUS.find((el) => el.ko === props.status.ko);

  return (
    <span>
      <span className={`bg-refire-icon`}>재벌</span>
    </span>
    // <span className={`${props.className}`}>
    //   <span className={`bg-${found?.en}-icon`}></span>
    //   {found?.ko}
    // </span>
  );
}
