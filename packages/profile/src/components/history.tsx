import { Card, CardContent, CheckIcon, CopyAddress } from "@cartridge/ui-next";
import { useTransferQuery } from "@cartridge/utils/api/indexer";
import {
  LayoutContainer,
  LayoutContent,
  LayoutHeader,
} from "@/components/layout";
import { Navigation } from "@/components/navigation";
import { useAccount } from "@/hooks/context";

export function History() {
  const { address, username } = useAccount();
  const { data } = useTransferQuery({
    address,
    limit: 100,
  });

  return (
    <LayoutContainer>
      <LayoutHeader
        title={username}
        description={<CopyAddress address={address} size="sm" />}
        right={<Navigation />}
      />

      <LayoutContent>
        {data?.ercTransfer ? (
          <Card>
            {data.ercTransfer.map((t) => (
              <CardContent className="flex items-center gap-1">
                <CheckIcon size="sm" />
                <div>
                  Send{" "}
                  {Number(t.amount) / 10 ** Number(t.token_metadata?.decimals)}{" "}
                  {t.token_metadata?.symbol}
                </div>
              </CardContent>
            ))}
          </Card>
        ) : (
          <Card>
            <CardContent>No data</CardContent>
          </Card>
        )}
      </LayoutContent>
    </LayoutContainer>
  );
}
