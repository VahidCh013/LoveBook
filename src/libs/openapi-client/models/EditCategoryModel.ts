/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpecModel } from './SpecModel';

export type EditCategoryModel = {
    id?: number;
    name?: string | null;
    isActive?: boolean;
    specs?: Array<SpecModel> | null;
};
