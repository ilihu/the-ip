import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { t } from "@/i18n";
import { countryCode } from "@/lib/country";
import { Globe2 } from "lucide-react";

const sizes = {
  sm: { className: "", width: 40 },
  lg: { className: " country-flag-lg", width: 80 },
  xl: { className: " country-flag-xl", width: 160 },
} as const;

export function CountryFlag({
  code,
  size = "sm",
}: {
  code?: string;
  size?: keyof typeof sizes;
}) {
  const country = countryCode(code);
  const { className, width } = sizes[size];
  return (
    <Avatar
      className={`country-flag rounded-sm after:hidden${className}`}
      aria-label={country?.toUpperCase() ?? t("common.unknownRegion")}
    >
      <AvatarImage
        src={
          country ? `https://flagcdn.com/w${width}/${country}.png` : undefined
        }
        alt={country?.toUpperCase() ?? ""}
        className="rounded-none object-contain"
        referrerPolicy="no-referrer"
      />
      <AvatarFallback className="rounded-none bg-transparent">
        <Globe2 className="size-3.5 text-muted-foreground" />
      </AvatarFallback>
    </Avatar>
  );
}
