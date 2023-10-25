import { NewDatabase } from "@/components/NewDatabase";
import { InsertDocument } from "@/components/InsertDocument";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { DashboardMenu } from "@/components/DashboardMenu";
import { NoData } from "@/components/NoData";
import { Editor } from "@/components/Editor";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.newDatabaseModal;
  const data = true;
  return (
    <>
      <div className="flex flex-col items-start self-stretch w-full gap-6 mt-2">
        <div className="relative flex items-start self-stretch w-full gap-6 ">
          <div className="relative flex-1 mt-[-1.00px]">
            <span className="text-[#ec4525] font-nunito [font-style:var(--title-font-style)] font-[number:var(--title-font-weight)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] text-[length:var(--title-font-size)]">
              game
            </span>
            <span className="text-[#192431] font-nunito [font-style:var(--title-font-style)] font-[number:var(--title-font-weight)] tracking-[var(--title-letter-spacing)] leading-[var(--title-line-height)] text-[length:var(--title-font-size)]">
              .characters
            </span>
          </div>
          <div className="inline-flex items-center gap-[8px] relative ">
            <div className="relative inline-flex items-start ">
              <Button btntype="nav">
                <Icons.Column className="!relative w-5 h-5" />
              </Button>
              <Button btntype="nav">
                <Icons.Grid className="!relative w-5 h-5" />
              </Button>
            </div>
            <div className="relative w-px h-[16px] bg-colors-body-secondary rounded-[8px]" />
            <Button btntype="nav">
              <Icons.Recent className="!relative w-5 h-5" /> {"Most recent"}
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-[24px] self-stretch w-full border-b [border-bottom-style:solid] border-colors-dividers">
          <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-quicksand font-[number:var(--body-highlight-font-weight)] text-colors-body-primary text-[length:var(--body-highlight-font-size)] tracking-[var(--body-highlight-letter-spacing)] leading-[var(--body-highlight-line-height)] whitespace-nowrap [font-style:var(--body-highlight-font-style)]">
              Documents
            </div>
            <div className="relative self-stretch w-full h-[2px] bg-colors-primary" />
          </div>
          <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-quicksand font-[number:var(--body-font-weight)] text-colors-body-secondary text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
              Aggregations
            </div>
            <div className="relative self-stretch w-full h-[2px]" />
          </div>
          <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-quicksand font-[number:var(--body-font-weight)] text-colors-body-secondary text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
              Schema
            </div>
            <div className="relative self-stretch w-full h-[2px]" />
          </div>
          <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-quicksand font-[number:var(--body-font-weight)] text-colors-body-secondary text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
              Indexes
            </div>
            <div className="relative self-stretch w-full h-[2px]" />
          </div>
          <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-quicksand font-[number:var(--body-font-weight)] text-colors-body-secondary text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] whitespace-nowrap [font-style:var(--body-font-style)]">
              Validation
            </div>
            <div className="relative self-stretch w-full h-[2px]" />
          </div>
        </div>
        <Filter />
        <DashboardMenu />
        {data ? (
          <div className="flex flex-col self-stretch w-full rounded-lg">
            <div className="flex py-[6px] border border-b-0 border-solid border-colors-dividers rounded-tl-2xl rounded-tr-2xl" />
            <Editor className="self-stretch w-full !border-r rounded-tr-2xl rounded-tl-2xl" />
            <div className="flex items-center gap-[8px] px-[24px] py-[8px] bg-[#ec45251a] rounded-br-2xl rounded-bl-2xl">
              <div className="relative flex-1 font-nunito font-medium text-colors-primary-hover text-[14px] tracking-[0] leading-[normal]">
                Document modified
              </div>
              <Button
                btntype="nav"
                className="h-[28px] px-[8px] py-0 bg-colors-foreground rounded-[8px] border border-solid border-[#ec452533] inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto] all-[unset] box-border"
              >
                <div className="text-colors-primary relative w-fit font-nunito font-bold text-[14px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                  Cancel
                </div>
              </Button>
              <Button
                btntype="nav"
                className="h-[28px] px-[8px] py-0 bg-colors-foreground rounded-[8px] border border-solid border-[#ec452533] inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]"
              >
                <div className="relative w-fit font-nunito font-bold text-colors-primary text-[14px] text-center tracking-[0] leading-[16px] whitespace-nowrap">
                  Replace
                </div>
              </Button>
            </div>
          </div>
        ) : (
          <NoData />
        )}
      </div>
      {showModal && <NewDatabase />}
    </>
  );
}
