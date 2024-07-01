import { jwtDecode } from "jwt-decode";
import TransactionDetailContent from "../../../../components/organisms/TransactionDetailContent";
import {
  HistoryTransactionsTypes,
  JWTPayloadTypes,
  UserTypes,
} from "../../../../services/data-types";
import { GetMemberTransactionsDetail } from "../../../../services/member";

interface HistoryTransactionDetailProps {
  transactionDetail: HistoryTransactionsTypes;
}

export default function TransactionDetail({
  transactionDetail,
}: HistoryTransactionDetailProps) {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}
interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;
  const { idTrx } = params;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii"); // menggunakan buffer u/ server side

  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await GetMemberTransactionsDetail(idTrx, jwtToken); //ngirim token yang real

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
