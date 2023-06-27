"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const faker_1 = require("@faker-js/faker");
const bcrypt = require("bcrypt");
const role_enum_1 = require("../../../common/enums/role.enum");
const pass = bcrypt.hashSync('Tien1235!', 10);
const getData = () => [
    {
        phone: '0346754957',
        password: pass,
        role: role_enum_1.RoleEnum.ADMIN,
        status: "active",
        fullName: 'Võ Minh Tiến',
        dob: faker_1.faker.date.birthdate(),
        avatar: 'https://firebasestorage.googleapis.com/v0/b/meal-subcription-plan.appspot.com/o/default_avatar.png?alt=media&token=5623e4d3-4139-4fb8-abd0-eea54c02cc83',
        email: 'tienvmt02@gmail.com',
    },
    {
        phone: '0363964361',
        password: pass,
        role: role_enum_1.RoleEnum.MANAGER,
        status: "active",
        fullName: 'Phạm Mạnh Toàn',
        dob: faker_1.faker.date.birthdate(),
        avatar: 'https://firebasestorage.googleapis.com/v0/b/meal-subcription-plan.appspot.com/o/default_avatar.png?alt=media&token=5623e4d3-4139-4fb8-abd0-eea54c02cc83',
        email: 'toanpm@gmail.com',
    },
    {
        phone: '0969080408',
        password: pass,
        role: role_enum_1.RoleEnum.MANAGER,
        status: "active",
        fullName: 'Huỳnh Ngọc Linh',
        dob: faker_1.faker.date.birthdate(),
        avatar: 'https://firebasestorage.googleapis.com/v0/b/meal-subcription-plan.appspot.com/o/default_avatar.png?alt=media&token=5623e4d3-4139-4fb8-abd0-eea54c02cc83',
        email: 'linhhn2zz@gmail.com',
    },
    {
        phone: '0901384204',
        password: pass,
        role: role_enum_1.RoleEnum.SHIPPER,
        status: "active",
        fullName: 'Thanh Nhi',
        dob: faker_1.faker.date.birthdate(),
        avatar: 'https://firebasestorage.googleapis.com/v0/b/meal-subcription-plan.appspot.com/o/default_avatar.png?alt=media&token=5623e4d3-4139-4fb8-abd0-eea54c02cc83',
        email: 'nhipt2k@gmail.com',
    },
    {
        phone: '0346754959',
        password: pass,
        role: role_enum_1.RoleEnum.KITCHEN,
        status: "active",
        fullName: 'Bếp Quận 9',
        dob: faker_1.faker.date.birthdate(),
        avatar: 'https://firebasestorage.googleapis.com/v0/b/meal-subcription-plan.appspot.com/o/default_avatar.png?alt=media&token=5623e4d3-4139-4fb8-abd0-eea54c02cc83',
        email: 'bepquan9mesup@gmail.com',
    },
    {
        phone: '0392317266',
        password: pass,
        role: role_enum_1.RoleEnum.CUSTOMER,
        status: "active",
        fullName: 'Anh Sang',
        dob: faker_1.faker.date.birthdate(),
        avatar: 'https://firebasestorage.googleapis.com/v0/b/meal-subcription-plan.appspot.com/o/default_avatar.png?alt=media&token=5623e4d3-4139-4fb8-abd0-eea54c02cc83',
        email: 'sangtran@gmail.com',
    },
    {
        phone: '0974445276',
        password: pass,
        role: role_enum_1.RoleEnum.CUSTOMER,
        status: "active",
        fullName: 'Quốc Lộc',
        dob: faker_1.faker.date.birthdate(),
        avatar: 'https://firebasestorage.googleapis.com/v0/b/meal-subcription-plan.appspot.com/o/default_avatar.png?alt=media&token=5623e4d3-4139-4fb8-abd0-eea54c02cc83',
        email: 'locdq@gmail.com',
    },
];
exports.getData = getData;
//# sourceMappingURL=data.js.map