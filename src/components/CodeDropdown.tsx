import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Github, HardDrive, Monitor } from "lucide-react";

interface GithubLinks {
  frontend: string;
  backend: string;
}

export default function CodeDropdown({ github }: { github: GithubLinks }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full">
          <Github />
          Código
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Código</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <a href={github.frontend} target="_blank">
          <DropdownMenuItem>
            <HardDrive />
            Frontend
          </DropdownMenuItem>
        </a>
        <a href={github.backend} target="_blank">
          <DropdownMenuItem>
            <Monitor />
            Backend
          </DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
