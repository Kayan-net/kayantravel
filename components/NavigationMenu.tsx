"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { icons } from "lucide-react"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Dubai e-Visa",
    href: "./app/visa/page.tsx",
    
    description:
      "Get Dubai 30 Days e-Visa-Family Visa-Work Visa.",
  },
  {
    title: "Umrah e-Visa",
    href: "/docs/primitives/hover-card",
    description:
      "30 Days Umrah e-Visa-Family Visa-Work Visa.",
  },
  {
    title: "Qatar e-Visa",
    href: "/docs/primitives/progress",
    description:
      "30 Days Qatar e-Visa .",
  },
  {
    title: "Turkey e-Visa",
    href: "/docs/primitives/scroll-area",
    description: "30 Days Turkey e-Visa.",
  },
  {
    title: "Malaysia e-Visa",
    href: "/docs/primitives/tabs",
    description:
      "90 Days Malaysia e-Visa.",
  },
  {
    title: "Thailand e-Visa",
    href: "/docs/primitives/tooltip",
    description:
      "30 Days Thailand e-Visa.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Flight</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      <h2>Cheap Flight Near You</h2>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Emirates Airlines">
                Get Special Fare With Emirates.
              </ListItem>
              <ListItem href="/docs/installation" title="Qatar Airways">
                Special Fare 10% Off .
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Turkish Airways">
                Discount of Business Flight
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Visas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/doc" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Insurance
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
