
type Tpath = '/' | '/customer' | '/courier' | '/transaction' | '/payroll' | '/shipment' | '/settings';
interface IRider {
  readonly id: string;
  name: string;
  region: string;
  status: 'Assigned' | 'Unassigned';
  image: string;
};

type TResponse = 
  { success: true, error: 'Not Found' } |
  { success: true, data: IRider[], nbHits: number };

type TcacheControl = 'reload' | 'force-cache'
type fetchReq = ( endpoint: string, method: 'POST'|'GET', cacheControl: TcacheControl, data?: unknown ) => Promise<unknown>

type TpaginateData = ( riders: IRider[], pageNumber: number, pageSize: number ) => IRider[]