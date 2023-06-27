"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataTimeSlot = void 0;
const flag_enum_1 = require("../../../common/enums/flag.enum");
const getDataTimeSlot = () => [
    {
        startTime: '6:00',
        endTime: '7:00',
        flag: flag_enum_1.FlagEnum.MORNING,
    },
    {
        startTime: '7:00',
        endTime: '8:00',
        flag: flag_enum_1.FlagEnum.MORNING,
    },
    {
        startTime: '11:30',
        endTime: '12:30',
        flag: flag_enum_1.FlagEnum.NOON,
    },
    {
        startTime: '12:30',
        endTime: '13:30',
        flag: flag_enum_1.FlagEnum.NOON,
    },
    {
        startTime: '17:00',
        endTime: '18:00',
        flag: flag_enum_1.FlagEnum.AFTERNOON,
    },
    {
        startTime: '18:00',
        endTime: '19:00',
        flag: flag_enum_1.FlagEnum.AFTERNOON,
    },
];
exports.getDataTimeSlot = getDataTimeSlot;
//# sourceMappingURL=data.js.map