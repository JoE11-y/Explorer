import { Button } from "./Button";
import { Editor } from "./Editor";

export const DocumentData = (): JSX.Element => {
  return (
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
  );
};
