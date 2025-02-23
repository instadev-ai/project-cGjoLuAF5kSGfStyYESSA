import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Customer {
  name: string;
  arr: string;
  billingCycle: string;
  country: string;
}

const customers: Customer[] = [
  { name: "matan hen", arr: "$423", billingCycle: "Monthly", country: "Israel" },
  { name: "Meytal Kavalerchik", arr: "$422", billingCycle: "Monthly", country: "Israel" },
  { name: "amir sella", arr: "$254", billingCycle: "Monthly", country: "Israel" },
  { name: "niv shance", arr: "$254", billingCycle: "Monthly", country: "Israel" },
  { name: "דקלה בטון", arr: "$254", billingCycle: "Monthly", country: "Israel" },
  { name: "Ran sterakman", arr: "$254", billingCycle: "Monthly", country: "Israel" },
];

export function TopWinsTable() {
  return (
    <div className="rounded-lg border bg-white">
      <div className="flex items-center p-4 border-b">
        <span className="text-xl">🏆</span>
        <h2 className="text-lg font-semibold ml-2">Top wins from this week</h2>
        <span className="ml-auto text-sm text-muted-foreground">25 customers</span>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>ARR</TableHead>
            <TableHead>Billing Cycle</TableHead>
            <TableHead>Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.name}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>{customer.arr}</TableCell>
              <TableCell>{customer.billingCycle}</TableCell>
              <TableCell>{customer.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}