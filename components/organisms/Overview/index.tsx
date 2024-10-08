import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  HistoryTransactionsCountTypes,
  HistoryTransactionsTypes,
} from "../../../services/data-types";
import { GetMemberOverview } from "../../../services/member";
import Category from "./Category";
import TableRow from "./TableRow";

export default function Overview() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const GetMemberOverviewAPI = useCallback(async () => {
    const response = await GetMemberOverview();
    if (response.error) {
      toast.error(response.message, { autoClose: 3000 });
    } else {
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, []);

  useEffect(() => {
    GetMemberOverviewAPI();
  }, [GetMemberOverviewAPI]);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item: HistoryTransactionsCountTypes) => {
                return (
                  <Category
                    key={item._id}
                    nominal={item.value}
                    icon={"ic-dekstop"}
                  >
                    Game
                    <br /> {item.name}
                  </Category>
                );
              })}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: HistoryTransactionsTypes) => {
                  return (
                    <TableRow
                      key={item._id}
                      title={item.historyVoucherTopup.gameName}
                      category={item.historyVoucherTopup.category}
                      item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                      price={item.value}
                      status={item.status}
                      image={item.historyVoucherTopup.thumbnail}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
