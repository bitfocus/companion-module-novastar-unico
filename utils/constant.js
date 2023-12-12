// D Series Display Modes
export const Central_Control_Protocol_FTB = [
  {
    id: '0',
    label: 'No fade to black',
    cmd: Buffer.from([
      0x55, 0xaa, 0x00, 0xaf, 0xfe, 0x00, 0x04, 0x00, 0x00, 0x00, 0x01, 0x30, 0x00, 0x00, 0x00, 0x00, 0x8b, 0x00,
      0x00, 0x00, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0a, 0x13, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x5b, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x49, 0x64, 0x22, 0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22,
      0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22, 0x3a, 0x32, 0x2c, 0x22, 0x46, 0x54, 0x42,
      0x22, 0x3a, 0x7b, 0x22, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x22, 0x3a, 0x30, 0x2c, 0x22, 0x74, 0x69, 0x6d,
      0x65, 0x22, 0x3a, 0x30, 0x7d, 0x7d, 0x2c, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x49, 0x64, 0x22,
      0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22, 0x3a,
      0x34, 0x2c, 0x22, 0x46, 0x54, 0x42, 0x22, 0x3a, 0x7b, 0x22, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x22, 0x3a,
      0x30, 0x2c, 0x22, 0x74, 0x69, 0x6d, 0x65, 0x22, 0x3a, 0x30, 0x7d, 0x7d, 0x5d, 0x7a, 0x7d,
    ]),
  },
  {
    id: '1',
    label: 'Fade to black',
    cmd: Buffer.from([
      0x55, 0xaa, 0x00, 0x92, 0xfe, 0x00, 0x04, 0x00, 0x00, 0x00, 0x01, 0x30, 0x00, 0x00, 0x00, 0x00, 0x8b, 0x00,
      0x00, 0x00, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0a, 0x13, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x5b, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x49, 0x64, 0x22, 0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22,
      0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22, 0x3a, 0x32, 0x2c, 0x22, 0x46, 0x54, 0x42,
      0x22, 0x3a, 0x7b, 0x22, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x22, 0x3a, 0x31, 0x2c, 0x22, 0x74, 0x69, 0x6d,
      0x65, 0x22, 0x3a, 0x30, 0x7d, 0x7d, 0x2c, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x49, 0x64, 0x22,
      0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22, 0x3a,
      0x34, 0x2c, 0x22, 0x46, 0x54, 0x42, 0x22, 0x3a, 0x7b, 0x22, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x22, 0x3a,
      0x31, 0x2c, 0x22, 0x74, 0x69, 0x6d, 0x65, 0x22, 0x3a, 0x30, 0x7d, 0x7d, 0x5d, 0x5f, 0x7d,
    ]),
  },
]

export const Central_Control_Protocol_FREEZE = [
  {
    id: '0',
    label: 'Unfreeze',
    cmd: Buffer.from([
      0x55, 0xaa, 0x00, 0xe5, 0xfe, 0x00, 0x04, 0x00, 0x00, 0x00, 0x01, 0x30, 0x00, 0x00, 0x00, 0x00, 0x69, 0x00,
      0x00, 0x00, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x09, 0x13, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x5b, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x49, 0x64, 0x22, 0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22,
      0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22, 0x3a, 0x32, 0x2c, 0x22, 0x66, 0x72, 0x65,
      0x65, 0x7a, 0x65, 0x22, 0x3a, 0x30, 0x7d, 0x2c, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x49, 0x64,
      0x22, 0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22,
      0x3a, 0x34, 0x2c, 0x22, 0x66, 0x72, 0x65, 0x65, 0x7a, 0x65, 0x22, 0x3a, 0x30, 0x7d, 0x5d, 0xae, 0x73,
    ]),
  },
  {
    id: '1',
    label: 'Freeze',
    cmd: Buffer.from([
      0x55, 0xaa, 0x00, 0xca, 0xfe, 0x00, 0x04, 0x00, 0x00, 0x00, 0x01, 0x30, 0x00, 0x00, 0x00, 0x00, 0x69, 0x00,
      0x00, 0x00, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x09, 0x13, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x5b, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x49, 0x64, 0x22, 0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22,
      0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22, 0x3a, 0x32, 0x2c, 0x22, 0x66, 0x72, 0x65,
      0x65, 0x7a, 0x65, 0x22, 0x3a, 0x31, 0x7d, 0x2c, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x49, 0x64,
      0x22, 0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22,
      0x3a, 0x34, 0x2c, 0x22, 0x66, 0x72, 0x65, 0x65, 0x7a, 0x65, 0x22, 0x3a, 0x31, 0x7d, 0x5d, 0xf2, 0x73,
    ]),
  },
]

export const Central_Control_Protocol_TAKE = [
  0x55, 0xaa, 0x00, 0x6a, 0xfe, 0x00, 0x04, 0x00, 0x00, 0x00, 0x01, 0x30, 0x00, 0x00, 0x00, 0x00, 0xb5, 0x00,
  0x00, 0x00, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0e, 0x13, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x5b, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x49, 0x64, 0x22, 0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22,
  0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22, 0x3a, 0x32, 0x2c, 0x22, 0x73, 0x77, 0x69,
  0x74, 0x63, 0x68, 0x45, 0x66, 0x66, 0x65, 0x63, 0x74, 0x22, 0x3a, 0x7b, 0x22, 0x74, 0x69, 0x6d, 0x65, 0x22,
  0x3a, 0x31, 0x2c, 0x22, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x3a, 0x30, 0x2c, 0x22,
  0x74, 0x79, 0x70, 0x65, 0x22, 0x3a, 0x31, 0x7d, 0x7d, 0x2c, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e,
  0x49, 0x64, 0x22, 0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70,
  0x65, 0x22, 0x3a, 0x34, 0x2c, 0x22, 0x73, 0x77, 0x69, 0x74, 0x63, 0x68, 0x45, 0x66, 0x66, 0x65, 0x63, 0x74,
  0x22, 0x3a, 0x7b, 0x22, 0x74, 0x69, 0x6d, 0x65, 0x22, 0x3a, 0x31, 0x2c, 0x22, 0x64, 0x69, 0x72, 0x65, 0x63,
  0x74, 0x69, 0x6f, 0x6e, 0x22, 0x3a, 0x30, 0x2c, 0x22, 0x74, 0x79, 0x70, 0x65, 0x22, 0x3a, 0x31, 0x7d, 0x7d,
  0x5d, 0x59, 0x8d,
]

export const Central_Control_Protocol_CUT = [
  0x55, 0xaa, 0x00, 0x71, 0xfe, 0x00, 0x04, 0x00, 0x00, 0x00, 0x01, 0x30, 0x00, 0x00, 0x00, 0x00, 0xb5, 0x00,
  0x00, 0x00, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0e, 0x13, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x5b, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x49, 0x64, 0x22, 0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22,
  0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x22, 0x3a, 0x32, 0x2c, 0x22, 0x73, 0x77, 0x69,
  0x74, 0x63, 0x68, 0x45, 0x66, 0x66, 0x65, 0x63, 0x74, 0x22, 0x3a, 0x7b, 0x22, 0x74, 0x69, 0x6d, 0x65, 0x22,
  0x3a, 0x31, 0x2c, 0x22, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x3a, 0x30, 0x2c, 0x22,
  0x74, 0x79, 0x70, 0x65, 0x22, 0x3a, 0x30, 0x7d, 0x7d, 0x2c, 0x7b, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e,
  0x49, 0x64, 0x22, 0x3a, 0x32, 0x35, 0x35, 0x2c, 0x22, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x54, 0x79, 0x70,
  0x65, 0x22, 0x3a, 0x34, 0x2c, 0x22, 0x73, 0x77, 0x69, 0x74, 0x63, 0x68, 0x45, 0x66, 0x66, 0x65, 0x63, 0x74,
  0x22, 0x3a, 0x7b, 0x22, 0x74, 0x69, 0x6d, 0x65, 0x22, 0x3a, 0x31, 0x2c, 0x22, 0x64, 0x69, 0x72, 0x65, 0x63,
  0x74, 0x69, 0x6f, 0x6e, 0x22, 0x3a, 0x30, 0x2c, 0x22, 0x74, 0x79, 0x70, 0x65, 0x22, 0x3a, 0x30, 0x7d, 0x7d,
  0x5d, 0x5e, 0x8d,
]

export const Central_Control_Protocol_SetPresetType_PVW = [
  0x55, 0xaa, 0x00, 0x52, 0xfe, 0x00, 0x04, 0x00, 0x00, 0x00, 0x01, 0x30, 0x00, 0x00, 0x00, 0x00, 0x27, 0x00,
  0x00, 0x00, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0e, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x7b, 0x22, 0x70, 0x72, 0x65, 0x73, 0x65, 0x74, 0x41, 0x70, 0x70, 0x6c, 0x79, 0x54, 0x79, 0x70, 0x65, 0x22,
  0x3a, 0x30, 0x7d, 0x04, 0x5f,
]

export const Central_Control_Protocol_SetPresetType_PGM = [
  0x55, 0xaa, 0x00, 0x21, 0xfe, 0x00, 0x04, 0x00, 0x00, 0x00, 0x01, 0x30, 0x00, 0x00, 0x00, 0x00, 0x27, 0x00,
  0x00, 0x00, 0x02, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0e, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x7b, 0x22, 0x70, 0x72, 0x65, 0x73, 0x65, 0x74, 0x41, 0x70, 0x70, 0x6c, 0x79, 0x54, 0x79, 0x70, 0x65, 0x22,
  0x3a, 0x31, 0x7d, 0xd4, 0x5e,
]

export const Central_Control_Protocol_Device_PresetType = {
  'pvw': Central_Control_Protocol_SetPresetType_PVW,
  'pgm': Central_Control_Protocol_SetPresetType_PGM
}

export const HTTP_Protocol_FTB = [
  {
    id: '0',
    label: 'No fade to black',
    default: '0',
  },
  {
    id: '1',
    label: 'Fade to black',
    default: '1',
  },
]

export const HTTP_Protocol_FREEZE = [
  {
    id: '0',
    label: 'Unfreeze',
    default: '0',
  },
  {
    id: '1',
    label: 'Freeze',
    default: '1',
  },
]

export const COMMON_PRESET_TYPE = [
  {
    id: 'pvw',
    label: 'Load to \nPVW',
    default: 'pvw',
  },
  {
    id: 'pgm',
    label: 'Load to \nPGM',
    default: 'pgm',
  },
]

export const PROTOCOL_TYPE = {
  http: { id: 'http', label: 'http' },
  https: { id: 'https', label: 'https' },
}

export const PRESET_TYPE = {
  'pvw': 0x30,
  'pgm': 0x31,
}

export const HTTP_PRESET_TYPE = {
  'undefined': 0,
  'pvw': 4,
  'pgm': 2,
}

export const RETRY_COUNT = 3
export const HTTP_DEVICES = ['n10', 'n20', 'd32'];

export const CMD_DEVICES = ['d12'];

export const DEVICES = ['n10', 'n20', 'd12', 'd32'];

export const DEVICE_PRESETS = {
  'n10': 128,
  'n20': 128,
  'd12': 240,
  'd32': 1024
}

export const DEVICES_INFORMATION = 'This module will allow you to control the following products: N10, N20, D12 and D32.'