import { Bundle, ZObject } from "zapier-platform-core";
import { PatchResponse, ZapierTrigger } from "../types";

const perform = async (z: ZObject, bundle: Bundle): Promise<unknown> => {
  // zapier starts with page 0
  const page = bundle.meta.page + 1;
  const { data } = await z.request("https://api.usepatch.com/v1/orders", {
    params: { page },
  });
  return (data as PatchResponse).data;
};

export const OrderTrigger: ZapierTrigger = {
  key: "order",
  noun: "order",
  display: {
    label: "New Order",
    description: "Triggers when a new order is created.",
  },
  operation: {
    type: "polling",
    canPaginate: true,
    perform,
    sample: {
      id: "ord_test_16d8054a8f8502d81a830252d58024bb",
      allocation_state: "allocated",
      allocations: [
        {
          id: "all_test_be33c362135078d77cce3e8ab242dac1",
          mass_g: 34,
          offset: {
            id: "off_test_a6a8c407b8f3e9f783f9aa41fb833d1a",
            developer: "Carbo Culture",
            production: false,
            serial_number: null,
            vintage_year: 2020,
          },
          production: false,
        },
      ],
      mass_g: 34,
      metadata: {
        foo: "bar",
      },
      price_cents_usd: "1.0",
      production: false,
      state: "placed",
    },
  },
};
