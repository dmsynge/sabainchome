<script lang="ts">
  import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "$lib/components/ui/sheet";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import { Menu } from "@lucide/svelte";

  interface RouteProps {
    href: string;
    label: string;
  }

  const routeList: RouteProps[] = [
    { href: "/#services", label: "Services" },
    { href: "/voiceblocks", label: "Voiceblocks" },
    { href: "/#ventures", label: "Ventures" },
    { href: "/#contact", label: "Contact" },
  ];

  let isOpen = $state(false);
</script>

<header
  class="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-(--breakpoint-xl) top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-[hsl(var(--card)/0.8)] backdrop-blur-lg shadow-md"
>
  <a href="/" class="font-bold text-lg flex items-center gap-2">
    <span
      class="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-lg leading-none"
    >
      鯖
    </span>
    Saba Inc
  </a>

  <!-- Mobile -->
  <div class="flex items-center lg:hidden">
    <Sheet bind:open={isOpen}>
      <SheetTrigger>
        <Menu onclick={() => (isOpen = true)} class="cursor-pointer" />
      </SheetTrigger>

      <SheetContent
        side="left"
        class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
      >
        <div>
          <SheetHeader class="mb-4 ml-4">
            <SheetTitle class="flex items-center gap-2">
              <span
                class="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-lg leading-none"
              >
                鯖
              </span>
              Saba Inc
            </SheetTitle>
          </SheetHeader>

          <div class="flex flex-col gap-2">
            {#each routeList as { href, label } (href)}
              <a onclick={() => (isOpen = false)} {href}>
                <Button variant="ghost" class="justify-start text-base w-full">
                  {label}
                </Button>
              </a>
            {/each}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>

  <!-- Desktop -->
  <div class="hidden lg:flex items-center gap-1">
    {#each routeList as { href, label } (href)}
      <a {href} class={buttonVariants({ variant: "ghost", size: "default" })}>
        {label}
      </a>
    {/each}
  </div>

  <div class="hidden lg:flex">
    <Button href="/#contact" size="sm" class="font-bold">Get in touch</Button>
  </div>
</header>
