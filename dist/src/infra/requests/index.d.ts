import { ServiceParams } from "./domain";
export declare const getService: <T>(params: ServiceParams) => Promise<boolean | T>;
export declare const postService: <T>(params: ServiceParams) => Promise<boolean | T>;
export declare const putService: <T>(params: ServiceParams) => Promise<boolean | T>;
export declare const deleteService: <T>(params: ServiceParams) => Promise<boolean | T>;
export declare const checkGetRequest: (params: ServiceParams) => Promise<boolean>;
