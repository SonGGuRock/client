type Status =
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
      en: 'carve';
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
      en: 'refire';
    };

export const STATUS: Status[] = [
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
    en: 'carve',
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
    en: 'refire',
  },
];

export type StatusObj = {
  status: Pick<Status, 'ko'>;
  className: string;
};
export default function Status() {
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
