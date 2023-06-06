export interface SUB extends POS {
}

export interface POS {
  [kye: string]: string
}

export interface STRUCTURE {
  UF_SUBDIVISION_ID: number;
  UF_DEPARTMENT_ID: number;
  UF_POSITION_ID: number;
}

export interface Settings {
  settings: SettingsValue
}

export interface SettingsValue {
  [kye: string]: { UF_LNPA_ID: { value: [number | string] } }
}


export interface Structure {
  SUB: SUB,
  POS: POS,
  STRUCTURE: STRUCTURE[],
}

export interface Result {
  structure: Structure,
  settings: Settings,
}

export interface ResponseEco {
  result: Result,
}

export interface ResultData {
  labelSubdivision: string;
  ufSubdivisionId: number;
  ufPositionId: { settings: [(string | number)]; labelPosition: string; parentUfSubdivisionId: number }[]
}



