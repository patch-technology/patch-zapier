import { Bundle, ZObject } from "zapier-platform-core";

export type PatchResponse = { data: unknown };

type DefaultBundleConfig = Record<string, unknown>;

type ZapierBase<BundleConfig> = {
  key: string;
  noun: string;
  display: {
    label: string;
    important?: boolean;
    description: string;
  };
  operation: {
    perform: (z: ZObject, bundle: Bundle<BundleConfig>) => Promise<unknown>;
    sample: Record<string, unknown>;
  };
};

export type ZapierTrigger<BundleConfig = DefaultBundleConfig> = ZapierBase<
  BundleConfig
> & {
  operation: {
    type: "polling";
    canPaginate: true;
  };
};

export type ZapierCreate<BundleConfig = DefaultBundleConfig> = ZapierBase<
  BundleConfig
> & {
  operation: {
    inputFields: Array<Record<string, unknown>>;
  };
};
