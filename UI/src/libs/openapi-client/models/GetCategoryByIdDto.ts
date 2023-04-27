/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpecDto } from './SpecDto';

export type GetCategoryByIdDto = {
    id?: number;
    name?: string | null;
    isActive?: boolean;
    specs?: Array<SpecDto> | null;
};
