/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpecValueDto } from './SpecValueDto';

export type CreateBookDto = {
    name?: string | null;
    isActive?: boolean;
    specValues?: Array<SpecValueDto> | null;
    categoryId?: number;
};
