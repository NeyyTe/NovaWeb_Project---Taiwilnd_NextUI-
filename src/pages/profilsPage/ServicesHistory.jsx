import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const initialData = [
  {
    id: 1,
    commande: "#12345",
    date: "Mai 15, 2023",
    total: "€99.99",
    statut: "Livré",
  },
  {
    id: 2,
    commande: "#12344",
    date: "Mai 10, 2023",
    total: "€49.99",
    statut: "En attente",
  },
  {
    id: 3,
    commande: "#12343",
    date: "Avril 25, 2023",
    total: "€79.99",
    statut: "Annulé",
  },
  {
    id: 4,
    commande: "#12342",
    date: "Avril 15, 2023",
    total: "€59.99",
    statut: "Livré",
  },
  {
    id: 5,
    commande: "#12341",
    date: "Avril 5, 2023",
    total: "€29.99",
    statut: "Livré",
  },
];

const statusOrder = {
  Livré: 1,
  "En attente": 2,
  Annulé: 3,
};

const sortOptions = [
  { value: "date", label: "Date" },
  { value: "number", label: "Numéro de commande" },
  { value: "status", label: "Statut" },
];

export default function ServicesHistory() {
  const [sortBy, setSortBy] = useState("date");
  const originalData = useMemo(() => initialData, []);
  const [data, setData] = useState(originalData);

  const getStatusValue = (status) => {
    return statusOrder[status];
  };

  const handleSortChange = (value) => {
    if (value === "date" && sortBy !== "date") {
      setData(originalData);
      setSortBy("date");
      return;
    }

    setSortBy(value);

    let sortedData;
    if (value === "date") {
      sortedData = sortByDate([...data]);
    } else if (value === "number") {
      sortedData = sortByNumber([...data]);
    } else if (value === "status") {
      sortedData = sortByStatus([...data]);
    }
    setData(sortedData);
  };

  // Triage du tableau par la date
  const sortByDate = (data) => {
    return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  };
  // Triage du tableau par le numéro de commande
  const sortByNumber = (data) => {
    data.forEach((item) => {
      item.parsedCommande = parseInt(item.commande.substring(1));
    });
    return data.sort((a, b) => a.parsedCommande - b.parsedCommande);
  };
  // Triage du tableau par statut
  const sortByStatus = (data) => {
    return data.sort(
      (a, b) => getStatusValue(a.statut) - getStatusValue(b.statut)
    );
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Historique des services</h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                Trié par
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuRadioGroup
                value={sortBy}
                onValueChange={handleSortChange}
              >
                {sortOptions.map((option) => (
                  <DropdownMenuRadioItem
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative">
            <button className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400 bg-transparent border-none p-0 cursor-pointer">
              <SearchIcon className="w-5 h-5" />
            </button>
            <Input
              className="pl-10 pr-4 py-2 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-900"
              placeholder="Rechercher..."
              type="search"
            />
          </div>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Commande #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.commande}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      row.statut === "Livré"
                        ? "validated"
                        : row.statut === "En attente"
                        ? "pending"
                        : "canceled"
                    }
                  >
                    {row.statut}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Order actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Voir l'offre</DropdownMenuItem>
                      <DropdownMenuItem>Donner votre avis</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
