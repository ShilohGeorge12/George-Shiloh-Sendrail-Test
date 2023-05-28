
declare type Tpath = '/' | '/customer' | '/courier' | '/transaction' | '/payroll' | '/shipment' | '/settings';
declare interface IRider {
  readonly id: string;
  name: string;
  region: string;
  status: 'Assigned' | 'Unassigned';
  image: {
    data: { data: any[] },
    contentType: string
  }
};