import { Bundle, ZObject } from "zapier-platform-core";
import { ZapierCreate, PatchResponse } from "../types";

type CreateData = {
  mass_g: number;
  project_id?: string;
  metadata?: Record<string, string>;
};

const perform = async (
  z: ZObject,
  bundle: Bundle<CreateData>
): Promise<unknown> => {
  const { mass_g, project_id, metadata } = bundle.inputData;
  const { data } = await z.request({
    method: "POST",
    url: "https://api.usepatch.com/v1/estimates",
    body: { mass_g, project_id, metadata },
  });
  return (data as PatchResponse).data;
};

export const CreateEstimate: ZapierCreate<CreateData> = {
  key: "create-estimate",
  noun: "estimate",
  display: {
    label: "Create Estimate",
    description: "Creates a new estimate.",
  },
  operation: {
    perform,
    inputFields: [
      { key: "mass_g", label: "Mass (grams)", required: true, type: "integer" },
      // will call the trigger with a key of project
      {
        key: "project_id",
        label: "Project",
        dynamic: "project.id.name",
      },
      { key: "metadata", dict: true },
    ],
    sample: {
      mass_g: 100,
      project_id: "pro_test_1234",
      metadata: { user: "john doe" },
    },
  },
};
