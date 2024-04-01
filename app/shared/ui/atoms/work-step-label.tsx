type WorkStepType =
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
      en: 'bisqueFire';
    }
  | {
      ko: '시유';
      en: 'glaze';
    }
  | {
      ko: '재벌';
      en: 'glazeFire';
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
    en: 'bisqueFire',
  },
  {
    ko: '시유',
    en: 'glaze',
  },
  {
    ko: '재벌',
    en: 'glazeFire',
  },
];

export type WorkStepObj = {
  work_step: Pick<WorkStepType, 'ko'>;
  className: string;
};
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
