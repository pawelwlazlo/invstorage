import { CalendarDateRangePicker } from "./components/date-range-picker"
import { InvoiceTypeSwitch } from "./components/invoice-type-switch"
import { InvoiceDropZone } from "./components/invoice-drop-zone"
import { InvoiceTable } from "./components/invoice-table"
import { InvoiceStats } from "./components/invoice-stats"
import { MainNav } from "./components/main-nav"
import { UserNav } from "./components/user-nav"
import { ModeToggle } from "./components/mode-toggle"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Invoice Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
          </div>
        </div>
        <InvoiceTypeSwitch />
        <InvoiceDropZone />
        <InvoiceTable />
        <InvoiceStats />
      </main>
    </div>
  )
}