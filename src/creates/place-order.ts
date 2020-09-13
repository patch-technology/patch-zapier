import { Bundle, ZObject } from "zapier-platform-core";
import { ZapierCreate, PatchResponse } from "../types";

type PlaceData = {
  order_id: string;
};

const perform = async (
  z: ZObject,
  bundle: Bundle<PlaceData>
): Promise<unknown> => {
  const { order_id } = bundle.inputData;
  const { data } = await z.request({
    method: "PATCH",
    url: `https://api.usepatch.com/v1/orders/${order_id}/place`,
  });
  return (data as PatchResponse).data;
};

export const PlaceOrder: ZapierCreate<PlaceData> = {
  key: "place-order",
  noun: "order",
  display: {
    label: "Place Order",
    description: "Places an order.",
  },
  operation: {
    perform,
    inputFields: [
      // will call the trigger with a key of order
      {
        key: "order_id",
        label: "Order",
        dynamic: "order.id.name",
      },
    ],
    sample: {
      order_id: "ord_test_123",
    },
  },
};
