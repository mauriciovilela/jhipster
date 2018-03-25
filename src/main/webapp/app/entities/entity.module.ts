import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterLocationModule } from './location/location.module';
import { JhipsterDepartmentModule } from './department/department.module';
import { JhipsterEmployeeModule } from './employee/employee.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterLocationModule,
        JhipsterDepartmentModule,
        JhipsterEmployeeModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterEntityModule {}
