import { BaseEntity } from './../../shared';

export const enum Language {
    'FRENCH',
    'ENGLISH',
    'SPANISH'
}

export class Employee implements BaseEntity {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public hireDate?: any,
        public salary?: number,
        public commissionPct?: number,
        public language?: Language,
        public departmentId?: number,
        public managerId?: number,
    ) {
    }
}
