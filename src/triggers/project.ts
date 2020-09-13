import { Bundle, ZObject } from "zapier-platform-core";
import { PatchResponse, ZapierTrigger } from "../types";

const perform = async (z: ZObject, bundle: Bundle): Promise<unknown> => {
  // zapier starts with page 0
  const page = bundle.meta.page + 1;
  const { data } = await z.request("https://api.usepatch.com/v1/projects", {
    params: { page },
  });
  return (data as PatchResponse).data;
};

export const ProjectTrigger: ZapierTrigger = {
  key: "project",
  noun: "project",
  display: {
    label: "New Project",
    description: "Triggers when a new project is created.",
  },
  operation: {
    type: "polling",
    canPaginate: true,
    perform,
    sample: {
      id: "pro_test_2e049bbfe8c998ca82025d776f8289ff",
      country: "US",
      description:
        "Carbo Culture converts walnut shells and other agricultural and forestry waste into functional biocarbons that stay unchanged for over a thousand years. One ton of Carbo Culture biochar sequesters over 3.12 tons of CO2.",
      developer: "Carbo Culture",
      latitude: 45,
      longitude: 45,
      name: "Carbo Culture",
      photos: [
        {
          url:
            "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBJdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fc975fe7e3d184f74d6154483d164a09d8ec70c6/3ae3a3d14ca0d0eb8b1c8d5111121148",
        },
        {
          url:
            "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7299c1c222547de21434c250d25b7b647d68bdd2/78d7c0df46995a0c28f72eca41e50d1e",
        },
        {
          url:
            "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7665857a0c787a23510617279a7b910f0317a0b3/b906fbc89be41159490b98c072d85c30",
        },
      ],
      production: false,
      remaining_mass_g: 99000000,
      type: "biomass",
      verifier: "LCA",
    },
  },
};
