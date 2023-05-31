import { useLocation } from "react-router-dom";
import MetaData from "../../meta";

interface IPayrollProps {
};

function Payroll ( props: IPayrollProps ) {
  const { pathname } = useLocation()
  return (
    <section>
      <MetaData
        title="Payroll"
        description="Payroll Page To Monitor Payrolls"
        path={pathname}
      />
      Payroll Page
    </section>
  );
};

export default Payroll;