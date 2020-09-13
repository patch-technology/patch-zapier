import { Bundle, ZObject } from "zapier-platform-core";
import { ZapierCreate, PatchResponse } from "../types";

type CancelData = {
  order_id: string;
};

const perform = async (
  z: ZObject,
  bundle: Bundle<CancelData>
): Promise<unknown> => {
  const { order_id } = bundle.inputData;
  const { data } = await z.request({
    method: "PATCH",
    url: `https://api.usepatch.com/v1/orders/${order_id}/cancel`,
  });
  return (data as PatchResponse).data;
};

export const CancelOrder: ZapierCreate<CancelData> = {
  key: "cancel-order",
  noun: "order",
  display: {
    label: "Cancel Order",
    description: "Cancels an order.",
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
