import type React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ShowCardProps {
  href?: string;
  title: string;
  description: string;
  className?: string;
  footer?: React.ReactNode;
  icon?: React.ReactNode; // New optional icon prop
}

export function ShowCard({
  href,
  title,
  description,
  className,
  footer,
  icon,
}: ShowCardProps) {
  const CardComponent = href ? Link : "div";

  return (
    <CardComponent
      href={href}
      className={cn(
        "group overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-md",
        href && "cursor-pointer hover:-translate-y-1",
        className
      )}
    >
      <Card className="border-0 bg-transparent">
        <CardHeader className="p-6">
          <div className="flex items-center">
            {icon && <div className="mr-2">{icon}</div>}
            <CardTitle className="text-xl font-bold tracking-tight">
              {title}
            </CardTitle>
          </div>
          <CardDescription className="mt-2 text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          {href && (
            <div className="flex items-center text-sm font-medium text-primary">
              <span>Learn more</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          )}
        </CardContent>
        {footer && (
          <CardFooter className="border-t bg-muted/50 p-6">{footer}</CardFooter>
        )}
      </Card>
    </CardComponent>
  );
}
