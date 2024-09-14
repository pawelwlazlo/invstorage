"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    fileName: "INV-001.pdf",
    createdAt: "2023-05-01",
    invoiceType: "Sales",
    invoiceDate: "2023-04-30",
    partyInfo: "Client A",
  },
  {
    fileName: "INV-002.pdf",
    createdAt: "2023-05-02",
    invoiceType: "Buyer",
    invoiceDate: "2023-05-01",
    partyInfo: "Supplier B",
  },
  {
    fileName: "INV-003.pdf",
    createdAt: "2023-05-03",
    invoiceType: "Sales",
    invoiceDate: "2023-05-02",
    partyInfo: "Client C",
  },
]

export function InvoiceTable() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>File Name</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Invoice Type</TableHead>
          <TableHead>Invoice Date</TableHead>
          <TableHead>Sender/Receiver</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.fileName}>
            <TableCell>{invoice.fileName}</TableCell>
            <TableCell>{invoice.createdAt}</TableCell>
            <TableCell>{invoice.invoiceType}</TableCell>
            <TableCell>{invoice.invoiceDate}</TableCell>
            <TableCell>{invoice.partyInfo}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}