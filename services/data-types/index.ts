export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  status: string;
  _id: string;
  name: string;
  category: CategoryTypes;
  thumbnail: string;
}

export interface BanksTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}
export interface NominalTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}
export interface LoginTypes {
  email: string;
  password: string;
}
export interface UserTypes {
  avatar: string;
  email: string;
  id: string;
  name: string;
  username: string;
}
export interface JWTPayloadTypes {
  player: UserTypes;
}

export interface DataCheckoutTypes {
  accountUser: string;
  bank: string;
  name: string;
  nominal: string;
  payment: string;
  voucher: string;
}

export interface HistoryVoucherTopupTypes {
  gameName: string;
  category: string;
  coinQuantity: string;
  coinName: string;
  thumbnail: string;
  price: number;
}

export interface HistoryPaymentTypes {
  bankName: string;
  name: string;
  noRekening: string;
  type: string;
}

export interface HistoryTransactionsTypes {
  _id: string;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  value: number;
  status: string;
  accountUser: string;
  tax: number;
  name: string;
  historyPayment: HistoryPaymentTypes;
}

export interface HistoryTransactionsCountTypes {
  _id: string;
  value: number;
  name: string;
}
