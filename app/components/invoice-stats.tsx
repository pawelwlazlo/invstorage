import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InvoiceStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Invoices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">254</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Amount
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$15,231.89</div>
          <p className="text-xs text-muted-foreground">
            +10.5% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Pending Invoices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">
            -5% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Average Processing Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3.2 days</div>
          <p className="text-xs text-muted-foreground">
            -0.5 days from last month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}